#!/usr/bin/env python3
"""Parse questions/*.md, validate (see FORMAT.md), write data/questions.js, bump sw.js cache version."""
import glob, hashlib, json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
TITLES = {
 "L01": "PCA", "L02": "Robust statistics, embeddings", "L03": "Density estimation",
 "L04": "Linear regression", "L05": "Ridge, lasso, compressed sensing",
 "L06": "Decision theory, QDA/LDA", "L07": "Trees, forests, CV", "L08": "Gaussian processes",
 "L09": "Logistic regression, GLM", "L10": "Multi-layer perceptrons",
 "L11": "Training NNs I", "L12": "SGD, Adam, backprop", "L13": "Uncertainty, calibration",
 "L14": "CNNs", "L15": "PINNs, neural operators", "L16": "Autoencoders, SSL",
 "L17": "GNNs", "L18": "Attention, transformers", "L19": "LLMs", "L20": "AI safety, interpretability",
 "L21": "Diffusion, score models", "L22": "Flows, flow matching", "L23": "Simulation-based inference",
 "L24": "Equivariant networks", "L25": "Molecular ML",
 "A1": "Linear algebra", "A2": "Vector & matrix calculus", "A3": "Probability",
 "A4": "Bayesian inference", "A5": "Gaussian distribution", "A6": "Optimization, convexity",
 "A7": "Information theory", "A8": "SDEs, symmetry groups", "A9": "Fourier, graphs",
}
TYPES = ("term", "calc", "pic")
HDR = re.compile(r"^###\s+(\S+)\s*\|\s*(\w+)\s*\|\s*(\d+)\s*$")
errors, warnings = [], []

def err(f, ln, msg): errors.append(f"{os.path.relpath(f, ROOT)}:{ln}: {msg}")
def warn(f, ln, msg): warnings.append(f"{os.path.relpath(f, ROOT)}:{ln}: {msg}")

def sort_key(stem):
    return (0 if stem[0] == "L" else 1, int(re.sub(r"\D", "", stem) or 0))

def math_segments(text):
    parts = text.split("$")
    return [p for i, p in enumerate(parts) if i % 2 == 1]

def parse_file(path, stem):
    out = []
    lines = open(path, encoding="utf-8").read().split("\n")
    blocks, cur = [], None
    for i, line in enumerate(lines, 1):
        if line.startswith("###"):
            cur = {"ln": i, "lines": []}; blocks.append(cur); cur["hdr"] = line
        elif cur is None:
            if line.strip() and not line.startswith("#"): err(path, i, "text before first question header")
        else:
            cur["lines"].append((i, line))
    for b in blocks:
        ln = b["ln"]
        m = HDR.match(b["hdr"].rstrip())
        if not m: err(path, ln, "bad header, expected '### <ID> | <type> | <level>'"); continue
        qid, typ, lvl = m.group(1), m.group(2), m.group(3)
        if typ not in TYPES: err(path, ln, f"{qid}: type must be one of {TYPES}, got '{typ}'")
        if lvl not in ("1", "2", "3"): err(path, ln, f"{qid}: level must be 1, 2 or 3")
        if not re.fullmatch(re.escape(stem) + r"-\d{3}", qid): err(path, ln, f"id '{qid}' must be {stem}-NNN (3 digits)")
        f = {"Q": [], "A": None, "B": None, "C": None, "D": None, "ANS": None, "WHY": [], "ZH": []}
        field = None
        for i, line in b["lines"]:
            if not line.strip(): field = None; continue
            mm = re.match(r"^(Q|WHY|ZH|ANS):\s?(.*)$", line)
            mc = re.match(r"^([A-D])\)\s?(.*)$", line)
            if mm:
                k = mm.group(1)
                if k == "ANS":
                    if f["ANS"] is not None: err(path, i, f"{qid}: duplicate ANS")
                    f["ANS"] = (i, mm.group(2).strip()); field = None
                else:
                    if f[k]: err(path, i, f"{qid}: duplicate {k}:")
                    f[k].append(mm.group(2)); field = k
            elif mc:
                k = mc.group(1)
                if f[k] is not None: err(path, i, f"{qid}: duplicate choice {k})")
                f[k] = (i, mc.group(2).strip()); field = None
            elif field in ("Q", "WHY", "ZH"):
                f[field].append(line)
            else:
                err(path, i, f"{qid}: unexpected line '{line[:40]}'")
        q = " ".join(s.strip() for s in f["Q"]).strip()
        why = " ".join(s.strip() for s in f["WHY"]).strip()
        zh = " ".join(s.strip() for s in f["ZH"]).strip()
        if not q: err(path, ln, f"{qid}: missing/empty Q:")
        if not why: err(path, ln, f"{qid}: missing/empty WHY:")
        if not zh: err(path, ln, f"{qid}: missing/empty ZH:")
        ch = []
        for k in "ABCD":
            if f[k] is None or not f[k][1]: err(path, ln, f"{qid}: missing/empty choice {k})"); ch.append("")
            else: ch.append(f[k][1])
        ans = None
        if f["ANS"] is None: err(path, ln, f"{qid}: missing ANS:")
        elif f["ANS"][1] not in list("ABCD"): err(path, f["ANS"][0], f"{qid}: ANS must be a single letter A-D, got '{f['ANS'][1]}'")
        else: ans = "ABCD".index(f["ANS"][1])
        for label, t in (("Q", q), ("A-D", " ".join(ch)), ("WHY", why), ("ZH", zh)):
            if "$$" in t: err(path, ln, f"{qid}: '$$' not allowed in {label}")
            if "\\$" in t: err(path, ln, f"{qid}: literal dollar not allowed in {label}")
        for label, t in [("Q", q), ("WHY", why), ("ZH", zh)] + [(k, c) for k, c in zip("ABCD", ch)]:
            if t.count("$") % 2: err(path, ln, f"{qid}: unbalanced $ in {label}")
        if len(q) > 300: warn(path, ln, f"{qid}: Q is {len(q)} chars (>300)")
        for k, c in zip("ABCD", ch):
            if len(c) > 90: warn(path, ln, f"{qid}: choice {k} is {len(c)} chars (>90)")
        if len(why) > 350: warn(path, ln, f"{qid}: WHY is {len(why)} chars (>350)")
        if len(zh) > 80: warn(path, ln, f"{qid}: ZH is {len(zh)} chars (>80)")
        if len(set(ch)) < 4 and all(ch): err(path, ln, f"{qid}: duplicate choices")
        for c in ch:
            if re.search(r"\b(all|none) of the above\b|\bA and B\b", c, re.I): err(path, ln, f"{qid}: forbidden 'all/none of the above' style choice")
        out.append({"id": qid, "lec": stem, "type": typ, "level": int(lvl) if lvl.isdigit() else 0,
                    "q": q, "choices": ch, "answer": ans if ans is not None else 0, "why": why, "zh": zh, "_ln": ln, "_path": path})
    # numbering
    nums = [int(x["id"].rsplit("-", 1)[1]) for x in out if re.search(r"-\d{3}$", x["id"])]
    if nums and nums != list(range(1, len(nums) + 1)): warn(path, 1, "ids are not a running sequence 001..N")
    return out

def main():
    files = sorted(glob.glob(os.path.join(ROOT, "questions", "*.md")), key=lambda p: sort_key(os.path.basename(p)[:-3]))
    files = [p for p in files if not os.path.basename(p).startswith("_")]
    allq, seen, rows = [], {}, []
    for p in files:
        stem = os.path.basename(p)[:-3]
        if stem not in TITLES: warn(p, 1, f"unknown lecture stem '{stem}'")
        qs = parse_file(p, stem)
        for x in qs:
            if x["id"] in seen: err(p, x["_ln"], f"duplicate id {x['id']} (also {seen[x['id']]})")
            seen[x["id"]] = os.path.relpath(p, ROOT)
        if qs:
            cnt = {a: sum(1 for x in qs if x["answer"] == a) for a in range(4)}
            for a, n in cnt.items():
                if n / len(qs) > 0.4 and len(qs) >= 5: warn(p, 1, f"answer letter {'ABCD'[a]} is {n}/{len(qs)} (>40%)")
        rows.append((stem, qs)); allq += qs
    # katex
    segs = []
    for x in allq:
        for label, t in [("Q", x["q"]), ("WHY", x["why"]), ("ZH", x["zh"])] + list(zip("ABCD", x["choices"])):
            if t.count("$") % 2 == 0:
                for s in math_segments(t):
                    segs.append({"id": f"{x['id']}.{label}", "tex": s})
    if segs:
        try:
            r = subprocess.run(["node", os.path.join(ROOT, "tools", "check_katex.js")], input=json.dumps(segs),
                               capture_output=True, text=True, timeout=300)
            if r.returncode != 0: errors.append("katex check failed to run: " + r.stderr.strip()[:300])
            else:
                lnmap = {x["id"]: x for x in allq}
                for bad in json.loads(r.stdout or "[]"):
                    x = lnmap[bad["id"].split(".")[0]]
                    err(x["_path"], x["_ln"], f"{bad['id']}: KaTeX error in '{bad['tex']}': {bad['error'][:120]}")
        except FileNotFoundError:
            errors.append("node not found; cannot validate KaTeX")
    # table
    print(f"{'file':<6}{'total':>6}{'term':>6}{'calc':>6}{'pic':>6}")
    tot = {"term": 0, "calc": 0, "pic": 0}
    for stem, qs in rows:
        c = {t: sum(1 for x in qs if x["type"] == t) for t in TYPES}
        for t in TYPES: tot[t] += c[t]
        print(f"{stem:<6}{len(qs):>6}{c['term']:>6}{c['calc']:>6}{c['pic']:>6}")
    print(f"{'TOTAL':<6}{len(allq):>6}{tot['term']:>6}{tot['calc']:>6}{tot['pic']:>6}")
    for w in warnings: print("warning:", w)
    if errors:
        for e in errors: print("error:", e, file=sys.stderr)
        print(f"\n{len(errors)} error(s); data not written.", file=sys.stderr)
        sys.exit(1)
    for x in allq: x.pop("_ln"); x.pop("_path")
    stems = {x["lec"] for x in allq}
    lectures = [{"id": k, "title": v} for k, v in sorted(TITLES.items(), key=lambda kv: sort_key(kv[0]))]
    for s in sorted(stems - set(TITLES), key=sort_key): lectures.append({"id": s, "title": s})
    data = ("window.QUESTIONS = " + json.dumps(allq, ensure_ascii=False, indent=0) + ";\n"
            "window.LECTURES = " + json.dumps(lectures, ensure_ascii=False) + ";\n")
    os.makedirs(os.path.join(ROOT, "data"), exist_ok=True)
    open(os.path.join(ROOT, "data", "questions.js"), "w", encoding="utf-8").write(data)
    h = hashlib.sha256(data.encode())
    for fn in ("index.html", "style.css", "app.js", "manifest.webmanifest"):
        with open(os.path.join(os.path.dirname(os.path.abspath(__file__)), fn), "rb") as fh:
            h.update(fh.read())
    ver = h.hexdigest()[:12]
    # sw.js: version + precache list
    fonts = sorted(os.path.relpath(p, ROOT) for p in glob.glob(os.path.join(ROOT, "vendor/katex/fonts/*.woff2")))
    pre = ["./", "index.html", "style.css", "app.js", "manifest.webmanifest", "apple-touch-icon.png", "icon-512.png",
           "data/questions.js", "vendor/katex/katex.min.js", "vendor/katex/katex.min.css"] + fonts
    swp = os.path.join(ROOT, "sw.js")
    sw = open(swp, encoding="utf-8").read()
    sw = re.sub(r'const CACHE_VERSION = "[^"]*";', f'const CACHE_VERSION = "{ver}";', sw)
    sw = re.sub(r"const PRECACHE = \[.*?\];", "const PRECACHE = " + json.dumps(pre) + ";", sw, flags=re.S)
    open(swp, "w", encoding="utf-8").write(sw)
    print(f"\nwrote data/questions.js ({len(allq)} questions, {len(warnings)} warnings), CACHE_VERSION={ver}")

if __name__ == "__main__":
    main()
