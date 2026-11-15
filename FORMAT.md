# Question bank format (`questions/*.md`)

Phone drill app for the Heidelberg course "Machine Learning and Physics" (MLPh).
Goal of every question: train a **translation** between three representations:

| type   | translation trained | examples |
|--------|--------------------|----------|
| `term` | English term / verbal statement ⇄ symbol / formula (incl. vector & matrix calculus notation, shapes, index notation) | "Which expression is the *empirical covariance* of centred $X\in\mathbb R^{p\times n}$?"; "What is $\nabla_w \lVert y - X^T w\rVert^2$ called / equal to?"; "What is the shape of $\partial \hat y/\partial w$?"; "Read $\arg\min_w$ aloud: which sentence is right?" |
| `calc` | symbol / formula ⇄ concrete computation that fits in the head or on a napkin (2×2 matrices, 2–4 data points, one gradient step, one Bayes update, counting shapes/parameters) | "For $X=\begin{pmatrix}1&-1\\2&-2\end{pmatrix}$, the first principal direction is …"; "One GD step with $\eta=0.1$ from $w=2$ on $L=w^2$ gives …" |
| `pic`  | symbol / formula ⇄ physical or geometric picture (what it looks like, what happens in a limit, physics analogy, what changes in a plot when a parameter changes) | "Increasing $\lambda$ in ridge does what to the solution in the eigenbasis of $XX^T$?"; "Geometrically, $\hat y = X^T(XX^T)^{-1}Xy$ is …"; "The kernel bandwidth $h\to\infty$ in KDE gives a density that looks like …" |

## File layout

One file per lecture/appendix: `questions/L04.md`, `questions/A2.md`, … Each file is a
sequence of question blocks separated by a blank line. **Exact block syntax:**

```
### L04-007 | calc | 2
Q: Question text. Inline math in $...$ only. May continue
over several lines.
A) first choice
B) second choice
C) third choice
D) fourth choice
ANS: B
WHY: Short explanation (1–3 sentences) that shows the key step, and why the most tempting wrong choice is wrong.
ZH: 一句中文要点：术语的中文对应 + 这道题转换的关键。
```

Rules (a build script validates all of these and fails otherwise):

* Header: `### <ID> | <type> | <level>`; ID = `<file stem>-<3-digit running number>` (unique, starts at 001);
  type ∈ `term`, `calc`, `pic`; level ∈ 1, 2, 3 (1 = recall/recognise, 2 = one-step reasoning, 3 = two steps / trap).
* Exactly four choices `A)`…`D)`, exactly one correct, `ANS:` a single letter. Spread correct letters roughly
  evenly over A–D (the app shuffles anyway). No "all/none of the above", no "A and B".
* Math: **KaTeX**-compatible LaTeX inside single `$...$` (no `$$`, no `\begin{align}`; `\begin{pmatrix}` is fine;
  write `\lambda_{\max}` not `\lambda_\max`; use `\lVert x\rVert`, `\top` or `^T`, `\mathbb R`, `\operatorname{tr}`).
  No Markdown tables/images/HTML. `**bold**`, `*italic*` and `` `code` `` are allowed. A literal dollar sign is not allowed.
* **Phone screen (375 px wide):** question ≤ 300 characters; each choice ≤ 90 characters and no formula wider than
  about 28 rendered symbols; matrices at most 3×3. WHY ≤ 350 characters. ZH ≤ 80 characters.
* Language: Q, choices, WHY in **English** (the exam is in English; use the exact terms of the notes). ZH in Chinese.
* Distractors must be *plausible confusions a student really makes*: transposed shapes ($p\times p$ vs $n\times n$),
  sign errors, missing factor 2 or $1/n$, inverse vs transpose, row vs column convention, mean vs median,
  prior vs likelihood, bias vs variance, etc. Never a silly filler. All four choices similar in length and form.
* Every question must be **unambiguous and checkable** from the notes. Compute every number twice.
  Do not ask about trivia (slide numbers, names, dates, which paper).
* Each question is self-contained: define symbols that are not standard course notation in the question itself.
* Do not copy past-exam questions; imitate their style (concrete numbers, physics flavour: detectors, spectra,
  pendulums, galaxies, spins, molecules; "argue which", "what is the shape of", "what happens if").

## Course notation (use consistently)

* Data matrix $X\in\mathbb R^{p\times n}$: **features × samples**, columns are observations $x_i\in\mathbb R^p$.
  So the scatter/covariance matrix is $XX^T$ ($p\times p$) and the Gram matrix is $X^TX$ ($n\times n$).
* Weights $w\in\mathbb R^p$, predictions $\hat y^T=\hat w^TX$, i.e. $\hat y = X^T\hat w$; OLS: $\hat w=(XX^T)^{-1}Xy$.
* Numerator-layout derivatives: $\partial y/\partial x$ for $y\in\mathbb R^m$, $x\in\mathbb R^n$ has shape $m\times n$;
  the gradient $\nabla_x f$ is a column vector (transpose of the $1\times n$ derivative).
* Follow whatever else the lecture note file uses; if a note deviates from the above, the note wins.
