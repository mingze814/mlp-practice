(function () {
"use strict";
var QS = window.QUESTIONS || [], LECS = window.LECTURES || [];
var KEY = "mlp-practice-v1", DAYS = [0, 1, 3, 7, 21], DAY = 86400000;
var TYPES = [["term", "Term ⇄ Symbol", "术语⇄符号"], ["calc", "Symbol ⇄ Computation", "符号⇄计算"], ["pic", "Symbol ⇄ Picture", "符号⇄物理图像"]];
var MODES = [["smart", "Smart (spaced repetition)", "智能复习"], ["new", "New only", "只做新题"], ["mistakes", "Mistakes only", "只做错题"], ["random", "Random", "随机"]];
var BYID = {}; QS.forEach(function (q) { BYID[q.id] = q; });
var LEC_IDS = LECS.map(function (l) { return l.id; });

// ---------- storage ----------
function defaults() { return { v: 1, cards: {}, flags: {}, days: {}, prefs: { types: ["term", "calc", "pic"], lecs: LEC_IDS.slice(), mode: "smart", size: "q10" } }; }
var store = load();
function load() {
  var d = defaults();
  try { var s = JSON.parse(localStorage.getItem(KEY) || "null"); if (s && s.v === 1) { for (var k in d) if (s[k] == null) s[k] = d[k]; for (var p in d.prefs) if (s.prefs[p] == null) s.prefs[p] = d.prefs[p]; return s; } } catch (e) {}
  return d;
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) {} }
function dkey(t) { var d = new Date(t || Date.now()); return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
function mastered(id) { var c = store.cards[id]; return !!c && c.b >= 3; }

// ---------- rich text ----------
function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function fmt(s) {
  s = esc(s);
  s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
  s = s.replace(/\*\*([^*]+?)\*\*/g, "<b>$1</b>");
  s = s.replace(/\*(?!\s)([^*]+?)(?<!\s)\*/g, "<i>$1</i>");
  return s;
}
function rich(t) {
  var parts = String(t).split("$"), out = "";
  for (var i = 0; i < parts.length; i++) {
    if (i % 2 === 0) { out += fmt(parts[i]); continue; }
    var h;
    try { h = window.katex.renderToString(parts[i], { throwOnError: false }); } catch (e) { h = esc(parts[i]); }
    out += '<span class="m">' + h + "</span>";
  }
  return out;
}

// ---------- helpers ----------
function $(s, r) { return (r || document).querySelector(s); }
function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function toast(m) { var t = $("#toast"); t.textContent = m; t.className = "show"; clearTimeout(toast.t); toast.t = setTimeout(function () { t.className = ""; }, 2200); }
function pct(a, b) { return b ? Math.round(100 * a / b) : 0; }
function bar(a, b, cls) { return '<div class="bar ' + (cls || "") + '"><i style="width:' + pct(a, b) + '%"></i></div>'; }
function lecTitle(id) { for (var i = 0; i < LECS.length; i++) if (LECS[i].id === id) return LECS[i].title; return id; }
function typeName(t) { for (var i = 0; i < TYPES.length; i++) if (TYPES[i][0] === t) return TYPES[i][1]; return t; }
function streak() {
  var n = 0, t = Date.now();
  if (!(store.days[dkey(t)] && store.days[dkey(t)].n)) t -= DAY;
  while (store.days[dkey(t)] && store.days[dkey(t)].n) { n++; t -= DAY; }
  return n;
}

// ---------- selection ----------
function pool() {
  var p = store.prefs;
  return QS.filter(function (q) { return p.types.indexOf(q.type) >= 0 && p.lecs.indexOf(q.lec) >= 0; });
}
function interleave(list) {
  var out = [], rest = list.slice();
  while (rest.length) {
    var prev = out[out.length - 1], k = 0;
    if (prev) { for (var i = 0; i < Math.min(rest.length, 12); i++) { if (rest[i].lec !== prev.lec && rest[i].type !== prev.type) { k = i; break; } if (rest[i].lec !== prev.lec && k === 0) k = i; } }
    out.push(rest.splice(k, 1)[0]);
  }
  return out;
}
function buildQueue(limit) {
  var m = store.prefs.mode, now = Date.now(), P = pool(), list;
  function seen(q) { return !!store.cards[q.id]; }
  if (m === "smart") {
    var due = shuffle(P.filter(function (q) { var c = store.cards[q.id]; return c && c.d <= now; }));
    due.sort(function (a, b) { return store.cards[a.id].b - store.cards[b.id].b; });
    list = due.concat(shuffle(P.filter(function (q) { return !seen(q); })));
  } else if (m === "new") list = shuffle(P.filter(function (q) { return !seen(q); }));
  else if (m === "mistakes") list = shuffle(P.filter(function (q) { var c = store.cards[q.id]; return c && c.l === 0; }));
  else list = shuffle(P);
  return interleave(list.slice(0, limit));
}

// ---------- state ----------
var S = { screen: "home", sess: null, review: null };
var app = $("#app");
function go(screen) { S.screen = screen; render(); window.scrollTo(0, 0); }

function render() {
  app.className = S.screen === "quiz" ? "quiz" : "";
  var fn = { home: vHome, quiz: vQuiz, summary: vSummary, progress: vProgress, review: vReview }[S.screen];
  app.innerHTML = fn();
}
function head(active) {
  return '<div class="top"><div><h1>MLPh Drill</h1><div class="sub">Machine Learning &amp; Physics · 刷题</div></div><div class="tabs">' +
    '<button class="tab' + (active === "home" ? " on" : "") + '" data-act="home">Home</button>' +
    '<button class="tab' + (active === "progress" ? " on" : "") + '" data-act="progress">Progress</button></div></div>';
}

// ---------- home ----------
function vHome() {
  var p = store.prefs, td = store.days[dkey()] || { n: 0, c: 0 }, P = pool();
  var nm = P.filter(function (q) { return mastered(q.id); }).length;
  var h = head("home");
  h += '<div class="card stats"><div class="stat"><b>' + td.n + '</b><span class="sub">answered today<br>今日已答</span></div>' +
    '<div class="stat"><b>' + (td.n ? pct(td.c, td.n) + "%" : "–") + '</b><span class="sub">accuracy<br>正确率</span></div>' +
    '<div class="stat"><b>' + streak() + '</b><span class="sub">day streak<br>连续天数</span></div></div>';
  h += '<button class="btn" data-act="start">Start drill</button>';
  h += '<div class="sub" style="text-align:center;margin:6px 0 4px">' + P.length + " questions selected · " + nm + " mastered</div>";
  h += '<h2>Session 本次长度</h2><div class="chips">' + [["q10", "10 questions"], ["q20", "20 questions"], ["t5", "5 min"]].map(function (s) {
    return '<button class="chip' + (p.size === s[0] ? " on" : "") + '" data-act="size" data-v="' + s[0] + '">' + s[1] + "</button>"; }).join("") + "</div>";
  h += '<h2>Mode 模式</h2><div class="chips">' + MODES.map(function (m) {
    return '<button class="chip wide' + (p.mode === m[0] ? " on" : "") + '" data-act="mode" data-v="' + m[0] + '">' + m[1] + " <span class=\"sub\" style=\"color:inherit\">" + m[2] + "</span></button>"; }).join("") + "</div>";
  h += '<h2>Question type 题型</h2><div class="chips">' + TYPES.map(function (t) {
    return '<button class="chip wide' + (p.types.indexOf(t[0]) >= 0 ? " on" : "") + '" data-act="type" data-v="' + t[0] + '">' + t[1] + " " + t[2] + "</button>"; }).join("") + "</div>";
  h += '<h2>Lectures 讲座</h2><div class="quick"><button data-act="lecs" data-v="all">all</button><button data-act="lecs" data-v="none">none</button><button data-act="lecs" data-v="L01-L10">L01–L10</button><button data-act="lecs" data-v="L11-L25">L11–L25</button><button data-act="lecs" data-v="A">A1–A9</button></div><div class="grid">';
  LEC_IDS.forEach(function (id) {
    var qs = QS.filter(function (q) { return q.lec === id; }), m = qs.filter(function (q) { return mastered(q.id); }).length;
    h += '<button class="chip' + (p.lecs.indexOf(id) >= 0 ? " on" : "") + (qs.length ? "" : " empty") + '" data-act="lec" data-v="' + id + '">' + id + "<small>" + m + "/" + qs.length + "</small></button>";
  });
  return h + "</div>";
}

// ---------- quiz ----------
function startSession(queue, label) {
  if (!queue.length) { toast(store.prefs.mode === "smart" ? "Nothing due or new here. Try Random." : "No matching questions."); return; }
  var sz = store.prefs.size;
  S.sess = { queue: queue, i: 0, results: [], start: Date.now(), limit: label === "retry" ? 0 : (sz === "t5" ? 300000 : 0), answered: false, order: null, chosen: null, guess: false };
  prepare(); go("quiz");
}
function prepare() { var s = S.sess; s.order = shuffle([0, 1, 2, 3]); s.answered = false; s.chosen = null; s.guess = false; }
function vQuiz() {
  var s = S.sess, q = s.queue[s.i], last = s.i + 1 >= s.queue.length || (s.limit && Date.now() - s.start >= s.limit && s.answered);
  var h = '<div class="qhead"><button class="x" data-act="quit" aria-label="Quit">✕</button><div class="prog"><i style="width:' + pct(s.i + (s.answered ? 1 : 0), s.queue.length) + '%"></i></div><span class="sub">' + (s.i + 1) + "/" + s.queue.length + "</span></div>";
  h += cardHTML(q, s.order, s.answered ? s.chosen : null, true);
  return h + '<div class="footer">' + (s.answered ? '<button class="btn" data-act="next">' + (last ? "Finish" : "Next") + "</button>" : '<button class="btn sec" data-act="skip">Skip · don\'t know</button>') + "</div>";
}
function cardHTML(q, order, chosen, live) {
  var done = chosen != null, h = '<div class="badges"><span class="badge">' + q.lec + " · " + esc(lecTitle(q.lec)) + '</span><span class="badge">' + q.type + '</span><span class="badge lvl">lvl ' + q.level + "</span></div>";
  h += '<div class="qtext">' + rich(q.q) + "</div>";
  order.forEach(function (ci) {
    var cls = "choice";
    if (done) { if (ci === q.answer) cls += " ok"; else if (ci === chosen) cls += " bad"; else cls += " dim"; }
    h += '<button class="' + cls + '" data-act="pick" data-v="' + ci + '"' + (done ? " disabled" : "") + ">" + rich(q.choices[ci]) + "</button>";
  });
  if (live || done) {
    h += '<div class="tools"><button class="tog' + (store.flags[q.id] ? " on" : "") + '" data-act="flag" data-id="' + q.id + '">' + (store.flags[q.id] ? "⚑ Flagged" : "⚐ Flag") + "</button>";
    if (live) h += '<button class="tog' + (S.sess.guess ? " on" : "") + '" data-act="guess"' + (done ? " disabled" : "") + ">I guessed 蒙的</button>";
    h += "</div>";
  }
  if (done) {
    var ok = chosen === q.answer;
    h += '<div class="verdict ' + (ok ? "ok" : "bad") + '">' + (ok ? "Correct 正确" : "Not quite 答错") + '</div><div class="explain">' + rich(q.why) + '<div class="zh">' + rich(q.zh) + "</div></div>";
  }
  return h;
}
function answer(ci, skipped) {
  var s = S.sess, q = s.queue[s.i];
  if (s.answered) return;
  var ok = !skipped && ci === q.answer, now = Date.now();
  s.answered = true; s.chosen = skipped ? -1 : ci;
  var c = store.cards[q.id] || { b: 0, d: 0, n: 0, w: 0, l: 1 };
  c.n++; if (!ok) c.w++;
  var guess = s.guess && ok;
  if (ok) c.b = guess ? Math.min(c.b + 1, 2) : Math.min(c.b + 1, 4); else c.b = 0;
  c.d = now + DAYS[c.b] * DAY; c.l = ok ? 1 : 0;
  store.cards[q.id] = c;
  var dk = dkey(), d = store.days[dk] || (store.days[dk] = { n: 0, c: 0 }); d.n++; if (ok) d.c++;
  s.results.push({ id: q.id, ok: ok });
  save(); render();
  var v = document.querySelector(".verdict");
  if (v && v.scrollIntoView) { try { v.scrollIntoView({ behavior: "smooth", block: "center" }); } catch (e) { v.scrollIntoView(); } }
}

// ---------- summary / review ----------
function vSummary() {
  var r = S.sess.results, ok = r.filter(function (x) { return x.ok; }).length, bad = r.filter(function (x) { return !x.ok; });
  var h = '<div class="top"><h1>Session done 完成</h1></div><div class="card"><div class="big">' + ok + " / " + r.length + '</div>' + bar(ok, r.length) + '<div class="sub" style="text-align:center;margin-top:6px">' + pct(ok, r.length) + "% correct · " + Math.round((Date.now() - S.sess.start) / 1000) + " s</div></div>";
  if (bad.length) {
    h += "<h2>Missed 错题 (tap to review)</h2>";
    bad.forEach(function (x) { var q = BYID[x.id]; h += '<button class="item" data-act="review" data-id="' + q.id + '"><span class="sub">' + q.id + " · " + q.type + "</span><br>" + rich(q.q) + "</button>"; });
    h += '<div style="height:6px"></div><button class="btn" data-act="retry">Retry mistakes (' + bad.length + ")</button><div style=\"height:8px\"></div>";
  } else h += '<div class="card">No mistakes. 全对!</div>';
  return h + '<button class="btn sec" data-act="home">Home</button>';
}
function vReview() {
  var q = BYID[S.review.id], order = [0, 1, 2, 3];
  return '<div class="top"><button class="tab" data-act="back">← Back</button><span class="sub">' + q.id + "</span></div>" + cardHTML(q, order, -1, false).replace(/class="verdict bad">Not quite 答错/, 'class="verdict">Review 回顾');
}

// ---------- progress ----------
function vProgress() {
  var h = head("progress"), tm = QS.filter(function (q) { return mastered(q.id); }).length;
  h += '<div class="card"><div class="pl"><b>Overall 总体</b><span>' + tm + "/" + QS.length + " mastered</span></div>" + bar(tm, QS.length) + "</div>";
  h += "<h2>By type 按题型</h2><div class=\"card\">";
  TYPES.forEach(function (t) { var qs = QS.filter(function (q) { return q.type === t[0]; }), m = qs.filter(function (q) { return mastered(q.id); }).length; h += '<div class="pl"><span>' + t[1] + " " + t[2] + "</span><span>" + m + "/" + qs.length + "</span></div>" + bar(m, qs.length); });
  h += "</div><h2>By lecture 按讲座</h2><div class=\"card\">";
  LECS.forEach(function (l) { var qs = QS.filter(function (q) { return q.lec === l.id; }); if (!qs.length) return; var m = qs.filter(function (q) { return mastered(q.id); }).length, sn = qs.filter(function (q) { return store.cards[q.id]; }).length; h += '<div class="pl"><span>' + l.id + " " + esc(l.title) + "</span><span>" + m + "/" + qs.length + (sn < qs.length ? " · " + sn + " seen" : "") + "</span></div>" + bar(m, qs.length); });
  h += "</div>";
  var fl = QS.filter(function (q) { return store.flags[q.id]; });
  h += "<h2>Flagged 收藏 (" + fl.length + ")</h2>";
  fl.forEach(function (q) { h += '<button class="item" data-act="review" data-id="' + q.id + '"><span class="sub">' + q.id + " · " + q.type + "</span><br>" + rich(q.q) + "</button>"; });
  if (!fl.length) h += '<div class="sub">Nothing flagged yet.</div>';
  h += '<h2>Backup 备份</h2><textarea id="io" placeholder="Export fills this box; paste JSON here and tap Import." autocapitalize="off" autocorrect="off" spellcheck="false"></textarea><div class="row" style="margin-top:8px"><button class="btn sec" data-act="export">Export</button><button class="btn sec" data-act="import">Import</button></div>';
  return h + '<div style="height:16px"></div><button class="btn danger" data-act="reset">Reset progress 清除进度</button>';
}

// ---------- events ----------
function toggle(arr, v) { var i = arr.indexOf(v); if (i >= 0) arr.splice(i, 1); else arr.push(v); }
document.addEventListener("click", function (e) {
  var el = e.target.closest("[data-act]"); if (!el) return;
  var a = el.dataset.act, v = el.dataset.v, p = store.prefs, s = S.sess;
  switch (a) {
    case "home": S.sess = null; go("home"); break;
    case "progress": go("progress"); break;
    case "size": p.size = v; save(); render(); break;
    case "mode": p.mode = v; save(); render(); break;
    case "type": toggle(p.types, v); if (!p.types.length) p.types = [v]; save(); render(); break;
    case "lec": toggle(p.lecs, v); save(); render(); break;
    case "lecs":
      p.lecs = v === "all" ? LEC_IDS.slice() : v === "none" ? [] : LEC_IDS.filter(function (id) { var n = parseInt(id.slice(1), 10); return v === "A" ? id[0] === "A" : v === "L01-L10" ? id[0] === "L" && n <= 10 : id[0] === "L" && n >= 11; });
      save(); render(); break;
    case "start": var sz = p.size; startSession(buildQueue(sz === "q10" ? 10 : sz === "q20" ? 20 : 100)); break;
    case "pick": answer(parseInt(v, 10)); break;
    case "skip": answer(-1, true); break;
    case "guess": if (s && !s.answered) { s.guess = !s.guess; render(); } break;
    case "flag": if (store.flags[el.dataset.id]) delete store.flags[el.dataset.id]; else store.flags[el.dataset.id] = 1; save(); render(); break;
    case "next":
      if (s.i + 1 >= s.queue.length || (s.limit && Date.now() - s.start >= s.limit)) go("summary");
      else { s.i++; prepare(); go("quiz"); }
      break;
    case "quit": if (s && s.results.length === 0 || confirm("End this session?")) { if (s.results.length) go("summary"); else { S.sess = null; go("home"); } } break;
    case "retry": var ids = s.results.filter(function (x) { return !x.ok; }).map(function (x) { return BYID[x.id]; }); startSession(shuffle(ids), "retry"); break;
    case "review": S.review = { id: el.dataset.id, from: S.screen }; go("review"); break;
    case "back": go(S.review.from); break;
    case "export":
      var txt = JSON.stringify(store); $("#io").value = txt;
      try { navigator.clipboard.writeText(txt).then(function () { toast("Copied to clipboard"); }, function () { toast("Select the text and copy"); }); } catch (x) { toast("Select the text and copy"); }
      break;
    case "import":
      try {
        var o = JSON.parse($("#io").value);
        if (!o || o.v !== 1 || typeof o.cards !== "object") throw 0;
        if (!confirm("Replace current progress with imported data?")) break;
        var d = defaults(); for (var k in d) if (o[k] == null) o[k] = d[k];
        store = o; save(); toast("Imported"); render();
      } catch (x) { toast("Invalid progress JSON"); }
      break;
    case "reset": if (confirm("Delete ALL progress and flags? This cannot be undone.")) { store = defaults(); save(); toast("Progress reset"); render(); } break;
  }
});

render();
if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
}
window.__app = { rich: rich, buildQueue: buildQueue, store: function () { return store; } };
})();
