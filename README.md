# MLPh Drill

Offline phone quiz (static PWA) for the MLPh course: translate between terms, symbols, computations and pictures.
No frameworks, no network calls; KaTeX is vendored in `vendor/katex/`. Progress lives in `localStorage` (Leitner boxes).

## Add questions
Write `questions/<stem>.md` (stems `L01`..`L25`, `A1`..`A9`) following `FORMAT.md`, then:

    python3 build.py        # validates (needs node for KaTeX check), writes data/questions.js, bumps sw.js cache version

Commit everything and serve the folder (GitHub Pages sub-path works; all URLs are relative).
Local test: `python3 -m http.server 8765` and open http://localhost:8765/.
Icons: `python3 tools/make_icons.py`.
