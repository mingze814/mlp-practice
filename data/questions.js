window.QUESTIONS = [
{
"id": "L01-001",
"lec": "L01",
"type": "term",
"level": 1,
"q": "For a centred data matrix $X\\in\\mathbb R^{p\\times n}$ (columns are observations), which is the sample covariance matrix used in PCA?",
"choices": [
"$\\frac1n XX^T$, of shape $p\\times p$",
"$\\frac1n X^TX$, of shape $n\\times n$",
"$\\frac1n X^TX$, of shape $p\\times p$",
"$\\frac1n XX^T$, of shape $n\\times n$"
],
"answer": 0,
"why": "Columns are observations, so $XX^T=\\sum_i x_ix_i^T$ is $p\\times p$ (features × features). $X^TX$ is the $n\\times n$ Gram matrix. B is a valid shape but a different object.",
"zh": "协方差 $C=\\frac1n XX^T$（$p\\times p$）；$X^TX$ 是 $n\\times n$ 的 Gram 矩阵。"
},
{
"id": "L01-002",
"lec": "L01",
"type": "term",
"level": 1,
"q": "In PCA, which object is called the *score* of observation $x_i$ along a unit vector $w$?",
"choices": [
"$(w^Tx_i)\\,w$, a vector in $\\mathbb R^p$",
"$x_i-(w^Tx_i)\\,w$, the residual",
"$w^Tx_i$, a single number",
"$\\lVert x_i\\rVert\\,w$"
],
"answer": 2,
"why": "The score is the coordinate $w^Tx_i$ along $w$. A is the projected point $\\tilde x_i$ (score times direction), B is the residual orthogonal to $w$.",
"zh": "score（得分）= 标量 $w^Tx_i$；投影点 $\\tilde x_i$ 是 score 乘以 $w$。"
},
{
"id": "L01-003",
"lec": "L01",
"type": "term",
"level": 1,
"q": "For a **unit** vector $w$ ($w^Tw=1$), which expression is the orthogonal projection of $x_i$ onto $\\operatorname{span}(w)$?",
"choices": [
"$w^Tx_i$",
"$(w^Tx_i)\\,w$",
"$(x_i^Tx_i)\\,w$",
"$(w^Tw)\\,x_i$"
],
"answer": 1,
"why": "Length of the projection is the score $w^Tx_i$, direction is $w$. A is only the score (a number). D equals $x_i$ itself when $w^Tw=1$, so it projects nothing.",
"zh": "正交投影 $\\tilde x_i=(w^Tx_i)w$：score 乘方向。"
},
{
"id": "L01-004",
"lec": "L01",
"type": "term",
"level": 2,
"q": "Read $\\max_w\\, w^TCw$ subject to $w^Tw=1$ aloud ($C$ = covariance of centred data). Which sentence is correct?",
"choices": [
"Find the unit direction along which the scores have the smallest variance.",
"Find any vector of largest length, whatever its direction.",
"Find the unit direction that minimises the distance of the points to the mean.",
"Find the unit direction along which the scores have the largest variance."
],
"answer": 3,
"why": "For centred data $w^TCw=\\frac1n\\sum_i(w^Tx_i)^2$ is the variance of the scores. Without the constraint the maximum would be infinite, so the constraint only fixes the length.",
"zh": "$\\max w^TCw$ = 沿单位方向的投影方差最大；约束只固定长度。"
},
{
"id": "L01-005",
"lec": "L01",
"type": "term",
"level": 3,
"q": "Let $\\mathcal L(w,\\lambda)=w^TCw-\\lambda(w^Tw-1)$ with $C$ symmetric and $w\\in\\mathbb R^p$. What is $\\nabla_w\\mathcal L$ (a column vector, numerator layout)?",
"choices": [
"$2Cw-2\\lambda w$, shape $p\\times1$",
"$Cw-\\lambda w$, shape $p\\times1$",
"$2C-2\\lambda I$, shape $p\\times p$",
"$2w^TC-2\\lambda w^T$, shape $1\\times p$"
],
"answer": 0,
"why": "$\\nabla_w(w^TCw)=2Cw$ for symmetric $C$ and $\\nabla_w(w^Tw)=2w$. B misses the 2 (same zero set, but not the gradient). C is the Hessian, D is the row-vector derivative.",
"zh": "梯度是列向量 $2Cw-2\\lambda w$；Hessian 才是 $p\\times p$ 的 $2C-2\\lambda I$。"
},
{
"id": "L01-006",
"lec": "L01",
"type": "term",
"level": 2,
"q": "For $X\\in\\mathbb R^{p\\times n}$ with columns $x_i$, what is $X^TX$?",
"choices": [
"The $p\\times p$ covariance matrix up to a factor $1/n$",
"The $n\\times n$ Gram matrix with entries $x_i^Tx_j$",
"The $p\\times p$ matrix with entries $\\sum_i x_{ji}x_{ki}$",
"The $n\\times p$ matrix of PC scores"
],
"answer": 1,
"why": "$(X^TX)_{ij}=x_i^Tx_j$, an $n\\times n$ matrix of inner products between observations. C describes $XX^T$ (sum over samples $i$), which is the scatter matrix.",
"zh": "$X^TX$ 是 $n\\times n$ 的 Gram 矩阵（样本间内积），不是协方差。"
},
{
"id": "L01-007",
"lec": "L01",
"type": "term",
"level": 2,
"q": "$X=U\\Sigma V^T$ is the SVD of the centred data matrix ($X\\in\\mathbb R^{p\\times n}$), $C=\\frac1nXX^T$. Which statement gives the PCs and the variances $\\lambda_k$?",
"choices": [
"PCs are the columns of $V$, $\\lambda_k=\\sigma_k^2/n$",
"PCs are the columns of $U$, $\\lambda_k=\\sigma_k/n$",
"PCs are the columns of $U$, $\\lambda_k=\\sigma_k^2/n$",
"PCs are the columns of $V$, $\\lambda_k=\\sigma_k/n$"
],
"answer": 2,
"why": "$XX^T=U\\Sigma^2U^T$, so the eigenvectors of $C$ are the left singular vectors $U$ ($p$-dimensional) and $\\lambda_k=\\sigma_k^2/n$. $V$ lives in sample space ($n$-dimensional).",
"zh": "$XX^T=U\\Sigma^2U^T$：主成分是左奇异向量 $U$，$\\lambda_k=\\sigma_k^2/n$。"
},
{
"id": "L01-008",
"lec": "L01",
"type": "term",
"level": 3,
"q": "With $X=U\\Sigma V^T$, $X\\in\\mathbb R^{p\\times n}$: which matrix holds the scores of all $n$ observations on all PCs (row $k$ = scores along PC $k$)?",
"choices": [
"$XU^T$",
"$V^TX$",
"$UX$",
"$U^TX$, which equals $\\Sigma V^T$"
],
"answer": 3,
"why": "Score of $x_i$ on $e_k$ is $e_k^Tx_i$, so stacking gives $U^TX$ ($p\\times n$). Inserting the SVD: $U^TU\\Sigma V^T=\\Sigma V^T$. A, B, C have incompatible shapes in general.",
"zh": "全部 score 矩阵 $=U^TX=\\Sigma V^T$（$p\\times n$）。"
},
{
"id": "L01-009",
"lec": "L01",
"type": "term",
"level": 2,
"q": "$V(w)=w^TCw$ with $C$ symmetric, $w\\in\\mathbb R^p$. Which is the **Hessian** of $V$ (second derivative w.r.t. $w$)?",
"choices": [
"$C$, shape $p\\times p$",
"$2C$, shape $p\\times p$",
"$2Cw$, shape $p\\times1$",
"$2w^TC$, shape $1\\times p$"
],
"answer": 1,
"why": "The gradient is $2Cw$ (C) and differentiating once more gives $2C$. Since $C\\succeq0$, $V$ is convex; PCA is still non-convex because we maximise over the circle.",
"zh": "$V(w)$ 的 Hessian 是 $2C$；$2Cw$ 是梯度。"
},
{
"id": "L01-010",
"lec": "L01",
"type": "term",
"level": 1,
"q": "Standardising every feature (subtract mean, divide by standard deviation) and then running PCA means taking eigenvectors of which matrix?",
"choices": [
"The covariance matrix of the raw data",
"The Gram matrix $X^TX$",
"The correlation matrix",
"The inverse covariance matrix"
],
"answer": 2,
"why": "After standardisation each feature has variance 1, so $\\frac1nXX^T$ has unit diagonal and equals the correlation matrix of the raw data. A is PCA without standardisation.",
"zh": "标准化后的 PCA = 相关矩阵的特征分解。"
},
{
"id": "L01-011",
"lec": "L01",
"type": "calc",
"level": 2,
"q": "Centred points $x_1=(2,1)^T$, $x_2=(-2,-1)^T$, $x_3=(0,0)^T$ ($n=3$), $C=\\frac1nXX^T$. What is $\\lambda_{\\max}(C)$?",
"choices": [
"$10/3$",
"$10$",
"$5/3$",
"$8/3$"
],
"answer": 0,
"why": "$XX^T=\\begin{pmatrix}8&4\\\\4&2\\end{pmatrix}$, so $C=\\frac13(\\dots)$ has $\\operatorname{tr}C=10/3$ and $\\det C=0$, hence $\\lambda_{\\max}=10/3$. B forgets $1/n$, D is only $C_{11}$.",
"zh": "点共线，$\\det C=0$，所以 $\\lambda_{\\max}=\\operatorname{tr}C=10/3$。"
},
{
"id": "L01-012",
"lec": "L01",
"type": "calc",
"level": 1,
"q": "$X=\\begin{pmatrix}1&-1\\\\2&-2\\end{pmatrix}$ (columns = two centred observations). What is the first principal direction (up to sign)?",
"choices": [
"$(2,1)^T/\\sqrt5$",
"$(1,1)^T/\\sqrt2$",
"$(1,-2)^T/\\sqrt5$",
"$(1,2)^T/\\sqrt5$"
],
"answer": 3,
"why": "Both points lie on the line through $(1,2)^T$, so all variance is along it: $XX^T=2\\begin{pmatrix}1&2\\\\2&4\\end{pmatrix}$ has eigenvector $(1,2)^T/\\sqrt5$ (eigenvalue 10). A swaps the components.",
"zh": "两点都在 $(1,2)$ 方向上，PC1 即该方向（归一化）。"
},
{
"id": "L01-013",
"lec": "L01",
"type": "calc",
"level": 2,
"q": "Unit vector $w=(3,4)^T/5$ and $x=(5,0)^T$. What is the orthogonal projection $\\tilde x=(w^Tx)\\,w$ of $x$ onto $\\operatorname{span}(w)$?",
"choices": [
"$(3,0)^T$",
"$(9/5,\\,12/5)^T$",
"$(3,4)^T$",
"$(12/5,\\,9/5)^T$"
],
"answer": 1,
"why": "Score $w^Tx=3$, so $\\tilde x=3\\,(3/5,4/5)^T=(9/5,12/5)^T$. Check: residual $(16/5,-12/5)^T$ is orthogonal to $w$. A multiplies the score with $e_1$ instead of $w$.",
"zh": "score $=3$，投影 $=3w$；残差应与 $w$ 正交。"
},
{
"id": "L01-014",
"lec": "L01",
"type": "calc",
"level": 2,
"q": "$C=\\begin{pmatrix}4&0\\\\0&1\\end{pmatrix}$ and $w=(1,1)^T/\\sqrt2$. What is the variance of the scores, $V(w)=w^TCw$?",
"choices": [
"$5$",
"$4$",
"$2.5$",
"$1.25$"
],
"answer": 2,
"why": "$w^TCw=\\tfrac12(4\\cdot1+1\\cdot1)=2.5$, between $\\lambda_2=1$ and $\\lambda_1=4$. A forgets the normalisation of $w$ (it is $\\operatorname{tr}C$).",
"zh": "$V(w)=w^TCw=2.5$，介于 $\\lambda_2$ 与 $\\lambda_1$ 之间。"
},
{
"id": "L01-015",
"lec": "L01",
"type": "calc",
"level": 1,
"q": "A covariance matrix has eigenvalues $6,\\,3,\\,1$. What fraction of the total variance is kept by the first **two** PCs?",
"choices": [
"$90\\%$",
"$60\\%$",
"$75\\%$",
"$67\\%$"
],
"answer": 0,
"why": "$\\sum_{j\\le2}\\lambda_j/\\sum_j\\lambda_j=(6+3)/10=0.9$. B is the fraction of PC1 alone, D is $6/9$ (leaving out $\\lambda_3$ from the denominator).",
"zh": "保留方差比 $=\\sum_{j\\le k}\\lambda_j/\\sum_j\\lambda_j=9/10$。"
},
{
"id": "L01-016",
"lec": "L01",
"type": "calc",
"level": 2,
"q": "$n=5$ centred points in $p=100$ dimensions. At most how many eigenvalues of $C=\\frac1nXX^T$ can be nonzero?",
"choices": [
"$5$",
"$99$",
"$100$",
"$4$"
],
"answer": 3,
"why": "$\\operatorname{rank}(XX^T)\\le\\min(p,n)$, and centring removes one degree of freedom (columns sum to zero), so rank $\\le n-1=4$. A forgets centring, C ignores $n$.",
"zh": "秩 $\\le\\min(p,n-1)$：去中心化少一维，所以最多 4 个非零特征值。"
},
{
"id": "L01-017",
"lec": "L01",
"type": "calc",
"level": 3,
"q": "RANSAC fits a line from $m=2$ random points; the inlier fraction is $p=0.8$. Smallest number of samples $r$ with $1-(1-p^m)^r\\ge0.99$? ($\\ln0.01\\approx-4.605$, $\\ln0.36\\approx-1.022$)",
"choices": [
"$3$",
"$5$",
"$4$",
"$17$"
],
"answer": 1,
"why": "$p^m=0.64$, so $r\\ge\\ln0.01/\\ln0.36=4.51$, i.e. $r=5$ (for $r=4$: $1-0.36^4\\approx0.983<0.99$). A uses $m=1$, D is the $p=0.5$ example.",
"zh": "干净样本概率 $p^m=0.64$；$r\\ge4.51$ 向上取整得 5。"
},
{
"id": "L01-018",
"lec": "L01",
"type": "calc",
"level": 2,
"q": "The SVD of centred $X\\in\\mathbb R^{p\\times n}$ with $n=9$ has largest singular value $\\sigma_1=6$. What is the variance along PC1, $\\lambda_1$ of $C=\\frac1nXX^T$?",
"choices": [
"$36$",
"$2/3$",
"$4$",
"$6$"
],
"answer": 2,
"why": "$XX^T=U\\Sigma^2U^T$, so $\\lambda_1=\\sigma_1^2/n=36/9=4$. B uses $\\sigma_1/n$ (forgets the square), A forgets $1/n$.",
"zh": "$\\lambda_k=\\sigma_k^2/n$：先平方再除以 $n$。"
},
{
"id": "L01-019",
"lec": "L01",
"type": "calc",
"level": 2,
"q": "$C=\\begin{pmatrix}4&0\\\\0&1\\end{pmatrix}$. Feature 1 is rescaled by $s_1=2$ (feature 2 unchanged), $S=\\operatorname{diag}(2,1)$, so $C\\to SCS$. What is $\\lambda_{\\max}$ afterwards?",
"choices": [
"$16$",
"$8$",
"$4$",
"$5$"
],
"answer": 0,
"why": "$SCS=\\operatorname{diag}(2\\cdot4\\cdot2,\\;1)=\\operatorname{diag}(16,1)$: variance scales with $s_1^2$, not $s_1$. B uses $s_1$ once. PC1 stays along feature 1 here.",
"zh": "特征缩放 $s$ 使方差乘 $s^2$：$C\\to SCS$。"
},
{
"id": "L01-020",
"lec": "L01",
"type": "calc",
"level": 3,
"q": "Normalised gradient ascent $w\\leftarrow(w+2\\eta Cw)/\\lVert w+2\\eta Cw\\rVert$ with $C=\\operatorname{diag}(2,1)$, $\\eta=1/4$, $w_0=(1,1)^T/\\sqrt2$. What is $w_1$?",
"choices": [
"$(0.6,\\,0.8)^T$",
"$(0.7,\\,0.7)^T$",
"$(1.41,\\,1.06)^T$",
"$(0.8,\\,0.6)^T$"
],
"answer": 3,
"why": "$w_0+\\tfrac12Cw_0=(2,1.5)^T/\\sqrt2$, norm $2.5/\\sqrt2$, so $w_1=(0.8,0.6)^T$: it tilts toward $e_1$ (larger $\\lambda$). C forgets to normalise.",
"zh": "一步后向 $e_1$ 偏转：$(2,1.5)/2.5=(0.8,0.6)$，别忘归一化。"
},
{
"id": "L01-021",
"lec": "L01",
"type": "pic",
"level": 1,
"q": "A scatter plot of centred 2-D data is an ellipse elongated along $(1,1)$. Its covariance is $C=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$. Which lines do PC1 and PC2 follow?",
"choices": [
"PC1 along $(1,2)$, PC2 along $(2,-1)$ (rows of $C$)",
"PC1 along $(1,1)$, PC2 along $(1,-1)$",
"PC1 along $(1,0)$, PC2 along $(0,1)$ (coordinate axes)",
"PC1 along $(1,-1)$, PC2 along $(1,1)$"
],
"answer": 1,
"why": "$C(1,1)^T=3(1,1)^T$ and $C(1,-1)^T=(1,-1)^T$, so $\\lambda_1=3$ (long axis), $\\lambda_2=1$. The PCs are orthogonal; the overall sign of each is arbitrary.",
"zh": "椭圆长轴 $(1,1)$ 对应 $\\lambda=3$，PC2 与之正交，符号任意。"
},
{
"id": "L01-022",
"lec": "L01",
"type": "pic",
"level": 3,
"q": "A cloud has centre $(10,10)^T$, spread 1 along $(1,-1)$ and 0.1 along $(1,1)$. You forget to centre and take the top eigenvector of $\\frac1nXX^T$. PC1 then points along:",
"choices": [
"$(1,-1)^T/\\sqrt2$, the long axis of the cloud",
"$(1,0)^T$, the first feature axis",
"$(1,1)^T/\\sqrt2$, from the origin towards the cloud",
"a random direction, since $C$ is singular"
],
"answer": 2,
"why": "Uncentred second moment $=\\bar x\\bar x^T+C$, with $\\bar x\\bar x^T$ of size $200$ along $(1,1)$, dwarfing the spread (1). PC1 points toward the mean; the true spread axis would be A.",
"zh": "不去中心化时 PC1 指向均值（原点到数据云），而不是散布方向。"
},
{
"id": "L01-023",
"lec": "L01",
"type": "pic",
"level": 1,
"q": "Feature 1 is an energy in GeV, feature 2 is dimensionless. You re-express feature 1 in MeV ($\\times1000$) and rerun **raw** PCA. What happens to PC1?",
"choices": [
"It rotates to lie almost exactly along the axis of feature 1.",
"It is unchanged, since PCA is invariant to rescaling features.",
"It rotates toward the axis of feature 2.",
"It is unchanged; only $\\lambda_1$ changes."
],
"answer": 0,
"why": "Variance of feature 1 grows by $10^6$ and dominates $C$, so PC1 aligns with that axis. Standardisation (correlation matrix) would remove the effect; raw PCA is not scale invariant.",
"zh": "单位放大 1000 倍 → 该特征方差占优，PC1 转向它；标准化可消除。"
},
{
"id": "L01-024",
"lec": "L01",
"type": "pic",
"level": 2,
"q": "$V(w)=\\lambda_1(e_1^Tw)^2+\\lambda_2(e_2^Tw)^2$, $\\lambda_1>\\lambda_2>0$. Contours of $V$ are ellipses. On the unit circle, where is $V$ largest?",
"choices": [
"At $\\pm e_2$, along the long axis of the contour ellipses",
"At $45^\\circ$ between $e_1$ and $e_2$",
"Everywhere equal, since $\\lVert w\\rVert=1$",
"At $\\pm e_1$, along the short axis of the contour ellipses"
],
"answer": 3,
"why": "A contour $V=c$ has semi-axes $\\sqrt{c/\\lambda_1}$ along $e_1$ and $\\sqrt{c/\\lambda_2}$ along $e_2$. $V$ grows fastest along $e_1$ (short axis), so the circle reaches its highest contour at $\\pm e_1$.",
"zh": "$V$ 的等高线是椭圆，沿 $e_1$（短轴）增长最快，圆上最大值在 $\\pm e_1$。"
},
{
"id": "L01-025",
"lec": "L01",
"type": "pic",
"level": 2,
"q": "$V(w)=w^TCw$ is convex, yet PCA is called non-convex. Which picture explains this?",
"choices": [
"$V$ has a saddle at the origin, so it is indefinite.",
"The unit circle is not a convex set: the midpoint of $w$ and $-w$ is $0$, off the circle.",
"The contour ellipses of $V$ are not convex curves.",
"$C$ has negative eigenvalues, so $V$ can be negative."
],
"answer": 1,
"why": "Convex problems need a convex feasible set; the circle $w^Tw=1$ is not one. Moreover we maximise a convex function. A, C, D contradict $C\\succeq0$ (Hessian $2C\\succeq0$, $V\\ge0$).",
"zh": "单位圆不是凸集（$w$ 与 $-w$ 的中点是 0），所以 PCA 非凸问题。"
},
{
"id": "L01-026",
"lec": "L01",
"type": "pic",
"level": 3,
"q": "Normalised gradient ascent for PCA with $\\lambda_1>\\lambda_2>0$ starts **exactly** at $w_0=e_2$ (exact arithmetic). What happens?",
"choices": [
"It converges to $e_1$, since $\\lambda_1$ is larger.",
"It oscillates between $e_2$ and $-e_2$.",
"It stays at $e_2$ forever: an unstable fixed point.",
"It converges to $e_1$ or $-e_1$ depending on the step size."
],
"answer": 2,
"why": "$w_0=a_1e_1+a_2e_2$ with $a_1=0$ gives $A^kw_0\\propto e_2$ for all $k$. Any tiny $a_1\\ne0$ grows like $\\big(\\tfrac{1+2\\eta\\lambda_1}{1+2\\eta\\lambda_2}\\big)^k$ relative to $a_2$, so the fixed point is unstable.",
"zh": "起点恰为 $e_2$ 时 $a_1=0$，停留不动（不稳定不动点）；稍有扰动就滑向 $e_1$。"
},
{
"id": "L01-027",
"lec": "L01",
"type": "pic",
"level": 3,
"q": "Points are spread uniformly on the unit circle in $\\mathbb R^2$ (a ring centred at the origin). What does PCA find?",
"choices": [
"$\\lambda_1=\\lambda_2=\\tfrac12$: no unique PC1, one PC keeps only $50\\%$ of the variance",
"$\\lambda_1=1,\\ \\lambda_2=0$: one PC captures the ring",
"$\\lambda_1=\\lambda_2=1$: each PC keeps the full variance",
"$\\lambda_1=\\tfrac12,\\ \\lambda_2=0$: the ring is a 1-D manifold"
],
"answer": 0,
"why": "$\\mathbb E[x_1^2]=\\mathbb E[x_2^2]=\\tfrac12$ and the cross term vanishes, so $C=\\tfrac12I$; the maximiser is not unique. A curved 1-D manifold is not captured by a linear 1-D subspace.",
"zh": "圆环 $C=\\frac12 I$，特征值相等，PC1 不唯一；线性 PCA 抓不住弯曲一维流形。"
},
{
"id": "L01-028",
"lec": "L01",
"type": "pic",
"level": 2,
"q": "$p=10$ independent features are each standardised. The scree plot (fraction of variance versus component index) of this structureless data set looks like:",
"choices": [
"One large bar followed by a steep drop to a noise floor",
"A smooth exponential decay from $0.5$",
"A step: the first three components carry everything",
"A flat line at about $0.1$ for every component"
],
"answer": 3,
"why": "Uncorrelated standardised features give $C\\approx I$: all eigenvalues equal and each carries $1/p=0.1$ of the variance. Real structure shows as an elbow above this diagonal.",
"zh": "无结构的标准化数据 $C\\approx I$，每个分量约占 $1/p$，碎石图是水平线。"
},
{
"id": "L01-029",
"lec": "L01",
"type": "pic",
"level": 2,
"q": "100 points scatter along the $x$-axis with variance 4 (a thin line). One outlier $(0,100)$ is added and PCA is rerun. PC1 now points:",
"choices": [
"Still along the $x$-axis, the line is 100 points against 1",
"Almost along the $y$-axis, towards the outlier",
"Halfway between the axes at $45^\\circ$",
"Along the $x$-axis but with $\\lambda_1$ larger"
],
"answer": 1,
"why": "Variance along $y$ is $\\approx 100^2/101\\approx98\\gg4$, because PCA squares distances. One far point rotates PC1; the squared loss gives it huge leverage (motivating robust PCA).",
"zh": "平方距离让单个远点主导：$y$ 向方差约 98，PC1 转向离群点。"
},
{
"id": "L01-030",
"lec": "L01",
"type": "pic",
"level": 1,
"q": "In a PCA plot of HIGGS events, signal and background lie on top of each other along PC1. What does this tell you?",
"choices": [
"The two classes are indistinguishable in every feature.",
"PCA is implemented wrongly and should be re-centred.",
"PCA ignores the labels: largest variance need not mean best class separation.",
"A later PC must separate the classes."
],
"answer": 2,
"why": "PCA is unsupervised and picks directions of maximal variance, not of class separation. Other directions (even low-variance ones) or supervised methods such as LDA may separate the classes. D is not guaranteed.",
"zh": "PCA 无监督，最大方差方向 ≠ 最能分类的方向。"
},
{
"id": "L02-001",
"lec": "L02",
"type": "term",
"level": 1,
"q": "A location $\\mu$ minimises $E(\\mu)=\\sum_i\\rho(x_i-\\mu)$. The estimating equation is $\\sum_i\\psi(x_i-\\mu)=0$. How is the influence function $\\psi$ related to $\\rho$?",
"choices": [
"$\\psi=\\int\\rho$",
"$\\psi=\\rho'$",
"$\\psi=\\rho''$",
"$\\psi=1/\\rho$"
],
"answer": 1,
"why": "Setting $E'(\\mu)=0$ and differentiating $\\rho(x_i-\\mu)$ gives $\\psi=\\rho'$: each sample pulls on $\\mu$ with a force $\\psi(r_i)$. C is the curvature, which matters for convexity, not for the pull.",
"zh": "影响函数 $\\psi=\\rho'$（势的导数 = 样本对 $\\mu$ 的“拉力”）。"
},
{
"id": "L02-002",
"lec": "L02",
"type": "term",
"level": 1,
"q": "Which potential $\\rho(r)$ corresponds to Laplace noise, and hence to the **median** as the estimator?",
"choices": [
"$\\rho(r)=\\tfrac12r^2$",
"$\\rho(r)=\\log(1+r^2)$",
"$\\rho(r)=|r|^3$",
"$\\rho(r)=|r|$"
],
"answer": 3,
"why": "Laplace density $\\propto e^{-|r|}$ gives $-\\log p=|r|$, and $\\sum_i|x_i-\\mu|$ is minimised by the median. A is Gaussian (mean), B is Cauchy.",
"zh": "Laplace 噪声 ↔ $\\rho=|r|$ ↔ 中位数；高斯 ↔ $\\frac12r^2$ ↔ 均值。"
},
{
"id": "L02-003",
"lec": "L02",
"type": "term",
"level": 2,
"q": "i.i.d. samples with $p(x\\mid\\mu)\\propto e^{-\\rho(x-\\mu)}$. Up to an additive constant, what is $-\\log\\prod_i p(x_i\\mid\\mu)$?",
"choices": [
"$\\sum_i\\rho(x_i-\\mu)$",
"$\\prod_i\\rho(x_i-\\mu)$",
"$\\sum_i e^{-\\rho(x_i-\\mu)}$",
"$-\\sum_i\\rho(x_i-\\mu)$"
],
"answer": 0,
"why": "The log turns the product into a sum and cancels the exponential: $-\\log\\prod_i e^{-\\rho_i}=\\sum_i\\rho_i$. Minimising this energy is maximum likelihood, so the choice of $\\rho$ is a noise model.",
"zh": "负对数似然 $=\\sum_i\\rho(x_i-\\mu)$ + 常数：选 $\\rho$ 就是选噪声模型。"
},
{
"id": "L02-004",
"lec": "L02",
"type": "term",
"level": 2,
"q": "The pinball (quantile) loss with $\\tau\\in(0,1)$ is $\\rho_\\tau(r)=\\tau r$ for $r\\ge0$. What is it for $r<0$?",
"choices": [
"$\\tau r$",
"$(1-\\tau)\\,r$",
"$(\\tau-1)\\,r$",
"$-\\tau r$"
],
"answer": 2,
"why": "For $r<0$ the loss must stay positive: $(\\tau-1)r=(1-\\tau)|r|$. A, B give negative values. D is positive but gives asymmetry $\\tau$ on both sides, so the kink would not be at the $\\tau$-quantile.",
"zh": "$r<0$ 时 $\\rho_\\tau=(\\tau-1)r=(1-\\tau)|r|$，非负。"
},
{
"id": "L02-005",
"lec": "L02",
"type": "term",
"level": 2,
"q": "Which M-estimate returns the 90th percentile of the samples?",
"choices": [
"Pinball loss with $\\tau=0.1$",
"Pinball loss with $\\tau=0.9$",
"Huber loss with $\\delta=0.9$",
"Tukey biweight with $c=0.9$"
],
"answer": 1,
"why": "At the minimum of $\\sum_i\\rho_\\tau(x_i-\\mu)$ a fraction $\\tau$ of the samples lies below $\\mu$, so $\\tau=0.9$ gives the 90th percentile. $\\tau=0.1$ gives the 10th. Huber and Tukey are robust location estimates.",
"zh": "90% 分位数 = 分位损失 $\\tau=0.9$ 的最小值点。"
},
{
"id": "L02-006",
"lec": "L02",
"type": "term",
"level": 1,
"q": "Which inequality states that $f$ is convex (for all $a,b$ and $\\theta\\in[0,1]$)?",
"choices": [
"$f(\\theta a+(1-\\theta)b)\\ge\\theta f(a)+(1-\\theta)f(b)$",
"$f(a+b)\\le f(a)+f(b)$",
"$f(\\theta a+(1-\\theta)b)=\\theta f(a)+(1-\\theta)f(b)$",
"$f(\\theta a+(1-\\theta)b)\\le\\theta f(a)+(1-\\theta)f(b)$"
],
"answer": 3,
"why": "The function lies below its chords. A is concavity, C is affine (linear), and B is only subadditivity, which is not the definition of convexity.",
"zh": "凸函数：函数值不高于弦，$f(\\theta a+(1-\\theta)b)\\le\\theta f(a)+(1-\\theta)f(b)$。"
},
{
"id": "L02-007",
"lec": "L02",
"type": "term",
"level": 2,
"q": "Which expression is the robust scale estimate $\\hat\\sigma$ for Gaussian data based on the MAD?",
"choices": [
"$1.4826\\cdot\\operatorname{median}_i|x_i-\\operatorname{median}(x)|$",
"$1.4826\\cdot\\frac1n\\sum_i|x_i-\\bar x|$",
"$\\operatorname{median}_i|x_i|$",
"$1.4826\\cdot\\operatorname{median}_i(x_i-\\bar x)^2$"
],
"answer": 0,
"why": "MAD is the median of absolute deviations from the median; for Gaussian data the factor $1.4826$ makes it estimate $\\sigma$. B uses means (not robust), D squares and uses the mean.",
"zh": "MAD 是到中位数的偏差的中位数，乘 1.4826 估计高斯 $\\sigma$。"
},
{
"id": "L02-008",
"lec": "L02",
"type": "term",
"level": 1,
"q": "What is the breakdown point of the sample mean of $n$ samples?",
"choices": [
"$50\\%$",
"$1/\\sqrt n$",
"$1/n$, which tends to $0$",
"$25\\%$"
],
"answer": 2,
"why": "Corrupting one single sample by an arbitrarily large value moves the mean arbitrarily far, so the smallest fraction is $1/n\\to0$. The median reaches $50\\%$.",
"zh": "均值的崩溃点 $1/n\\to0$；中位数是 50%。"
},
{
"id": "L02-009",
"lec": "L02",
"type": "term",
"level": 3,
"q": "Neighbour embedding uses the similarity $q_{ij}=1/(1+\\lVert z_i-z_j\\rVert^2)$. Which losses does UMAP-like training use?",
"choices": [
"Attraction $-\\log q_{ij}$ on edges; repulsion $-\\log(1-q_{ij})$ on non-edges",
"Attraction $-\\log(1-q_{ij})$ on edges; repulsion $-\\log q_{ij}$ on non-edges",
"Attraction $-\\log(1-q_{ij})$ on all pairs; repulsion $-\\log q_{ij}$ on edges",
"Attraction $\\lVert z_i-z_j\\rVert^2$ on non-edges; repulsion $-\\log q_{ij}$ on edges"
],
"answer": 0,
"why": "Edges (neighbours) should have $q_{ij}\\to1$, so $-\\log q_{ij}$ is minimised when close. Non-edges should have $q_{ij}\\to0$, so $-\\log(1-q_{ij})$ is minimised when far. B swaps the roles.",
"zh": "邻边：吸引 $-\\log q$；非邻对：排斥 $-\\log(1-q)$。"
},
{
"id": "L02-010",
"lec": "L02",
"type": "term",
"level": 2,
"q": "Student $t_\\nu$ has $p(x)\\propto(1+x^2/\\nu)^{-(\\nu+1)/2}$. Which statement is correct?",
"choices": [
"$\\nu\\to0$ gives the Gaussian.",
"$\\nu=2.5$ has no variance.",
"$\\nu=1$ gives the Gaussian.",
"$\\nu=1$ is the Cauchy density, whose mean and variance do not exist."
],
"answer": 3,
"why": "At $\\nu=1$ the density is $\\propto1/(1+x^2)$, the Cauchy/Lorentz (Breit–Wigner) shape. The Gaussian is the limit $\\nu\\to\\infty$. For $\\nu=2.5$ the variance exists but extreme values are frequent.",
"zh": "Cauchy $=t_1$，均值与方差都不存在；高斯是 $\\nu\\to\\infty$ 极限。"
},
{
"id": "L02-011",
"lec": "L02",
"type": "calc",
"level": 2,
"q": "Samples $\\{-1,0,5\\}$. The $\\ell_2$ energy $E(\\mu)=\\sum_i\\tfrac12(x_i-\\mu)^2$ is minimised at $\\mu=$?",
"choices": [
"$4/3$",
"$0$",
"$2$",
"$1$"
],
"answer": 0,
"why": "$E'(\\mu)=\\sum_i(\\mu-x_i)=0$ gives the mean, $(-1+0+5)/3=4/3$, pulled toward the outlier $5$. B is the $\\ell_1$ minimiser (median), C the midrange.",
"zh": "$\\ell_2$ 极小值点是均值 $4/3$，被离群点 5 拉偏；$\\ell_1$ 给中位数 0。"
},
{
"id": "L02-012",
"lec": "L02",
"type": "calc",
"level": 1,
"q": "$L(\\mu)=|1-\\mu|+|2-\\mu|+|6-\\mu|$. What is $\\min_\\mu L(\\mu)$?",
"choices": [
"$6$",
"$9$",
"$5$",
"$12$"
],
"answer": 2,
"why": "The minimiser is the median $\\mu=2$, and $L(2)=1+0+4=5$. A is $L(1)=0+1+5$, B is $L(6)=5+4+0$; both are larger because they are not the median.",
"zh": "最小值点是中位数 2，$L(2)=1+0+4=5$。"
},
{
"id": "L02-013",
"lec": "L02",
"type": "calc",
"level": 3,
"q": "Samples $\\{1,2,6,10\\}$, $\\ell_1$ loss $L(\\mu)=\\sum_i|x_i-\\mu|$. Which $\\mu$ minimise $L$?",
"choices": [
"Only $\\mu=2$",
"Every $\\mu\\in[2,6]$",
"Only $\\mu=4.75$, the mean",
"Only $\\mu=6$"
],
"answer": 1,
"why": "Slope of $L$ is $\\#\\{x_i<\\mu\\}-\\#\\{x_i>\\mu\\}$; on $(2,6)$ it is $2-2=0$, so $L$ is flat there. With an even number of samples the median is non-unique. The mean minimises $\\ell_2$, not $\\ell_1$.",
"zh": "偶数个样本时 $\\ell_1$ 在两个中间样本之间平坦：任意 $\\mu\\in[2,6]$。"
},
{
"id": "L02-014",
"lec": "L02",
"type": "calc",
"level": 2,
"q": "Huber loss with $\\delta=1$: $\\rho(r)=\\tfrac12r^2$ for $|r|\\le\\delta$, else $\\delta|r|-\\tfrac12\\delta^2$; $\\psi=\\rho'$. What are $\\rho(3)$ and $\\psi(3)$?",
"choices": [
"$\\rho=4.5,\\ \\psi=3$",
"$\\rho=3,\\ \\psi=1$",
"$\\rho=2.5,\\ \\psi=3$",
"$\\rho=2.5,\\ \\psi=1$"
],
"answer": 3,
"why": "For $|r|>\\delta$: $\\rho=1\\cdot3-\\tfrac12=2.5$ and $\\psi=\\operatorname{clip}(3,\\pm1)=1$. A is the pure $\\ell_2$ result. B forgets the $-\\tfrac12\\delta^2$ that keeps $\\rho$ continuous.",
"zh": "超过 $\\delta$ 后 $\\rho=\\delta|r|-\\frac12\\delta^2=2.5$，$\\psi$ 被截断为 1。"
},
{
"id": "L02-015",
"lec": "L02",
"type": "calc",
"level": 2,
"q": "Tukey biweight influence $\\psi(r)=r\\,(1-r^2/c^2)^2$ for $|r|\\le c$ and $0$ beyond. For $c=2$, what are $\\psi(1)$ and $\\psi(3)$?",
"choices": [
"$9/16$ and $0$",
"$3/4$ and $0$",
"$1$ and $3$",
"$9/16$ and $1$"
],
"answer": 0,
"why": "$\\psi(1)=1\\cdot(1-\\tfrac14)^2=\\tfrac9{16}$. At $r=3>c$ the outlier has no influence: $\\psi=0$ (redescending). B forgets the square, C is $\\ell_2$, D is Huber-like clipping.",
"zh": "$\\psi(1)=(3/4)^2=9/16$；$|r|>c$ 时 $\\psi=0$（redescending）。"
},
{
"id": "L02-016",
"lec": "L02",
"type": "calc",
"level": 3,
"q": "Samples $\\{1,2,3,4,5\\}$, pinball loss $\\rho_\\tau(r)$ with $\\tau=0.75$. Which $\\mu$ minimises $\\sum_i\\rho_\\tau(x_i-\\mu)$?",
"choices": [
"$3$",
"$3.75$",
"$4$",
"$5$"
],
"answer": 2,
"why": "Slope of the loss in $\\mu$ is $(1-\\tau)\\#\\{x_i<\\mu\\}-\\tau\\#\\{x_i>\\mu\\}$. On $(3,4)$: $0.75-1.5<0$; on $(4,5)$: $1-0.75>0$. The sign changes at $4$, the first sample with at least 75% of the data at or below it (4 of 5 is 80%, 3 of 5 only 60%). A is the median ($\\tau=0.5$).",
"zh": "斜率 $(1-\\tau)\\#\\{x<\\mu\\}-\\tau\\#\\{x>\\mu\\}$ 在 4 处变号，故 $\\mu=4$。"
},
{
"id": "L02-017",
"lec": "L02",
"type": "calc",
"level": 2,
"q": "$x_1=(1,2)^T$, $x_2=(3,0)^T$, $\\mu\\in\\mathbb R^2$, $E(\\mu)=\\sum_i\\tfrac12\\lVert x_i-\\mu\\rVert^2$. What is the gradient $\\nabla_\\mu E$ at $\\mu=(0,0)^T$?",
"choices": [
"$(4,2)^T$",
"$(-4,-2)^T$",
"$(-2,-1)^T$",
"$(-4,2)^T$"
],
"answer": 1,
"why": "$\\nabla_\\mu E=\\sum_i(\\mu-x_i)=n\\mu-\\sum_ix_i$, so at $\\mu=0$ it is $-(4,2)^T$. A has the wrong sign (it is the gradient of $-E$), C is $-\\bar x$, which forgets the factor $n=2$.",
"zh": "$\\nabla_\\mu E=n\\mu-\\sum_i x_i$；在 $\\mu=0$ 处为 $(-4,-2)^T$，负梯度指向均值方向。"
},
{
"id": "L02-018",
"lec": "L02",
"type": "calc",
"level": 1,
"q": "The repulsive sum $\\sum_{i<j}\\phi_{\\rm rep}(\\lVert z_i-z_j\\rVert^2)$ runs over all pairs of $N=100$ embedded points. How many terms does it have?",
"choices": [
"$10\\,000$",
"$9\\,900$",
"$5\\,050$",
"$4\\,950$"
],
"answer": 3,
"why": "Unordered pairs with $i<j$: $N(N-1)/2=100\\cdot99/2=4950$. A counts ordered pairs with $i=j$, B ordered pairs $i\\ne j$, C includes $i=j$ ($N(N+1)/2$). This $O(N^2)$ cost motivates negative sampling.",
"zh": "$i<j$ 的对数 $=N(N-1)/2=4950$；这是 $O(N^2)$，所以用负采样。"
},
{
"id": "L02-019",
"lec": "L02",
"type": "calc",
"level": 2,
"q": "$N=500$ points $z_i\\in\\mathbb R^2$ are stacked as $Z\\in\\mathbb R^{N\\times2}$ and the embedding energy $\\mathcal E(Z)$ is minimised. How many free variables, and what is the shape of $\\partial\\mathcal E/\\partial Z$?",
"choices": [
"$1000$ variables; gradient of shape $500\\times2$",
"$500$ variables; gradient of shape $500\\times1$",
"$1000$ variables; gradient of shape $1000\\times1000$",
"$2$ variables; gradient of shape $1\\times2$"
],
"answer": 0,
"why": "Each point has 2 coordinates, so $2N=1000$ variables. The gradient has one entry per variable, arranged like $Z$ ($N\\times2$). C is the shape of a Hessian. The problem is non-convex.",
"zh": "变量数 $2N=1000$；梯度与 $Z$ 同形（$N\\times2$），Hessian 才是 $1000\\times1000$。"
},
{
"id": "L02-020",
"lec": "L02",
"type": "calc",
"level": 1,
"q": "What is the MAD of the samples $\\{1,2,3,4,100\\}$, i.e. $\\operatorname{median}_i|x_i-\\operatorname{median}(x)|$?",
"choices": [
"$97$",
"$2$",
"$1$",
"$3$"
],
"answer": 2,
"why": "The median is $3$, deviations are $2,1,0,1,97$; sorted $0,1,1,2,97$ has median $1$. The outlier $100$ does not move it (the standard deviation would explode).",
"zh": "中位数 3，偏差 $\\{2,1,0,1,97\\}$ 的中位数是 1：MAD 不受离群点影响。"
},
{
"id": "L02-021",
"lec": "L02",
"type": "pic",
"level": 1,
"q": "Which picture shows the influence function $\\psi$ of the **Huber** loss?",
"choices": [
"Rises, peaks, then returns to $0$ and stays at $0$",
"A straight line through the origin up to $\\pm\\delta$, then flat at $\\pm\\delta$",
"A jump from $-1$ to $+1$ at $r=0$ and flat otherwise",
"A parabola, growing without bound"
],
"answer": 1,
"why": "Huber is Gaussian-like in the core ($\\psi=r$) and Laplace-like in the tails ($\\psi=\\pm\\delta$): bounded, so one outlier pulls with force at most $\\delta$. A is Tukey, C is $\\ell_1$.",
"zh": "Huber 的 $\\psi$：中间线性，两端截平在 $\\pm\\delta$（有界）。"
},
{
"id": "L02-022",
"lec": "L02",
"type": "pic",
"level": 2,
"q": "Tukey's biweight has a **redescending** $\\psi$. Which description of its picture and consequence is right?",
"choices": [
"$\\psi$ is clipped at $\\pm c$; $E$ is convex, so any start works.",
"$\\psi$ stays at its maximum beyond $c$; outliers get fixed influence.",
"$\\psi$ grows without bound; outliers dominate the fit.",
"$\\psi$ returns to $0$ at $\\pm c$; $E$ is non-convex, so start from the median."
],
"answer": 3,
"why": "Far outliers are ignored entirely ($\\psi=0$), but $\\rho$ is constant beyond $c$, hence not convex: the sum can have several local minima and the result depends on the start. A describes Huber.",
"zh": "Tukey 的 $\\psi$ 先升后降为 0（redescending）→ 非凸、多极小，需稳健初始化。"
},
{
"id": "L02-023",
"lec": "L02",
"type": "pic",
"level": 3,
"q": "Samples $\\{-1,0,5\\}$ and Tukey's biweight with $c=3$ have two local minima of the total energy, near $-0.5$ and at $5$. Which is global, and why?",
"choices": [
"The one near $-0.5$; the sample $5$ is ignored as an outlier",
"The one at $5$, where one residual vanishes",
"The one at $4/3$, the mean",
"The one at $0$, the median"
],
"answer": 0,
"why": "At $\\mu\\approx-0.5$ two residuals are small and only the outlier pays the capped cost $c^2/6=1.5$ (total $\\approx1.7$). At $\\mu=5$ two samples pay $1.5$ each (total $3.0$). The mean is not even a local minimum here.",
"zh": "全局极小在 $-0.5$ 附近：两个样本残差小，离群点只付封顶代价。"
},
{
"id": "L02-024",
"lec": "L02",
"type": "pic",
"level": 2,
"q": "You plot the running mean and the running median of samples from a Cauchy density. What do the two curves look like?",
"choices": [
"Both converge to the centre like $1/\\sqrt n$.",
"The mean converges slowly, the median does not.",
"The mean keeps making large jumps and never settles; the median converges.",
"The mean diverges linearly with $n$; the median stays constant."
],
"answer": 2,
"why": "The Cauchy has no mean ($\\mathbb E|X|=\\infty$), so the law of large numbers does not apply; single extreme draws keep shifting the average. The median converges because it is robust.",
"zh": "Cauchy 无均值，样本均值始终大幅跳动；中位数收敛。"
},
{
"id": "L02-025",
"lec": "L02",
"type": "pic",
"level": 2,
"q": "Spring picture: sample $x_i=5$ pulls on the location estimate $\\mu$ with force $\\psi(5-\\mu)$ for $\\mu$ near $0$. How do $\\ell_2$ and $\\ell_1$ differ?",
"choices": [
"Both forces grow with the distance of the sample.",
"$\\ell_2$ force grows with the distance; $\\ell_1$ force is $\\pm1$ at any distance.",
"$\\ell_1$ force grows linearly; $\\ell_2$ force is constant.",
"Both forces are bounded by $1$."
],
"answer": 1,
"why": "$\\psi_{\\ell_2}(r)=r$ is unbounded, so a far outlier pulls hard. $\\psi_{\\ell_1}(r)=\\operatorname{sgn}r$ is bounded, so every sample pulls equally: a vote that gives the median.",
"zh": "$\\ell_2$：拉力 $\\propto$ 距离（无界）；$\\ell_1$：拉力恒为 $\\pm1$（有界）。"
},
{
"id": "L02-026",
"lec": "L02",
"type": "pic",
"level": 1,
"q": "In the force-directed picture of UMAP, you delete the repulsive term and keep only attraction along $k$NN edges. What does the layout converge to?",
"choices": [
"Crisper, well-separated clusters",
"The same layout, only rescaled",
"The first two PCs of the data",
"All points collapsing onto one location"
],
"answer": 3,
"why": "Attraction alone has the trivial minimum $z_i=z_j$ for all $i,j$. The repulsion (like charges) is what keeps points apart and gives the clusters their spread.",
"zh": "只有吸引项时最小值是所有点重合；排斥项防止塌缩。"
},
{
"id": "L02-027",
"lec": "L02",
"type": "pic",
"level": 2,
"q": "In a UMAP/t-SNE plot two clusters sit far apart and one looks twice as wide as the other. What can you conclude?",
"choices": [
"Only that points inside a cluster are neighbours; gaps and sizes mean little.",
"The clusters are also far apart in the input space.",
"The wider cluster has twice the variance.",
"The wider cluster has twice as many points."
],
"answer": 0,
"why": "The loss only enforces local neighbourhoods ($k$NN graph). Cluster sizes and inter-cluster distances are not meaningful; go back to the original features to interpret clusters.",
"zh": "t-SNE/UMAP 只保留局部邻域，簇间距离与簇大小不可当真。"
},
{
"id": "L02-028",
"lec": "L02",
"type": "pic",
"level": 2,
"q": "The embedding energy $\\mathcal E(\\{z_i\\})$ depends only on distances $\\lVert z_i-z_j\\rVert$. Which operation on the whole embedding **changes** $\\mathcal E$?",
"choices": [
"A translation $z_i\\to z_i+t$",
"A rotation of all points by $30^\\circ$",
"A scaling $z_i\\to2z_i$",
"A reflection of all points, $(z_{i1},z_{i2})\\to(-z_{i1},z_{i2})$"
],
"answer": 2,
"why": "Translations, rotations and reflections preserve all pairwise distances, so $\\mathcal E$ is invariant. Scaling multiplies every distance by 2 and changes the balance of attraction and repulsion.",
"zh": "平移、旋转、反射保持距离，能量不变；缩放改变距离，能量会变。"
},
{
"id": "L02-029",
"lec": "L02",
"type": "pic",
"level": 3,
"q": "The symmetrised $k$NN graph of $N$ points is built with $k=N-1$. What does the graph look like, and what does that do to the embedding?",
"choices": [
"Many tiny components; clusters fly apart",
"The complete graph: all pairs attract, so all locality is lost",
"A single chain through all points",
"A tree, which preserves global distances"
],
"answer": 1,
"why": "Each point is linked to all $N-1$ others, so every pair attracts equally and nothing is \"local\". The opposite limit $k=1$ fragments the graph into many tiny components.",
"zh": "$k=N-1$ 得到完全图，局部性消失；$k=1$ 则碎成许多小连通块。"
},
{
"id": "L02-030",
"lec": "L02",
"type": "pic",
"level": 3,
"q": "Why can no map into the plane preserve all distances (MDS/Sammon aim) when applied to points on a sphere?",
"choices": [
"The plane has less area than the sphere.",
"Distances on a sphere do not obey the triangle inequality.",
"The sphere is not a connected space.",
"A triangle with three right angles ($270^\\circ$) cannot become flat ($180^\\circ$)."
],
"answer": 3,
"why": "Preserving all (geodesic) distances would preserve all triangles, hence angles. A sphere is curved, a plane is flat, so no isometry exists. Large distances dominate the compromise.",
"zh": "球面三角形内角和可达 270°，平面只有 180°，故无法保距压平。"
},
{
"id": "L03-001",
"lec": "L03",
"type": "term",
"level": 1,
"q": "In the language of the lecture, what is a **random variable** $X$?",
"choices": [
"A number that changes every time you look at it",
"A function $X:\\mathbb R\\to\\Omega$ that picks an outcome",
"A deterministic function $X:\\Omega\\to\\mathbb R$; only its argument $\\omega$ is random",
"The probability $P$ attached to an event"
],
"answer": 2,
"why": "$X$ maps each outcome $\\omega\\in\\Omega$ to a real number; the randomness lives in which $\\omega$ occurs. B has domain and range swapped, D confuses $X$ with $P$.",
"zh": "随机变量是 $\\Omega\\to\\mathbb R$ 的确定性函数，随机性只在 $\\omega$。"
},
{
"id": "L03-002",
"lec": "L03",
"type": "term",
"level": 1,
"q": "For a continuous random variable with CDF $F(x)=P(X\\le x)$, how is the PDF $p$ related to $F$?",
"choices": [
"$p(x)=F'(x)$",
"$F(x)=p'(x)$",
"$p(x)=P(X=x)$",
"$p(x)=F^{-1}(x)$"
],
"answer": 0,
"why": "The CDF accumulates the density, $F(x)=\\int_{-\\infty}^xp$, so $p=F'$. C is the PMF of a discrete variable; for a continuous $X$ it is $0$ at any single point.",
"zh": "PDF 是 CDF 的导数 $p=F'$；离散时才是 PMF $P(X=x)$。"
},
{
"id": "L03-003",
"lec": "L03",
"type": "term",
"level": 1,
"q": "Which formula is the variance of a random variable $X$?",
"choices": [
"$\\mathbb E[X^2]-\\mathbb E[X]$",
"$\\mathbb E[X]^2-\\mathbb E[X^2]$",
"$\\mathbb E[X-\\mathbb E X]$",
"$\\mathbb E[X^2]-\\mathbb E[X]^2$"
],
"answer": 3,
"why": "$\\operatorname{Var}X=\\mathbb E[(X-\\mathbb EX)^2]=\\mathbb E[X^2]-\\mathbb E[X]^2\\ge0$. B has the wrong sign (it is $\\le0$), C is identically $0$, A mixes a square with a non-square.",
"zh": "$\\operatorname{Var}X=\\mathbb E[X^2]-\\mathbb E[X]^2$（二阶矩减均值的平方）。"
},
{
"id": "L03-004",
"lec": "L03",
"type": "term",
"level": 2,
"q": "$X\\in\\mathbb R^p$ is a random vector with $\\operatorname{Cov}[X]=\\mathbb E[(X-\\mu)(X-\\mu)^T]$ ($p\\times p$) and $w\\in\\mathbb R^p$. What is $\\operatorname{Var}[w^TX]$?",
"choices": [
"$w\\operatorname{Cov}[X]\\,w^T$, a $p\\times p$ matrix",
"$w^T\\operatorname{Cov}[X]\\,w$, a number",
"$\\operatorname{Cov}[X]\\,w$, a $p\\times1$ vector",
"$w^Tw\\,\\operatorname{Cov}[X]$, a $p\\times p$ matrix"
],
"answer": 1,
"why": "$w^TX$ is a scalar, so its variance is a scalar: $\\mathbb E[(w^T(X-\\mu))^2]=w^T\\operatorname{Cov}[X]\\,w$. This is $V(w)$ of PCA. A and D are matrices, C is a vector.",
"zh": "$\\operatorname{Var}[w^TX]=w^T\\operatorname{Cov}[X]w$ 是标量，即 PCA 的 $V(w)$。"
},
{
"id": "L03-005",
"lec": "L03",
"type": "term",
"level": 1,
"q": "A histogram has $n$ samples in total, and bin $b$ of width $\\Delta$ contains $n_b$ of them. Which formula is the density estimate $\\hat p(x)$ for $x$ in bin $b$?",
"choices": [
"$n_b/n$",
"$n_b\\Delta/n$",
"$n_b/(n\\Delta)$",
"$n_b/\\Delta$"
],
"answer": 2,
"why": "The fraction $n_b/n$ is a probability; dividing by the width $\\Delta$ makes it a density that integrates to $1$. A is the bin probability, D forgets the normalisation by $n$.",
"zh": "直方图密度 $\\hat p=n_b/(n\\Delta)$；$n_b/n$ 只是该格的概率。"
},
{
"id": "L03-006",
"lec": "L03",
"type": "term",
"level": 2,
"q": "Which expression is the kernel density estimate with bandwidth $h$ (with $\\int k=1$)?",
"choices": [
"$\\frac1n\\sum_i\\frac1h\\,k\\big(\\frac{x-x_i}{h}\\big)$",
"$\\frac1n\\sum_i k\\big(\\frac{x-x_i}{h}\\big)$",
"$\\frac hn\\sum_i k\\big(\\frac{x-x_i}{h}\\big)$",
"$\\frac1n\\sum_i k\\big(h(x-x_i)\\big)$"
],
"answer": 0,
"why": "$k_h(u)=\\frac1hk(u/h)$ keeps unit integral, and the estimate averages one bump per sample. B integrates to $h$, C to $h^2$, and D shrinks the bump when $h$ grows.",
"zh": "KDE $=\\frac1n\\sum_i k_h(x-x_i)$，$k_h(u)=\\frac1hk(u/h)$；$\\frac1h$ 保证积分为 1。"
},
{
"id": "L03-007",
"lec": "L03",
"type": "term",
"level": 2,
"q": "The samples $x_i$ are i.i.d. from the true density $p$. Which expression is $\\mathbb E[\\hat p_h(x)]$ for the KDE ($*$ = convolution)?",
"choices": [
"$p(x)$",
"$(k_h*k_h)(x)$",
"$p(x)/(nh)$",
"$(k_h*p)(x)$"
],
"answer": 3,
"why": "$\\mathbb E[k_h(x-X)]=\\int k_h(x-y)p(y)\\,dy=(k_h*p)(x)$: the true density blurred by the kernel. So the KDE is biased for every $h>0$ (A would mean unbiased).",
"zh": "$\\mathbb E[\\hat p_h]=k_h*p$：真实密度被核模糊，故有偏。"
},
{
"id": "L03-008",
"lec": "L03",
"type": "term",
"level": 3,
"q": "For a Gaussian kernel $k_h$, what is the mean-shift vector at $x$?",
"choices": [
"$\\sum_ik_h(x-x_i)\\,x_i-x$",
"$\\dfrac{\\sum_ik_h(x-x_i)\\,x_i}{\\sum_ik_h(x-x_i)}-x$",
"$\\frac1n\\sum_ix_i-x$",
"$\\sum_ik_h(x-x_i)\\,(x-x_i)$"
],
"answer": 1,
"why": "$\\nabla\\hat p_h\\propto\\sum_ik_h(x-x_i)(x_i-x)=(\\sum_ik_h)\\,[m(x)-x]$ with $m$ the kernel-weighted mean. A forgets the normalisation, C uses uniform weights, D has the wrong sign.",
"zh": "均值漂移向量 $m(x)-x$，$m$ 为核加权均值；它指向 $\\hat p_h$ 上坡。"
},
{
"id": "L03-009",
"lec": "L03",
"type": "term",
"level": 2,
"q": "Which weights $w_i(x)$ define the Nadaraya–Watson estimate $\\hat m_h(x)=\\sum_iw_i(x)\\,y_i$?",
"choices": [
"$K_h(x-x_i)$",
"$K_h(x-x_i)/n$",
"$K_h(x-x_i)\\big/\\sum_jK_h(x-x_j)$",
"$y_iK_h(x-x_i)\\big/\\sum_jK_h(x-x_j)$"
],
"answer": 2,
"why": "The weights must sum to $1$, which makes $\\hat m_h$ a locally weighted average (a convex combination of the $y_i$). A and B do not sum to $1$; D already contains $y_i$ and would double count it.",
"zh": "NW 权重 $w_i=K_h(x-x_i)/\\sum_jK_h(x-x_j)$，和为 1，是局部加权平均。"
},
{
"id": "L03-010",
"lec": "L03",
"type": "term",
"level": 2,
"q": "A random sequence $X(n)$ has mean $\\mu(n)$. Which expression is its **autocovariance** $C(n,m)$?",
"choices": [
"$\\mathbb E[(X(n)-\\mu(n))(X(m)-\\mu(m))]$",
"$\\mathbb E[X(n)]\\,\\mathbb E[X(m)]$",
"$\\mathbb E[(X(n)-X(m))^2]$",
"$\\operatorname{Var}[X(n)]+\\operatorname{Var}[X(m)]$"
],
"answer": 0,
"why": "The autocovariance is the covariance of the sequence with itself at two indices, $\\operatorname{Cov}[X(n),X(m)]$; for $n=m$ it reduces to the variance. B is a product of means, C a squared increment.",
"zh": "自协方差 $C(n,m)=\\operatorname{Cov}[X(n),X(m)]$；$n=m$ 时即方差。"
},
{
"id": "L03-011",
"lec": "L03",
"type": "calc",
"level": 1,
"q": "A coin is tossed twice, $X$ = number of heads, so $p_X(0)=\\tfrac14$, $p_X(1)=\\tfrac12$, $p_X(2)=\\tfrac14$. What is $\\operatorname{Var}X$?",
"choices": [
"$1/4$",
"$1$",
"$3/2$",
"$1/2$"
],
"answer": 3,
"why": "$\\mathbb EX=1$, $\\mathbb EX^2=\\tfrac12+1=\\tfrac32$, so $\\operatorname{Var}X=\\tfrac32-1=\\tfrac12$. C is the second moment $\\mathbb E[X^2]$, B is the mean.",
"zh": "$\\mathbb EX=1$，$\\mathbb EX^2=3/2$，方差 $=3/2-1=1/2$。"
},
{
"id": "L03-012",
"lec": "L03",
"type": "calc",
"level": 1,
"q": "$\\operatorname{Var}X=2$. What is $\\operatorname{Var}[-3X+5]$?",
"choices": [
"$-6$",
"$18$",
"$23$",
"$6$"
],
"answer": 1,
"why": "$\\operatorname{Var}[aX+b]=a^2\\operatorname{Var}X=9\\cdot2=18$; the shift $b$ does not matter and the sign of $a$ disappears. C adds the shift, A is $a\\operatorname{Var}X$ (no square).",
"zh": "$\\operatorname{Var}[aX+b]=a^2\\operatorname{Var}X=18$，平移无关，符号消失。"
},
{
"id": "L03-013",
"lec": "L03",
"type": "calc",
"level": 2,
"q": "$X=(X_1,X_2)^T$ with $\\operatorname{Cov}[X]=\\begin{pmatrix}4&-1\\\\-1&1\\end{pmatrix}$ and $\\mathbf 1=(1,1)^T$. What is $\\operatorname{Var}[X_1+X_2]=\\mathbf 1^T\\operatorname{Cov}[X]\\,\\mathbf 1$?",
"choices": [
"$5$",
"$4$",
"$3$",
"$7$"
],
"answer": 2,
"why": "$\\mathbf 1^T\\operatorname{Cov}\\,\\mathbf 1$ is the sum of all entries: $4-1-1+1=3$. A keeps only the diagonal (valid only if uncorrelated), D adds $+2$ instead of $2\\operatorname{Cov}=-2$.",
"zh": "$\\mathbf 1^T\\operatorname{Cov}\\mathbf 1$ 是矩阵所有元素之和 $=3$。"
},
{
"id": "L03-014",
"lec": "L03",
"type": "calc",
"level": 1,
"q": "$n=100$ samples, histogram bin width $\\Delta=0.5$, and one bin contains $20$ samples. What is $\\hat p(x)$ in that bin?",
"choices": [
"$0.4$",
"$0.2$",
"$40$",
"$0.8$"
],
"answer": 0,
"why": "$\\hat p=n_b/(n\\Delta)=20/(100\\cdot0.5)=0.4$. B forgets $\\Delta$ (it is the bin probability $0.2$). A density may exceed $1$; only its integral must be $1$.",
"zh": "$\\hat p=20/(100\\times0.5)=0.4$；$0.2$ 是概率而不是密度。"
},
{
"id": "L03-015",
"lec": "L03",
"type": "calc",
"level": 3,
"q": "Uniform data in the unit cube $[0,1]^3$. What fraction lies within $\\varepsilon=0.1$ of the surface, $1-(1-2\\varepsilon)^d$?",
"choices": [
"$0.20$",
"$0.30$",
"$0.51$",
"$0.49$"
],
"answer": 3,
"why": "The inner cube has edge $1-2\\varepsilon=0.8$ and volume $0.8^3=0.512$, so the shell holds $1-0.512\\approx0.49$. C is the inner cube, B is $d\\varepsilon$ and A is $2\\varepsilon$ (1-D result).",
"zh": "内部立方体体积 $0.8^3=0.512$，表层占 $\\approx0.49$（维数越高越接近 1）。"
},
{
"id": "L03-016",
"lec": "L03",
"type": "calc",
"level": 2,
"q": "Heat equation $\\partial_tu=\\partial_x^2u$ with a delta spike $\\delta(x-x_i)/n$ at each sample. At $t=0.125$, the solution is a Gaussian KDE with bandwidth $h=$?",
"choices": [
"$0.25$",
"$0.5$",
"$0.354$",
"$0.125$"
],
"answer": 1,
"why": "The heat kernel is a Gaussian of variance $2t$, so $h=\\sqrt{2t}=\\sqrt{0.25}=0.5$. A is the variance $2t$ itself, C is $\\sqrt t$ (forgets the 2), D is $t$.",
"zh": "热核方差 $2t$，所以 $h=\\sqrt{2t}=0.5$（标准差，不是方差）。"
},
{
"id": "L03-017",
"lec": "L03",
"type": "calc",
"level": 2,
"q": "Box kernel $k(u)=\\tfrac12$ for $|u|\\le1$, else $0$; bandwidth $h=1$; samples $\\{0,\\,0.8,\\,3\\}$. What is the KDE $\\hat p_h(0.5)$?",
"choices": [
"$1/2$",
"$1$",
"$1/3$",
"$1/6$"
],
"answer": 2,
"why": "Distances from $0.5$ are $0.5,0.3,2.5$, so two samples contribute $\\tfrac12$ each: $\\hat p=\\tfrac13(\\tfrac12+\\tfrac12+0)=\\tfrac13$. B forgets the $\\tfrac1n$, D wrongly gives the far sample weight.",
"zh": "两个样本在核内各贡献 $1/2$，$\\hat p=\\frac13(\\frac12+\\frac12)=\\frac13$。"
},
{
"id": "L03-018",
"lec": "L03",
"type": "calc",
"level": 3,
"q": "1-D mean shift at $x=1$ with samples $x_i=0,2,4$. Gaussian kernel weights $k_h(x-x_i)$ are $0.5,\\,0.4,\\,0.1$. What is the shift $m(x)-x$?",
"choices": [
"$+0.2$",
"$+1.2$",
"$-0.2$",
"$+0.4$"
],
"answer": 0,
"why": "The weights sum to $1$, so $m=0\\cdot0.5+2\\cdot0.4+4\\cdot0.1=1.2$ and $m-x=0.2$: uphill toward the heavier side. B is $m$ itself, D divides by $n=3$ instead of the weight sum, C has the wrong sign.",
"zh": "$m=\\sum w_ix_i/\\sum w_i=1.2$，漂移 $m-x=+0.2$（向密度大的一侧）。"
},
{
"id": "L03-019",
"lec": "L03",
"type": "calc",
"level": 2,
"q": "Silverman's rule $h=1.06\\,\\hat\\sigma\\,n^{-1/5}$ with $\\hat\\sigma=2$ and $n=32$ samples gives $h=$?",
"choices": [
"$2.12$",
"$0.53$",
"$0.265$",
"$1.06$"
],
"answer": 3,
"why": "$32^{-1/5}=1/2$, so $h=1.06\\cdot2\\cdot\\tfrac12=1.06$. A forgets $n^{-1/5}$, B forgets $\\hat\\sigma$, C halves twice (uses $n^{-2/5}$).",
"zh": "$n^{-1/5}=32^{-1/5}=1/2$，$h=1.06\\times2\\times0.5=1.06$。"
},
{
"id": "L03-020",
"lec": "L03",
"type": "calc",
"level": 3,
"q": "In 1-D, optimal KDE bandwidth gives $\\text{MSE}\\propto n^{-4/5}$. If the sample size is multiplied by $32$, by what factor does the MSE shrink?",
"choices": [
"$1/32$",
"$1/16$",
"$1/8$",
"$1/2$"
],
"answer": 1,
"why": "$32^{-4/5}=(2^5)^{-4/5}=2^{-4}=1/16$. A would be a rate $n^{-1}$ (parametric), D is the factor by which the optimal $h\\propto n^{-1/5}$ shrinks.",
"zh": "MSE $\\propto n^{-4/5}$：$32^{-4/5}=2^{-4}=1/16$；带宽只缩小 $1/2$。"
},
{
"id": "L03-021",
"lec": "L03",
"type": "pic",
"level": 1,
"q": "Two histograms of the same data use the same bin width, but the bin edges of one are shifted by half a bin. What do you expect?",
"choices": [
"Identical pictures, since the bin width fixes the shape",
"Same shape; only the normalisation changes",
"One may show a sharp peak, the other a flat top: the bin origin is an arbitrary choice",
"Only the peak height doubles"
],
"answer": 2,
"why": "Counts depend on where the edges fall; a cluster split across two bins looks different from one inside a single bin. Very narrow bins give a spike per observation; very wide ones show only the coarse trend.",
"zh": "格子起点（bin origin）也是任意选择，会改变峰形；KDE 避免这一点。"
},
{
"id": "L03-022",
"lec": "L03",
"type": "pic",
"level": 2,
"q": "Data are uniform in the cube $[0,1]^{10}$. Where does almost all the volume lie?",
"choices": [
"In a thin outer shell near the surface of the cube",
"Within a small ball around the centre point",
"Evenly spread, as in one dimension",
"Inside the ball inscribed in the cube"
],
"answer": 0,
"why": "The fraction within $\\varepsilon$ of the surface is $1-(1-2\\varepsilon)^d\\to1$ as $d$ grows. The inscribed ball holds only a tiny fraction of the volume in 10-D, which is why \"local\" neighbourhoods are empty.",
"zh": "高维下体积集中在薄表层：$1-(1-2\\varepsilon)^d\\to1$。"
},
{
"id": "L03-023",
"lec": "L03",
"type": "pic",
"level": 2,
"q": "A KDE uses the Laplace kernel $k(u)\\propto e^{-|u|}$. What does $\\hat p_h$ look like around the samples?",
"choices": [
"Smooth Gaussian-like bumps, infinitely differentiable",
"Piecewise constant steps",
"Smooth bumps with flat tops",
"A cusp (kink) at every observation"
],
"answer": 3,
"why": "$e^{-|u|}$ has a corner at $u=0$, and the estimate is a sum of such kernels centred on the samples, so every observation carries a cusp. Gaussian gives $C^\\infty$, box gives steps, Epanechnikov kinks at the support ends.",
"zh": "Laplace 核在 0 处有尖点，KDE 在每个样本处都有尖点；高斯核则光滑。"
},
{
"id": "L03-024",
"lec": "L03",
"type": "pic",
"level": 3,
"q": "A heat spike sits at every sample ($\\partial_tu=\\partial_x^2u$). As $t$ grows, what does $u(x,t)$ look like?",
"choices": [
"The spikes stay put and only shrink in height",
"Gaussian bumps of variance $2t$ that merge into one broad bump at large $t$",
"All spikes drift toward the sample mean",
"The bumps become narrower and taller"
],
"answer": 1,
"why": "The heat kernel is a Gaussian with variance $2t$, so each spike spreads out ($h=\\sqrt{2t}$); small $t$ is spiky, large $t$ is a single mode. This diffusion is the forward process of diffusion models.",
"zh": "热核是方差 $2t$ 的高斯：随 $t$ 变宽并合并，对应 $h$ 增大；扩散模型的前向过程。"
},
{
"id": "L03-025",
"lec": "L03",
"type": "pic",
"level": 3,
"q": "The true density $p$ has a sharp narrow peak. Averaging the KDE over many data sets, what does $\\mathbb E[\\hat p_h]=k_h*p$ look like there?",
"choices": [
"The same peak, but noisier",
"A higher and narrower peak",
"A lower and broader peak",
"The same shape, shifted sideways"
],
"answer": 2,
"why": "Convolving with a kernel blurs: peaks are flattened and widened, and for a positive variable mass leaks below zero. This is the bias, $\\approx\\frac{h^2}{2}\\sigma_k^2p''(x)$, negative at a peak, and grows with $h$.",
"zh": "$k_h*p$ 把尖峰抹平变宽（偏差，$\\propto h^2p''$）；噪声是方差问题。"
},
{
"id": "L03-026",
"lec": "L03",
"type": "pic",
"level": 2,
"q": "You compute a KDE with a very small bandwidth, $h\\to0$, on several independent data sets from the same $p$. What do you see?",
"choices": [
"Very different spiky curves each time (high variance)",
"Nearly identical, heavily flattened curves",
"Nearly identical, perfect copies of $p$",
"Smooth curves shifted sideways"
],
"answer": 0,
"why": "$\\operatorname{Var}[\\hat p_h(x)]\\approx\\frac{p(x)}{nh}\\int k^2$ blows up as $h\\to0$: each curve has a spike per sample at random places. B is the large-$h$ picture (high bias).",
"zh": "$h\\to0$：方差 $\\sim p/(nh)$ 很大，每次得到不同的尖峰曲线；$h$ 大则偏差大。"
},
{
"id": "L03-027",
"lec": "L03",
"type": "pic",
"level": 2,
"q": "Mean shift runs from every sample with a Gaussian kernel, and $h$ is much smaller than the distance between neighbouring samples. What do you get?",
"choices": [
"One single cluster",
"Exactly two clusters",
"A number of clusters independent of $h$",
"Every sample is its own mode: $n$ clusters"
],
"answer": 3,
"why": "With tiny $h$ each sample is an isolated bump of $\\hat p_h$ and $m(x)\\approx x_i$ there, so the iteration stays put. A very large $h$ merges everything into one mode.",
"zh": "$h$ 很小：每个样本自成一个模（$n$ 个簇）；$h$ 很大：只有一个簇。"
},
{
"id": "L03-028",
"lec": "L03",
"type": "pic",
"level": 2,
"q": "Nadaraya–Watson regression with a Gaussian kernel, bandwidth $h\\to\\infty$. What does $\\hat m_h(x)$ look like?",
"choices": [
"A curve through every data point",
"A horizontal line at the mean of all $y_i$",
"The straight least-squares line",
"The zero function"
],
"answer": 1,
"why": "All weights $w_i(x)$ become equal to $1/n$, so $\\hat m_h(x)=\\frac1n\\sum_iy_i$ for every $x$. The least-squares line is not a weighted average with constant weights. $h$ below the spacing gives A.",
"zh": "$h\\to\\infty$ 时权重都是 $1/n$，回归线是 $y$ 的全局均值（水平线）。"
},
{
"id": "L03-029",
"lec": "L03",
"type": "pic",
"level": 3,
"q": "$X_1$ is symmetric about $0$ and $X_2=X_1^2+\\text{noise}$. The scatter plot is a parabola. What is $\\operatorname{Cov}(X_1,X_2)$?",
"choices": [
"Positive, since $X_2$ grows with $|X_1|$",
"Negative, since the parabola opens upwards",
"Zero, although $X_2$ strongly depends on $X_1$",
"Nonzero, since the variables are dependent"
],
"answer": 2,
"why": "$\\operatorname{Cov}=\\mathbb E[X_1X_2]-\\mathbb E[X_1]\\mathbb E[X_2]=\\mathbb E[X_1^3]-0=0$ by symmetry. Uncorrelated does not imply independent: covariance only sees linear dependence.",
"zh": "对称性使 $\\mathbb E[X_1^3]=0$，协方差为 0，但二者强相关：不相关 $\\ne$ 独立。"
},
{
"id": "L03-030",
"lec": "L03",
"type": "pic",
"level": 1,
"q": "For a random sequence $X(n,\\omega)$, you **fix $\\omega$** and let $n$ vary. What is the result?",
"choices": [
"One realisation: a deterministic sequence",
"A random variable",
"The mean function $\\mu(n)$",
"The autocovariance $C(n,m)$"
],
"answer": 0,
"why": "Fixing the outcome $\\omega$ gives one concrete trajectory (e.g. one path of Brownian motion). Fixing $n$ instead gives a random variable $X(n,\\cdot)$. $\\mu$ and $C$ are averages over $\\omega$.",
"zh": "固定 $\\omega$ 得到一条确定的轨迹；固定 $n$ 才得到随机变量。"
},
{
"id": "L04-001",
"lec": "L04",
"type": "term",
"level": 1,
"q": "With $X\\in\\mathbb R^{p\\times n}$ (columns = samples) and $w\\in\\mathbb R^p$, what is the shape of the prediction vector $\\hat y=X^Tw$?",
"choices": [
"$n\\times1$: one prediction per sample",
"$p\\times1$: one prediction per feature",
"$p\\times n$: one prediction per entry of $X$",
"$1\\times p$: one number per feature"
],
"answer": 0,
"why": "$X^T$ is $n\\times p$ and $w$ is $p\\times1$, so $X^Tw$ is $n\\times1$; entry $i$ is $\\hat y_i=w^Tx_i$.",
"zh": "$X$ 是 $p\\times n$（特征$\\times$样本），$\\hat y=X^Tw$ 每个样本一个预测，形状 $n\\times1$。"
},
{
"id": "L04-002",
"lec": "L04",
"type": "term",
"level": 1,
"q": "Which normal equations are correct and shape-consistent for $\\min_w\\lVert y-X^Tw\\rVert^2$ with $X\\in\\mathbb R^{p\\times n}$?",
"choices": [
"$XX^T\\hat w=Xy$",
"$X^TX\\hat w=X^Ty$",
"$XX^T\\hat w=X^Ty$",
"$X^TX\\hat w=Xy$"
],
"answer": 0,
"why": "$XX^T$ is $p\\times p$ and $Xy$ is $p\\times1$, matching $w\\in\\mathbb R^p$. $X^TXw=X^Ty$ is the row-convention form ($A=X^T$) and does not fit these shapes.",
"zh": "法方程 $XX^Tw=Xy$；$X^TXw=X^Ty$ 是行约定($A=X^T$)的写法，形状不符。"
},
{
"id": "L04-003",
"lec": "L04",
"type": "term",
"level": 2,
"q": "Which expression is $\\nabla_w\\lVert y-X^Tw\\rVert^2$ (a column vector in $\\mathbb R^p$)?",
"choices": [
"$+2X(y-X^Tw)$",
"$-2X(y-X^Tw)$",
"$-X(y-X^Tw)$",
"$-2X^T(y-Xw)$"
],
"answer": 1,
"why": "Expanding gives $y^Ty-2w^TXy+w^TXX^Tw$, so the gradient is $-2Xy+2XX^Tw=-2X(y-X^Tw)$. The last choice is the row-convention form and is shape-inconsistent here.",
"zh": "梯度$=-2X(y-X^Tw)$：残差乘特征再取负；注意因子2与符号。"
},
{
"id": "L04-004",
"lec": "L04",
"type": "term",
"level": 1,
"q": "Which model is still *linear regression* (linear in the parameters)?",
"choices": [
"$y=w_0\\,e^{w_1x}$",
"$y=w_0+\\sin(w_1x)$",
"$y=w_0/(1+w_1x)$",
"$y=w_0+w_1x^2+w_2\\sin x$"
],
"answer": 3,
"why": "Linear refers to the weights: the features $1,x^2,\\sin x$ simply fill rows of $X$ and $\\hat y=X^Tw$. In the other models $w_1$ sits inside a nonlinear function.",
"zh": "“线性”指对参数w线性，而非对输入x线性；基函数只改变X的内容。"
},
{
"id": "L04-005",
"lec": "L04",
"type": "term",
"level": 2,
"q": "The Hessian of $\\text{SSQ}(w)=\\lVert y-X^Tw\\rVert^2$ with respect to $w$, and what it implies:",
"choices": [
"$2X^TX$ (an $n\\times n$ matrix), so SSQ is convex",
"$2XX^T$, whose definiteness depends on the responses $y$",
"$2XX^T\\succeq0$, so SSQ is convex and every stationary point is a global minimum",
"$-2XX^T\\preceq0$, so SSQ is concave and the extremum is a maximum"
],
"answer": 2,
"why": "Differentiating $-2Xy+2XX^Tw$ once more gives $2XX^T$, which is $p\\times p$, positive semidefinite and independent of $y$. Convexity means no spurious local minima.",
"zh": "Hessian$=2XX^T\\succeq0$（$p\\times p$，与 $y$ 无关）$\\Rightarrow$ 凸，驻点即全局最小。"
},
{
"id": "L04-006",
"lec": "L04",
"type": "term",
"level": 1,
"q": "Which matrix $H$ gives the fitted values $\\hat y=Hy$ for full-rank $X\\in\\mathbb R^{p\\times n}$ (the hat matrix)?",
"choices": [
"$(XX^T)^{-1}X$",
"$XX^T$",
"$X^T(XX^T)^{-1}X$",
"$X(X^TX)^{-1}X^T$"
],
"answer": 2,
"why": "$\\hat y=X^T\\hat w=X^T(XX^T)^{-1}Xy$, an $n\\times n$ projection with $H^2=H$. $(XX^T)^{-1}X$ is $p\\times n$ and produces $\\hat w$, not $\\hat y$.",
"zh": "帽子矩阵 $H=X^T(XX^T)^{-1}X$（$n\\times n$ 投影，$H^2=H$）；$(XX^T)^{-1}X$ 给出的是 $\\hat w$。"
},
{
"id": "L04-007",
"lec": "L04",
"type": "term",
"level": 1,
"q": "For $y=X^Tw+\\varepsilon$ with $\\operatorname{Cov}\\varepsilon=\\sigma^2I$, what is $\\operatorname{Cov}\\hat w$ of the OLS estimate?",
"choices": [
"$\\sigma^2(XX^T)^{-1}$",
"$\\sigma^2XX^T$",
"$\\sigma^2(X^TX)^{-1}$",
"$(XX^T)^{-1}/\\sigma^2$"
],
"answer": 0,
"why": "$\\hat w=Ay$ with $A=(XX^T)^{-1}X$, so $\\operatorname{Cov}\\hat w=\\sigma^2AA^T=\\sigma^2(XX^T)^{-1}$, a $p\\times p$ matrix. More noise means more variance, so $\\sigma^2$ multiplies.",
"zh": "$\\mathrm{Cov}\\,\\hat w=\\sigma^2(XX^T)^{-1}$（$p\\times p$）；噪声越大方差越大，与 $y$ 无关。"
},
{
"id": "L04-008",
"lec": "L04",
"type": "term",
"level": 2,
"q": "Noise $\\varepsilon_i$ is i.i.d. Laplace, $p(\\varepsilon)\\propto e^{-|\\varepsilon|/b}$. Maximum likelihood for $w$ then minimizes:",
"choices": [
"$\\sum_i(y_i-w^Tx_i)^2$ (least squares)",
"$\\max_i|y_i-w^Tx_i|$",
"$\\sum_i|y_i-w^Tx_i|$ (least absolute deviations)",
"$\\sum_i\\log\\bigl(1+(y_i-w^Tx_i)^2\\bigr)$"
],
"answer": 2,
"why": "$-\\log p=\\sum_i|\\varepsilon_i|/b+\\text{const}$, so ML is the $\\ell_1$ loss. Gaussian noise would give the sum of squares instead ($\\ell_2\\leftrightarrow$ Gaussian).",
"zh": "拉普拉斯噪声⇒ℓ1损失(最小绝对偏差)；高斯噪声⇒ℓ2最小二乘。"
},
{
"id": "L04-009",
"lec": "L04",
"type": "term",
"level": 1,
"q": "After an OLS fit with $p$ weights to $n$ samples (residuals $\\hat\\varepsilon$), which noise-variance estimate do the notes use?",
"choices": [
"$\\hat\\sigma^2=\\lVert\\hat\\varepsilon\\rVert^2/n$",
"$\\hat\\sigma^2=\\lVert\\hat\\varepsilon\\rVert^2/p$",
"$\\hat\\sigma^2=\\lVert\\hat\\varepsilon\\rVert^2/(n+p)$",
"$\\hat\\sigma^2=\\lVert\\hat\\varepsilon\\rVert^2/(n-p)$"
],
"answer": 3,
"why": "Fitting $p$ weights uses up $p$ degrees of freedom, so residuals are too small; dividing by $n-p$ compensates. Dividing by $n$ underestimates $\\sigma^2$.",
"zh": "噪声方差估计 $\\hat\\sigma^2=\\lVert\\hat\\varepsilon\\rVert^2/(n-p)$，除以自由度而非 $n$。"
},
{
"id": "L04-010",
"lec": "L04",
"type": "term",
"level": 2,
"q": "In the CT model $y=X^Tw$ with $X_{kj}$ = path length of ray $j$ in pixel $k$, what does **row $k$** of $X$ contain?",
"choices": [
"The path lengths of ray $k$ through all pixels",
"The attenuation $w_k$ of pixel $k$ at all angles",
"The path lengths of all rays through pixel $k$ (its 'sinogram')",
"The log-intensities $-\\ln(I_1/I_0)$ of all rays"
],
"answer": 2,
"why": "$X$ is pixels $\\times$ rays. A column is one ray's image (its path through the object); a row is one pixel, showing which rays hit it and how long.",
"zh": "$X$ 是像素$\\times$射线：列=一条射线的路径图，行=一个像素的“正弦图”。"
},
{
"id": "L04-011",
"lec": "L04",
"type": "calc",
"level": 2,
"q": "Fit $y=w_0+w_1x$ to $(0,0),(1,1),(2,1)$ with $X=\\begin{pmatrix}1&1&1\\\\0&1&2\\end{pmatrix}$. Then $\\hat w=(\\hat w_0,\\hat w_1)=$",
"choices": [
"$(1/2,\\;1/6)$",
"$(1/6,\\;1/2)$",
"$(0,\\;1/2)$",
"$(2/3,\\;0)$"
],
"answer": 1,
"why": "$XX^T=\\begin{pmatrix}3&3\\\\3&5\\end{pmatrix}$, $Xy=(2,3)^T$, $(XX^T)^{-1}=\\frac16\\begin{pmatrix}5&-3\\\\-3&3\\end{pmatrix}$, so $\\hat w=\\frac16(10-9,-6+9)$. Check: line passes through $(\\bar x,\\bar y)=(1,2/3)$.",
"zh": "$XX^T=[[3,3],[3,5]]$，$Xy=(2,3)$，求逆得 $\\hat w=(1/6,1/2)$；直线过均值点。"
},
{
"id": "L04-012",
"lec": "L04",
"type": "calc",
"level": 2,
"q": "An OLS line with intercept is fitted at $x=0,1,2$. The residuals at $x=0$ and $x=2$ are both $-\\tfrac16$. The residual at $x=1$ is:",
"choices": [
"$-\\tfrac13$",
"$+\\tfrac13$",
"$0$",
"$+\\tfrac16$"
],
"answer": 1,
"why": "The intercept row of ones gives $X\\hat\\varepsilon=0\\Rightarrow\\sum_i\\hat\\varepsilon_i=0$, so $\\hat\\varepsilon_2=\\tfrac13$. The slope row agrees: $0\\cdot(-\\tfrac16)+1\\cdot\\tfrac13+2\\cdot(-\\tfrac16)=0$.",
"zh": "$X\\hat\\varepsilon=0$：含截距行时残差和为0，故中间点残差$=+1/3$。"
},
{
"id": "L04-013",
"lec": "L04",
"type": "calc",
"level": 1,
"q": "A fit has $p=3$ features and $n=100$ samples. The shapes of $XX^T$ and of the hat matrix $H$ are:",
"choices": [
"$3\\times3$ and $100\\times100$",
"$100\\times100$ and $3\\times3$",
"$3\\times3$ and $3\\times3$",
"$3\\times100$ and $100\\times3$"
],
"answer": 0,
"why": "$XX^T$ sums over samples: $p\\times p$. $H=X^T(XX^T)^{-1}X$ acts on $y\\in\\mathbb R^{100}$, so it is $n\\times n$ (though only of rank 3).",
"zh": "$XX^T$ 是 $p\\times p$；$H=X^T(XX^T)^{-1}X$ 作用在 $y\\in\\mathbb R^n$ 上，是 $n\\times n$，但秩只有 $p$。"
},
{
"id": "L04-014",
"lec": "L04",
"type": "calc",
"level": 2,
"q": "Take $X=(1\\;\\;2)$ (one feature, two samples) and $y=(3,1)^T$. One gradient-descent step on SSQ with $\\eta=0.1$ from $w=0$ gives $w=$",
"choices": [
"$0.5$",
"$-1$",
"$10$",
"$1$"
],
"answer": 3,
"why": "$\\nabla\\text{SSQ}(0)=-2Xy=-2(3+2)=-10$, so $w\\leftarrow0-0.1\\cdot(-10)=1$. Forgetting the factor 2 in the gradient would give $0.5$.",
"zh": "$\\nabla\\mathrm{SSQ}(0)=-2Xy=-10$，$w=0-0.1\\times(-10)=1$；别漏掉因子2。"
},
{
"id": "L04-015",
"lec": "L04",
"type": "calc",
"level": 3,
"q": "Let $\\sigma^2=1$ and $XX^T=\\operatorname{diag}(4,\\tfrac14)$. The standard deviations of $\\hat w_1$ and $\\hat w_2$ are:",
"choices": [
"$2$ and $0.5$",
"$0.5$ and $2$",
"$0.25$ and $4$",
"$4$ and $0.25$"
],
"answer": 1,
"why": "$\\operatorname{Cov}\\hat w=\\sigma^2(XX^T)^{-1}=\\operatorname{diag}(\\tfrac14,4)$; the standard deviations are the square roots, $(0.5,2)$. The weakly excited feature (small entry of $XX^T$) is the poorly determined one.",
"zh": "$\\mathrm{Cov}=\\sigma^2(XX^T)^{-1}=\\mathrm{diag}(1/4,4)$，标准差$=(0.5,2)$；$XX^T$ 小的方向最不确定。"
},
{
"id": "L04-016",
"lec": "L04",
"type": "calc",
"level": 2,
"q": "$n=5$ samples, $p=2$ weights, OLS residuals $(1,-1,2,-1,-1)$. The estimate $\\hat\\sigma^2=\\lVert\\hat\\varepsilon\\rVert^2/(n-p)$ equals:",
"choices": [
"$8/5$",
"$8/3$",
"$4$",
"$8/7$"
],
"answer": 1,
"why": "$\\lVert\\hat\\varepsilon\\rVert^2=1+1+4+1+1=8$ and $n-p=3$, so $8/3$. Dividing by $n$ ($8/5$) or by $p$ ($4$) is the common slip.",
"zh": "$\\lVert\\hat\\varepsilon\\rVert^2=8$，自由度 $n-p=3$，$\\hat\\sigma^2=8/3$。"
},
{
"id": "L04-017",
"lec": "L04",
"type": "calc",
"level": 3,
"q": "$p=4$ features, $n=3$ samples, $\\operatorname{rank}X=3$. The set of $w$ with $X^Tw=y$ exactly is:",
"choices": [
"a single point",
"empty: no exact fit exists",
"a three-dimensional family",
"a one-parameter family (a line in $\\mathbb R^4$)"
],
"answer": 3,
"why": "$X^T$ is $3\\times4$ of rank 3, so $X^Tw=y$ is solvable for every $y$; solutions = one particular solution + the 1-D null space of $X^T$. $XX^T$ ($4\\times4$) is singular.",
"zh": "$X^T$ 是 $3\\times4$、秩3：可精确拟合，解集=特解+1维零空间，$XX^T$ 奇异。"
},
{
"id": "L04-018",
"lec": "L04",
"type": "calc",
"level": 2,
"q": "Fit $y=w_0+w_1x+w_2x^2$ at $x=-1,0,2$. Which is the design matrix $X$ (rows = features, columns = samples)?",
"choices": [
"rows $(1,-1,1)$, $(1,0,0)$, $(1,2,4)$",
"rows $(1,1,1)$, $(-1,0,2)$, $(-1,0,8)$",
"rows $(1,1,1)$, $(-1,0,2)$, $(1,0,2)$",
"rows $(1,1,1)$, $(-1,0,2)$, $(1,0,4)$"
],
"answer": 3,
"why": "Row 1 is the intercept (ones), row 2 is $x$, row 3 is $x^2=(1,0,4)$. The first wrong choice is $X^T$ (samples as rows), the others use $x^3$ or forget to square.",
"zh": "$X$ 行=特征 $(1,x,x^2)$，列=样本；样本做行是转置 $X^T$。"
},
{
"id": "L04-019",
"lec": "L04",
"type": "calc",
"level": 3,
"q": "$p=3$ features, $n=20$ samples, full-rank $X$. What is $\\operatorname{tr}H$ for $H=X^T(XX^T)^{-1}X$?",
"choices": [
"$20$",
"$3$",
"$17$",
"$60$"
],
"answer": 1,
"why": "Cyclic trace: $\\operatorname{tr}(X^T(XX^T)^{-1}X)=\\operatorname{tr}((XX^T)^{-1}XX^T)=\\operatorname{tr}I_p=3$. $H$ projects onto a 3-D subspace: eigenvalue 1 three times, 0 seventeen times.",
"zh": "迹的循环性：$\\mathrm{tr}H=\\mathrm{tr}(I_p)=p=3$；投影矩阵的迹=子空间维数。"
},
{
"id": "L04-020",
"lec": "L04",
"type": "calc",
"level": 3,
"q": "OLS with intercept and slope is fitted at $x=0,1,2$. Which vector can be the residual vector $\\hat\\varepsilon$?",
"choices": [
"$(1,-1,0)$",
"$(1,-2,1)$",
"$(1,1,1)$",
"$(2,-1,-1)$"
],
"answer": 1,
"why": "Residuals must satisfy $X\\hat\\varepsilon=0$: $\\sum\\hat\\varepsilon_i=0$ and $\\sum x_i\\hat\\varepsilon_i=0$. Only $(1,-2,1)$ passes both: $0-2+2=0$. $(1,-1,0)$ has sum 0 but $x$-dot $-1$.",
"zh": "合法残差须满足 $X\\hat\\varepsilon=0$：和为0且与 $x$ 正交，只有 $(1,-2,1)$。"
},
{
"id": "L04-021",
"lec": "L04",
"type": "pic",
"level": 1,
"q": "Geometrically, $\\hat y=X^T\\hat w\\in\\mathbb R^n$ is the orthogonal projection of $y$ onto:",
"choices": [
"the span of the $n$ sample columns in $\\mathbb R^p$",
"the line through the origin along $\\hat w$",
"the span of the $p$ feature rows (the column space of $X^T$)",
"the null space of $X$"
],
"answer": 2,
"why": "Fitted values are combinations of the feature rows evaluated at the data, a $p$-dimensional subspace of $\\mathbb R^n$. The residual lies in the null space of $X$, orthogonal to it.",
"zh": "$\\hat y$ 是 $y$ 在特征行张成的 $p$ 维子空间（$X^T$ 的列空间）上的正交投影；残差在 $X$ 的零空间。"
},
{
"id": "L04-022",
"lec": "L04",
"type": "pic",
"level": 2,
"q": "Two data sets share the same inputs $X$ but have different responses $y$. How do their SSQ contour ellipses in $w$-space compare?",
"choices": [
"Different shapes, since $y$ enters the Hessian",
"Same centre, but different eccentricity",
"Same centre, but rotated",
"Same shape and orientation; only the centre $\\hat w$ moves"
],
"answer": 3,
"why": "$\\text{SSQ}(w)=\\text{SSQ}(\\hat w)+(w-\\hat w)^TXX^T(w-\\hat w)$: the quadratic form is set by $XX^T$ alone; $y$ only shifts the minimum and its height.",
"zh": "$\\mathrm{SSQ}=\\mathrm{SSQ}(\\hat w)+(w-\\hat w)^TXX^T(w-\\hat w)$：等高线形状只由 $XX^T$ 决定，$y$ 只平移。"
},
{
"id": "L04-023",
"lec": "L04",
"type": "pic",
"level": 2,
"q": "The SSQ contours in the $(w_1,w_2)$-plane are extremely elongated along one direction. For the OLS estimate this means:",
"choices": [
"$XX^T$ has one tiny eigenvalue: $w$ is poorly determined (large variance) along the valley",
"the fit is bad: all residuals are large",
"$XX^T$ has one huge eigenvalue: $w$ is very uncertain along that axis",
"the noise is much larger in one of the samples"
],
"answer": 0,
"why": "Curvature along a direction is an eigenvalue of $2XX^T$. A flat valley means a small eigenvalue, hence $\\sigma^2(XX^T)^{-1}$ has a large eigenvalue there. Residual size is unrelated to the shape.",
"zh": "窄长山谷=$XX^T$ 有小特征值 $\\Rightarrow$ $\\mathrm{Cov}=\\sigma^2(XX^T)^{-1}$ 沿谷方向方差很大。"
},
{
"id": "L04-024",
"lec": "L04",
"type": "pic",
"level": 3,
"q": "Two features are nearly identical, $x_2\\approx x_1$ for every sample. The error ellipse of $\\hat w$ is long along:",
"choices": [
"$(1,-1)$: the data fix $w_1+w_2$ but not $w_1-w_2$",
"$(1,1)$: the data fix $w_1-w_2$ but not $w_1+w_2$",
"the $w_1$-axis only",
"no direction: it is a circle"
],
"answer": 0,
"why": "$w_1x_1+w_2x_2\\approx(w_1+w_2)x_1$, so only $w_1+w_2$ matters. Moving along $(1,-1)$ barely changes predictions: a flat SSQ valley and huge variance there.",
"zh": "共线特征：只有w1+w2被数据约束，沿(1,-1)方向山谷平坦、方差巨大。"
},
{
"id": "L04-025",
"lec": "L04",
"type": "pic",
"level": 2,
"q": "A degree-9 polynomial ($p=10$) is fitted to $n=10$ noisy points with distinct $x$. The result:",
"choices": [
"The curve passes through every point, with wiggles in between; training SSQ is 0",
"A smooth curve close to the data with small non-zero SSQ",
"No solution: $XX^T$ is singular for $p=n$",
"A straight line, because the noise dominates"
],
"answer": 0,
"why": "With $p=n$ and distinct $x$ the $10\\times10$ matrix $XX^T$ is invertible and $X^Tw=y$ is solved exactly, so SSQ $=0$: the noise is fitted (training error always falls with more features). Singularity needs $p>n$.",
"zh": "$p=n$ 且 $x$ 互异时 $XX^T$ 可逆，曲线精确穿过所有点（拟合噪声）。"
},
{
"id": "L04-026",
"lec": "L04",
"type": "pic",
"level": 2,
"q": "Data $y\\approx a+b\\,(x_1^2+x_2^2)$ on a grid centred at the origin are fitted with a plane $w_0+w_1x_1+w_2x_2$. The residuals over the $(x_1,x_2)$ plane look like:",
"choices": [
"Structureless random scatter",
"A linear gradient across the plane",
"A systematic radial pattern: sign set by the distance from the centre",
"Zero everywhere"
],
"answer": 2,
"why": "The plane cannot follow $r^2$, so the residual is $\\approx b(r^2-\\overline{r^2})$: a ring pattern. Residual plots reveal missing model structure (here the features $x_1^2,x_2^2$).",
"zh": "残差图出现径向结构 $\\Rightarrow$ 缺少 $x_1^2,x_2^2$ 特征；残差图能暴露模型缺陷。"
},
{
"id": "L04-027",
"lec": "L04",
"type": "pic",
"level": 1,
"q": "A straight line fitted to prime-ministers' tenures versus start date predicts $-200$ days for a future PM. The right conclusion:",
"choices": [
"The noise estimate $\\hat\\sigma^2$ must be wrong",
"OLS is biased for time-ordered data",
"A fit is only trustworthy within the data range: this is unsupported extrapolation",
"Adding more polynomial terms will fix the prediction"
],
"answer": 2,
"why": "Least squares only describes the data where it was measured; outside that range (and if the model form is wrong) predictions can be absurd, e.g. negative durations.",
"zh": "拟合只在数据范围内可信；外推没有数据支撑。"
},
{
"id": "L04-028",
"lec": "L04",
"type": "pic",
"level": 2,
"q": "OLS minimizes the sum of squared lengths of segments from each data point to the fitted line. These segments are:",
"choices": [
"perpendicular to the line (total least squares)",
"horizontal (parallel to the $x$-axis)",
"directed from each point to the centroid",
"vertical (parallel to the $y$-axis): errors are assumed only in $y$"
],
"answer": 3,
"why": "The OLS residual is $y_i-w^Tx_i$ at fixed $x_i$. Perpendicular distances give orthogonal (total) least squares, whose line is the PCA line.",
"zh": "OLS最小化竖直距离(只有 $y$ 有误差)；垂直距离是TLS=PCA直线。"
},
{
"id": "L04-029",
"lec": "L04",
"type": "pic",
"level": 3,
"q": "One wild outlier is added far above the trend at the largest $x$ of a data cloud. The OLS line:",
"choices": [
"tilts towards the outlier, and can be dragged arbitrarily far (breakdown point 0)",
"stays almost unchanged when $n$ is large, for any outlier position",
"moves by at most a bounded amount, set by $\\sigma^2$",
"ignores it, because the residual is orthogonal to the features"
],
"answer": 0,
"why": "Squared loss grows quadratically with the outlier's distance, as for the mean, so one point can move the fit arbitrarily.",
"zh": "平方损失对离群点敏感：单个离群点可任意拉动OLS直线（崩溃点0）。"
},
{
"id": "L04-030",
"lec": "L04",
"type": "pic",
"level": 3,
"q": "CT with more pixels than rays ($p>n$). Which image $v$ can be added to a perfect reconstruction without changing any measurement?",
"choices": [
"The minimum-norm solution $\\hat w$ itself",
"Any $v$ with $X^Tv=0$: every ray's weighted path sum over $v$ is zero",
"Any non-negative image",
"Any image with very small pixel values"
],
"answer": 1,
"why": "Measurements are $X^Tw$, so adding $v$ with $X^Tv=0$ keeps them unchanged: $X^T$ ($n\\times p$, $p>n$) has a non-trivial null space, hence infinitely many exact solutions.",
"zh": "$p>n$：加上满足 $X^Tv=0$ 的任意图像，测量不变，故解不唯一，需正则化。"
},
{
"id": "L05-001",
"lec": "L05",
"type": "term",
"level": 1,
"q": "Which objective is **ridge (Tikhonov) regression**?",
"choices": [
"$\\lVert y-X^Tw\\rVert^2+\\lambda\\lVert w\\rVert_1$",
"$\\lVert y-X^Tw\\rVert^2+\\lambda\\lVert w\\rVert_2^2$",
"$\\lVert y-X^Tw\\rVert^2+\\lambda\\lVert w\\rVert_2$",
"$\\lVert y-X^Tw\\rVert^2+\\lambda\\lVert X^Tw\\rVert^2$"
],
"answer": 1,
"why": "Ridge adds the *squared* $\\ell_2$ norm of the weights. With $\\lVert w\\rVert_1$ it is the lasso; the unsquared $\\ell_2$ norm is not differentiable at 0 and is not ridge.",
"zh": "岭回归=平方误差+$\\lambda\\lVert w\\rVert_2^2$（$w$ 的平方范数）；$\\ell_1$ 是lasso。"
},
{
"id": "L05-002",
"lec": "L05",
"type": "term",
"level": 1,
"q": "Setting the gradient of the ridge objective to zero gives which linear system (with $X\\in\\mathbb R^{p\\times n}$)?",
"choices": [
"$(X^TX+\\lambda I)\\hat w=X^Ty$",
"$(XX^T+\\lambda I)\\hat w=Xy$",
"$(XX^T-\\lambda I)\\hat w=Xy$",
"$(XX^T+\\lambda I)\\hat w=y$"
],
"answer": 1,
"why": "Gradient: $-2X(y-X^Tw)+2\\lambda w=0\\Rightarrow(XX^T+\\lambda I)w=Xy$. The identity is $p\\times p$, matching $XX^T$; the last choice has mismatched shapes.",
"zh": "岭回归法方程 $(XX^T+\\lambda I)\\hat w=Xy$；$\\lambda I$ 与 $XX^T$ 同为 $p\\times p$。"
},
{
"id": "L05-003",
"lec": "L05",
"type": "term",
"level": 1,
"q": "Which is $\\nabla_w\\bigl(\\lVert y-X^Tw\\rVert^2+\\lambda\\lVert w\\rVert_2^2\\bigr)$?",
"choices": [
"$-2X(y-X^Tw)+\\lambda w$",
"$-2X(y-X^Tw)+2\\lambda\\operatorname{sgn}(w)$",
"$-2X(y-X^Tw)-2\\lambda w$",
"$-2X(y-X^Tw)+2\\lambda w$"
],
"answer": 3,
"why": "$\\nabla_w\\lVert w\\rVert^2=2w$, so the penalty gives $2\\lambda w$. $\\lambda\\operatorname{sgn}(w)$-type terms belong to the lasso (subgradient of $\\lVert w\\rVert_1$).",
"zh": "$\\nabla\\lVert w\\rVert^2=2w$，故惩罚项梯度为 $2\\lambda w$；$\\mathrm{sgn}(w)$ 是lasso的次梯度。"
},
{
"id": "L05-004",
"lec": "L05",
"type": "term",
"level": 2,
"q": "$X\\in\\mathbb R^{p\\times n}$ and $X^T=U\\Sigma V^T$. In which spaces do the singular vectors $v_k$ and $u_k$ live?",
"choices": [
"$v_k\\in\\mathbb R^p$ (weight space), $u_k\\in\\mathbb R^n$ (sample space)",
"$v_k\\in\\mathbb R^n$, $u_k\\in\\mathbb R^p$",
"both in $\\mathbb R^p$",
"both in $\\mathbb R^n$"
],
"answer": 0,
"why": "$X^T$ is $n\\times p$, so $U$ has $n$-dimensional columns and $V$ has $p$-dimensional columns. $\\hat w\\propto v_k$ lives in weight space; $u_k^Ty$ projects the data $y\\in\\mathbb R^n$.",
"zh": "$X^T=U\\Sigma V^T$ 是 $n\\times p$：$u_k\\in\\mathbb R^n$（样本空间），$v_k\\in\\mathbb R^p$（权重空间）。"
},
{
"id": "L05-005",
"lec": "L05",
"type": "term",
"level": 2,
"q": "For $X^T=U\\Sigma V^T$ with singular values $\\sigma_k$, the ridge filter factor of direction $k$ is:",
"choices": [
"$\\sigma_k/(\\sigma_k+\\lambda)$",
"$\\lambda/(\\sigma_k^2+\\lambda)$",
"$\\sigma_k^2/(\\sigma_k^2+\\lambda)$",
"$1/(1+\\lambda\\sigma_k^2)$"
],
"answer": 2,
"why": "Ridge solves $(V\\Sigma^2V^T+\\lambda I)w=V\\Sigma U^Ty$, which multiplies the OLS coefficient $u_k^Ty/\\sigma_k$ by $\\sigma_k^2/(\\sigma_k^2+\\lambda)$. It is near 1 for large $\\sigma_k$ and near 0 for small.",
"zh": "岭滤波因子$=\\sigma_k^2/(\\sigma_k^2+\\lambda)$：大 $\\sigma$ 保留，小 $\\sigma$ 压制。"
},
{
"id": "L05-006",
"lec": "L05",
"type": "term",
"level": 3,
"q": "Which expression is the minimum-norm least-squares solution, summed over $\\sigma_k>0$ for $X^T=U\\Sigma V^T$?",
"choices": [
"$\\sum_k\\sigma_k\\,(u_k^Ty)\\,v_k$",
"$\\sum_k\\dfrac{v_k^Ty}{\\sigma_k}\\,u_k$",
"$\\sum_k\\dfrac{u_k^Ty}{\\sigma_k^2}\\,v_k$",
"$\\sum_k\\dfrac{u_k^Ty}{\\sigma_k}\\,v_k$"
],
"answer": 3,
"why": "Project $y\\in\\mathbb R^n$ on $u_k$, divide by $\\sigma_k$, place along $v_k\\in\\mathbb R^p$. Dividing by $\\sigma_k$ (not $\\sigma_k^2$) follows from $X^Tw=y$; $v_k^Ty$ is not even shape-consistent.",
"zh": "最小范数解：$\\sum(u_k^Ty/\\sigma_k)v_k$；小 $\\sigma_k$ 放大噪声，$\\sigma_k=0$ 的方向系数为0。"
},
{
"id": "L05-007",
"lec": "L05",
"type": "term",
"level": 1,
"q": "Penalty $\\leftrightarrow$ prior: the lasso is the MAP estimate under which prior on the weights?",
"choices": [
"independent Gaussian priors, $p(w_j)\\propto e^{-w_j^2/2\\tau^2}$",
"a flat (uniform) prior",
"independent Cauchy priors, $p(w_j)\\propto1/(1+w_j^2)$",
"independent Laplace priors, $p(w_j)\\propto e^{-|w_j|/b}$"
],
"answer": 3,
"why": "$-\\log p(w)=\\sum|w_j|/b$ gives the $\\ell_1$ penalty. A Gaussian prior gives ridge. Note: for ridge the MAP is also the posterior mean; for the lasso it is not.",
"zh": "Laplace先验 $\\Rightarrow$ lasso($\\ell_1$)；高斯先验 $\\Rightarrow$ 岭；lasso的MAP$\\ne$后验均值。"
},
{
"id": "L05-008",
"lec": "L05",
"type": "term",
"level": 2,
"q": "Orthonormal design $XX^T=I$ and lasso objective $\\lVert y-X^Tw\\rVert^2+\\lambda\\lVert w\\rVert_1$. The solution in terms of the OLS estimate is:",
"choices": [
"$\\hat w_j=\\hat w_j^{\\rm OLS}/(1+\\lambda)$",
"$\\hat w_j=\\operatorname{sgn}(\\hat w_j^{\\rm OLS})\\max(|\\hat w_j^{\\rm OLS}|-\\lambda,0)$",
"$\\hat w_j=\\operatorname{sgn}(\\hat w_j^{\\rm OLS})\\max(|\\hat w_j^{\\rm OLS}|-\\lambda/2,0)$",
"$\\hat w_j=\\hat w_j^{\\rm OLS}\\max(1-\\lambda/2,0)$"
],
"answer": 2,
"why": "Subgradient condition $0\\in-2(\\hat w^{\\rm OLS}_j-w_j)+\\lambda\\,\\partial|w_j|$ gives soft thresholding at $\\lambda/2$. The $1/(1+\\lambda)$ rule is ridge; a threshold of $\\lambda$ misses the factor 2.",
"zh": "正交设计：lasso=软阈值，阈值 $\\lambda/2$；岭是除以 $(1+\\lambda)$ 的整体缩放。"
},
{
"id": "L05-009",
"lec": "L05",
"type": "term",
"level": 2,
"q": "Before fitting ridge or lasso with an intercept, the notes recommend:",
"choices": [
"penalize all weights including the intercept; features need no scaling",
"standardize $y$ only; penalties are scale invariant",
"choose $\\lambda$ on the test set for the best score",
"standardize the features and do not penalize the intercept"
],
"answer": 3,
"why": "The penalty is not scale invariant: a feature in tiny units needs a large weight and is punished unfairly. Penalizing the intercept would bias the mean level; choosing $\\lambda$ on test data leaks.",
"zh": "先标准化特征、不惩罚截距；用测试集选 $\\lambda$ 是数据泄漏。"
},
{
"id": "L05-010",
"lec": "L05",
"type": "term",
"level": 1,
"q": "Total variation $\\mathrm{TV}=\\sum|w_k-w_{k'}|$ over neighbouring pixels is the lasso penalty applied to:",
"choices": [
"the differences between neighbouring pixel values",
"the pixel values themselves",
"the singular values of $X$",
"the measured sinogram $y$"
],
"answer": 0,
"why": "$\\ell_1$ on differences makes many differences exactly 0, so the image is piecewise constant, with edges preserved. $\\ell_1$ on $w_k$ itself would favour few non-zero pixels.",
"zh": "TV=对相邻像素差做 $\\ell_1$：偏好分片常数且保边。"
},
{
"id": "L05-011",
"lec": "L05",
"type": "calc",
"level": 2,
"q": "One feature, no intercept, $\\sum x_i^2=S=4$, $\\sum x_iy_i=T=6$. The ridge estimate $T/(S+\\lambda)$ with $\\lambda=2$ is:",
"choices": [
"$1.5$",
"$1.25$",
"$1.0$",
"$0.75$"
],
"answer": 2,
"why": "$\\hat w=6/(4+2)=1$. $1.5=T/S$ is OLS, $1.25$ is the lasso value, and $0.75$ would come from using $2\\lambda$.",
"zh": "岭: $T/(S+\\lambda)=6/6=1.0$；1.5是OLS，1.25是lasso。"
},
{
"id": "L05-012",
"lec": "L05",
"type": "calc",
"level": 3,
"q": "Same data ($S=4$, $T=6$), lasso $\\hat w=\\max(T-\\lambda/2,0)/S$. For which $\\lambda$ is $\\hat w=0$?",
"choices": [
"$\\lambda\\ge6$",
"$\\lambda\\ge12$",
"$\\lambda\\ge24$",
"for no finite $\\lambda$ (only as $\\lambda\\to\\infty$)"
],
"answer": 1,
"why": "$\\hat w=0$ needs $T-\\lambda/2\\le0$, i.e. $\\lambda\\ge2T=12$. Unlike ridge ($T/(S+\\lambda)>0$ always), the lasso reaches zero at a finite $\\lambda$.",
"zh": "lasso: $T-\\lambda/2\\le0$ 即 $\\lambda\\ge12$ 时恰好为0；岭只能趋近于0。"
},
{
"id": "L05-013",
"lec": "L05",
"type": "calc",
"level": 2,
"q": "Orthonormal design, OLS coefficients $(3,-0.5,1)$, lasso with $\\lambda=2$ (soft threshold $\\lambda/2=1$). The lasso estimate is:",
"choices": [
"$(2,\\;0,\\;0)$",
"$(1,\\;0,\\;0)$",
"$(1,\\;-\\tfrac16,\\;\\tfrac13)$",
"$(2,\\;-0.5,\\;0)$"
],
"answer": 0,
"why": "Shrink each $|\\hat w^{\\rm OLS}_j|$ by 1 and clip at 0: $3\\to2$, $-0.5\\to0$, $1\\to0$. The third choice is ridge ($\\div3$); $(1,0,0)$ uses threshold $\\lambda=2$.",
"zh": "软阈值：每个|w|减1并截断于0 ⇒(2,0,0)。"
},
{
"id": "L05-014",
"lec": "L05",
"type": "calc",
"level": 1,
"q": "Ridge filter factor $\\sigma_k^2/(\\sigma_k^2+\\lambda)$ for $\\sigma_k=3$ and $\\lambda=1$:",
"choices": [
"$0.9$",
"$0.75$",
"$0.1$",
"$0.25$"
],
"answer": 0,
"why": "$9/(9+1)=0.9$. $0.75=\\sigma/(\\sigma+\\lambda)$ forgets the square; $0.1=\\lambda/(\\sigma^2+\\lambda)$ is the damping, not the factor kept.",
"zh": "滤波因子 $9/(9+1)=0.9$：保留的比例，不是被压掉的0.1。"
},
{
"id": "L05-015",
"lec": "L05",
"type": "calc",
"level": 2,
"q": "Gaussian likelihood noise $\\sigma=1$ and prior $w\\sim\\mathcal N(0,\\tau^2I)$ with $\\tau=0.5$. The MAP estimate is ridge with $\\lambda=$",
"choices": [
"$2$",
"$4$",
"$1/4$",
"$1/2$"
],
"answer": 1,
"why": "$\\lambda=\\sigma^2/\\tau^2=1/0.25=4$. Using $\\sigma/\\tau=2$ or the inverse ratio $\\tau^2/\\sigma^2=\\tfrac14$ are the usual slips.",
"zh": "$\\lambda=\\sigma^2/\\tau^2=1/0.25=4$（噪声方差/先验方差）。"
},
{
"id": "L05-016",
"lec": "L05",
"type": "calc",
"level": 2,
"q": "Gaussian noise with $\\sigma^2=3$ and independent Laplace priors $p(w_j)\\propto e^{-|w_j|/b}$ with $b=2$. The MAP estimate is the lasso with $\\lambda=2\\sigma^2/b=$",
"choices": [
"$1.5$",
"$12$",
"$3$",
"$0.75$"
],
"answer": 2,
"why": "$\\lambda=2\\sigma^2/b=2\\cdot3/2=3$ (the 2 comes from $\\frac1{2\\sigma^2}\\lVert\\cdot\\rVert^2$ vs. $\\lVert w\\rVert_1/b$). $1.5=\\sigma^2/b$ drops the 2; $12=2\\sigma^2b$ inverts $b$.",
"zh": "$\\lambda_{\\text{lasso}}=2\\sigma^2/b=3$：$b$ 大=先验宽=惩罚小。"
},
{
"id": "L05-017",
"lec": "L05",
"type": "calc",
"level": 2,
"q": "CT image of $64\\times64=4096$ pixels from 768 rays ($X\\in\\mathbb R^{4096\\times768}$). At least how many independent image directions leave all measurements unchanged?",
"choices": [
"$4096-768=3328$",
"$768$",
"$4096$",
"$4096+768=4864$"
],
"answer": 0,
"why": "$X^T$ is $768\\times4096$ with rank $\\le768$, so its null space has dimension $\\ge4096-768=3328$. Adding any such image keeps $X^Tw$ the same.",
"zh": "$X^T$ 为 $768\\times4096$，零空间维数 $\\ge4096-768=3328$。"
},
{
"id": "L05-018",
"lec": "L05",
"type": "calc",
"level": 3,
"q": "Two pixels, two rays; $X=\\begin{pmatrix}1&1\\\\0&0\\end{pmatrix}$ (pixel 2 is never hit), $y=(1,3)^T$, ridge $\\lambda=2$. The ridge solution $\\hat w$ is:",
"choices": [
"$(2,\\;0)$",
"$(1,\\;0)$",
"$(1,\\;1)$",
"$(0,\\;1)$"
],
"answer": 1,
"why": "$XX^T=\\operatorname{diag}(2,0)$, $Xy=(4,0)^T$; $(XX^T+2I)\\hat w=Xy$ gives $\\hat w_1=4/4=1$, $\\hat w_2=0$ for every $\\lambda>0$. $(2,0)$ is the $\\lambda\\to0$ minimum-norm solution.",
"zh": "没被测到的像素在岭解中恒为0；$\\hat w_1=4/(2+2)=1$，$\\lambda\\to0$ 才得2。"
},
{
"id": "L05-019",
"lec": "L05",
"type": "calc",
"level": 2,
"q": "One feature with $S=\\sum x_i^2=4$, noise $\\sigma^2=1$, ridge $\\lambda=2$. The posterior variance $\\sigma^2/(S+\\lambda)$ of $w$ is:",
"choices": [
"$1/4$",
"$1/6$",
"$1/2$",
"$1/8$"
],
"answer": 1,
"why": "The ridge posterior covariance is $\\sigma^2(XX^T+\\lambda I)^{-1}$, here $1/(4+2)=1/6$. The OLS variance would be $\\sigma^2/S=1/4$: ridge is more certain (the prior adds information).",
"zh": "岭后验协方差 $\\sigma^2(XX^T+\\lambda I)^{-1}=1/6$，比OLS的 $1/4$ 更小。"
},
{
"id": "L05-020",
"lec": "L05",
"type": "calc",
"level": 3,
"q": "A direction has $\\sigma_k=0.01$ and noise $\\delta=0.01$ in $u_k^Ty$. OLS error along $v_k$ is $\\delta/\\sigma_k=1$. For ridge with $\\lambda=1$ the error is about:",
"choices": [
"$1$",
"$10^{-2}$",
"$10^{-6}$",
"$10^{-4}$"
],
"answer": 3,
"why": "Ridge coefficient is $\\frac{\\sigma_k}{\\sigma_k^2+\\lambda}u_k^Ty$, so error $\\approx0.01\\cdot0.01/1.0001\\approx10^{-4}$. The filter factor $\\sigma_k^2/(\\sigma_k^2+\\lambda)\\approx10^{-4}$ damps the amplified noise.",
"zh": "岭误差$=\\sigma_k\\delta/(\\sigma_k^2+\\lambda)\\approx10^{-4}$：滤波因子压制被 $1/\\sigma_k$ 放大的噪声。"
},
{
"id": "L05-021",
"lec": "L05",
"type": "pic",
"level": 1,
"q": "Elliptical SSQ contours grow from the OLS point until they first touch the constraint ball $\\lVert w\\rVert\\le t$. Why does the $\\ell_1$ ball give sparse solutions?",
"choices": [
"Its flat faces are tangent to the contours, so one weight is always 0",
"Its corners lie on the axes, so contact typically happens at a corner where some $w_j=0$",
"It is round, so contact always happens on an axis",
"It is smaller than the $\\ell_2$ ball, so weights shrink to 0"
],
"answer": 1,
"why": "The $\\ell_1$ ball is a diamond with corners on the axes; the expanding ellipse most likely hits a corner. The round $\\ell_2$ ball has no special points, so contact is generic and no weight is exactly 0.",
"zh": "$\\ell_1$ 球的尖角在坐标轴上，椭圆等高线通常先碰到尖角 $\\Rightarrow$ 某些 $w_j=0$。"
},
{
"id": "L05-022",
"lec": "L05",
"type": "pic",
"level": 1,
"q": "Coefficient paths $\\hat w_j(\\lambda)$ are plotted for increasing $\\lambda$. What do ridge and lasso paths look like?",
"choices": [
"Ridge: hit 0 one by one. Lasso: smooth, never exactly 0",
"Ridge: smooth, never exactly 0. Lasso: hit exactly 0 one by one at finite $\\lambda$",
"Both hit 0 simultaneously at the same finite $\\lambda$",
"Both stay constant until a critical $\\lambda$"
],
"answer": 1,
"why": "Lasso gives automatic feature selection (sparsity), ridge only shrinks all coefficients. As $\\lambda\\to\\infty$ both go to 0; ridge only asymptotically.",
"zh": "岭路径平滑趋近0，lasso路径在有限 $\\lambda$ 处依次精确归零。"
},
{
"id": "L05-023",
"lec": "L05",
"type": "pic",
"level": 2,
"q": "The elastic net penalty is $\\alpha\\lVert w\\rVert_1+(1-\\alpha)\\lVert w\\rVert_2^2$. Its unit ball in the $(w_1,w_2)$ plane looks like:",
"choices": [
"a diamond with bulging, rounded edges but still with corners on the axes",
"a perfect circle",
"a perfect diamond with straight edges",
"a square with corners on the diagonals"
],
"answer": 0,
"why": "The $\\ell_2$ part rounds the edges, while the corners on the axes remain (sparsity like lasso). Round edges keep correlated features together, as in ridge. The square is the $\\ell_\\infty$ ball.",
"zh": "弹性网球：边鼓起、轴上仍有尖角⇒既稀疏又让相关特征一起保留。"
},
{
"id": "L05-024",
"lec": "L05",
"type": "pic",
"level": 2,
"q": "Group lasso penalty $\\sum_g\\lVert w_g\\rVert_2$ with weights split into groups $g$. What does a solution look like as $\\lambda$ increases?",
"choices": [
"Single weights become zero independently of their group",
"All weights shrink by the same factor",
"Whole groups $w_g$ become exactly zero together; inside a group weights are non-zero",
"Groups with large norm are set to zero first"
],
"answer": 2,
"why": "The unsquared $\\ell_2$ norm has a corner at $w_g=0$ (like $|w|$), so a whole group switches off at once; within a group it behaves like ridge. Sparsity comes from the singular points of the ball.",
"zh": "组lasso：整组系数同时归零，组内不稀疏。"
},
{
"id": "L05-025",
"lec": "L05",
"type": "pic",
"level": 2,
"q": "Plotting the filter factor against $\\sigma_k^2$, how do PCR and ridge differ?",
"choices": [
"PCR: a smooth S-curve. Ridge: a hard step",
"Both are steps, at different cut positions",
"Ridge is constant 1; PCR decays like $1/\\sigma_k^2$",
"PCR: a step (1, then 0). Ridge: a smooth S-curve, $1/2$ at $\\sigma_k^2=\\lambda$"
],
"answer": 3,
"why": "PCR keeps the top $m$ components fully (factor 1) and drops the rest (0); ridge down-weights softly. At $\\sigma_k^2=\\lambda$ the ridge factor is exactly $\\tfrac12$.",
"zh": "PCR=硬截断(阶跃)，岭=软滤波(光滑曲线)，$\\sigma_k^2=\\lambda$ 处为 $1/2$。"
},
{
"id": "L05-026",
"lec": "L05",
"type": "pic",
"level": 3,
"q": "Why does the minimum-norm CT reconstruction ($p>n$) show streak artefacts?",
"choices": [
"$\\lambda$ was chosen too large, oversmoothing the image",
"The TV penalty forces piecewise-constant regions",
"Directions unseen by the rays ($\\sigma_k=0$) are set to 0: only ray-path patterns remain",
"The detector noise is Poisson rather than Gaussian"
],
"answer": 2,
"why": "The min-norm solution is built only from $v_k$ with $\\sigma_k>0$, i.e. from combinations of ray paths, so it has streaks along the measured directions. TV regularization suppresses this.",
"zh": "最小范数解只含射线路径方向的分量($\\sigma_k>0$)，故沿射线出现条纹。"
},
{
"id": "L05-027",
"lec": "L05",
"type": "pic",
"level": 1,
"q": "Minimizing the total variation of an image gives reconstructions that look:",
"choices": [
"smooth and blurred, with edges rounded off",
"mostly black with a few isolated bright pixels",
"piecewise constant, with sharp edges preserved",
"noisy with random speckles"
],
"answer": 2,
"why": "TV is the lasso on neighbouring differences: many differences become exactly 0 (flat regions) while big jumps (edges) are cheap. Relative errors in the lecture: min-norm 0.29, ridge 0.27, TV 0.18.",
"zh": "TV最小化⇒分片常数、保边；比最小范数/岭误差更小。"
},
{
"id": "L05-028",
"lec": "L05",
"type": "pic",
"level": 3,
"q": "CT ridge scan: $\\lambda=10^{-6}\\to10^{-2}$ leaves the data MSE nearly constant ($5.5\\to5.7\\cdot10^{-3}$) while the image RMSE falls from 1.3 to 0.09. The lesson:",
"choices": [
"The smallest $\\lambda$ is best because its residual is smallest",
"The image error depends only on the noise, not on $\\lambda$",
"The data MSE rose, which proves the image at $\\lambda=10^{-2}$ is worse",
"The residual is blind to null-space parts: a small residual does not mean a good image"
],
"answer": 3,
"why": "At tiny $\\lambda$ the fit absorbs noise in poorly constrained directions without changing the residual. The best image had about four times the smallest residual. Never pick $\\lambda$ by training residual alone.",
"zh": "残差看不见零空间分量：残差小$\\ne$图像好，$\\lambda$ 不能只看训练残差。"
},
{
"id": "L05-029",
"lec": "L05",
"type": "pic",
"level": 1,
"q": "Which prior density $p(w_j)$ looks like the one behind the lasso?",
"choices": [
"sharply peaked at 0 with a cusp and exponential tails (Laplace)",
"a smooth bell curve with Gaussian tails (Gaussian)",
"a flat line over a wide range",
"two peaks symmetric around 0"
],
"answer": 0,
"why": "$-\\log p=|w_j|/b$ is the $\\ell_1$ penalty, a V-shape with a cusp at 0. A Gaussian prior ($w_j^2/2\\tau^2$, a parabola) gives ridge. The cusp is what sets coefficients exactly to 0.",
"zh": "Laplace先验在0处尖峰（$-\\log=|w|/b$，V形）$\\Rightarrow$ lasso；高斯先验 $\\Rightarrow$ 岭。"
},
{
"id": "L05-030",
"lec": "L05",
"type": "pic",
"level": 3,
"q": "Ridge as MAP with prior $\\mathcal N(0,\\tau^2I)$. The detector noise doubles ($\\sigma\\to2\\sigma$), $\\tau$ fixed. How does the ridge solution change?",
"choices": [
"$\\lambda=\\sigma^2/\\tau^2$ becomes 4 times larger: the solution is pulled further towards 0",
"$\\lambda$ becomes 2 times larger: the solution is pulled further towards 0",
"$\\lambda$ becomes 4 times smaller: the solution moves towards OLS",
"nothing changes, since $\\sigma$ drops out of the MAP estimate"
],
"answer": 0,
"why": "$\\lambda=\\sigma^2/\\tau^2$ scales with $\\sigma^2$, so doubling $\\sigma$ multiplies $\\lambda$ by 4: less trust in the data, more in the prior, so stronger shrinkage.",
"zh": "$\\sigma$ 翻倍 $\\Rightarrow$ $\\lambda=\\sigma^2/\\tau^2$ 变4倍：更不信数据，解向0收缩更多。"
},
{
"id": "L06-001",
"lec": "L06",
"type": "term",
"level": 1,
"q": "Which formula is Bayes' theorem for the posterior probability of class $k$ given $x$?",
"choices": [
"$p(k\\mid x)=\\dfrac{p(x\\mid k)\\,p(k)}{p(x)}$",
"$p(k\\mid x)=\\dfrac{p(x\\mid k)}{p(k)\\,p(x)}$",
"$p(k\\mid x)=\\dfrac{p(k)\\,p(x)}{p(x\\mid k)}$",
"$p(k\\mid x)=\\dfrac{p(x\\mid k)\\,p(x)}{p(k)}$"
],
"answer": 0,
"why": "Posterior = likelihood $\\times$ prior / evidence, with $p(x)=\\sum_{k'}p(x\\mid k')p(k')$ the same for all classes. So comparing posteriors means comparing $p(x\\mid k)p(k)$.",
"zh": "后验=似然$\\times$先验/证据；比较类后验只需比较 $p(x|k)p(k)$。"
},
{
"id": "L06-002",
"lec": "L06",
"type": "term",
"level": 1,
"q": "Loss $L(k,j)$ is incurred when the truth is $k$ and we decide $j$. The conditional risk of deciding $j$ at $x$ is:",
"choices": [
"$R(j\\mid x)=\\sum_k L(j,k)\\,p(k\\mid x)$",
"$R(j\\mid x)=\\sum_k L(k,j)\\,p(x\\mid k)$",
"$R(j\\mid x)=\\sum_k L(k,j)\\,p(k)$",
"$R(j\\mid x)=\\sum_k L(k,j)\\,p(k\\mid x)$"
],
"answer": 3,
"why": "Average the loss of deciding $j$ over the *posterior* of the true class $k$ at this $x$. Using the likelihood or the prior instead of $p(k\\mid x)$ ignores either the prior or the data.",
"zh": "条件风险=对真实类别的后验加权平均损失：$R(j|x)=\\sum_kL(k,j)p(k|x)$。"
},
{
"id": "L06-003",
"lec": "L06",
"type": "term",
"level": 1,
"q": "Under 0-1 loss the Bayes rule is:",
"choices": [
"$\\hat k(x)=\\arg\\max_k\\,p(x\\mid k)$",
"$\\hat k(x)=\\arg\\max_k\\,p(k)$",
"$\\hat k(x)=\\arg\\min_k\\,p(k\\mid x)$",
"$\\hat k(x)=\\arg\\max_k\\,p(k\\mid x)$"
],
"answer": 3,
"why": "$R(j\\mid x)=1-p(j\\mid x)$, so minimizing risk means maximizing the posterior (MAP class). $\\arg\\max p(x\\mid k)$ is maximum likelihood and ignores the priors.",
"zh": "0-1损失：$R=1-p(j|x)$，Bayes规则=取最大后验类；只比似然会忽略先验。"
},
{
"id": "L06-004",
"lec": "L06",
"type": "term",
"level": 2,
"q": "Retaining background costs $c_{\\rm FP}$, discarding signal costs $c_{\\rm FN}$; $q=p(S\\mid x)$. The Bayes rule retains the event iff:",
"choices": [
"$q>\\dfrac{c_{\\rm FN}}{c_{\\rm FP}+c_{\\rm FN}}$",
"$q>\\dfrac{c_{\\rm FP}}{c_{\\rm FN}}$",
"$q>\\dfrac{c_{\\rm FP}}{c_{\\rm FP}+c_{\\rm FN}}$",
"$q>\\tfrac12$"
],
"answer": 2,
"why": "Retain risk $c_{\\rm FP}(1-q)$ < discard risk $c_{\\rm FN}q$ gives the threshold. Costly missed signal (large $c_{\\rm FN}$) lowers the threshold; $q>\\tfrac12$ is the symmetric 0-1 case.",
"zh": "留下的条件 $q>c_{FP}/(c_{FP}+c_{FN})$：漏信号越贵阈值越低。"
},
{
"id": "L06-005",
"lec": "L06",
"type": "term",
"level": 2,
"q": "QDA discriminant: $\\delta_k(x)=-\\tfrac12Q_k-\\tfrac12\\log|\\Sigma_k|+\\log p(k)$. What is $Q_k$?",
"choices": [
"$(x-\\mu_k)^T\\Sigma_k(x-\\mu_k)$",
"$(x-\\mu_k)^T\\Sigma_k^{-1}(x-\\mu_k)$",
"$(x-\\mu_k)(x-\\mu_k)^T\\Sigma_k^{-1}$",
"$\\lVert x-\\mu_k\\rVert^2$"
],
"answer": 1,
"why": "$Q_k$ is the squared Mahalanobis distance, a scalar. With $\\Sigma_k$ instead of $\\Sigma_k^{-1}$ the distance grows with the variance. The outer product $(x-\\mu)(x-\\mu)^T$ is a $p\\times p$ matrix, not a number.",
"zh": "$Q_k=(x-\\mu)^T\\Sigma^{-1}(x-\\mu)$ 是马氏距离平方（标量），用 $\\Sigma$ 而非 $\\Sigma^{-1}$ 是错的。"
},
{
"id": "L06-006",
"lec": "L06",
"type": "term",
"level": 3,
"q": "With a shared covariance $\\Sigma$, which part of $\\delta_k$ is quadratic in $x$ and identical for all classes, so QDA's curvature disappears in LDA?",
"choices": [
"$x^T\\Sigma^{-1}\\mu_k$",
"$-\\tfrac12\\,\\mu_k^T\\Sigma^{-1}\\mu_k$",
"$\\log p(k)$",
"$-\\tfrac12\\,x^T\\Sigma^{-1}x$"
],
"answer": 3,
"why": "Expanding $-\\tfrac12(x-\\mu_k)^T\\Sigma^{-1}(x-\\mu_k)$ gives $-\\tfrac12x^T\\Sigma^{-1}x+x^T\\Sigma^{-1}\\mu_k-\\tfrac12\\mu_k^T\\Sigma^{-1}\\mu_k$. Only the first term is quadratic in $x$; it is shared by all classes and cancels in comparisons.",
"zh": "展开马氏项：$-\\frac12x^T\\Sigma^{-1}x$（$x$ 的二次项）对各类相同，相减抵消 $\\Rightarrow$ LDA线性。"
},
{
"id": "L06-007",
"lec": "L06",
"type": "term",
"level": 2,
"q": "For two classes with shared covariance $\\Sigma$, the LDA decision boundary is a hyperplane with normal vector:",
"choices": [
"$\\mu_1-\\mu_2$",
"$\\Sigma(\\mu_1-\\mu_2)$",
"$\\Sigma^{-1}(\\mu_1-\\mu_2)$",
"$(\\mu_1-\\mu_2)^T\\Sigma^{-1}(\\mu_1-\\mu_2)$"
],
"answer": 2,
"why": "$\\delta_1-\\delta_2$ is linear in $x$ with slope $\\Sigma^{-1}(\\mu_1-\\mu_2)$ (Fisher's direction), a $p$-vector. $\\mu_1-\\mu_2$ is only right when $\\Sigma\\propto I$; the last choice is a scalar.",
"zh": "LDA边界法向量$=\\Sigma^{-1}(\\mu_1-\\mu_2)$（Fisher方向）；仅 $\\Sigma\\propto I$ 时才是 $\\mu_1-\\mu_2$。"
},
{
"id": "L06-008",
"lec": "L06",
"type": "term",
"level": 1,
"q": "The **Bayes risk** of a classification problem is:",
"choices": [
"the training error of the best QDA classifier",
"the smallest expected loss any classifier can reach with these features",
"the smallest expected loss within the family of LDA classifiers",
"the error of the Bayes rule using *estimated* Gaussian densities"
],
"answer": 1,
"why": "It depends only on the true distributions and features, not on a model class or finite data. Adding informative features can lower it; QDA/LDA risks lie above it when the Gaussian model is wrong.",
"zh": "Bayes风险=给定特征下任何分类器可达的最小期望损失，是问题本身的性质。"
},
{
"id": "L06-009",
"lec": "L06",
"type": "term",
"level": 2,
"q": "Two 1-D Gaussian classes, $\\mathcal N_k=\\mathcal N(x\\mid\\mu_k,\\sigma_k^2)$. The posterior is $p(2\\mid x)=1/(1+e^{-g(x)})$. Then $g(x)=$",
"choices": [
"$\\log\\dfrac{\\mathcal N_1\\,p(1)}{\\mathcal N_2\\,p(2)}$",
"$\\log\\dfrac{\\mathcal N_2\\,p(2)}{\\mathcal N_1\\,p(1)}$",
"$\\log\\dfrac{\\mathcal N_2}{\\mathcal N_1}$",
"$\\mathcal N_2\\,p(2)-\\mathcal N_1\\,p(1)$"
],
"answer": 1,
"why": "$p(2\\mid x)=\\frac{A}{A+B}=\\frac1{1+B/A}$ with $A=\\mathcal N_2p(2)$, $B=\\mathcal N_1p(1)$, so $g=\\log(A/B)$. The swapped ratio flips the sign; dropping priors ignores $p(1),p(2)$.",
"zh": "$p(2|x)=1/(1+e^{-g})$，$g$=对数后验比，含先验 $\\log[p(2)/p(1)]$。"
},
{
"id": "L06-010",
"lec": "L06",
"type": "term",
"level": 2,
"q": "Two 1-D Gaussian classes with equal variance $\\sigma^2$ and priors $p_1,p_2$. The decision threshold is:",
"choices": [
"$\\dfrac{\\mu_1+\\mu_2}2-\\dfrac{\\sigma^2}{\\mu_2-\\mu_1}\\log\\dfrac{p_1}{p_2}$",
"$\\dfrac{\\mu_1+\\mu_2}2+\\dfrac{\\sigma}{\\mu_2-\\mu_1}\\log\\dfrac{p_1}{p_2}$",
"$\\dfrac{\\sigma^2}{\\mu_2-\\mu_1}\\log\\dfrac{p_1}{p_2}$",
"$\\dfrac{\\mu_1+\\mu_2}2+\\dfrac{\\sigma^2}{\\mu_2-\\mu_1}\\log\\dfrac{p_1}{p_2}$"
],
"answer": 3,
"why": "$g(x)=0$ is linear in $x$: midpoint plus a prior shift. For $\\mu_1<\\mu_2$ and $p_1>p_2$ the threshold moves towards $\\mu_2$ (class 1's region grows). The correct power is $\\sigma^2$.",
"zh": "等方差阈值=中点$+\\sigma^2/(\\mu_2-\\mu_1)\\cdot\\log(p_1/p_2)$；先验大的类扩张。"
},
{
"id": "L06-011",
"lec": "L06",
"type": "calc",
"level": 1,
"q": "$P(S)=0.05$, $P(D\\mid S)=0.95$, $P(D\\mid B)=0.1$ (signal/background, $D$ = detector aligned). $P(S\\mid D)=$",
"choices": [
"$0.95$",
"$0.5$",
"$1/3$",
"$0.0475$"
],
"answer": 2,
"why": "$P(D)=0.95\\cdot0.05+0.1\\cdot0.95=0.0475+0.095=0.1425$, so $P(S\\mid D)=0.0475/0.1425=1/3$. $0.95$ is the likelihood, $0.0475$ is the unnormalized joint.",
"zh": "$P(S|D)=0.0475/0.1425=1/3$；0.95是似然，不是后验。"
},
{
"id": "L06-012",
"lec": "L06",
"type": "calc",
"level": 2,
"q": "Posterior $q=p(S\\mid x)=0.2$, $c_{\\rm FP}=1$, $c_{\\rm FN}=3$. What is the Bayes decision and the retain threshold?",
"choices": [
"retain; threshold $0.25$",
"retain; threshold $0.75$",
"discard; threshold $0.25$",
"discard; threshold $0.75$"
],
"answer": 2,
"why": "Threshold $c_{\\rm FP}/(c_{\\rm FP}+c_{\\rm FN})=1/4$ and $q=0.2<0.25$. Check by risk: $R({\\rm retain})=1\\cdot0.8=0.8>R({\\rm discard})=3\\cdot0.2=0.6$.",
"zh": "阈值 $1/(1+3)=0.25$，$q=0.2<0.25\\Rightarrow$ 丢弃；风险 $0.8>0.6$。"
},
{
"id": "L06-013",
"lec": "L06",
"type": "calc",
"level": 2,
"q": "$q=p(S\\mid x)=\\tfrac13$, $c_{\\rm FP}=1$, $c_{\\rm FN}=10$. The conditional risks $R({\\rm retain}\\mid x)$ and $R({\\rm discard}\\mid x)$ are:",
"choices": [
"$\\tfrac13$ and $\\tfrac{20}3$",
"$\\tfrac23$ and $\\tfrac{10}3$",
"$\\tfrac{10}3$ and $\\tfrac23$",
"$\\tfrac13$ and $\\tfrac{10}3$"
],
"answer": 1,
"why": "$R({\\rm retain})=c_{\\rm FP}(1-q)=\\tfrac23$ (background wrongly kept); $R({\\rm discard})=c_{\\rm FN}q=\\tfrac{10}3$. The smaller risk wins: retain. Mixing up $q$ and $1-q$ gives the second choice.",
"zh": "$R(\\text{留})=c_{FP}(1-q)=2/3$，$R(\\text{弃})=c_{FN}\\cdot q=10/3$：留下风险小。"
},
{
"id": "L06-014",
"lec": "L06",
"type": "calc",
"level": 3,
"q": "1-D classes $\\mathcal N(0,1)$ and $\\mathcal N(2,1)$ with priors $p(1)=0.8$, $p(2)=0.2$. The threshold $x^*$ between the decisions is about:",
"choices": [
"$0.31$",
"$1.00$",
"$1.69$",
"$2.39$"
],
"answer": 2,
"why": "$x^*=1+\\frac{1}{2}\\log4=1+0.693\\approx1.69$: the likelier class 1 gets more room. $0.31$ has the wrong sign, $1.00$ ignores priors, $2.39$ forgets the division by $\\mu_2-\\mu_1=2$.",
"zh": "$x^*=1+(1/2)\\ln4\\approx1.69$：先验大的类1向类2方向扩张。"
},
{
"id": "L06-015",
"lec": "L06",
"type": "calc",
"level": 3,
"q": "1-D classes with equal means $0$, $\\sigma_1=1$, $\\sigma_2=e^2\\approx7.4$, equal priors. Roughly where do the decision thresholds lie?",
"choices": [
"$x\\approx\\pm1$",
"$x\\approx\\pm2$",
"$x\\approx\\pm4$",
"$x=0$ only (one threshold)"
],
"answer": 1,
"why": "Equal densities: $\\frac{x^2}{2}\\bigl(1-\\sigma_2^{-2}\\bigr)=\\log\\sigma_2=2$, so $x^2\\approx4$ and $x\\approx\\pm2$. Class 1 (narrow) wins in $|x|<2$; class 2 (wide) wins in both tails.",
"zh": "令两密度相等：$\\frac{x^2}{2}\\cdot(1-\\sigma_2^{-2})=\\ln\\sigma_2=2\\Rightarrow x\\approx\\pm2$，宽类赢两侧尾部。"
},
{
"id": "L06-016",
"lec": "L06",
"type": "calc",
"level": 2,
"q": "QDA with $K=2$ classes in $p=3$ dimensions: how many parameters $K\\bigl(p+\\tfrac{p(p+1)}2\\bigr)$ in means and covariances?",
"choices": [
"$18$",
"$12$",
"$24$",
"$9$"
],
"answer": 0,
"why": "Per class: 3 mean entries + $3\\cdot4/2=6$ covariance entries (symmetric) $=9$; times 2 classes gives 18. $24=2(3+9)$ counts all 9 entries of $\\Sigma$; $12$ is LDA's $2\\cdot3+6$.",
"zh": "每类 $p+p(p+1)/2=3+6=9$，两类共18；协方差对称只数6个。"
},
{
"id": "L06-017",
"lec": "L06",
"type": "calc",
"level": 1,
"q": "$\\Sigma=\\operatorname{diag}(4,1)$, $x-\\mu=(2,2)^T$. The squared Mahalanobis distance $(x-\\mu)^T\\Sigma^{-1}(x-\\mu)$ is:",
"choices": [
"$8$",
"$20$",
"$2.5$",
"$5$"
],
"answer": 3,
"why": "$\\Sigma^{-1}=\\operatorname{diag}(\\tfrac14,1)$, so $4/4+4/1=5$. $8$ is the Euclidean distance squared, $20$ uses $\\Sigma$ instead of $\\Sigma^{-1}$, $2.5$ is the $-\\tfrac12$ factor already applied.",
"zh": "$d^2=4/4+4/1=5$；欧氏距离$^2$ $=8$，用 $\\Sigma$ 代替 $\\Sigma^{-1}$ 得20。"
},
{
"id": "L06-018",
"lec": "L06",
"type": "calc",
"level": 3,
"q": "Equal priors, shared $\\Sigma=\\operatorname{diag}(4,1)$, $\\mu_1=(0,0)$, $\\mu_2=(2,2)$, point $x=(2.2,0.5)$. LDA and nearest-means (Euclidean) assign:",
"choices": [
"LDA: class 2; nearest means: class 1",
"both: class 1",
"LDA: class 1; nearest means: class 2",
"both: class 2"
],
"answer": 2,
"why": "Euclid: $d_1^2=5.09$, $d_2^2=2.29$, so class 2. Mahalanobis: $d_1^2=4.84/4+0.25=1.46$, $d_2^2=0.04/4+2.25=2.26$, so class 1. With equal priors and shared $\\Sigma$, LDA picks the smaller Mahalanobis distance.",
"zh": "等先验共享 $\\Sigma$：LDA选马氏距离小者（类1），欧氏最近均值选类2。"
},
{
"id": "L06-019",
"lec": "L06",
"type": "calc",
"level": 2,
"q": "At a point $x$: $p(x\\mid1)=0.2$, $p(x\\mid2)=0.6$. With priors $p(1)=0.9$, $p(2)=0.1$, the posterior $p(2\\mid x)$ is:",
"choices": [
"$0.75$",
"$0.25$",
"$0.1$",
"$0.06$"
],
"answer": 1,
"why": "Joint: $0.2\\cdot0.9=0.18$ and $0.6\\cdot0.1=0.06$; normalize: $0.06/0.24=0.25$. $0.75$ ignores the priors (equal-prior answer), $0.06$ is the unnormalized joint.",
"zh": "先验改变后验：$0.06/(0.18+0.06)=0.25$；忽略先验会得0.75。"
},
{
"id": "L06-020",
"lec": "L06",
"type": "calc",
"level": 3,
"q": "$p(x\\mid1)=U[0,2]$ and $p(x\\mid2)=U[1,3]$ (uniform densities), equal priors, 0-1 loss. The Bayes risk is:",
"choices": [
"$0.25$",
"$0.5$",
"$0.125$",
"$0$"
],
"answer": 0,
"why": "Only the overlap $[1,2]$ matters; there both joints are $0.5\\cdot0.5=0.25$, so $\\int\\min\\{\\ldots\\}dx=0.25\\cdot1=0.25$. Equivalently: half the data fall in the overlap, where half are misclassified.",
"zh": "Bayes风险$=\\int\\min\\{p(x|1)p(1),p(x|2)p(2)\\}dx$，只有重叠区 $[1,2]$ 贡献：0.25。"
},
{
"id": "L06-021",
"lec": "L06",
"type": "pic",
"level": 1,
"q": "The prior $p(\\text{kaon})$ is lowered from 0.5 to 0.02, class densities unchanged. How does the decision boundary move?",
"choices": [
"Equally everywhere along the feature axis",
"Most where the classes overlap; hardly where they are well separated",
"Not at all: the boundary depends on $p(x\\mid k)$ only",
"Most in the far tails, where there are few data"
],
"answer": 1,
"why": "In log form the prior adds the constant $\\log\\frac{p(1)}{p(2)}$ to the log-likelihood ratio. Where the ratio is huge (well separated) it cannot flip the sign; near the overlap it does.",
"zh": "先验只给对数似然比加常数：重叠区边界移动最多，分得开的区域几乎不动。"
},
{
"id": "L06-022",
"lec": "L06",
"type": "pic",
"level": 2,
"q": "Two 1-D Gaussian classes share mean 0, class 1 narrow, class 2 wide, equal priors. Along the $x$-axis the Bayes decisions are:",
"choices": [
"class 1 in a window around 0, class 2 on both outer sides",
"class 1 for $x<0$, class 2 for $x>0$",
"class 2 in a window around 0, class 1 on both outer sides",
"class 1 everywhere, since it has the higher peak"
],
"answer": 0,
"why": "$\\sigma_1\\neq\\sigma_2$ makes $g(x)$ quadratic: two thresholds. The narrow class has the higher density near its mean, but the wide class has heavier tails and wins in both.",
"zh": "方差不等⇒g为二次函数、两个阈值：窄类赢中心，宽类赢两侧。"
},
{
"id": "L06-023",
"lec": "L06",
"type": "pic",
"level": 3,
"q": "A QDA fit has one extreme class-2 outlier at $+\\infty$ in the training set. Along $x$, where does class 2 win?",
"choices": [
"Everywhere outside a window around $\\hat\\mu_1$, including far left of $\\hat\\mu_1$",
"Only to the right of $\\hat\\mu_1$, where the outlier is",
"Only far to the right, near the outlier",
"Nowhere: one point cannot change $\\hat\\sigma_2$"
],
"answer": 0,
"why": "The outlier inflates $\\hat\\sigma_2$ (breakdown point 0), so the class-2 density becomes flat and exceeds class 1's tails on both sides, even where there is no class-2 data.",
"zh": "离群点使 $\\hat\\sigma_2$ 暴增、类2密度变平，窗口外两侧都判类2。"
},
{
"id": "L06-024",
"lec": "L06",
"type": "pic",
"level": 2,
"q": "Three features: each single histogram and each pair of scatter plots shows total overlap of both classes. What follows?",
"choices": [
"The classes cannot be separated by any classifier",
"Only a quadratic boundary can separate them",
"Nothing: they may still be perfectly separable by a linear combination of all three",
"Bayes risk must be at least the overlap area"
],
"answer": 2,
"why": "Overlap in every projection is not overlap in 3-D: a tilted plane can still separate the classes. Marginal histograms alone are not enough, so use multivariate methods.",
"zh": "所有投影重叠≠不可分：三维中仍可能被一个倾斜平面完美分开。"
},
{
"id": "L06-025",
"lec": "L06",
"type": "pic",
"level": 3,
"q": "Two classes with shared elongated covariance $\\Sigma=\\operatorname{diag}(4,1)$ (long axis along $x$), means differing by $(2,2)$, equal priors. The LDA boundary compared with the perpendicular bisector:",
"choices": [
"passes through the same midpoint, but is rotated to run more parallel to the long axis",
"coincides with the perpendicular bisector",
"passes through the same midpoint, rotated towards the short axis",
"is a curve bending around class 1"
],
"answer": 0,
"why": "Normal $\\Sigma^{-1}\\Delta\\mu=(0.5,2)$ points more along the short ($y$) axis than $\\Delta\\mu=(2,2)$; the boundary line is perpendicular to it, hence more along $x$. The midpoint is kept (equal priors).",
"zh": "法向 $\\Sigma^{-1}\\Delta\\mu=(0.5,2)$ 偏向短轴，故边界线更平行于长轴，仍过中点。"
},
{
"id": "L06-026",
"lec": "L06",
"type": "pic",
"level": 1,
"q": "Class 1: $\\Sigma_1=I$, class 2: $\\Sigma_2=4I$, same mean, equal priors, 2-D. The QDA boundary looks like:",
"choices": [
"a straight line through the common mean",
"two parallel lines",
"a hyperbola",
"a circle around the common mean"
],
"answer": 3,
"why": "$\\delta_1=\\delta_2$ is quadratic: $-\\tfrac12\\lVert x\\rVert^2-0=-\\tfrac18\\lVert x\\rVert^2-\\log 4$ gives $\\lVert x\\rVert=$ const, a circle. Class 1 wins inside, class 2 outside. A line needs equal covariances.",
"zh": "协方差不同 $\\Rightarrow$ 二次边界；同均值、$\\Sigma\\propto I$ 时是以均值为心的圆。"
},
{
"id": "L06-027",
"lec": "L06",
"type": "pic",
"level": 2,
"q": "Gaussian classes in 20-D where QDA is the correct model; training size $n$ small. Which classifier has the smallest true error, and why?",
"choices": [
"QDA, because it is the correct model",
"Nearest means: fewest parameters, so lowest variance",
"LDA, because it models the covariances exactly",
"All have equal error since the data are Gaussian"
],
"answer": 1,
"why": "For small $n$ variance dominates: nearest means < LDA < QDA in error. For large $n$ (crossing near 800) QDA wins because bias dominates. The simpler model wins when data are scarce.",
"zh": "n小时方差占主导：最近均值<LDA<QDA；n大时QDA才赢。"
},
{
"id": "L06-028",
"lec": "L06",
"type": "pic",
"level": 1,
"q": "Pions/kaons: with $n=2000$ the Bayes risk is 0.032 but QDA reaches 0.058. Why does QDA stay above the Bayes risk even for infinite data?",
"choices": [
"Too few training samples: pure variance",
"The Bayes risk uses a different loss function",
"The priors were estimated wrongly",
"The $dE/dx$ bands are skewed and curved, not Gaussian: model bias"
],
"answer": 3,
"why": "With infinite data the variance vanishes, but QDA still assumes Gaussian class densities. The gap to the Bayes risk is then bias from a wrong model (LDA, with 0.080, adds more bias).",
"zh": "QDA高于Bayes风险是模型偏差：dE/dx分布非高斯。"
},
{
"id": "L06-029",
"lec": "L06",
"type": "pic",
"level": 2,
"q": "In a signal-vs-background cut, $c_{\\rm FN}$ is raised from 1 to 10 ($c_{\\rm FP}=1$). The accepted region along the feature axis:",
"choices": [
"grows, as the threshold on $q$ drops from $\\tfrac12$ to $\\tfrac1{11}$",
"shrinks, since missing signal is costlier",
"stays the same: costs do not change $p(S\\mid x)$",
"grows, as the threshold on $q$ rises to $\\tfrac{10}{11}$"
],
"answer": 0,
"why": "The posterior $q(x)$ is unchanged, but retain-iff $q>c_{\\rm FP}/(c_{\\rm FP}+c_{\\rm FN})$ moves from $\\tfrac12$ to $\\tfrac1{11}$: we accept more events, including more background, to avoid losing signal.",
"zh": "漏信号更贵⇒阈值从1/2降到1/11，接受区扩大（多收背景）。"
},
{
"id": "L06-030",
"lec": "L06",
"type": "pic",
"level": 2,
"q": "A third 'outlier' class with a flat (uniform) density and tiny prior is added to two Gaussian classes. Where does it win?",
"choices": [
"Far in the tails, where both Gaussians fall below the small flat density",
"Between the two class means",
"Near the class means, where the posterior is largest",
"Nowhere: its prior is too small to win anywhere"
],
"answer": 0,
"why": "Gaussians decay super-exponentially, but the uniform density stays constant, so far out it wins and the track is rejected as fitting neither class. Far-tail decisions otherwise depend on the assumed tail shape.",
"zh": "加入平坦的离群类：远离两类的尾部处它的密度更大⇒拒识。"
},
{
"id": "L07-001",
"lec": "L07",
"type": "term",
"level": 1,
"q": "Root node $S$ with $n=|S|$ points is split into children $S_L,S_R$ (sizes $n_L,n_R$). Write $H=H(S)$, $H_{L,R}=H(S_{L,R})$. Which expression is the CART impurity decrease $G(s)$?",
"choices": [
"$H-H_L-H_R$",
"$H-\\tfrac12(H_L+H_R)$",
"$H-\\tfrac{n_L}{n}H_L-\\tfrac{n_R}{n}H_R$",
"$\\tfrac{n_L}{n}H_L+\\tfrac{n_R}{n}H_R-H$"
],
"answer": 2,
"why": "Children are weighted by their share of points, and the weighted child impurity is subtracted from the parent's. B is only right for equal-size children; D has the wrong sign (it would be negative).",
"zh": "不纯度下降 = 父节点不纯度 − 按样本比例加权的子节点不纯度。"
},
{
"id": "L07-002",
"lec": "L07",
"type": "term",
"level": 1,
"q": "A node has class fractions $p_k$. Which expression is its **Gini impurity**?",
"choices": [
"$1-\\max_k p_k$",
"$-\\sum_k p_k\\log p_k$",
"$\\sum_k p_k^2$",
"$\\sum_k p_k(1-p_k)$"
],
"answer": 3,
"why": "$\\sum_kp_k(1-p_k)=1-\\sum_kp_k^2$. A is the misclassification impurity, B the entropy, and C equals 1 for a pure node, so it is 1 minus the Gini impurity.",
"zh": "Gini不纯度 $=\\sum p_k(1-p_k)=1-\\sum p_k^2$；纯节点为0。"
},
{
"id": "L07-003",
"lec": "L07",
"type": "term",
"level": 2,
"q": "For a **regression** tree, which pair gives the node impurity used to choose splits and the value a leaf predicts?",
"choices": [
"variance of $y$ in the node; mean of $y$ in the leaf",
"variance of $y$ in the node; majority label in the leaf",
"$1-\\max_kp_k$ in the node; mean of $y$ in the leaf",
"entropy of $y$ in the node; median of $y$ in the leaf"
],
"answer": 0,
"why": "In the course table the regression impurity is the variance of $y$ (a split reduces the sum of squares) and a leaf predicts the mean response. Majority vote belongs to classification.",
"zh": "回归树：不纯度=节点内 $y$ 的方差，叶子输出均值；多数票只用于分类。"
},
{
"id": "L07-004",
"lec": "L07",
"type": "term",
"level": 2,
"q": "What are the three terms, in order, of $\\mathbb E[(y-\\hat f(x_0))^2]=\\sigma^2+(\\mathbb E_D\\hat f(x_0)-f(x_0))^2+\\operatorname{Var}_D\\hat f(x_0)$?",
"choices": [
"variance, bias$^2$, noise",
"irreducible noise, bias$^2$, variance over training sets $D$",
"irreducible noise, variance, bias$^2$",
"bias$^2$, noise, variance of the data"
],
"answer": 1,
"why": "$\\sigma^2$ comes from $\\varepsilon$ and cannot be removed. The squared gap between the average prediction $\\mathbb E_D\\hat f$ and the truth is the bias$^2$; the spread of $\\hat f$ across training sets is the variance.",
"zh": "噪声 $\\sigma^2$ + 偏差$^2$(平均预测与真值之差) + 方差(随训练集 $D$ 的波动)。"
},
{
"id": "L07-005",
"lec": "L07",
"type": "term",
"level": 3,
"q": "$B$ estimators, each with variance $\\sigma^2$ and pairwise correlation $\\rho$, are averaged: $\\operatorname{Var}=\\rho\\sigma^2+\\frac{1-\\rho}{B}\\sigma^2$. What happens for $B\\to\\infty$?",
"choices": [
"variance $\\to\\rho\\sigma^2$; only smaller $\\rho$ lowers it further",
"variance $\\to0$ for every $\\rho$",
"variance $\\to(1-\\rho)\\sigma^2$",
"bias $\\to\\rho\\sigma^2$, variance unchanged"
],
"answer": 0,
"why": "The second term decays like $1/B$, the first does not, so $\\rho\\sigma^2$ is a floor. Bagging leaves the bias unchanged; random feature subsets reduce $\\rho$ and hence the floor.",
"zh": "袋装方差下限是 $\\rho\\sigma^2$，所以随机森林要降低树间相关 $\\rho$，而不只是加树。"
},
{
"id": "L07-006",
"lec": "L07",
"type": "term",
"level": 1,
"q": "A bootstrap sample draws $n$ points with replacement. For large $n$, the probability $(1-1/n)^n$ that a given point is **out-of-bag** tends to",
"choices": [
"$1-e^{-1}\\approx0.632$",
"$1/2$",
"$e^{-2}\\approx0.135$",
"$e^{-1}\\approx0.368$"
],
"answer": 3,
"why": "Each draw misses the point with probability $1-1/n$, and the $n$ draws are independent, so the limit is $e^{-1}$. The value 0.632 is the fraction of *distinct* points present in the sample.",
"zh": "OOB概率 $\\to1/e\\approx0.368$；样本中不同点占 63.2%。"
},
{
"id": "L07-007",
"lec": "L07",
"type": "term",
"level": 1,
"q": "Which sentence defines the $K$-fold cross-validation estimate of a procedure's error?",
"choices": [
"train once on all data, then average the loss over the $K$ folds",
"for each fold $k$: train on the other $K-1$ folds, test on fold $k$; average",
"for each fold $k$: train on fold $k$ only, test on the other $K-1$ folds; average",
"average the *training* errors of $K$ models fit on random subsets"
],
"answer": 1,
"why": "Every point is validated once by a model that never saw it. C swaps training and validation roles; A and D use training error, which is 0 for 1-NN or a full tree.",
"zh": "K折交叉验证：每折留作验证、其余 $K-1$ 折训练，再取平均；$K=n$ 是留一法。"
},
{
"id": "L07-008",
"lec": "L07",
"type": "term",
"level": 2,
"q": "Pick the correct definitions of **Gini importance** of feature $j$ and **permutation importance** of feature $j$.",
"choices": [
"Gini: number of splits on $j$; perm.: training-error drop if $j$ is removed",
"Gini: correlation of $j$ with $y$; perm.: p-value of a t-test on $j$",
"Gini: $\\sum$ impurity decrease of $j$-splits; perm.: OOB error rise if $j$ shuffled",
"Gini: decrease at the root split only; perm.: training-error rise if $j$ shuffled"
],
"answer": 2,
"why": "Gini importance sums the impurity decrease of all splits on $j$ over all trees. Permutation importance shuffles column $j$ and measures how much the out-of-bag error grows.",
"zh": "Gini重要性=特征 $j$ 所有分裂的不纯度下降之和；置换重要性=打乱 $j$ 后OOB误差的增量。"
},
{
"id": "L07-009",
"lec": "L07",
"type": "term",
"level": 3,
"q": "Gini importance can mislead. Which statement is right?",
"choices": [
"biased to features with many split points; cross-check with permutation importance",
"biased to binary features; cross-check by rescaling the features",
"blind to interactions, so use per-channel t-tests instead",
"needs standardized features, otherwise large-scale features win"
],
"answer": 0,
"why": "A feature with many candidate thresholds has more chances of a lucky impurity decrease. Trees are invariant to monotone rescaling (D wrong), and forests do capture interactions (C wrong).",
"zh": "Gini重要性偏向可分割点多的特征；用置换重要性交叉检验。"
},
{
"id": "L07-010",
"lec": "L07",
"type": "term",
"level": 1,
"q": "In $k$-NN, $k$ plays the role of the KDE bandwidth $h$ from L03. Which description is right?",
"choices": [
"small $k\\sim$ large $h$: smooth boundary, high bias",
"small $k\\sim$ small $h$: low bias, high variance",
"small $k\\sim$ small $h$: high bias, low variance",
"large $k\\sim$ small $h$: low bias, high variance"
],
"answer": 1,
"why": "Few neighbours means a narrow window: the estimate follows individual noisy points (high variance, low bias). Large $k$ averages over a wide region: smoother, more bias.",
"zh": "$k$ 对应带宽 $h$：$k$ 小=低偏差高方差，$k$ 大=更平滑、偏差更大。"
},
{
"id": "L07-011",
"lec": "L07",
"type": "calc",
"level": 1,
"q": "A node holds 3 orange and 1 blue point. Its Gini impurity is",
"choices": [
"$0.25$",
"$0.375$",
"$0.1875$",
"$0.625$"
],
"answer": 1,
"why": "$p=(0.75,0.25)$, so $1-0.5625-0.0625=0.375$. The value 0.25 is the misclassification impurity $1-\\max p$; 0.625 is $\\sum p_k^2$.",
"zh": "$p=(3/4,1/4)$：Gini$=1-9/16-1/16=0.375$。"
},
{
"id": "L07-012",
"lec": "L07",
"type": "calc",
"level": 2,
"q": "Root: 8 orange, 2 blue ($n=10$). Split: left 6 orange/0 blue, right 2 orange/2 blue. What is the Gini impurity decrease $G(s)$?",
"choices": [
"$0.07$",
"$0.20$",
"$1.2$",
"$0.12$"
],
"answer": 3,
"why": "$H=1-0.64-0.04=0.32$, $H_L=0$, $H_R=0.5$, so $G=(3.2-0-2)/10=0.12$. B is only the weighted child impurity, A averages children unweighted, C forgets the $1/n$.",
"zh": "$G=(10\\cdot0.32-6\\cdot0-4\\cdot0.5)/10=0.12$，注意按子节点大小加权并除以 $n$。"
},
{
"id": "L07-013",
"lec": "L07",
"type": "calc",
"level": 3,
"q": "Same split as before (root 8 orange/2 blue; left 6/0; right 2/2). With **misclassification** impurity $1-\\max_kp_k$, the gain $G(s)$ is",
"choices": [
"$0$",
"$0.1$",
"$0.2$",
"$0.12$"
],
"answer": 0,
"why": "Parent 0.2, $H_L=0$, $H_R=0.5$: $G=(10\\cdot0.2-0-4\\cdot0.5)/10=0$. The number of errors (2) is unchanged, while Gini (0.12) rewards the purer left child. 0.12 is the Gini value.",
"zh": "误分类不纯度下降为0（出错数不变）；Gini因严格凹而仍给正增益。"
},
{
"id": "L07-014",
"lec": "L07",
"type": "calc",
"level": 2,
"q": "A node has class fractions $(\\tfrac12,\\tfrac14,\\tfrac14)$. Its entropy $-\\sum_kp_k\\log_2p_k$, in bits, is",
"choices": [
"$0.625$",
"$1.0$",
"$1.5$",
"$1.585$"
],
"answer": 2,
"why": "$\\tfrac12\\cdot1+\\tfrac14\\cdot2+\\tfrac14\\cdot2=1.5$. The value 0.625 is the Gini impurity of this node; 1.585 $=\\log_23$ would be the uniform three-class value.",
"zh": "熵 $=\\frac12\\cdot1+\\frac14\\cdot2+\\frac14\\cdot2=1.5$ bit；0.625是Gini。"
},
{
"id": "L07-015",
"lec": "L07",
"type": "calc",
"level": 2,
"q": "Trees with $\\sigma^2=4$ and pairwise correlation $\\rho=0.5$ are averaged with $B=4$. $\\operatorname{Var}=\\rho\\sigma^2+\\frac{1-\\rho}{B}\\sigma^2$ equals",
"choices": [
"$1.0$",
"$2.5$",
"$2.0$",
"$4.0$"
],
"answer": 1,
"why": "$0.5\\cdot4+0.5\\cdot4/4=2+0.5=2.5$. The value 1.0 would be $\\sigma^2/B$ (independent trees), 2.0 is the $B\\to\\infty$ floor, 4.0 means no gain at all.",
"zh": "方差$=\\rho\\sigma^2+(1-\\rho)\\sigma^2/B=2+0.5=2.5$；独立假设给1.0是错的。"
},
{
"id": "L07-016",
"lec": "L07",
"type": "calc",
"level": 2,
"q": "A forest has $B=500$ trees. For large $n$, for about how many of them is a given training point out-of-bag (and so votes in its OOB prediction)?",
"choices": [
"$\\approx184$",
"$\\approx316$",
"$250$",
"$\\approx68$"
],
"answer": 0,
"why": "Each tree omits the point with probability $e^{-1}\\approx0.368$, so $500\\cdot0.368\\approx184$. The value 316 counts trees that *did* see the point. These 184 trees give a validation-like prediction.",
"zh": "每棵树以 $1/e$ 概率不含该点：$500\\times0.368\\approx184$ 棵可用于该点的OOB预测。"
},
{
"id": "L07-017",
"lec": "L07",
"type": "calc",
"level": 2,
"q": "A bootstrap of size $n=3$ is drawn from 3 points. The exact probability $(1-1/n)^n$ that a given point is never drawn is",
"choices": [
"$1/3\\approx0.333$",
"$2/3\\approx0.667$",
"$8/27\\approx0.296$",
"$1/e\\approx0.368$"
],
"answer": 2,
"why": "$(2/3)^3=8/27$. The value 1/3 is one draw's chance of hitting the point, 2/3 one draw's chance of missing it, and $1/e$ is the $n\\to\\infty$ limit, not the exact value at $n=3$.",
"zh": "$n=3$：$(1-1/3)^3=8/27\\approx0.296$；$1/e$ 只是 $n\\to\\infty$ 极限。"
},
{
"id": "L07-018",
"lec": "L07",
"type": "calc",
"level": 1,
"q": "Choose $k\\in\\{1,3,5,11,21,51,101\\}$ of $k$-NN by 5-fold CV. How many held-out error values are computed, and which $k$ would a choice by *training* error always pick?",
"choices": [
"7; $k=101$",
"35; $k=101$",
"5; $k=1$",
"35; $k=1$"
],
"answer": 3,
"why": "5 folds times 7 values of $k$ give 35 validation errors. The training error of 1-NN is 0, so selecting on training error always picks $k=1$.",
"zh": "5折$\\times$7个 $k$ $=35$ 个验证误差；训练误差永远选 $k=1$。"
},
{
"id": "L07-019",
"lec": "L07",
"type": "calc",
"level": 3,
"q": "A binary tree with 7 internal nodes and a width-2 decision DAG of depth 4 (also 7 internal nodes). Maximum number of regions/cells?",
"choices": [
"tree 7, DAG 16",
"tree 8, DAG 8",
"tree 8, DAG 16",
"tree 14, DAG 8"
],
"answer": 2,
"why": "A tree with $k$ internal nodes has $k+1=8$ leaves, so at most 8 regions. In a DAG the cells are the root-to-leaf paths: width 2, depth $d=4$ gives $2^d=16$ paths with $2d-1=7$ nodes.",
"zh": "树：$k$ 个内部节点 $\\to$ $k+1$ 个区域；宽度2深度4的DAG：$2^4=16$ 条路径。"
},
{
"id": "L07-020",
"lec": "L07",
"type": "calc",
"level": 2,
"q": "Regression node with $n=4$ and $y=(1,1,5,5)$ is split into $\\{1,1\\}$ and $\\{5,5\\}$ using the variance impurity. The decrease $G(s)$ is",
"choices": [
"$4$",
"$16$",
"$2$",
"$0$"
],
"answer": 0,
"why": "Mean 3, variance $(4+4+4+4)/4=4$; both children have variance 0. $G=(4\\cdot4-0-0)/4=4$. The value 16 is the sum of squares, i.e. forgetting the division by $n$.",
"zh": "父节点方差=4，子节点方差=0；$G=(4\\cdot4)/4=4$。"
},
{
"id": "L07-021",
"lec": "L07",
"type": "pic",
"level": 1,
"q": "A 1-NN classifier is trained on pion/kaon data. What do its decision regions and its training error look like?",
"choices": [
"smooth boundary, training error equal to the Bayes risk",
"one straight line, training error about 0.5",
"axis-parallel boxes, training error 0.048",
"speckled islands around single training points, training error 0"
],
"answer": 3,
"why": "Every training point is its own nearest neighbour, so training error is 0 and the boundary follows single noisy points. Asymptotically the 1-NN error is still at most twice the Bayes risk (Cover-Hart).",
"zh": "1-NN：训练误差为0，边界在单个样本周围形成孤岛；渐近误差 $\\le2\\times$贝叶斯风险。"
},
{
"id": "L07-022",
"lec": "L07",
"type": "pic",
"level": 2,
"q": "A detector feature (energy, in eV) is rescaled to keV, all other features unchanged. What happens to a $k$-NN classifier and to a CART tree?",
"choices": [
"both are unchanged",
"$k$-NN neighbours change; the tree gives the same partition",
"the tree changes; $k$-NN is unchanged",
"both change, so one must always standardize"
],
"answer": 1,
"why": "Euclidean distances are dominated by large-scale features, so rescaling changes the neighbours. A split $x_j\\le s$ looks at one feature at a time; monotone rescaling only moves the threshold.",
"zh": "kNN依赖距离、需要标度化；树只比较单个特征，对单调变换不变。"
},
{
"id": "L07-023",
"lec": "L07",
"type": "pic",
"level": 2,
"q": "Two classes are separated by the diagonal $x_1=x_2$. A fully grown CART tree fitted to many points gives a boundary that looks like",
"choices": [
"a straight diagonal line",
"a smooth curve",
"a staircase of axis-parallel steps with many leaves",
"one vertical cut with two leaves"
],
"answer": 2,
"why": "Splits $x_j\\le s$ only produce axis-parallel cuts, so a diagonal needs many small boxes. Oblique splits fix this (lecture: error 0.061 versus 0.139 for axis-parallel).",
"zh": "轴平行分割拟合对角边界会呈阶梯状；斜分割(oblique)可缓解。"
},
{
"id": "L07-024",
"lec": "L07",
"type": "pic",
"level": 2,
"q": "Two classes, fraction $p$ in class 1. Plotted against $p$, which description is right?",
"choices": [
"Gini: arch $2p(1-p)$, max 0.5; misclassification: tent $\\min(p,1-p)$, max 0.5",
"Gini: tent; misclassification: smooth arch",
"both are convex bowls with a minimum at $p=\\tfrac12$",
"Gini peaks at 1 for $p=\\tfrac12$; misclassification is linear"
],
"answer": 0,
"why": "Gini is strictly concave and misclassification is piecewise linear with a kink at $p=\\tfrac12$. Strict concavity is why Gini rewards purer children even when error counts tie.",
"zh": "二分类：Gini是严格凹的抛物线(峰值0.5)，误分类是折线“帐篷”。"
},
{
"id": "L07-025",
"lec": "L07",
"type": "pic",
"level": 2,
"q": "Fit $y=\\cos2\\pi x+\\varepsilon$ on many independent training sets. The bundle of curves from a **fully grown** regression tree looks like",
"choices": [
"a tight bundle of smooth parabolas, off from the cosine",
"wiggly curves hugging noisy points, widely scattered, centred on the cosine",
"exactly the cosine every time",
"constant lines at the mean of $y$"
],
"answer": 1,
"why": "Lecture numbers: full tree bias$^2$ 0.0005 and variance 0.10, versus parabola bias$^2$ 0.04 and variance 0.02. A is the parabola picture (high bias, low variance).",
"zh": "全长树：低偏差、高方差——曲线贴着噪声点，随训练集剧烈摆动。"
},
{
"id": "L07-026",
"lec": "L07",
"type": "pic",
"level": 3,
"q": "Plot the variance of a tree ensemble against the number of trees $B$. Lowering $m_\\text{try}$ (features tried per split) mainly does what?",
"choices": [
"steepens the $1/B$ decay, same plateau",
"removes the plateau: variance $\\to0$ for any $B$",
"lowers the bias to zero",
"lowers the plateau $\\rho\\sigma^2$ by decorrelating the trees"
],
"answer": 3,
"why": "Random feature subsets make the trees differ, so $\\rho$ falls and the floor $\\rho\\sigma^2$ drops. The $1/B$ term is untouched, and the bias stays that of a deep tree.",
"zh": "减小 $m_{\\mathrm{try}}$ 使树间相关 $\\rho$ 下降，方差平台 $\\rho\\sigma^2$ 随之降低。"
},
{
"id": "L07-027",
"lec": "L07",
"type": "pic",
"level": 3,
"q": "Two NMR channels $a,b$ are each useless alone (equal class means), but jointly decide the class (XOR-like). Per-channel t-tests versus forest Gini importance?",
"choices": [
"both methods flag $a$ and $b$",
"t-tests flag both; the forest flags neither",
"t-tests flag neither; the forest ranks both high",
"neither method flags them, since the marginals are equal"
],
"answer": 2,
"why": "A t-test looks at one channel at a time and sees no difference. A tree splits on $a$ and then on $b$ inside each half, giving large impurity decreases for both: forests capture interactions.",
"zh": "单变量t检验看不到交互作用；森林先分a再分b，两者都得高重要性。"
},
{
"id": "L07-028",
"lec": "L07",
"type": "pic",
"level": 2,
"q": "LIGO glitches from one storm are strongly correlated. Replacing random 5-fold CV by folds grouped by week changes the CV error how, and why?",
"choices": [
"it rises: random folds put siblings in training and validation (too optimistic)",
"it falls: grouped folds give more training data",
"unchanged: CV error does not depend on how folds are assigned",
"it rises: grouping removes the standardization leak"
],
"answer": 0,
"why": "With random folds a near-copy of each validation glitch sits in the training folds, so the error looks too small. Grouping by week removes this leak and gives the honest (higher) estimate.",
"zh": "相关样本被随机分到训练与验证折里=泄漏；按周分组后误差升高、更真实。"
},
{
"id": "L07-029",
"lec": "L07",
"type": "pic",
"level": 2,
"q": "Which pipeline leaks test information into training?",
"choices": [
"standardize with $\\mu_j,\\sigma_j$ of the training folds only",
"pick the 10 features most correlated with $y$ on all data, then run CV",
"folds grouped by observing day",
"choose $k$ on a validation set, report test error once"
],
"answer": 1,
"why": "Feature selection on all data uses the labels of the held-out folds, so the CV error is biased low. Every data-dependent step must happen inside the CV loop; A, C and D do that.",
"zh": "在全部数据上先做特征选择=泄漏；所有数据相关步骤要放进CV循环内。"
},
{
"id": "L07-030",
"lec": "L07",
"type": "pic",
"level": 1,
"q": "For $k$-NN, sketch training error and 5-fold CV error versus $k$ ($k=1$ at the left). Which is right?",
"choices": [
"both fall monotonically with $k$",
"training error is U-shaped; CV error rises",
"CV error is 0 at $k=1$; training error is U-shaped",
"training error starts at 0 and rises; CV error is U-shaped"
],
"answer": 3,
"why": "At $k=1$ the training error is 0 and grows as $k$ smooths the fit, while CV error is high at small $k$ (variance) and large $k$ (bias), with a minimum between.",
"zh": "训练误差从0单调上升；CV误差呈U形，最优k在中间。"
},
{
"id": "L08-001",
"lec": "L08",
"type": "term",
"level": 1,
"q": "What does $f\\sim\\mathcal{GP}(m,k)$ mean?",
"choices": [
"each $f(x)$ is Gaussian; values at different $x$ are independent",
"any finite $x_1..x_m$: $(f(x_i))_i$ jointly Gaussian, mean $m(x_i)$, cov. $k(x_i,x_j)$",
"$f$ is a Gaussian bump with centre $m$ and width $k$",
"the noise $\\varepsilon$ is Gaussian with variance $k$"
],
"answer": 1,
"why": "A GP is a random function whose values at any finite set of inputs are jointly Gaussian; the kernel $k$ gives their covariance matrix. A would make $k$ diagonal.",
"zh": "GP=随机函数：任意有限点上的函数值联合高斯，均值 $m$、协方差 $k$。"
},
{
"id": "L08-002",
"lec": "L08",
"type": "term",
"level": 2,
"q": "$n$ training inputs in $\\mathbb R^p$, $K_{ij}=k(x_i,x_j)$, $(k_*)_i=k(x_i,x_*)$. What are the shapes in $\\mu_*=k_*^T(K+\\tau^2I)^{-1}y$?",
"choices": [
"$K$: $p\\times p$; $k_*$: $p\\times1$; $\\mu_*$: $p\\times1$",
"$K$: $n\\times n$; $k_*$: $1\\times n$; $\\mu_*$: length $n$",
"$K$: $n\\times n$; $k_*$: $n\\times1$; $\\mu_*$: $n\\times1$",
"$K$: $n\\times n$; $k_*$: $n\\times1$; $\\mu_*$: a scalar"
],
"answer": 3,
"why": "$K$ is indexed by samples ($n\\times n$, Gram-type), not by features. Then $(1\\times n)(n\\times n)(n\\times1)$ is $1\\times1$: one predicted value at the single test point $x_*$.",
"zh": "$K$ 是 $n\\times n$（按样本），$k_*$ 是 $n\\times1$；$k_*^TA^{-1}y$ 是 $1\\times1$ 标量。"
},
{
"id": "L08-003",
"lec": "L08",
"type": "term",
"level": 1,
"q": "Zero-mean GP, noisy data. With $A=K+\\tau^2I$, which pair is the posterior mean and variance at $x_*$?",
"choices": [
"$\\mu_*=k_*^TA^{-1}y$, $\\ \\sigma_*^2=k_{**}-k_*^TA^{-1}k_*$",
"$\\mu_*=k_*^TA^{-1}y$, $\\ \\sigma_*^2=k_{**}+k_*^TA^{-1}k_*$",
"$\\mu_*=k_*^TAy$, $\\ \\sigma_*^2=k_{**}-k_*^TAk_*$",
"$\\mu_*=k_*^TA^{-1}y$, $\\ \\sigma_*^2=k_{**}-y^TA^{-1}y$"
],
"answer": 0,
"why": "Conditioning a joint Gaussian subtracts the explained part $k_*^TA^{-1}k_*$ from the prior variance. B has the wrong sign, C uses $A$ instead of $A^{-1}$, D puts $y$ into a variance that cannot depend on $y$.",
"zh": "后验均值 $k_*^TA^{-1}y$；方差 $k_{**}-k_*^TA^{-1}k_*$（与 $y$ 无关）。"
},
{
"id": "L08-004",
"lec": "L08",
"type": "term",
"level": 3,
"q": "Kriging weights $\\lambda(x_*)$ satisfy $\\mu_*=\\sum_i\\lambda_iy_i$ ($A=K+\\tau^2I$). Which statement is right?",
"choices": [
"$\\lambda=K^{-1}y$, independent of $x_*$",
"$\\lambda=A^{-1}k_*$, and all weights lie in $[0,1]$",
"$\\lambda=A^{-1}k_*$; may be negative, depends on sites and kernel only",
"$\\lambda=k_*$, as for Nadaraya-Watson weights, always $\\ge0$"
],
"answer": 2,
"why": "$\\mu_*=k_*^TA^{-1}y=\\lambda^Ty$ with $\\lambda=A^{-1}k_*$. Unlike Nadaraya-Watson, weights can be negative and discount clustered, redundant sites. They never involve $y$.",
"zh": "克里金权重 $\\lambda=A^{-1}k_*$：可为负，只依赖站点位置与核，不依赖 $y$。"
},
{
"id": "L08-005",
"lec": "L08",
"type": "term",
"level": 1,
"q": "Which is the Matérn $\\nu=\\tfrac12$ (exponential, Ornstein-Uhlenbeck) kernel and how do its sample paths look? ($d=\\lVert x-x'\\rVert$)",
"choices": [
"$\\sigma^2e^{-d^2/2\\ell^2}$; infinitely smooth",
"$\\sigma^2e^{-d/\\ell}$; continuous, rough (kink) at every zoom",
"$\\sigma^2(1+\\sqrt3d/\\ell)e^{-\\sqrt3d/\\ell}$; rough at every zoom",
"$\\sigma^2e^{-d/\\ell}$; once differentiable"
],
"answer": 1,
"why": "$e^{-d/\\ell}$ has a kink at $d=0$, which means non-differentiable paths. A is the RBF ($\\nu\\to\\infty$), C is $\\nu=\\tfrac32$ (once differentiable), so D describes the wrong smoothness.",
"zh": "$\\nu=1/2$ 即指数核 $\\sigma^2e^{-d/\\ell}$：$d=0$ 处有尖点，路径处处粗糙。"
},
{
"id": "L08-006",
"lec": "L08",
"type": "term",
"level": 2,
"q": "Read the symbols in $k(d)+\\tau^2\\delta_{d,0}$ with $k(d)=\\sigma^2e^{-d/\\ell}$. Which assignment is right?",
"choices": [
"$\\sigma^2$ sill (variance), $\\ell$ range (correlation distance), $\\tau^2$ nugget",
"$\\sigma^2$ nugget, $\\ell$ sill, $\\tau^2$ range",
"$\\sigma^2$ range, $\\ell$ nugget, $\\tau^2$ sill",
"$\\sigma^2$ sill, $\\ell$ smoothness $\\nu$, $\\tau^2$ range"
],
"answer": 0,
"why": "$\\sigma^2$ is the plateau of the covariance, $\\ell$ the distance over which values stay correlated, and $\\tau^2\\delta_{d,0}$ the jump at $d=0$ (white noise, measurement error).",
"zh": "$\\sigma^2$=基台(sill)，$\\ell$=变程(range)，$\\tau^2$=块金(nugget，$d=0$ 处的跳变)。"
},
{
"id": "L08-007",
"lec": "L08",
"type": "term",
"level": 2,
"q": "In $\\log p(y\\mid\\theta)=-\\tfrac12y^TA^{-1}y-\\tfrac12\\log|A|-\\tfrac n2\\log2\\pi$ with $A=K_\\theta+\\tau^2I$, which reading is right?",
"choices": [
"first term complexity penalty, second term data fit",
"first term is the prior, second term the likelihood",
"both terms reward ever larger $\\ell$",
"first term data fit, second term complexity penalty (log-det)"
],
"answer": 3,
"why": "$y^TA^{-1}y$ measures how badly the data fit the model; $\\log|A|$ grows with the model's flexibility. Their trade-off is an automatic Occam's razor when maximizing over $\\theta$.",
"zh": "第一项=数据拟合，第二项log-det=复杂度惩罚，即自动奥卡姆剃刀。"
},
{
"id": "L08-008",
"lec": "L08",
"type": "term",
"level": 2,
"q": "Kernel ridge regression $\\hat f(x_*)=k_*^T(K+\\lambda I)^{-1}y$ equals the GP posterior mean when",
"choices": [
"$\\lambda=\\sigma^2$ (sill)",
"$\\lambda=\\ell$ (range)",
"$\\lambda=\\tau^2$ (noise variance)",
"$\\lambda=1/\\tau^2$ (noise precision)"
],
"answer": 2,
"why": "The GP mean is $k_*^T(K+\\tau^2I)^{-1}y$, the same formula with $\\lambda\\to\\tau^2$ (for $\\Sigma_p=I$ this is ridge from L05). Precision $1/\\tau^2$ is a tempting but wrong reading.",
"zh": "核岭回归的 $\\lambda$ 就是GP的噪声方差 $\\tau^2$（不是精度 $1/\\tau^2$）。"
},
{
"id": "L08-009",
"lec": "L08",
"type": "term",
"level": 1,
"q": "$z=(\\mu-f^+)/\\sigma$, $\\Phi$ is the standard normal CDF, $\\varphi$ its density. The expected improvement over the best value $f^+$ is",
"choices": [
"$(\\mu-f^+)\\Phi(z)+\\sigma\\varphi(z)$",
"$(\\mu-f^+)\\varphi(z)+\\sigma\\Phi(z)$",
"$\\mu+\\kappa\\sigma$",
"$(\\mu-f^+)/\\sigma$"
],
"answer": 0,
"why": "The first term rewards a high mean (exploitation), the second a high uncertainty (exploration). C is the upper confidence bound, D is just $z$, and B swaps $\\Phi$ and $\\varphi$.",
"zh": "$\\mathrm{EI}=(\\mu-f^+)\\Phi(z)+\\sigma\\varphi(z)$：第一项利用，第二项探索；$\\mu+\\kappa\\sigma$ 是UCB。"
},
{
"id": "L08-010",
"lec": "L08",
"type": "term",
"level": 3,
"q": "Bayesian linear regression $f(x)=\\phi(x)^Tw$, $w\\sim\\mathcal N(0,\\Sigma_p)$, features $\\phi(x)\\in\\mathbb R^p$, $\\Phi=(\\phi(x_1)\\dots\\phi(x_n))$. The implied GP kernel, and $K$?",
"choices": [
"$\\phi(x)\\Sigma_p\\phi(x')^T$; $K$ is $p\\times p$",
"$\\phi(x)^T\\Sigma_p\\phi(x')$; $K=\\Phi^T\\Sigma_p\\Phi$ is $n\\times n$",
"$\\phi(x)^T\\phi(x')$ for any $\\Sigma_p$; $K$ is $n\\times n$",
"$\\phi(x)^T\\Sigma_p^{-1}\\phi(x')$; $K$ is $n\\times n$"
],
"answer": 1,
"why": "$\\operatorname{Cov}(f(x),f(x'))=\\phi(x)^T\\mathbb E[ww^T]\\phi(x')=\\phi(x)^T\\Sigma_p\\phi(x')$. For $n$ inputs, $\\Phi^T\\Sigma_p\\Phi$ is $(n\\times p)(p\\times p)(p\\times n)=n\\times n$.",
"zh": "$k(x,x')=\\phi(x)^T\\Sigma_p\\phi(x')$；Gram矩阵 $K=\\Phi^T\\Sigma_p\\Phi$ 是 $n\\times n$。"
},
{
"id": "L08-011",
"lec": "L08",
"type": "calc",
"level": 1,
"q": "Noise-free GP, sites $x_1=0$, $x_2=d$, correlation $c=k(d)/\\sigma^2$. Predict at $x_*=0$. What are $\\lambda=K^{-1}k_*$, $\\mu_*$, $\\sigma_*^2$?",
"choices": [
"$\\lambda=(\\tfrac12,\\tfrac12)$, $\\mu_*=\\tfrac{y_1+y_2}2$, $\\sigma_*^2=\\sigma^2/2$",
"$\\lambda=(1,c)$, $\\mu_*=y_1+cy_2$, $\\sigma_*^2=\\sigma^2$",
"$\\lambda=(0,1)$, $\\mu_*=y_2$, $\\sigma_*^2=0$",
"$\\lambda=(1,0)$, $\\mu_*=y_1$, $\\sigma_*^2=0$"
],
"answer": 3,
"why": "$k_*=\\sigma^2(1,c)^T$ is the first column of $K$, so $K^{-1}k_*=(1,0)^T$. The GP interpolates: $\\mu_*=y_1$ and zero variance at a noise-free site.",
"zh": "$x_*$ 在观测点上：$k_*$ 恰为 $K$ 的第一列，$\\lambda=(1,0)$，插值且方差为0。"
},
{
"id": "L08-012",
"lec": "L08",
"type": "calc",
"level": 2,
"q": "One noise-free observation $y=3$ at $x_1$; $k(x_1,x_1)=k(x_*,x_*)=4$, $k(x_1,x_*)=2$. Posterior $(\\mu_*,\\sigma_*^2)$ at $x_*$?",
"choices": [
"$(1.5,\\ 3)$",
"$(3,\\ 3)$",
"$(1.5,\\ 2)$",
"$(6,\\ 3)$"
],
"answer": 0,
"why": "$\\mu_*=k_{12}y/k_{11}=2\\cdot3/4=1.5$ and $\\sigma_*^2=k_{22}-k_{12}^2/k_{11}=4-1=3$. D forgets to divide by $k_{11}$; C subtracts $k_{12}$ instead of $k_{12}^2/k_{11}$.",
"zh": "$\\mu=k_{12}y/k_{11}=1.5$；$\\sigma^2=k_{22}-k_{12}^2/k_{11}=3$。"
},
{
"id": "L08-013",
"lec": "L08",
"type": "calc",
"level": 2,
"q": "One observation $y=2$ with $K=1$, noise $\\tau^2=1$ and $k_*=0.5$. The posterior mean $\\mu_*=k_*^T(K+\\tau^2I)^{-1}y$ is",
"choices": [
"$1.0$",
"$2.0$",
"$0.5$",
"$0.25$"
],
"answer": 2,
"why": "$(K+\\tau^2I)=2$, so $\\mu_*=0.5\\cdot2/2=0.5$. Without the nugget one would get 1.0: with noise the prediction shrinks toward the prior mean 0 instead of interpolating.",
"zh": "$A=K+\\tau^2=2$，$\\mu=0.5\\cdot2/2=0.5$；忘记噪声项会得到1.0。"
},
{
"id": "L08-014",
"lec": "L08",
"type": "calc",
"level": 3,
"q": "$K=\\begin{pmatrix}1&0.5\\\\0.5&1\\end{pmatrix}$, noise-free, $y=(2,2)^T$, $k_*=(0.5,0.5)^T$, $k_{**}=1$. Posterior $(\\mu_*,\\sigma_*^2)$?",
"choices": [
"$(1,\\ \\tfrac12)$",
"$(\\tfrac43,\\ \\tfrac23)$",
"$(2,\\ 0)$",
"$(\\tfrac43,\\ \\tfrac13)$"
],
"answer": 1,
"why": "$K(1,1)^T=1.5(1,1)^T$, so $\\lambda=K^{-1}k_*=(\\tfrac13,\\tfrac13)$. Then $\\mu_*=\\tfrac13\\cdot2+\\tfrac13\\cdot2=\\tfrac43$ and $\\sigma_*^2=1-k_*^T\\lambda=1-\\tfrac13=\\tfrac23$. D reports $k_*^T\\lambda$.",
"zh": "$\\lambda=(1/3,1/3)$（和不为1）；$\\mu=4/3$，$\\sigma^2=1-1/3=2/3$。"
},
{
"id": "L08-015",
"lec": "L08",
"type": "calc",
"level": 3,
"q": "$K=\\begin{pmatrix}1&0.8\\\\0.8&1\\end{pmatrix}$, $k_*=(0.5,0.8)^T$, noise-free. The kriging weight $\\lambda_1$ on site 1 ($\\lambda=K^{-1}k_*$) is",
"choices": [
"$-0.39$",
"$0.50$",
"$0.14$",
"$1.11$"
],
"answer": 0,
"why": "$K^{-1}=\\frac1{0.36}\\begin{pmatrix}1&-0.8\\\\-0.8&1\\end{pmatrix}$, so $\\lambda_1=(0.5-0.64)/0.36=-0.39$. Site 2, which is closer and strongly correlated with site 1, shadows it: negative weights occur. D is $\\lambda_2$.",
"zh": "$\\lambda_1=(0.5-0.8\\cdot0.8)/0.36\\approx-0.39$：近处的站点“遮蔽”远处的，权重可为负。"
},
{
"id": "L08-016",
"lec": "L08",
"type": "calc",
"level": 2,
"q": "Two noise-free measurements at the *same* site, $\\sigma^2=1$: $K=\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$. Eigenvalues of $K$, and of $K+10^{-2}I$?",
"choices": [
"$\\{1,1\\}$ and $\\{1.01,1.01\\}$",
"$\\{2,0\\}$ and $\\{2,0\\}$",
"$\\{1,0\\}$ and $\\{1.01,0.01\\}$",
"$\\{2,0\\}$ and $\\{2.01,0.01\\}$"
],
"answer": 3,
"why": "$(1,1)^T/\\sqrt2$ has eigenvalue 2 and $(1,-1)^T/\\sqrt2$ eigenvalue 0, so $K$ is singular. Adding $\\varepsilon I$ shifts every eigenvalue by $\\varepsilon$, making it invertible: that is the jitter/nugget.",
"zh": "$K$ 奇异（特征值2和0）；加抖动 $\\varepsilon I$ 使所有特征值加 $\\varepsilon$，变为可逆。"
},
{
"id": "L08-017",
"lec": "L08",
"type": "calc",
"level": 3,
"q": "One data point $y=2$ with $A=K+\\tau^2I=4$ (a $1\\times1$ matrix). The data-fit term $-\\tfrac12y^TA^{-1}y$ and complexity term $-\\tfrac12\\log|A|$ are",
"choices": [
"$-2.0$ and $-0.69$",
"$-0.5$ and $-1.39$",
"$-0.5$ and $-0.69$",
"$-0.25$ and $-0.69$"
],
"answer": 2,
"why": "$-\\tfrac12\\cdot4/4=-0.5$ and $-\\tfrac12\\ln4=-0.69$. A forgets $A^{-1}$ (using $-\\tfrac12y^2$), B drops the factor $\\tfrac12$ of the log-determinant.",
"zh": "数据拟合项$=-\\frac12\\cdot4/4=-0.5$；复杂度项$=-\\frac12\\ln4\\approx-0.69$。"
},
{
"id": "L08-018",
"lec": "L08",
"type": "calc",
"level": 1,
"q": "A GP is fitted with $n=1000$ points by a Cholesky solve with $K+\\tau^2I$, cost $O(n^3)$. Doubling to $n=2000$ multiplies the cost by about",
"choices": [
"4",
"8",
"2",
"16"
],
"answer": 1,
"why": "$(2n)^3=8n^3$. The matrix has $n^2$ entries, so memory grows only 4 times, but the solve grows 8 times; this is why large $n$ needs approximations.",
"zh": "复杂度 $O(n^3)$：$n$ 翻倍，计算量$\\times8$（存储$\\times4$）。"
},
{
"id": "L08-019",
"lec": "L08",
"type": "calc",
"level": 2,
"q": "UCB $a(x)=\\mu(x)+\\kappa\\sigma(x)$, $\\kappa=2$. Candidates: $x_1$ with $\\mu=3,\\sigma=0.5$; $x_2$ with $\\mu=2,\\sigma=1.5$. Which is evaluated next, with which value of $a$?",
"choices": [
"$x_2$, $a=5$",
"$x_1$, $a=4$",
"$x_2$, $a=3.5$",
"$x_1$, $a=3.5$"
],
"answer": 0,
"why": "$a(x_1)=3+2\\cdot0.5=4$ and $a(x_2)=2+2\\cdot1.5=5$, so the more uncertain point wins (exploration). Using $\\kappa=1$ would give 3.5 for $x_2$.",
"zh": "$a(x_1)=4$，$a(x_2)=5$：不确定性大的点被选中，体现探索。"
},
{
"id": "L08-020",
"lec": "L08",
"type": "calc",
"level": 2,
"q": "Square lattice of sites with spacing $a=2$ mm. Covering radius $R$ (worst-case distance to the nearest site) and ratio $R/r$ with packing radius $r$?",
"choices": [
"$R=2$ mm, $R/r=2$",
"$R=1$ mm, $R/r=1$",
"$R\\approx1.15$ mm, $R/r=1.15$",
"$R=\\sqrt2\\approx1.41$ mm, $R/r=1.41$"
],
"answer": 3,
"why": "The worst point is a cell centre at distance $a/\\sqrt2=\\sqrt2$ mm; the packing radius is $r=a/2=1$ mm. The ratio 1.15 belongs to the hexagonal lattice.",
"zh": "方格：$R=a/\\sqrt2=1.41$ mm，$r=a/2=1$ mm，$R/r=1.41$；六角格是1.15。"
},
{
"id": "L08-021",
"lec": "L08",
"type": "pic",
"level": 1,
"q": "Sample paths of GPs with Matérn $\\nu=\\tfrac12$, $\\nu=\\tfrac32$ and RBF ($\\nu\\to\\infty$): in which order from rough to smooth, and which has a kink everywhere?",
"choices": [
"RBF, $\\nu=\\tfrac32$, $\\nu=\\tfrac12$; kinks: RBF",
"$\\nu=\\tfrac12$, RBF, $\\nu=\\tfrac32$; kinks: $\\nu=\\tfrac12$",
"$\\nu=\\tfrac12$, $\\nu=\\tfrac32$, RBF; kinks everywhere: $\\nu=\\tfrac12$",
"$\\nu=\\tfrac12$, $\\nu=\\tfrac32$, RBF; kinks everywhere: $\\nu=\\tfrac32$"
],
"answer": 2,
"why": "Smoothness grows with $\\nu$: $\\nu=\\tfrac12$ paths are continuous but nowhere differentiable, $\\nu=\\tfrac32$ once differentiable, RBF infinitely smooth.",
"zh": "粗糙到光滑：$\\nu=1/2<3/2<$ RBF；只有 $\\nu=1/2$ 处处有尖点。"
},
{
"id": "L08-022",
"lec": "L08",
"type": "pic",
"level": 1,
"q": "The range $\\ell$ of a stationary kernel is increased (sill fixed). Sample paths then look",
"choices": [
"like before, with larger vertical amplitude",
"equally tall, but varying more slowly (correlated over longer distance)",
"like white noise, with a jump at every point",
"rougher, with kinks"
],
"answer": 1,
"why": "$\\ell$ is the distance over which values stay correlated, so larger $\\ell$ stretches the wiggles horizontally. Vertical amplitude is set by $\\sigma^2$, and roughness by $\\nu$.",
"zh": "$\\ell$ 增大：水平方向拉伸，变化更慢；纵向幅度由 $\\sigma^2$、粗糙度由 $\\nu$ 决定。"
},
{
"id": "L08-023",
"lec": "L08",
"type": "pic",
"level": 2,
"q": "A nugget $\\tau^2>0$ is added to the kernel. Compared with the noise-free case, the posterior mean curve and error band look like",
"choices": [
"mean smooths and misses the data points; band no longer pinches to 0 at data",
"mean still passes exactly through every data point",
"mean becomes a flat line at the prior mean",
"mean passes through the data; band widens to $\\sigma$ everywhere"
],
"answer": 0,
"why": "$K\\to K+\\tau^2I$ means the data are treated as noisy, so the posterior mean smooths instead of interpolating, and some uncertainty remains even at observed sites.",
"zh": "加块金 $\\tau^2$：均值曲线不再穿过数据点（平滑），数据点处误差带也不为0。"
},
{
"id": "L08-024",
"lec": "L08",
"type": "pic",
"level": 1,
"q": "Noise-free GP with sill $\\sigma^2$ and several sites. The posterior $\\pm1$ std band $\\sigma_*(x)$ over the interval looks like",
"choices": [
"constant $\\sigma$ everywhere",
"widest at the data points, narrowest far away",
"large where the measured $y$ is large",
"zero at the sites, growing with distance, saturating at $\\sigma$ far away"
],
"answer": 3,
"why": "$\\sigma_*^2=k_{**}-k_*^TK^{-1}k_*$ vanishes at a site and returns to the prior $\\sigma^2$ once $k_*\\to0$. It depends on geometry and kernel only, so C is wrong.",
"zh": "误差带在观测点为0，随距离增大，远处回到先验 $\\sigma$；与 $y$ 大小无关。"
},
{
"id": "L08-025",
"lec": "L08",
"type": "pic",
"level": 2,
"q": "In a GP demo you drag one measured *value* $y_i$ upward, keeping all site locations fixed. What changes?",
"choices": [
"mean shifts, band widens near the point, weights change",
"only the weights change",
"the mean moves; error band and weights stay unchanged",
"mean unchanged, band widens"
],
"answer": 2,
"why": "$\\mu_*=\\lambda^Ty$ is linear in $y$ with $\\lambda=A^{-1}k_*$, while $\\sigma_*^2$ and $\\lambda$ involve only sites and kernel. Moving a site, not a value, changes band and weights.",
"zh": "改变测量值y只移动均值；方差带与权重只由位置和核决定。"
},
{
"id": "L08-026",
"lec": "L08",
"type": "pic",
"level": 2,
"q": "Zero-mean GP, all observations near $y\\approx10$. Far from every site, predictions look like",
"choices": [
"mean stays near 10, band $\\sigma_*\\to0$",
"mean falls back to 0, band widens to $\\sigma$; remedy: subtract a trend first",
"mean grows linearly, band shrinks",
"mean 0, but band stays 0"
],
"answer": 1,
"why": "Far away $k_*\\to0$, so $\\mu_*\\to0$ (the prior mean) and $\\sigma_*^2\\to\\sigma^2$. Hence remove a trend or constant first (universal/ordinary kriging).",
"zh": "零均值先验：远离数据时均值回到0、方差回到 $\\sigma^2$；先减去趋势。"
},
{
"id": "L08-027",
"lec": "L08",
"type": "pic",
"level": 3,
"q": "Data from a Matérn-3/2 field are fitted with an RBF kernel. In the lecture, mean std was 0.02 against rms error 0.21. What does this show?",
"choices": [
"error bars far too narrow: overconfident, since RBF is too smooth",
"error bars far too wide: underconfident",
"error bars correct, only the mean is off",
"error bars correct, only the log-evidence differs"
],
"answer": 0,
"why": "The RBF prior declares paths infinitely smooth, so it extrapolates between sites with false certainty. Wrong smoothness changes the error bars much more than the mean.",
"zh": "RBF过于光滑→误差条过窄、过度自信（0.02 vs 0.21）。"
},
{
"id": "L08-028",
"lec": "L08",
"type": "pic",
"level": 2,
"q": "At fixed density of sites in 2-D, compare hexagonal and square lattices. Which is right?",
"choices": [
"square: smaller covering radius, larger packing radius",
"both have $R/r=\\sqrt2$",
"hexagonal $R/r=1.41$, square $1.15$",
"hex: smaller worst-case distance $R$; $R/r=1.15$ vs $1.41$ for square"
],
"answer": 3,
"why": "The hexagonal lattice leaves smaller gaps between sites, so no point is as far from a site as in the square lattice; the ratios are 1.15 and 1.41. C swaps them.",
"zh": "同密度下六角格最坏距离更小：$R/r=1.15$ 对 方格1.41。"
},
{
"id": "L08-029",
"lec": "L08",
"type": "pic",
"level": 2,
"q": "In Bayesian optimization with UCB $\\mu+\\kappa\\sigma$ you increase $\\kappa$. The next evaluation moves toward",
"choices": [
"the best observed value (more exploitation)",
"the point with highest posterior mean",
"regions with large posterior std, e.g. far from data (more exploration)",
"the point with smallest variance"
],
"answer": 2,
"why": "A larger $\\kappa$ weights $\\sigma$ more, so uncertain regions win the maximization of $a(x)$. Small $\\kappa$ would pick the highest-$\\mu$ point (exploitation).",
"zh": "$\\kappa$ 增大：更看重 $\\sigma$，下一个采样点移向不确定区域（探索）。"
},
{
"id": "L08-030",
"lec": "L08",
"type": "pic",
"level": 3,
"q": "Two interacting laser-plasma parameters; the objective has a narrow diagonal ridge. Successive 1-D scans end at point C, Bayesian optimization finds B. Why?",
"choices": [
"the GP models parameter correlation, so it proposes off-axis points along the ridge",
"Bayesian optimization evaluates the objective noise-free",
"1-D scans cannot find any maximum",
"the GP has smaller posterior variance than a scan"
],
"answer": 0,
"why": "A 1-D scan keeps one parameter fixed and can stall on the ridge flank (point C). The joint 2-D surrogate with acquisition function trades exploration and exploitation in all directions.",
"zh": "一维扫描在对角山脊上会卡住；BO的联合GP代理模型可沿山脊采样。"
},
{
"id": "L09-001",
"lec": "L09",
"type": "term",
"level": 1,
"q": "A binary label $y\\in\\{0,1\\}$ has $P(y=1)=\\mu$. Which pair gives the Bernoulli pmf and its variance?",
"choices": [
"$\\mu^{y}(1-\\mu)^{1-y}$ and $\\operatorname{Var}[y]=\\mu(1-\\mu)$",
"$\\mu^{1-y}(1-\\mu)^{y}$ and $\\operatorname{Var}[y]=\\mu(1-\\mu)$",
"$\\mu^{y}(1-\\mu)^{1-y}$ and $\\operatorname{Var}[y]=\\mu$",
"$\\mu^{y}(1-\\mu)^{1-y}$ and $\\operatorname{Var}[y]=\\mu^2(1-\\mu)$"
],
"answer": 0,
"why": "For $y=1$ the exponent form must give $\\mu$, for $y=0$ it must give $1-\\mu$; B swaps this. The variance is $\\mathbb E[y^2]-\\mu^2=\\mu-\\mu^2=\\mu(1-\\mu)$, not $\\mu$ (that is the mean).",
"zh": "伯努利分布：pmf 为 $\\mu^y(1-\\mu)^{1-y}$，均值 $\\mu$，方差 $\\mu(1-\\mu)$。"
},
{
"id": "L09-002",
"lec": "L09",
"type": "term",
"level": 1,
"q": "\"Logistic regression is a linear regression of the log-odds.\" With $\\mu=P(y=1\\mid x)$, which equation says exactly this?",
"choices": [
"$\\dfrac{\\mu}{1-\\mu}=x^Tw$",
"$\\ln\\dfrac{\\mu}{1-\\mu}=x^Tw$",
"$\\ln\\mu=x^Tw$",
"$\\mu=x^Tw$"
],
"answer": 1,
"why": "Odds are $\\mu/(1-\\mu)$, log-odds (logit) is its logarithm, and this is the quantity that is linear in $x$. D is ordinary least squares on 0/1 labels, which can leave $[0,1]$.",
"zh": "log-odds（logit）$=\\ln(\\mu/(1-\\mu))$ 对 $x$ 线性，这就是\"逻辑回归\"的含义。"
},
{
"id": "L09-003",
"lec": "L09",
"type": "term",
"level": 1,
"q": "For the logistic sigmoid $\\sigma(a)=1/(1+e^{-a})$, which pair of identities is correct?",
"choices": [
"$\\sigma(-a)=-\\sigma(a)$ and $\\sigma'(a)=\\sigma(a)\\big(1-\\sigma(a)\\big)$",
"$\\sigma(-a)=1/\\sigma(a)$ and $\\sigma'(a)=\\sigma(a)\\big(1-\\sigma(a)\\big)$",
"$\\sigma(-a)=1-\\sigma(a)$ and $\\sigma'(a)=\\sigma(a)\\big(1-\\sigma(a)\\big)$",
"$\\sigma(-a)=1-\\sigma(a)$ and $\\sigma'(a)=\\sigma(a)^2$"
],
"answer": 2,
"why": "$\\sigma(0)=\\tfrac12$ rules out A and B ($-\\tfrac12\\neq\\tfrac12$, $2\\neq\\tfrac12$). D agrees with C only at $a=0$ (both $\\tfrac14$); for large $a$, $\\sigma'\\to0$ but $\\sigma^2\\to1$.",
"zh": "sigmoid 性质：$\\sigma(-a)=1-\\sigma(a)$，$\\sigma'=\\sigma(1-\\sigma)$。"
},
{
"id": "L09-004",
"lec": "L09",
"type": "term",
"level": 2,
"q": "$E(w)$ is the binary cross-entropy, $X\\in\\mathbb R^{p\\times n}$, $\\mu=\\sigma(X^Tw)\\in\\mathbb R^n$, labels $y\\in\\{0,1\\}^n$. Which expression is the gradient $\\nabla_wE\\in\\mathbb R^p$?",
"choices": [
"$X^T(\\mu-y)$",
"$X(y-\\mu)$",
"$X\\operatorname{diag}\\big(\\mu_i(1-\\mu_i)\\big)(\\mu-y)$",
"$X(\\mu-y)$"
],
"answer": 3,
"why": "The factors $\\mu_i(1-\\mu_i)$ from $\\sigma'$ cancel against the denominator of $\\partial e_i/\\partial\\mu_i$, leaving \"features times residual\". A is not even a conformable product ($n\\times p$ times $\\mathbb R^n$ gives a wrong shape), B has the wrong sign.",
"zh": "交叉熵梯度 $\\nabla_wE=X(\\mu-y)$：特征$\\times$残差，$\\sigma'$ 因子被约掉。"
},
{
"id": "L09-005",
"lec": "L09",
"type": "term",
"level": 3,
"q": "With the course's numerator layout, which line gives the *derivative* $\\partial E/\\partial w$ of the logistic cross-entropy (not the gradient) and its shape?",
"choices": [
"$(\\mu-y)^TX^T$, shape $1\\times p$",
"$(\\mu-y)^TX^T$, shape $p\\times1$",
"$X(\\mu-y)$, shape $1\\times p$",
"$X(\\mu-y)$, shape $p\\times1$"
],
"answer": 0,
"why": "In numerator layout $\\partial(\\text{scalar})/\\partial w$ is a row, $1\\times p$; the gradient is its transpose $X(\\mu-y)$, $p\\times1$. D is the correct *gradient*, but the question asks for the derivative; B and C pair a formula with the wrong shape.",
"zh": "分子布局下标量对列向量的导数是 $1\\times p$ 行向量，梯度是它的转置 $p\\times1$。"
},
{
"id": "L09-006",
"lec": "L09",
"type": "term",
"level": 2,
"q": "Differentiating $\\nabla_wE=X(\\mu-y)$ once more gives the Hessian. With $S=\\operatorname{diag}\\big(\\mu_i(1-\\mu_i)\\big)$, which is $H$ (shape $p\\times p$)?",
"choices": [
"$X^TSX$",
"$XSX^T$",
"$X\\operatorname{diag}(\\mu_i-y_i)X^T$",
"$XS^{-1}X^T$"
],
"answer": 1,
"why": "$\\partial\\mu_i/\\partial w=\\mu_i(1-\\mu_i)x_i^T$, so $H=\\sum_i\\mu_i(1-\\mu_i)x_ix_i^T=XSX^T$. A is $n\\times n$; C would involve the residual, which does not appear (and can be negative); in D the weights are inverted.",
"zh": "Hessian $H=XSX^T$，$S=\\mathrm{diag}(\\mu_i(1-\\mu_i))$，是 $p\\times p$ 半正定矩阵。"
},
{
"id": "L09-007",
"lec": "L09",
"type": "term",
"level": 2,
"q": "For $\\mu=\\operatorname{softmax}(s)\\in\\mathbb R^K$, which is the Jacobian $\\partial\\mu/\\partial s\\in\\mathbb R^{K\\times K}$?",
"choices": [
"$\\mu\\mu^T-\\operatorname{diag}(\\mu)$",
"$\\operatorname{diag}(\\mu)+\\mu\\mu^T$",
"$\\operatorname{diag}(\\mu)-\\mu\\mu^T$",
"$\\operatorname{diag}(\\mu)-\\operatorname{diag}(\\mu)^2$"
],
"answer": 2,
"why": "$\\partial\\mu_k/\\partial s_j=\\mu_k(\\delta_{kj}-\\mu_j)$. D keeps only the diagonal and forgets the coupling through the normalisation; A has the opposite sign (not PSD). Rows of the correct matrix sum to 0 because $\\sum\\mu_k=1$.",
"zh": "softmax 的 Jacobian $=\\mathrm{diag}(\\mu)-\\mu\\mu^T$，对称半正定，秩 $K-1$。"
},
{
"id": "L09-008",
"lec": "L09",
"type": "term",
"level": 2,
"q": "Multiclass logistic regression: $s=Wx$, $W\\in\\mathbb R^{K\\times p}$, softmax output $\\mu$, one-hot target $y$, categorical cross-entropy $E$. Which is $\\nabla_WE$ (shape $K\\times p$)?",
"choices": [
"$x(\\mu-y)^T$",
"$(y-\\mu)x^T$",
"$\\operatorname{diag}(\\mu)(\\mu-y)x^T$",
"$(\\mu-y)x^T$"
],
"answer": 3,
"why": "$\\partial E/\\partial s=(\\mu-y)^T$ and $\\partial s_k/\\partial W_{kj}=x_j$, so the entry $(k,j)$ is $(\\mu_k-y_k)x_j$: an outer product of shape $K\\times p$. A is its transpose ($p\\times K$), B has the wrong sign.",
"zh": "$\\nabla_WE=(\\mu-y)x^T$，$K\\times p$ 外积：预测减目标，乘以输入。"
},
{
"id": "L09-009",
"lec": "L09",
"type": "term",
"level": 3,
"q": "Let $H(z)=-\\sum_kz_k\\ln z_k$ and $\\Delta_K$ the probability simplex. $\\operatorname{softmax}(\\beta s)$ is the solution of which problem?",
"choices": [
"$\\arg\\max_{z\\in\\Delta_K}\\big[z^Ts+\\tfrac1\\beta H(z)\\big]$",
"$\\arg\\max_{z\\in\\Delta_K}\\big[z^Ts-\\tfrac1\\beta H(z)\\big]$",
"$\\arg\\max_{z\\in\\Delta_K}\\big[z^Ts+\\beta H(z)\\big]$",
"$\\arg\\min_{z\\in\\Delta_K}\\big[z^Ts+\\tfrac1\\beta H(z)\\big]$"
],
"answer": 0,
"why": "$\\beta\\to\\infty$ must kill the entropy term and leave argmax of $z^Ts$, so the weight is $1/\\beta$ (C has $\\beta$) and entropy is added, not subtracted (B would push towards one-hot even at small $\\beta$). D picks the smallest score.",
"zh": "softmax = 单纯形上\"线性得分 + $H/\\beta$\"的最大化点（熵正则化 argmax）。"
},
{
"id": "L09-010",
"lec": "L09",
"type": "term",
"level": 1,
"q": "Event counts $N$ in a detector bin are modelled as $N\\sim\\operatorname{Poisson}(\\lambda)$ with a GLM and the canonical link, linear predictor $x^Tw$. Which mean function results?",
"choices": [
"$\\lambda=x^Tw$",
"$\\lambda=e^{x^Tw}$",
"$\\lambda=\\sigma(x^Tw)$",
"$\\lambda=\\ln(x^Tw)$"
],
"answer": 1,
"why": "The canonical link of Poisson is $\\ln\\lambda=x^Tw$, so the mean function is its inverse, the exponential, which keeps $\\lambda>0$. A is the Gaussian (identity link), C the Bernoulli case.",
"zh": "泊松 GLM 的典范链接是 log，均值函数 $\\lambda=\\exp(x^Tw)$。"
},
{
"id": "L09-011",
"lec": "L09",
"type": "term",
"level": 2,
"q": "With labels $t_i=2y_i-1\\in\\{\\pm1\\}$, the binary cross-entropy of logistic regression can be written as the *logistic loss of the margin* $t_ix_i^Tw$. Which is it?",
"choices": [
"$\\sum_i\\max\\big(0,\\,1-t_ix_i^Tw\\big)$",
"$\\sum_i\\ln\\big(1+e^{+t_ix_i^Tw}\\big)$",
"$\\sum_i\\ln\\big(1+e^{-t_ix_i^Tw}\\big)$",
"$\\sum_i e^{-t_ix_i^Tw}$"
],
"answer": 2,
"why": "Positive margin means a correct classification and must give small loss, so the exponent is $-t_ix_i^Tw$ (B is reversed). A is the hinge loss, D the exponential loss; only C equals $-\\ln\\sigma(t_ix_i^Tw)$.",
"zh": "逻辑损失 $=\\ln(1+e^{-t\\cdot x^Tw})$，是间隔的函数；hinge 和指数损失不同。"
},
{
"id": "L09-012",
"lec": "L09",
"type": "term",
"level": 1,
"q": "Which statement about softmax and log-sum-exp $\\beta^{-1}\\ln\\sum_ke^{\\beta s_k}$ is correct?",
"choices": [
"Softmax is a smooth maximum, a single number",
"Log-sum-exp is a point in the probability simplex",
"The gradient of log-sum-exp w.r.t. $s$ is the one-hot argmax",
"The gradient of log-sum-exp w.r.t. $s$ is $\\operatorname{softmax}(\\beta s)$"
],
"answer": 3,
"why": "Softmax is a soft *arg*max (a vector in the simplex), log-sum-exp is the soft *max* (a number), and $\\partial_{s_k}\\beta^{-1}\\ln\\sum_je^{\\beta s_j}=e^{\\beta s_k}/\\sum_je^{\\beta s_j}$. The one-hot argmax is only the $\\beta\\to\\infty$ limit.",
"zh": "softmax 是软 argmax（单纯形上的点），log-sum-exp 是软 max（一个数），前者是后者的梯度。"
},
{
"id": "L09-013",
"lec": "L09",
"type": "calc",
"level": 1,
"q": "A classifier has linear score $a=x^Tw=\\ln 3$ for a given event. What is $\\mu=P(y=1\\mid x)=\\sigma(a)$?",
"choices": [
"$0.25$",
"$0.75$",
"$0.67$",
"$0.95$"
],
"answer": 1,
"why": "$\\sigma(\\ln3)=1/(1+e^{-\\ln3})=1/(1+\\tfrac13)=\\tfrac34$. Odds are $e^{a}=3:1$. The value $0.25$ would be $\\sigma(-\\ln3)$, and $0.67$ is $\\sigma(\\ln2)$.",
"zh": "log-odds$=\\ln3$ 即赔率 3:1，所以 $\\mu=3/4$。"
},
{
"id": "L09-014",
"lec": "L09",
"type": "calc",
"level": 2,
"q": "Scores of a 2-class softmax are huge, $s=(1001,\\,1000)$, $\\beta=1$. Naively $e^{1001}$ overflows. What is $\\operatorname{softmax}(s)$?",
"choices": [
"$(0.73,\\,0.27)$",
"$(0.50,\\,0.50)$",
"$(1.00,\\,0.00)$",
"$(0.88,\\,0.12)$"
],
"answer": 0,
"why": "Softmax is shift invariant: subtract $m=1001$ to get $s=(0,-1)$, so $\\mu_1=\\sigma(1)=1/(1+e^{-1})=0.731$. B would need equal scores, D is $\\sigma(2)$, C ignores that the difference is only 1.",
"zh": "softmax 平移不变，只有得分差 1 起作用：$\\mu_1=\\sigma(1)=0.73$（log-sum-exp 技巧）。"
},
{
"id": "L09-015",
"lec": "L09",
"type": "calc",
"level": 2,
"q": "A tagger outputs $\\mu=\\sigma(6x_1+8x_2)$ with $x$ in cm. What is the distance between the lines $\\mu=0.1$ and $\\mu=0.9$? ($\\ln9\\approx2.20$)",
"choices": [
"$0.88$ cm",
"$0.22$ cm",
"$4.39$ cm",
"$0.44$ cm"
],
"answer": 3,
"why": "$x^Tw=\\operatorname{logit}\\mu$, so the lines are $\\operatorname{logit}0.9-\\operatorname{logit}0.1=2\\ln9=4.39$ apart in score; with $\\|w\\|=10$ the geometric distance is $4.39/10=0.44$. Using $\\|w\\|=5$ gives A, forgetting the factor 2 gives B.",
"zh": "等值线间距$=2\\ln9/\\lVert w\\rVert$，$\\lVert w\\rVert=\\sqrt{36+64}=10$。"
},
{
"id": "L09-016",
"lec": "L09",
"type": "calc",
"level": 2,
"q": "One sample $x=(1,2)^T$ with label $y=1$, weights $w=0$, $\\mu=\\sigma(x^Tw)$. What is $\\nabla_we=(\\mu-y)x$ for the per-sample cross-entropy?",
"choices": [
"$(0.5,\\,1)^T$",
"$(-1,\\,-2)^T$",
"$(-0.5,\\,-1)^T$",
"$(-0.25,\\,-0.5)^T$"
],
"answer": 2,
"why": "At $w=0$, $\\mu=\\sigma(0)=\\tfrac12$, so $\\mu-y=-\\tfrac12$ and the gradient is $-\\tfrac12(1,2)^T$. A has the wrong sign; D keeps an extra $\\mu(1-\\mu)=\\tfrac14$ that cancels; B would be the residual of a completely wrong prediction $\\mu=0$.",
"zh": "$w=0$ 时 $\\mu=1/2$，梯度$=(\\mu-y)x=-\\frac12(1,2)$。"
},
{
"id": "L09-017",
"lec": "L09",
"type": "calc",
"level": 3,
"q": "Two samples $x_1=(1,2)^T$, $y_1=1$ and $x_2=(1,-2)^T$, $y_2=0$, weights $w=0$. What is $\\operatorname{tr}H$ for the cross-entropy Hessian $H=XSX^T$?",
"choices": [
"$1.25$",
"$10$",
"$5$",
"$2.5$"
],
"answer": 3,
"why": "At $w=0$ all $\\mu_i=\\tfrac12$, so $S=\\tfrac14I$ regardless of the labels, and $\\operatorname{tr}H=\\tfrac14(\\|x_1\\|^2+\\|x_2\\|^2)=\\tfrac14\\cdot10=2.5$. B forgets $S$, C uses $\\mu(1-\\mu)=\\tfrac12$, A counts one sample.",
"zh": "$H$ 与标签无关；$w=0$ 时 $S=I/4$，$\\mathrm{tr}H=(5+5)/4=2.5$。"
},
{
"id": "L09-018",
"lec": "L09",
"type": "calc",
"level": 1,
"q": "Scores $s=(0,\\ln2,\\ln3)$, $\\beta=1$. What is $\\operatorname{softmax}(s)$?",
"choices": [
"$(0,\\,0.39,\\,0.61)$",
"$(0,\\,0,\\,1)$",
"$(\\tfrac13,\\tfrac13,\\tfrac13)$",
"$(\\tfrac16,\\,\\tfrac13,\\,\\tfrac12)$"
],
"answer": 3,
"why": "$e^{s}=(1,2,3)$, $Z=6$, so $\\mu=(\\tfrac16,\\tfrac13,\\tfrac12)$. A normalises the scores linearly (not exponentiated), B is the $\\beta\\to\\infty$ argmax, C the $\\beta\\to0$ limit.",
"zh": "先取 exp 得 (1,2,3)，再除以和 6。"
},
{
"id": "L09-019",
"lec": "L09",
"type": "calc",
"level": 2,
"q": "Two scores $s=(1,0)$ and inverse temperature $\\beta=2$. What is $\\mu_1=\\operatorname{softmax}(\\beta s)_1$?",
"choices": [
"$0.88$",
"$0.73$",
"$0.98$",
"$0.50$"
],
"answer": 0,
"why": "For $K=2$, $\\mu_1=\\sigma\\big(\\beta(s_1-s_2)\\big)=\\sigma(2)=0.881$. B is $\\sigma(1)$ (forgot $\\beta$), C is $\\sigma(4)$ (squared $\\beta$), D is the $\\beta\\to0$ limit.",
"zh": "$K=2$ 时 $\\mu_1=\\sigma(\\beta(s_1-s_2))=\\sigma(2)=0.88$。"
},
{
"id": "L09-020",
"lec": "L09",
"type": "calc",
"level": 2,
"q": "Smooth max $\\beta^{-1}\\ln\\sum_{k}e^{\\beta s_k}$ for four equal scores $s=(0,0,0,0)$ and $\\beta=2$ equals ($\\ln4\\approx1.39$)",
"choices": [
"$1.39$",
"$2.77$",
"$0.69$",
"$0$"
],
"answer": 2,
"why": "$\\sum_ke^{0}=4$, so the value is $\\tfrac12\\ln4=0.69$; it lies in $[\\max s,\\max s+\\ln K/\\beta]=[0,0.69]$ and is at the upper end because all scores tie. A forgets $1/\\beta$, B multiplies by $\\beta$, D is the hard max.",
"zh": "四个得分相等时$=\\ln K/\\beta=0.69$，正好是上界。"
},
{
"id": "L09-021",
"lec": "L09",
"type": "calc",
"level": 3,
"q": "Two classes, $p=3$ features. How many parameters does LDA estimate (class means, pooled covariance, prior) versus logistic regression with bias?",
"choices": [
"$16$ and $4$",
"$13$ and $3$",
"$7$ and $4$",
"$13$ and $4$"
],
"answer": 3,
"why": "LDA: means $2p=6$, symmetric pooled covariance $p(p+1)/2=6$, one prior: $13$. Logistic regression: $p+1=4$. A uses a full $p^2=9$ covariance, B drops the bias, C forgets the covariance.",
"zh": "LDA 参数 $2p+p(p+1)/2+1=13$，逻辑回归只有 $p+1=4$。"
},
{
"id": "L09-022",
"lec": "L09",
"type": "calc",
"level": 1,
"q": "Softmax output $\\mu=(0.2,\\,0.3,\\,0.5)$ and one-hot target $y=(0,1,0)$. What is $\\partial E/\\partial s$ for the categorical cross-entropy?",
"choices": [
"$(0.2,\\,0.7,\\,0.5)$",
"$(0.2,\\,-0.7,\\,0.5)$",
"$(-0.2,\\,0.7,\\,-0.5)$",
"$(0,\\,-0.7,\\,0)$"
],
"answer": 1,
"why": "The gradient is $\\mu-y=(0.2,-0.7,0.5)$ for all components, also for the wrong classes. D keeps only the true class; A forgets to subtract $y$ in component 2; C has the wrong overall sign.",
"zh": "softmax+交叉熵对得分的梯度$=\\mu-y$，错误类也有梯度。"
},
{
"id": "L09-023",
"lec": "L09",
"type": "calc",
"level": 2,
"q": "1-D classes $\\mathcal N(3,1)$ (class 1) and $\\mathcal N(1,1)$ (class 2), equal priors. Then $p(1\\mid x)=\\sigma(wx+w_0)$ with $(w,w_0)=$",
"choices": [
"$(2,\\,-8)$",
"$(2,\\,4)$",
"$(2,\\,-4)$",
"$(-2,\\,4)$"
],
"answer": 2,
"why": "$w=(\\mu_1-\\mu_2)/\\sigma^2=2$ and $w_0=-(\\mu_1^2-\\mu_2^2)/(2\\sigma^2)=-(9-1)/2=-4$, so the boundary $x=2$ is the midpoint. A forgets the factor $\\tfrac12$, B and D flip a sign.",
"zh": "LDA$\\to$sigmoid：$w=(\\mu_1-\\mu_2)/\\sigma^2=2$，$w_0=-(\\mu_1^2-\\mu_2^2)/2\\sigma^2=-4$，边界在中点。"
},
{
"id": "L09-024",
"lec": "L09",
"type": "calc",
"level": 3,
"q": "Cost of a false positive $C_{\\text{FP}}=1$, of a false negative $C_{\\text{FN}}=9$. Decide class 1 if $\\mu>C_{\\text{FP}}/(C_{\\text{FP}}+C_{\\text{FN}})$. Equivalent condition on the score ($\\ln9\\approx2.20$)?",
"choices": [
"$x^Tw>-2.20$",
"$x^Tw>2.20$",
"$x^Tw>-2.30$",
"$x^Tw>0$"
],
"answer": 0,
"why": "The threshold is $\\mu>0.1$; applying the logit, $x^Tw>\\ln\\frac{0.1}{0.9}=-\\ln9=-2.20$. C wrongly uses $\\ln0.1$ instead of the log-odds; B has the wrong sign (that would be for $C_{\\text{FN}}$ small); D is the cost-free boundary.",
"zh": "阈值 $\\mu>0.1$ 等价于 $x^Tw>\\ln(0.1/0.9)=-2.20$：平行平移的超平面。"
},
{
"id": "L09-025",
"lec": "L09",
"type": "pic",
"level": 2,
"q": "Ten 1-D points, class 1 on the right. Three further class-1 points are added far to the right. Compare the OLS fit to the 0/1 labels with the logistic fit.",
"choices": [
"Both fits stay the same, the new points are classified correctly",
"The logistic fit tilts, OLS is unchanged",
"The OLS line tilts and its ½-crossing moves; the logistic fit barely changes",
"Both fits tilt by the same amount"
],
"answer": 2,
"why": "OLS sees large residuals $1-x_i^Tw$ and high leverage at the far points. For the logistic fit $\\mu_i\\approx1$, so the residual $\\mu_i-y_i\\approx0$ and the points hardly pull on $w$.",
"zh": "OLS 被远处的易分点拉斜；逻辑回归中这些点残差 $\\mu-y\\approx0$，几乎无影响。"
},
{
"id": "L09-026",
"lec": "L09",
"type": "pic",
"level": 2,
"q": "A 2-D logistic model $\\mu=\\sigma(x^Tw)$ (no bias) is replaced by $\\mu=\\sigma(x^T(10w))$. What happens to the level sets of $\\mu$?",
"choices": [
"The $\\mu=\\tfrac12$ line is unchanged; the other level lines move 10 times closer to it",
"The $\\mu=\\tfrac12$ line rotates; spacing is unchanged",
"All level lines move 10 times farther from the origin",
"The $\\mu=\\tfrac12$ line moves 10 times closer to the origin"
],
"answer": 0,
"why": "$\\mu=\\tfrac12$ means $x^Tw=0$, which does not change under scaling. The lines $x^Tw=\\operatorname{logit}c$ move to $x^Tw=\\operatorname{logit}c/10$: steeper, more confident classifier.",
"zh": "缩放 $w$ 不改变边界 $x^Tw=0$，只让等值线更密（更陡、更自信）。"
},
{
"id": "L09-027",
"lec": "L09",
"type": "pic",
"level": 1,
"q": "For $\\mu=\\sigma(x^Tw)$, what do the direction $w/\\|w\\|$ and the length $\\|w\\|$ control in the $(x_1,x_2)$ plane?",
"choices": [
"Direction: steepness of the sigmoid; length: orientation of the boundary",
"Direction: orientation of the boundary; length: steepness (confidence)",
"Both only change the steepness",
"Direction: offset of the boundary; length: its orientation"
],
"answer": 1,
"why": "The boundary $x^Tw=0$ has normal $w$, so the direction fixes its orientation; the distance between level lines scales as $1/\\|w\\|$, so the length fixes steepness. Without a bias the boundary always passes through the origin.",
"zh": "$w$ 的方向定边界朝向，$\\lVert w\\rVert$ 定陡峭程度（置信度）。"
},
{
"id": "L09-028",
"lec": "L09",
"type": "pic",
"level": 2,
"q": "Gradient descent on the logistic loss from $w=0$ with linearly separable data. What does the trajectory look like?",
"choices": [
"$w$ converges to the finite MLE after about $\\ln t$ steps",
"$\\|w\\|$ saturates and the direction oscillates between support vectors",
"$\\|w\\|$ stays bounded and the direction is random",
"$w/\\|w\\|\\to$ max-margin direction while $\\|w\\|$ grows like $\\ln t$"
],
"answer": 3,
"why": "$E\\to0$ only as $\\|w\\|\\to\\infty$, so there is no MLE. The loss is dominated by the smallest-margin points, which drives the direction to the hard-margin SVM direction, while $d\\|w\\|/dt\\sim e^{-\\gamma\\|w\\|}$ gives $\\|w\\|\\sim\\ln t$.",
"zh": "可分数据上 GD：方向$\\to$最大间隔方向，$\\lVert w\\rVert\\sim\\ln t$ 无限增长。"
},
{
"id": "L09-029",
"lec": "L09",
"type": "pic",
"level": 1,
"q": "Logistic regression on linearly separable data diverges ($\\|w\\|\\to\\infty$). Adding the penalty $\\frac\\lambda2\\|w\\|^2$ changes the picture how?",
"choices": [
"The sigmoid becomes an even sharper step",
"There is still no minimum, only slower growth",
"A unique finite minimiser exists and $\\|w\\|$ stops growing",
"The boundary becomes non-linear"
],
"answer": 2,
"why": "The penalised objective is strictly convex and coercive, so it has a unique finite minimiser (MAP with a Gaussian prior). Early stopping has a similar effect. The boundary stays a hyperplane.",
"zh": "岭惩罚使目标强凸且有界，唯一有限解，$\\lVert w\\rVert$ 不再增长。"
},
{
"id": "L09-030",
"lec": "L09",
"type": "pic",
"level": 1,
"q": "Three classes, $\\mu(x)=\\operatorname{softmax}(\\beta s(x))$ traces a curve in the triangle (simplex) with the one-hot vectors at its corners. What does $\\beta$ do?",
"choices": [
"$\\beta\\to\\infty$: hugs corners (argmax); $\\beta\\to0$: shrinks to the centre",
"$\\beta\\to\\infty$: shrinks to the centre; $\\beta\\to0$: hugs the corners",
"Both limits shrink the curve to the centre",
"$\\beta$ moves the class boundaries $s_k=s_j$"
],
"answer": 0,
"why": "Large $\\beta$ means low temperature: the largest score takes all probability (one-hot, piecewise constant in $x$). Small $\\beta$ means high temperature: uniform $\\tfrac13$ each. The boundaries $s_k=s_j$ do not depend on $\\beta$.",
"zh": "$\\beta\\to\\infty$ 趋向角点（argmax），$\\beta\\to0$ 趋向中心（均匀）；边界不变。"
},
{
"id": "L09-031",
"lec": "L09",
"type": "pic",
"level": 2,
"q": "Softmax as a Boltzmann distribution with $s_k=-E_k$, $\\beta=1/k_BT$. Which is correct?",
"choices": [
"$T\\to\\infty$: ground state only; $T\\to0$: uniform",
"$T\\to0$: lowest-energy state only; $T\\to\\infty$: uniform over states",
"$T\\to0$: uniform; $T\\to\\infty$: lowest-energy state only",
"$\\beta=k_BT$, so heating sharpens the distribution"
],
"answer": 1,
"why": "Low $T$ is large $\\beta$, so softmax becomes argmax of $-E_k$, i.e. the ground state; high $T$ is small $\\beta$ and the entropy dominates, giving a uniform distribution. A and C swap the limits.",
"zh": "低温（$\\beta$ 大）只剩基态，高温（$\\beta$ 小）趋于均匀。"
},
{
"id": "L09-032",
"lec": "L09",
"type": "pic",
"level": 3,
"q": "On the 3-corner simplex the objective $z^Ts+\\tfrac1\\beta H(z)$ has parallel linear contours plus a rounded entropy term centred in the middle. As $\\beta$ grows from 0, where does the maximiser go?",
"choices": [
"It stays at the centre, only its value changes",
"From the centre towards the corner of the largest score, reaching it for $\\beta\\to\\infty$",
"From the corner of the largest score towards the centre",
"To the midpoint of the edge between the two largest scores"
],
"answer": 1,
"why": "At $\\beta\\to0$ entropy dominates and the optimum is the centre; as $\\beta$ grows the linear term gains weight and pulls the maximiser (the softmax dot) along a curve towards the argmax corner. D would need two exactly equal top scores.",
"zh": "$\\beta$ 增大时，最大值点从中心沿曲线移向最大得分的角点。"
},
{
"id": "L09-033",
"lec": "L09",
"type": "pic",
"level": 3,
"q": "A model predicts $\\mu=\\sigma(a)\\approx0$ with true label $y=1$ (confidently wrong). How do squared error $(\\mu-y)^2$ and cross-entropy compare as training signals on $a$?",
"choices": [
"Both give gradient $\\approx0$, as $\\sigma'\\approx0$",
"Squared error has large gradient, cross-entropy stalls",
"Both have gradient $\\approx-1$",
"Cross-entropy gives $\\approx-1$; squared error gives $\\approx0$ and is non-convex in $w$"
],
"answer": 3,
"why": "$\\partial E_{\\text{CE}}/\\partial a=\\mu-y\\approx-1$, since $\\sigma'$ cancels. For squared error $\\partial/\\partial a=2(\\mu-y)\\mu(1-\\mu)\\approx0$: saturated sigmoid, vanishing gradient. That is why CE is used.",
"zh": "交叉熵梯度 $\\mu-y\\approx-1$ 不消失；平方误差含 $\\sigma'$ 因子，饱和时梯度消失且非凸。"
},
{
"id": "L09-034",
"lec": "L09",
"type": "pic",
"level": 2,
"q": "A truth probe is a logistic regression on $p=4096$ LLM activations, trained on $n=1000$ statements. Why must it be regularised?",
"choices": [
"The cross-entropy has many local minima for $p>n$",
"The labels are binary, so the Hessian $XSX^T$ has negative eigenvalues",
"With $n<p$ the data are almost surely separable: no MLE, $\\|w\\|\\to\\infty$",
"The sigmoid saturates at initialisation, so no gradient flows"
],
"answer": 2,
"why": "With more features than samples a separating hyperplane almost surely exists, so $E\\to0$ only for $\\|w\\|\\to\\infty$. A is wrong: $E$ is convex, with no local minima. B is wrong: $XSX^T\\succeq0$ always. D does not explain a missing minimum.",
"zh": "p>n 几乎必然线性可分，MLE 不存在，必须正则化或早停。"
},
{
"id": "L09-035",
"lec": "L09",
"type": "pic",
"level": 3,
"q": "Add one far-away, correctly classified class-1 point deep inside the class-1 side. How do the fitted $w$ of LDA and of logistic regression react?",
"choices": [
"LDA barely changes, logistic regression changes a lot",
"LDA changes (class mean and pooled covariance move), logistic regression barely",
"Neither changes",
"Both change equally, since both have a logistic posterior"
],
"answer": 1,
"why": "LDA estimates $\\mu_1$ and $\\Sigma$ from all class-1 points, so a far point shifts them and thus $w=\\Sigma^{-1}(\\mu_1-\\mu_2)$. For logistic regression its residual $\\mu_i-y_i\\approx0$, so it barely matters.",
"zh": "LDA 的均值/协方差被远点拉动；逻辑回归对远处易分点几乎不敏感。"
},
{
"id": "L09-036",
"lec": "L09",
"type": "pic",
"level": 3,
"q": "A logistic classifier is trained on balanced simulation. In data the signal has prior only $1\\%$. What is the correct fix and picture in feature space?",
"choices": [
"Rotate $w$ towards the signal direction",
"Add $\\ln\\frac{0.01}{0.99}$ to the bias: boundary shifts parallel, shrinking class 1",
"Multiply $w$ by $0.01$: boundary unchanged, lines further apart",
"Add $\\ln\\frac{0.01}{0.99}$ to the bias: boundary shifts parallel, enlarging class 1"
],
"answer": 1,
"why": "The prior enters the log-odds as an additive bias term, $+\\ln(\\pi_1'/\\pi_0')=-4.6$, so the normal $w$ is unchanged and the boundary $x^Tw=4.6-w_0$ shifts parallel towards class 1, shrinking its region. D has the right shift but the wrong direction.",
"zh": "先验变化只改偏置：加 $\\ln(\\pi_1'/\\pi_0')$，边界平行移动、信号区缩小。"
},
{
"id": "L10-001",
"lec": "L10",
"type": "term",
"level": 1,
"q": "In an MLP $h^{(l)}=\\varphi\\big(W^{(l)}h^{(l-1)}+b^{(l)}\\big)$ with $h^{(l)}\\in\\mathbb R^{d_l}$. What is the shape of $W^{(l)}$?",
"choices": [
"$d_l\\times d_{l-1}$",
"$d_{l-1}\\times d_l$",
"$d_l\\times d_l$",
"$d_l\\times 1$"
],
"answer": 0,
"why": "$W^{(l)}h^{(l-1)}$ must lie in $\\mathbb R^{d_l}$ and $h^{(l-1)}$ has $d_{l-1}$ entries, so $W^{(l)}$ has $d_l$ rows (one per unit) and $d_{l-1}$ columns. B is the transposed convention of row-vector codes.",
"zh": "$W^{(l)}$ 为 $d_l\\times d_{l-1}$：每行是一个单元的权重。"
},
{
"id": "L10-002",
"lec": "L10",
"type": "term",
"level": 2,
"q": "Data matrix $X\\in\\mathbb R^{p\\times n}$ (columns are samples), first layer with $d_1$ units, bias $b^{(1)}\\in\\mathbb R^{d_1}$, $\\mathbf 1\\in\\mathbb R^n$. Which gives the hidden activations and their shape?",
"choices": [
"$\\varphi(XW^{(1)}+b^{(1)}\\mathbf 1^T)$, shape $n\\times d_1$",
"$\\varphi(W^{(1)}X+b^{(1)}\\mathbf 1^T)$, shape $d_1\\times n$",
"$\\varphi(W^{(1)}X)+b^{(1)}\\mathbf 1^T$, shape $d_1\\times n$",
"$\\varphi(W^{(1)T}X+b^{(1)}\\mathbf 1^T)$, shape $d_1\\times n$"
],
"answer": 1,
"why": "$W^{(1)}X$ is $(d_1\\times p)(p\\times n)=d_1\\times n$; the bias must be broadcast to every column by $b\\mathbf 1^T$ and added *before* $\\varphi$. A and D are not conformable; C adds the bias after the nonlinearity.",
"zh": "$H^{(1)}=\\varphi(W^1X+b^1\\mathbf 1^T)$，$d_1\\times n$；偏置要在非线性之前加到每一列。"
},
{
"id": "L10-003",
"lec": "L10",
"type": "term",
"level": 3,
"q": "One hidden layer $f(x)=\\frac1{\\sqrt d}\\sum_{j=1}^da_j\\varphi(w_j^Tx+b_j)$, i.i.d. $a_j$ with mean 0, variance $\\sigma_a^2$. As $d\\to\\infty$ it becomes a Gaussian process with kernel $k(x,x')=$",
"choices": [
"$\\sigma_a\\,\\mathbb E[\\varphi(w^Tx+b)]\\;\\mathbb E[\\varphi(w^Tx'+b)]$",
"$d\\,\\sigma_a^2\\,\\mathbb E[\\varphi(w^Tx+b)\\,\\varphi(w^Tx'+b)]$",
"$\\sigma_a^2\\,\\mathbb E\\big[\\varphi(w^Tx+b)\\,\\varphi(w^Tx'+b)\\big]$",
"$\\sigma_a^2\\,\\mathbb E[\\varphi(w^T(x-x')+b)]$"
],
"answer": 2,
"why": "$\\operatorname{Cov}[f(x),f(x')]=\\frac1d\\sum_j\\sigma_a^2\\,\\mathbb E[\\varphi_j(x)\\varphi_j(x')]$; the $\\frac1d$ cancels the sum, so no factor $d$ (B). The CLT makes $f$ Gaussian. A would be a product of means, D is a stationary form that does not follow.",
"zh": "无限宽单隐层 $\\to$ 高斯过程（Neal），核 $=\\sigma_a^2E[\\varphi(x)\\varphi(x')]$。"
},
{
"id": "L10-004",
"lec": "L10",
"type": "term",
"level": 2,
"q": "Without activation functions a 3-layer network is $\\hat y=W^{(3)}W^{(2)}W^{(1)}x=W_{\\rm eff}x$. Which statement is true?",
"choices": [
"$\\operatorname{rank}W_{\\rm eff}=\\sum_ld_l$",
"$\\operatorname{rank}W_{\\rm eff}\\ge\\max_ld_l$",
"$\\hat y$ is a nonlinear function of $x$ once there are two or more layers",
"$\\operatorname{rank}W_{\\rm eff}\\le\\min_ld_l$"
],
"answer": 3,
"why": "A product of matrices is one linear map, and its rank cannot exceed the rank of any factor, hence the narrowest layer (bottleneck). Depth without $\\varphi$ adds only a low-rank constraint, not expressivity.",
"zh": "无激活函数时多层=单个线性映射，秩 $\\le$ 最窄层宽度。"
},
{
"id": "L10-005",
"lec": "L10",
"type": "term",
"level": 1,
"q": "Which formula is Cover's count of linearly separable dichotomies of $n$ points in general position, for a unit with $p$ weights and no extra bias?",
"choices": [
"$C(n,p)=2\\sum_{k=0}^{p-1}\\binom{n-1}{k}$",
"$C(n,p)=2\\sum_{k=0}^{p}\\binom{n-1}{k}$",
"$C(n,p)=2\\sum_{k=0}^{p-1}\\binom{n}{k}$",
"$C(n,p)=\\sum_{k=0}^{p-1}\\binom{n-1}{k}$"
],
"answer": 0,
"why": "Check $C(4,3)=2(1+3+3)=14$. B gives $16$ (too many: XOR fails), C gives $22>2^4$ (impossible), D lacks the factor 2 (every dichotomy has its flipped partner).",
"zh": "Cover 公式 $C(n,p)=2\\sum_{k=0}^{p-1}\\binom{n-1}{k}$。"
},
{
"id": "L10-006",
"lec": "L10",
"type": "term",
"level": 2,
"q": "Which recursion for the number of separable dichotomies $C(n,p)$ does adding the point $x_{n+1}$ give?",
"choices": [
"$C(n+1,p)=C(n,p)+C(n,p+1)$",
"$C(n+1,p)=C(n,p)+C(n,p-1)$",
"$C(n+1,p)=C(n,p)+C(n-1,p-1)$",
"$C(n+1,p)=2\\,C(n,p)$"
],
"answer": 1,
"why": "Every old dichotomy extends by at least one label; it extends by both labels iff a separating plane can pass through the new point, a problem with one weight fewer, counted by $C(n,p-1)$. D would hold if every dichotomy were doubly extendable ($n\\le p$).",
"zh": "递推 $C(n+1,p)=C(n,p)+C(n,p-1)$：新点能被两种标记延伸的数目少一个自由度。"
},
{
"id": "L10-007",
"lec": "L10",
"type": "term",
"level": 1,
"q": "For points in the plane and a unit $\\sigma(w^Tx+b)$ one uses homogeneous coordinates $x=(1,x_1,x_2)^T$. What does this say?",
"choices": [
"The boundary is a line in $\\mathbb R^2$ with $p=2$ weights and no bias",
"The boundary is $w^Tx=1$ with $p=2$ weights",
"The boundary is a plane through the origin of $\\mathbb R^3$ with $p=3$ weights",
"The boundary is a plane through the origin of $\\mathbb R^4$ with $p=4$ weights"
],
"answer": 2,
"why": "The bias becomes the weight of the constant coordinate $x_0=1$, so $w^Tx+b\\to w^Tx$ with $w\\in\\mathbb R^3$; the data lie in the plane $x_0=1$ and the plane through the origin cuts it in a line. In Cover's formula, $p=3$, not 2.",
"zh": "齐次坐标：偏置并入权重，平面数据对应 $p=3$ 个权重。"
},
{
"id": "L10-008",
"lec": "L10",
"type": "term",
"level": 1,
"q": "One fold $|\\cdot|$ unit per layer on $x\\in[-1,1]$. How many linear pieces does $L$ layers give, versus one layer of $L$ such units?",
"choices": [
"$L+1$ versus $2^L$",
"$2L$ versus $L^2$",
"$2^L$ versus $2^L$",
"$2^L$ versus $L+1$"
],
"answer": 3,
"why": "Each fold doubles the pieces (depth: exponential), while $L$ units in one layer add $L$ kinks to a function of one variable and give at most $L+1$ pieces (width: linear). A swaps the two.",
"zh": "折叠：深度 $L\\to2^L$ 段；宽度 $L\\to$ 至多 $L+1$ 段。"
},
{
"id": "L10-009",
"lec": "L10",
"type": "term",
"level": 2,
"q": "What is the largest number of regions into which $q$ ReLU hyperplanes (lines) of one hidden layer can cut a 2-D input plane?",
"choices": [
"$1+q+\\binom q2$",
"$q^2$",
"$q+1$",
"$2^q$"
],
"answer": 0,
"why": "$q$ lines in general position cut the plane into $1+q+\\binom q2$ regions ($q=24$: $301$). C is the 1-D count, D counts sign patterns but lines cannot realise them all for $q\\ge3$ ($q=3$: $7<8$).",
"zh": "二维中 $q$ 条线最多 $1+q+\\binom q2$ 个线性区域。"
},
{
"id": "L10-010",
"lec": "L10",
"type": "term",
"level": 1,
"q": "Widths $d_0=p,d_1,\\dots,d_L$ plus one output unit $d_{L+1}$, each unit with a bias. Which formula gives the number of parameters?",
"choices": [
"$\\sum_l d_l\\,d_{l-1}$",
"$\\sum_l d_l\\,(d_{l-1}+1)$",
"$\\sum_l d_l\\,(d_{l-1}+d_l)$",
"$\\sum_l (d_{l-1}+1)$"
],
"answer": 1,
"why": "Layer $l$ has a weight matrix $d_l\\times d_{l-1}$ plus a bias vector of length $d_l$: $d_l(d_{l-1}+1)$. A forgets the biases; C and D do not count one weight per input per unit.",
"zh": "参数数$=\\sum d_l(d_{l-1}+1)$：权重矩阵加偏置向量。"
},
{
"id": "L10-011",
"lec": "L10",
"type": "term",
"level": 2,
"q": "Which statement is exactly what the universal approximation theorem says (one hidden layer, $g=\\sum_ja_j\\varphi(w_j^Tx+b_j)$)?",
"choices": [
"Any continuous $f$, any $\\varphi$, with just two hidden units",
"Gradient descent finds the weights for any continuous $f$",
"Some $d$ gives $\\sup_K|f-g|<\\varepsilon$ ($f$ continuous, $\\varphi$ non-polynomial)",
"Depth is not needed for efficiency: $d$ grows only polynomially in $p$"
],
"answer": 2,
"why": "The theorem is an existence statement; it says nothing about how large $d$ must be (possibly exponential in $p$), whether training finds such weights, or generalisation. A polynomial $\\varphi$ fails the hypothesis.",
"zh": "万能逼近：紧集上连续函数、非多项式激活，存在足够多单元；不保证可学习。"
},
{
"id": "L10-012",
"lec": "L10",
"type": "term",
"level": 3,
"q": "Features $\\Phi\\in\\mathbb R^{P\\times n}$ with $P>n$ (full column rank). Gradient descent from $w=0$ on $\\lVert y-\\Phi^Tw\\rVert^2$ converges to which interpolant?",
"choices": [
"$(\\Phi\\Phi^T)^{-1}\\Phi y$",
"$\\Phi^T(\\Phi\\Phi^T)^{-1}y$",
"$(\\Phi^T\\Phi)^{-1}\\Phi^Ty$",
"$\\Phi(\\Phi^T\\Phi)^{-1}y$"
],
"answer": 3,
"why": "GD updates are $\\propto\\Phi(\\cdot)$, so $w=\\Phi c$; solving $\\Phi^T\\Phi c=y$ gives $\\hat w=\\Phi(\\Phi^T\\Phi)^{-1}y=\\Phi^{+}y$, the minimum-norm solution ($P\\times1$). A is the $P<n$ least squares (singular here); B and C have wrong shapes.",
"zh": "$P>n$ 时 GD 收敛到最小范数插值 $\\hat w=\\Phi(\\Phi^T\\Phi)^{-1}y=\\Phi^+y$。"
},
{
"id": "L10-013",
"lec": "L10",
"type": "calc",
"level": 1,
"q": "An MLP with $p=5$ inputs, hidden layers of 4 and 3 units, and 1 output unit, all with biases. How many parameters?",
"choices": [
"$35$",
"$39$",
"$43$",
"$47$"
],
"answer": 2,
"why": "$4\\cdot(5+1)+3\\cdot(4+1)+1\\cdot(3+1)=24+15+4=43$. A forgets all biases ($20+12+3$), B counts biases only in the first two layers, D uses the transposed count $\\sum d_{l-1}(d_l+1)$.",
"zh": "参数数$=4\\times6+3\\times5+1\\times4=43$（每单元 $d_{l-1}$ 个权重 + 1 个偏置）。"
},
{
"id": "L10-014",
"lec": "L10",
"type": "calc",
"level": 2,
"q": "How many linearly separable dichotomies does Cover's formula give for $n=5$ points in general position and $p=3$ weights?",
"choices": [
"$10$",
"$30$",
"$32$",
"$22$"
],
"answer": 3,
"why": "$C(5,3)=2\\big(\\binom40+\\binom41+\\binom42\\big)=2(1+4+6)=22$. C is all $2^5$ labelings (only valid for $n\\le p$), B uses $p=4$, A uses $p=2$.",
"zh": "$C(5,3)=2(1+4+6)=22$，小于 $2^5=32$。"
},
{
"id": "L10-015",
"lec": "L10",
"type": "calc",
"level": 2,
"q": "Five distinct points on a line, classified by a threshold unit with bias ($p=2$ in homogeneous coordinates). How many of the $2^5=32$ dichotomies are separable?",
"choices": [
"$10$",
"$12$",
"$22$",
"$32$"
],
"answer": 0,
"why": "$C(5,2)=2\\big(\\binom40+\\binom41\\big)=2\\cdot5=10$: 4 gaps plus \"all one class\" give 5 cut positions, times 2 orientations. B counts 6 cuts (one too many); C is $C(5,3)$.",
"zh": "线上 $n$ 点：$2n=10$ 种可分标记（5 个切点$\\times$2 个方向）。"
},
{
"id": "L10-016",
"lec": "L10",
"type": "calc",
"level": 2,
"q": "XOR network: $h_1=\\operatorname{ReLU}(x_1+x_2)$, $h_2=\\operatorname{ReLU}(x_1+x_2-1)$, $\\hat y=h_1-2h_2$. What are $\\hat y$ at inputs $(1,1)$ and $(1,0)$?",
"choices": [
"$2$ and $1$",
"$0$ and $1$",
"$1$ and $0$",
"$0$ and $0$"
],
"answer": 1,
"why": "At $(1,1)$: $h_1=2,h_2=1$, $\\hat y=2-2=0$. At $(1,0)$: $h_1=1$, $h_2=\\operatorname{ReLU}(0)=0$, $\\hat y=1$. A drops $h_2$ (a linear model cannot solve XOR).",
"zh": "XOR 的 ReLU 网络：$(1,1)\\to0$，$(1,0)\\to1$。"
},
{
"id": "L10-017",
"lec": "L10",
"type": "calc",
"level": 2,
"q": "Folding network $h_1=|x|$, $h_2=|2h_1-1|$, $h_3=|2h_2-1|$. What is $h_3(0.25)$?",
"choices": [
"$1$",
"$0.5$",
"$0$",
"$0.25$"
],
"answer": 2,
"why": "$h_1=0.25$, $h_2=|0.5-1|=0.5$, $h_3=|1-1|=0$. This is a kink of $h_3$ (where $h_2=\\tfrac12$), one of the 7 kinks that make 8 linear pieces.",
"zh": "$h_1=0.25$，$h_2=0.5$，$h_3=0$：正是 $h_3$ 的一个折点。"
},
{
"id": "L10-018",
"lec": "L10",
"type": "calc",
"level": 2,
"q": "One hidden layer of $q=10$ ReLU units on a 2-D input. What is the maximum number of linear regions?",
"choices": [
"$46$",
"$55$",
"$100$",
"$56$"
],
"answer": 3,
"why": "$1+q+\\binom q2=1+10+45=56$. B forgets the \"1\", A forgets the $q$ term, C is $q^2$.",
"zh": "$1+10+45=56$ 个区域。"
},
{
"id": "L10-019",
"lec": "L10",
"type": "calc",
"level": 2,
"q": "Hidden units $z_1=\\sigma(\\beta(x_1-x_2-0.8))$, $z_2=\\sigma(\\beta(x_1+x_2-3.5))$, $f=\\sigma(\\beta(\\tfrac12-z_1-z_2))$. For $x=(2,\\,2.5)$ and $\\beta\\to\\infty$, what are $(z_1,z_2)$ and $f$?",
"choices": [
"$(0,1)$ and $f\\to0$",
"$(1,0)$ and $f\\to0$",
"$(0,0)$ and $f\\to1$",
"$(1,1)$ and $f\\to1$"
],
"answer": 0,
"why": "$x_1-x_2-0.8=-1.3<0\\Rightarrow z_1=0$; $x_1+x_2-3.5=1>0\\Rightarrow z_2=1$. Then $\\tfrac12-0-1<0$, so $f\\to0$. Only $z_1=z_2=0$ (region d) gives $f\\to1$.",
"zh": "逐个单元判断符号：$z_1=0$，$z_2=1$，所以 $f\\to0$（不在区域 d）。"
},
{
"id": "L10-020",
"lec": "L10",
"type": "calc",
"level": 3,
"q": "Minimum-norm interpolation, one sample $x=(1,2)^T$, label $y=5$, model $y=w^Tx$, $\\hat w=x(x^Tx)^{-1}y$. What is the prediction at $x'=(2,1)^T$?",
"choices": [
"$5$",
"$4$",
"$10$",
"$0$"
],
"answer": 1,
"why": "$x^Tx=5$, so $\\hat w=\\tfrac55(1,2)^T=(1,2)^T$ and $\\hat w^Tx'=2+2=4$. C comes from the interpolant $w=(5,0)$ (not min-norm), D would be the prediction for $x'\\perp x$.",
"zh": "最小范数解 $\\hat w=(1,2)$，预测 $w^Tx'=4$。"
},
{
"id": "L10-021",
"lec": "L10",
"type": "calc",
"level": 3,
"q": "Isotropic features, $\\gamma=P/n=2$, $\\|w^*\\|^2=4$, noise $\\sigma^2=1$. Excess risk for $\\gamma>1$ is $\\|w^*\\|^2(1-\\frac1\\gamma)+\\frac{\\sigma^2}{\\gamma-1}$. Value?",
"choices": [
"$2$",
"$5$",
"$3$",
"$1$"
],
"answer": 2,
"why": "$4\\,(1-\\tfrac12)+\\tfrac{1}{2-1}=2+1=3$. A forgets the noise term, D the bias term, B drops the factor $(1-1/\\gamma)$ ($4+1$).",
"zh": "$\\gamma>1$ 分支：$4\\times(1/2)+1/(2-1)=3$。"
},
{
"id": "L10-022",
"lec": "L10",
"type": "calc",
"level": 2,
"q": "$p=4$ weights, $n=2p=8$ points in general position. What fraction of the $2^8$ dichotomies is separable, using $C(n,p)=2\\sum_{k=0}^{p-1}\\binom{n-1}{k}$?",
"choices": [
"$\\tfrac14$",
"$\\tfrac34$",
"$1$",
"$\\tfrac12$"
],
"answer": 3,
"why": "$C(8,4)=2(1+7+21+35)=128=2^7$, and $128/256=\\tfrac12$. In general the fraction at $n=2p$ is exactly $\\tfrac12$ by the symmetry of the binomial coefficients.",
"zh": "$C(8,4)=128=2^7$，占 $2^8$ 的一半：$n=2p$ 时恒为 $1/2$。"
},
{
"id": "L10-023",
"lec": "L10",
"type": "calc",
"level": 1,
"q": "Each layer of 2 $|\\cdot|$ units folds the 2-D plane into 4 copies. Five such layers give at most how many regions?",
"choices": [
"$1024$",
"$20$",
"$625$",
"$32$"
],
"answer": 0,
"why": "Copies multiply layer by layer: $4^5=1024$ (the lecture's 12 layers give $4^{12}\\approx1.7\\times10^7$). B adds ($4\\cdot5$), C is $5^4$, D is $2^5$.",
"zh": "逐层相乘：$4^5=1024$。"
},
{
"id": "L10-024",
"lec": "L10",
"type": "calc",
"level": 2,
"q": "A purely linear network $x\\in\\mathbb R^{10}\\to\\mathbb R^3\\to\\mathbb R^8\\to\\mathbb R^4$ (matrices $3\\times10$, $8\\times3$, $4\\times8$) has $W_{\\rm eff}$ of shape $4\\times10$. Its maximal rank is",
"choices": [
"$4$",
"$3$",
"$8$",
"$10$"
],
"answer": 1,
"why": "$W_{\\rm eff}=W_3W_2W_1$ and the rank is at most the narrowest dimension, $\\min(10,3,8,4)=3$: the 3-unit layer is a bottleneck. A is only the shape bound of $W_{\\rm eff}$ itself.",
"zh": "秩 $\\le$ 最窄维度$=3$（瓶颈层）。"
},
{
"id": "L10-025",
"lec": "L10",
"type": "pic",
"level": 2,
"q": "Higgs benchmark: boosted trees go from AUC 0.73 (raw) to 0.81 (raw + 7 masses), the five-layer net from 0.880 to only 0.885. What does this look like?",
"choices": [
"The masses carry new measurements the deep net does not have",
"The deep net overfits, so extra inputs do not help",
"Trees ignore the masses and the deep net uses them",
"The masses are nonlinear functions of the raw inputs; the deep net learns them itself"
],
"answer": 3,
"why": "Shallow models cannot construct the masses, so given them they gain a lot. The deep net's hidden layers compute them, so supplying them again adds almost nothing. A is wrong: the masses are built *from* the 21 measured quantities.",
"zh": "质量是原始量的非线性函数，深层网络自己学到了，所以再给也几乎没增益。"
},
{
"id": "L10-026",
"lec": "L10",
"type": "pic",
"level": 1,
"q": "Pion/kaon tracks form two curved bands in $(\\log|p|,\\,dE/dx)$. Two hidden units feed one output unit. What does the plot in the hidden coordinates $(z_1,z_2)$ show?",
"choices": [
"The bands cross even more than before",
"The boundary is still a curve there",
"A straight line separates the species",
"Only one hidden unit matters"
],
"answer": 2,
"why": "The hidden layer is a learned nonlinear change of coordinates; the output unit is plain logistic regression there. In the original plane the straight line in $(z_1,z_2)$ becomes a bent boundary, with error $0.035$ vs. $0.077$.",
"zh": "隐层是学到的坐标变换，在 (z₁,z₂) 里一条直线即可分开。"
},
{
"id": "L10-027",
"lec": "L10",
"type": "pic",
"level": 1,
"q": "The two hidden units of the pion/kaon network are made linear (no $\\varphi$). What does the decision boundary look like?",
"choices": [
"Bent, where the two hidden lines cross",
"A single straight line: the two lines collapse into one",
"Two parallel lines",
"A closed curve"
],
"answer": 1,
"why": "Without $\\varphi$ the network is $\\hat y=\\sigma(w_{\\rm eff}^Tx+b)$ with a single effective weight vector, i.e. logistic regression with a straight boundary and the same error 0.077. The bend came from the nonlinearity.",
"zh": "没有非线性，两条隐层直线合并为一条，等于普通逻辑回归。"
},
{
"id": "L10-028",
"lec": "L10",
"type": "pic",
"level": 2,
"q": "Four points in general position in the plane. How many of their 16 labelings are linearly separable and what do the failures look like?",
"choices": [
"14; the failures are the XOR labelings where equal labels sit on crossing segments",
"15; one labeling with an interior point fails",
"16; $p=3$ weights shatter any four points",
"14; the failures are all labelings with a 3 vs. 1 split"
],
"answer": 0,
"why": "$C(4,3)=14$. In the two failures the segments joining equally-labelled points cross (the diagonals are alike); with one point inside the triangle, the failures are \"inner alone vs. the three outer\" and its complement. Three points are always shattered, four are not.",
"zh": "4 点平面：14/16 可分，失败的是 XOR 型（同标记连线相交）。"
},
{
"id": "L10-029",
"lec": "L10",
"type": "pic",
"level": 2,
"q": "For large $p$ the separable fraction $C(n,p)/2^n$ is plotted against $n/p$. What does the curve look like?",
"choices": [
"It starts to fall at $n/p=1$ and is $0$ at 2",
"A smooth decay like $1/n$",
"A step at $n/p=3$",
"It is 1 up to $n/p=1$, equals $\\tfrac12$ at $n/p=2$ and approaches a step there"
],
"answer": 3,
"why": "For $n\\le p$ all dichotomies are separable (shattered); at $n=2p$ the fraction is exactly $\\tfrac12$ and sharpens to a step as $p\\to\\infty$. Hence a unit with $p$ weights stores about $2p$ random labels (general position assumed).",
"zh": "$n\\le p$ 全可分，$n=2p$ 时占一半，$p$ 大时在 $n/p=2$ 处变成台阶。"
},
{
"id": "L10-030",
"lec": "L10",
"type": "pic",
"level": 2,
"q": "In the two-hidden-unit demo, region d (the only region with $+$) is cut off by two dashed lines. Where does it sit in the hidden plane $(z_1,z_2)$?",
"choices": [
"At the centre of the square, needing two lines",
"At the corner $(1,1)$, cut off by $z_1+z_2=\\tfrac32$",
"At the corner at the origin, cut off by the single line $z_1+z_2=\\tfrac12$",
"Spread along the diagonal"
],
"answer": 2,
"why": "Region d lies on the negative side of both hidden lines, so $z_1\\approx z_2\\approx0$: the corner at the origin. One output line $\\tfrac12-z_1-z_2=0$ separates it from the other three corners; no single line does so in the input plane.",
"zh": "区域 d 两个 $z$ 都 $\\approx0$，位于原点角，输出层一条线 $z_1+z_2=1/2$ 就切下来。"
},
{
"id": "L10-031",
"lec": "L10",
"type": "pic",
"level": 3,
"q": "In the same demo, the sharpness $\\beta$ in all three sigmoids $\\sigma(\\beta\\,\\cdot)$ is increased. What changes?",
"choices": [
"The decision regions become smoother and overlap",
"Hidden plane collapses onto 4 corners; $f$ becomes the indicator of region d (AND)",
"The hidden lines move towards each other",
"$f$ becomes linear in $x$"
],
"answer": 1,
"why": "Each $\\sigma(\\beta s)$ tends to a step, so $(z_1,z_2)\\in\\{0,1\\}^2$ and $f\\to1$ only for $z_1=z_2=0$: logical AND of two half-planes. The lines' positions $s=0$ do not depend on $\\beta$.",
"zh": "$\\beta$ 增大 $\\to$ 每个 sigmoid 变阶跃，$f$ 变成两个半平面的 AND 指示函数。"
},
{
"id": "L10-032",
"lec": "L10",
"type": "pic",
"level": 3,
"q": "$h_3=|2|2|x|-1|-1|$ on $x\\in[-1,1]$ is a sawtooth in $[0,1]$. A threshold at height $t=0.5$ is crossed how many times, versus a single layer of 3 $|\\cdot|$ units?",
"choices": [
"8 times, versus at most 4 pieces (3 kinks)",
"4 times, versus 3 pieces",
"3 times, versus 8 pieces",
"6 times, versus 4 pieces"
],
"answer": 0,
"why": "$h_3$ has 7 kinks, so 8 linear pieces, each running once across $[0,1]$: 8 crossings, alternating class regions. One layer of 3 units gives 3 kinks and at most 4 pieces. Depth gives $2^L$, width only $L+1$.",
"zh": "h₃ 有 8 段锯齿，阈值被穿过 8 次；同样 3 个单元单层最多 4 段。"
},
{
"id": "L10-033",
"lec": "L10",
"type": "pic",
"level": 3,
"q": "A randomly initialised ReLU net (3 hidden layers of 8 units, 2-D input) is drawn with its linear regions. What count is typical?",
"choices": [
"About $1.7\\times10^7$, the folding maximum",
"Exactly $301$, the one-layer maximum for 24 units",
"About $24$, one region per unit",
"About $115$, fewer than even one layer of 24 units could make"
],
"answer": 3,
"why": "Boundaries of deeper layers bend where they cross earlier ones, but random weights realise only about 115 regions, below the one-layer bound 301 and far below the folding bound. The exponential count is a possibility of depth, not what typical networks realise.",
"zh": "随机权重网络只有约 115 个区域，远低于 301 和折叠上界。"
},
{
"id": "L10-034",
"lec": "L10",
"type": "pic",
"level": 2,
"q": "In 1-D, $\\operatorname{ReLU}(x-t_1)-\\operatorname{ReLU}(x-t_2)$ is a ramp, differences of ramps give bumps, bumps approximate any continuous $f$. What does this picture prove, and what does it leave open?",
"choices": [
"That training always finds the bumps; width is polynomial",
"That one hidden unit suffices for any $f$",
"Existence of approximating weights; not the number of units, training, or generalisation",
"That depth is useless"
],
"answer": 2,
"why": "The construction shows existence only. In $p$ dimensions the needed number of bumps can grow exponentially with $p$, and nothing says gradient descent finds them or that they generalise. Depth can still be exponentially more efficient (folding).",
"zh": "逼近定理只给存在性：不管单元数、能否训练、泛化如何。"
},
{
"id": "L10-035",
"lec": "L10",
"type": "pic",
"level": 1,
"q": "Test error vs. number of parameters $P$ for a fitted regression with $n$ samples, in the modern (double-descent) picture. What happens near $P\\approx n$?",
"choices": [
"The error decreases monotonically",
"A peak at $P\\approx n$, then the error decreases again",
"A classical U-curve with its minimum at $P\\approx n$",
"A peak at $P\\approx n$, then the error rises forever"
],
"answer": 1,
"why": "At the interpolation threshold the smallest model fits the training data exactly and variance explodes; beyond it, minimum-norm interpolation acts as implicit regularisation and the error falls again. Note: the lecture slides did not cover this (preview).",
"zh": "双下降：插值阈值 P≈n 处误差出现峰值，之后再次下降。"
},
{
"id": "L10-036",
"lec": "L10",
"type": "pic",
"level": 3,
"q": "Random features $\\Phi\\in\\mathbb R^{P\\times n}$ with SVD $\\Phi=U\\Sigma V^T$ and $\\hat w=\\sum_k\\frac1{s_k}u_kv_k^Ty$. Why does the variance explode at $P\\approx n$?",
"choices": [
"$s_{\\min}$ of the square-ish $\\Phi$ is near 0, so noise is amplified by $1/s_k$",
"All singular values are equal, so nothing is regularised",
"The largest singular value diverges",
"$\\Phi\\Phi^T$ becomes exactly the identity"
],
"answer": 0,
"why": "A nearly square random matrix has some $s_{\\min}\\approx0$, so noise in $y$ along that direction is multiplied by $1/s_{\\min}$. For $P\\gg n$ the smallest nonzero singular value grows again and the minimum-norm choice tames the noise.",
"zh": "$P\\approx n$ 时最小奇异值接近 0，噪声被 $1/s_k$ 放大 $\\to$ 方差爆炸。"
},
{
"id": "L11-001",
"lec": "L11",
"type": "term",
"level": 1,
"q": "A network predicts the expected photo-electron count $\\mu>0$ of a PMT from the observed integer count $y$. Which output activation and loss correspond to the Poisson likelihood?",
"choices": [
"identity, $\\tfrac12(y-\\mu)^2$",
"exp or softplus, $\\mu-y\\log\\mu$",
"sigmoid, binary cross-entropy",
"exp or softplus, $y-\\mu\\log y$"
],
"answer": 1,
"why": "Poisson NLL is $\\mu-y\\log\\mu$ (plus a constant), and $\\mu$ must be positive, hence exp/softplus. D swaps the roles of $\\mu$ and $y$; A is the fixed-noise Gaussian.",
"zh": "Poisson 计数 → 输出用 exp/softplus 保证 $\\mu>0$，损失 $\\mu-y\\log\\mu$。"
},
{
"id": "L11-002",
"lec": "L11",
"type": "term",
"level": 1,
"q": "For a ReLU layer with $d_{\\text{in}}$ inputs, He initialisation draws zero-mean i.i.d. weights with variance $v$ equal to",
"choices": [
"$1/d_{\\text{in}}$",
"$2/(d_{\\text{in}}+d_{\\text{out}})$",
"$1/(2d_{\\text{in}})$",
"$2/d_{\\text{in}}$"
],
"answer": 3,
"why": "ReLU halves $\\mathbb E[h^2]$, so $\\operatorname{Var}(z^{(l)})=\\tfrac12 d_{\\text{in}}v\\operatorname{Var}(z^{(l-1)})$ stays constant for $v=2/d_{\\text{in}}$. A is for tanh/linear, B is Xavier/Glorot.",
"zh": "He 初始化 $v=2/d_{\\text{in}}$（ReLU 把二阶矩减半）；Xavier 是 $2/(d_{in}+d_{out})$。"
},
{
"id": "L11-003",
"lec": "L11",
"type": "term",
"level": 1,
"q": "Adding the penalty $\\frac\\lambda2\\lVert w\\rVert^2$ to a loss (unit noise variance) is the same as which Bayesian statement?",
"choices": [
"MAP estimation with Gaussian prior $w\\sim\\mathcal N(0,\\lambda^{-1}I)$",
"MAP estimation with Laplace prior on each $w_j$",
"Maximum likelihood with Gaussian noise of variance $\\lambda$",
"MAP estimation with Gaussian prior $w\\sim\\mathcal N(0,\\lambda I)$"
],
"answer": 0,
"why": "$-\\log p(w)=\\frac\\lambda2\\lVert w\\rVert^2$ needs prior precision $\\lambda$, i.e. variance $\\lambda^{-1}$. D confuses precision with variance; B (Laplace) gives the L1/lasso penalty.",
"zh": "weight decay = ridge = 高斯先验的 MAP，先验精度 $\\lambda$、方差 $1/\\lambda$。"
},
{
"id": "L11-004",
"lec": "L11",
"type": "term",
"level": 2,
"q": "$Z\\in\\mathbb R^{d\\times n}$ holds pre-activations (rows = features $k$, columns = samples $i$). Which expression is the batch-norm mean $\\mu_k$ of feature $k$ over a batch of $n$ samples?",
"choices": [
"$\\frac1d\\sum_{k}z_{ki}$",
"$\\frac1{nd}\\sum_{k,i}z_{ki}$",
"$\\frac1n\\sum_{i}z_{ki}$",
"$\\frac1n\\sum_{i}z_{ki}^2$"
],
"answer": 2,
"why": "BN averages each **row** over the samples. A is the layer-norm mean of one sample $i$ (a column), B is a single scalar for the whole matrix, D is a second moment.",
"zh": "BN：每个特征（行）沿样本求均值 $\\frac1n\\sum_i z_{ki}$；LN 则沿列。"
},
{
"id": "L11-005",
"lec": "L11",
"type": "term",
"level": 2,
"q": "Inverted dropout multiplies hidden unit $j$ during training by $m_j/(1-q)$, with $m_j\\sim\\text{Bernoulli}(1-q)$. What is done at test time?",
"choices": [
"Use all units and multiply activations by $(1-q)$",
"Use all units, no rescaling",
"Drop each unit with probability $q$ and average several passes",
"Use all units and divide activations by $(1-q)$"
],
"answer": 1,
"why": "$\\mathbb E[m_jh_j/(1-q)]=h_j$ already holds in training, so the test-time network is just the full one. A would be the non-inverted convention; doing both double-counts.",
"zh": "反向 dropout：训练时已除以 $1-q$，测试时全部单元、不再缩放。"
},
{
"id": "L11-006",
"lec": "L11",
"type": "calc",
"level": 1,
"q": "One GD step on $E_\\lambda(w)=E(w)+\\frac\\lambda2w^2$ with $\\eta=0.1$, $\\lambda=0.5$, at $w=2$ where $E'(2)=1$. What is the new $w$?",
"choices": [
"$1.8$",
"$1.9$",
"$1.7$",
"$2.0$"
],
"answer": 0,
"why": "$w\\leftarrow(1-\\eta\\lambda)w-\\eta E'=0.95\\cdot2-0.1=1.8$. B forgets the decay term; C uses a penalty without the factor $\\tfrac12$ (gradient $2\\lambda w$).",
"zh": "$w\\leftarrow(1-\\eta\\lambda)w-\\eta\\nabla E$：衰减因子 0.95 乘 $w$，再减去梯度项。"
},
{
"id": "L11-007",
"lec": "L11",
"type": "calc",
"level": 2,
"q": "Heteroscedastic Gaussian NLL, dropping the constant: $\\tfrac12\\log\\sigma^2+\\frac{(y-\\mu)^2}{2\\sigma^2}$. For $y=3$, $\\mu=1$, $\\sigma^2=2$ (natural log) the value is",
"choices": [
"$1.00$",
"$1.69$",
"$1.76$",
"$1.35$"
],
"answer": 3,
"why": "$\\tfrac12\\ln2=0.347$ and $(2)^2/(2\\cdot2)=1$, total $1.35$. A forgets the log term, B uses $\\log\\sigma^2$ without $\\tfrac12$, C divides by $2\\sigma$ instead of $2\\sigma^2$.",
"zh": "异方差 NLL：$\\frac12\\log\\sigma^2+\\frac{r^2}{2\\sigma^2}$，代入 $r=2,\\sigma^2=2$。"
},
{
"id": "L11-008",
"lec": "L11",
"type": "calc",
"level": 2,
"q": "ReLU MLP, every layer has $d_{\\text{in}}=256$, weights i.i.d. with variance $v=1/256$ (LeCun). The pre-activation **variance** is multiplied after 8 layers by about",
"choices": [
"$1$",
"$1/16$",
"$1/256$",
"$1/8$"
],
"answer": 2,
"why": "Per layer $\\tfrac12 d_{\\text{in}}v=\\tfrac12$, so $2^{-8}=1/256$. B is the factor for the standard deviation ($2^{-4}$), A would need He initialisation $v=2/256$.",
"zh": "每层方差乘 $\\frac12 d_{in}v=\\frac12$，8 层 $2^{-8}$；标准差才是 $1/16$。"
},
{
"id": "L11-009",
"lec": "L11",
"type": "calc",
"level": 3,
"q": "Quadratic loss, Hessian eigenvalue $\\lambda_k=0.2$. GD from $w_0=0$ with $\\eta=0.01$ for $t=500$ steps. Use $(1-x)^t\\approx e^{-xt}$. What fraction $1-(1-\\eta\\lambda_k)^t$ of the least-squares value is reached along this direction?",
"choices": [
"$0.37$",
"$0.63$",
"$0.50$",
"$1.00$"
],
"answer": 1,
"why": "$\\eta\\lambda_kt=1$, so the fraction is $1-e^{-1}=0.63$. A is the remaining part $e^{-1}$. C is the ridge value $\\lambda_k/(\\lambda_k+\\alpha)$ with $\\alpha=1/(\\eta t)=0.2$, which only approximates it.",
"zh": "早停第 $k$ 方向已拟合比例 $1-(1-\\eta\\lambda_k)^t$；与岭回归 $\\alpha\\approx1/(\\eta t)$ 仅近似。"
},
{
"id": "L11-010",
"lec": "L11",
"type": "calc",
"level": 2,
"q": "One feature row of $Z$ over a batch of 4 samples is $z=(1,3,5,7)$. Batch norm with $\\epsilon\\to0$, $\\gamma=1$, $\\beta=0$ (variance uses $1/|\\mathcal B|$). The normalised value $\\hat z_1$ of the first sample is",
"choices": [
"$-1.34$",
"$-1.16$",
"$-0.60$",
"$-3.00$"
],
"answer": 0,
"why": "$\\mu=4$, $\\sigma^2=(9+1+1+9)/4=5$, so $\\hat z_1=-3/\\sqrt5=-1.34$. B uses the $n-1$ variance, C forgets the square root, D only subtracts the mean.",
"zh": "BN：减均值 4，除以 $\\sqrt{\\sigma^2}=\\sqrt5$（方差用 $1/n$）。"
},
{
"id": "L11-011",
"lec": "L11",
"type": "pic",
"level": 1,
"q": "In a deep MLP with sigmoid activations, you plot the size of the error vector $\\delta^{(l)}$ against layer $l$, from the output layer back to the input layer. What does the curve typically look like?",
"choices": [
"Constant, because backprop is exact",
"Growing geometrically, because the weights multiply up",
"Oscillating with a fixed amplitude",
"Shrinking geometrically, roughly like $(1/4)^{\\#\\text{layers}}$ times weight factors"
],
"answer": 3,
"why": "Each backward step multiplies by $\\operatorname{diag}(\\varphi'(z))W$ with $\\varphi'\\le1/4$ for the sigmoid, so the signal decays exponentially with depth. Exactness of backprop says nothing about magnitude.",
"zh": "sigmoid 的 $\\varphi'\\le1/4$，反向传播逐层缩小 → 梯度消失。"
},
{
"id": "L11-012",
"lec": "L11",
"type": "pic",
"level": 2,
"q": "A residual block $h'=h+F(h)$ is differentiated backwards: $\\frac{\\partial L}{\\partial h}=\\frac{\\partial L}{\\partial h'}\\big(I+\\frac{\\partial F}{\\partial h}\\big)$. If $F$ is nearly flat, $\\partial F/\\partial h\\approx0$, what happens to the error signal on this block?",
"choices": [
"It vanishes, because the factor is $0$",
"It is multiplied by $1/4$",
"It passes through essentially unchanged along the skip path",
"Its sign is flipped"
],
"answer": 2,
"why": "The Jacobian is $I+\\partial F/\\partial h\\approx I$, an identity \"highway\" for gradients. A would hold for a plain layer $h'=F(h)$ with $F$ flat.",
"zh": "残差块的雅可比 $I+\\partial F/\\partial h$：跳连给梯度一条恒等通路。"
},
{
"id": "L11-013",
"lec": "L11",
"type": "pic",
"level": 3,
"q": "Picture $Z\\in\\mathbb R^{d\\times n}$ (rows = features, columns = samples) and highlight one **column**. Which normalisation uses the mean/variance of the highlighted entries, and how does it behave at test time?",
"choices": [
"Layer norm; identical in training and test",
"Batch norm; uses running averages at test time",
"Layer norm; uses running averages at test time",
"Batch norm; identical in training and test"
],
"answer": 0,
"why": "One column = one sample over its features, which is layer norm; it needs no batch, so train and test agree. Batch norm normalises a row and switches to running averages in eval mode.",
"zh": "一列（单样本跨特征）= LayerNorm，训练/测试一致；BN 是行 + 测试用滑动平均。"
},
{
"id": "L11-014",
"lec": "L11",
"type": "pic",
"level": 2,
"q": "Quadratic loss with Hessian eigenvalues $10$ (steep axis) and $0.1$ (flat axis). GD starts at $w=0$ and is stopped early (small $t$). Which picture is right, and what is its ridge analogue?",
"choices": [
"Flat axis fitted, steep axis still near $0$; like ridge on the high-curvature directions",
"Steep axis fitted, flat axis still near $0$; like ridge shrinking low-curvature directions",
"Both axes fitted equally; like no regularisation",
"Steep axis fitted, flat axis overshoots; like lasso"
],
"answer": 1,
"why": "Direction $k$ is fitted by $1-(1-\\eta\\lambda_k)^t$, fast for large $\\lambda_k$. Ridge gives $\\lambda_k/(\\lambda_k+\\alpha)$, which also shrinks small-$\\lambda_k$ directions most. A reverses the two.",
"zh": "早停≈岭：大曲率方向先被拟合，小曲率（平坦）方向仍接近 0。"
},
{
"id": "L12-001",
"lec": "L12",
"type": "term",
"level": 1,
"q": "Near a minimum the loss is $E\\approx E^*+\\tfrac12(\\theta-\\theta^*)^TH(\\theta-\\theta^*)$, so GD obeys $e_{t+1}=(I-\\eta H)e_t$. GD is stable for all directions if and only if",
"choices": [
"$\\eta<1/\\lambda_{\\max}$",
"$\\eta<2/\\lambda_{\\min}$",
"$\\eta<2/\\lambda_{\\max}$",
"$\\eta<2/(\\lambda_{\\max}+\\lambda_{\\min})$"
],
"answer": 2,
"why": "Each eigen-direction contracts by $|1-\\eta\\lambda_k|<1\\iff\\eta<2/\\lambda_k$; the largest $\\lambda$ is binding. D is the optimal step size, not the stability limit; A is only sufficient.",
"zh": "稳定条件 $|1-\\eta\\lambda_k|<1$ 对所有 $k$ ⇔ $\\eta<2/\\lambda_{\\max}$。"
},
{
"id": "L12-002",
"lec": "L12",
"type": "term",
"level": 1,
"q": "Scalar loss $L$, $z_2=W_2a_1+b_2$ with $W_2\\in\\mathbb R^{K\\times h}$, $a_1\\in\\mathbb R^h$, and error row $\\delta_2=\\partial L/\\partial z_2\\in\\mathbb R^{1\\times K}$. Which expression is $\\partial L/\\partial W_2$, arranged like $W_2$?",
"choices": [
"$\\delta_2^Ta_1^T$, shape $K\\times h$",
"$a_1\\delta_2$, shape $h\\times K$",
"$W_2^T\\delta_2^T$, shape $h\\times1$",
"$\\delta_2W_2$, shape $1\\times h$"
],
"answer": 0,
"why": "$\\partial z_{2,i}/\\partial W_{2,ij}=a_{1,j}$, so the gradient is the outer product (error at the output)$^T\\times$(activation at the input)$^T$. B is its transpose, C and D are backprop to $a_1$.",
"zh": "$\\partial L/\\partial W_2=\\delta_2^Ta_1^T$：输出端误差与输入端激活的外积。"
},
{
"id": "L12-003",
"lec": "L12",
"type": "term",
"level": 2,
"q": "With column errors $g_2=\\delta_2^T\\in\\mathbb R^K$, $a_1=\\varphi(z_1)$ and $z_2=W_2a_1+b_2$, which formula gives $g_1=\\delta_1^T\\in\\mathbb R^h$?",
"choices": [
"$W_2\\,(\\varphi'(z_1)\\odot g_2)$",
"$\\varphi'(z_1)\\odot(W_2^Tg_2)$",
"$\\varphi'(z_1)\\odot(W_2g_2)$",
"$W_2^T\\,(\\varphi'(z_1)\\odot g_2)$"
],
"answer": 1,
"why": "Errors go backwards through the **transposed** weights, $W_2^Tg_2\\in\\mathbb R^h$, then are gated elementwise by $\\varphi'(z_1)$. C and A have wrong shapes ($W_2g_2$ is not defined); D multiplies $\\varphi'\\in\\mathbb R^h$ with $g_2\\in\\mathbb R^K$.",
"zh": "列向量形式：$g_1=\\varphi'(z_1)\\odot(W_2^Tg_2)$，误差经转置权重向后传。"
},
{
"id": "L12-004",
"lec": "L12",
"type": "term",
"level": 1,
"q": "Adam uses $m_t=\\beta_1m_{t-1}+(1-\\beta_1)g_t$ with $m_0=0$. Which expression is the bias-corrected first moment $\\hat m_t$?",
"choices": [
"$m_t/(1-\\beta_1)$",
"$m_t\\,(1-\\beta_1^t)$",
"$m_t/\\beta_1^t$",
"$m_t/(1-\\beta_1^t)$"
],
"answer": 3,
"why": "For stationary gradients $\\mathbb E[m_t]=(1-\\beta_1^t)\\bar g$, biased towards 0 early on, so divide by $1-\\beta_1^t$. A does not depend on $t$; B shrinks further instead of correcting.",
"zh": "偏差修正 $\\hat m_t=m_t/(1-\\beta_1^t)$，因为 $m_0=0$ 使早期估计偏向 0。"
},
{
"id": "L12-005",
"lec": "L12",
"type": "term",
"level": 2,
"q": "Which update is **AdamW** (decoupled weight decay $\\lambda$; $g$ = loss gradient; all operations elementwise)?",
"choices": [
"$\\theta-\\eta\\,\\hat m/(\\sqrt{\\hat v}+\\epsilon)+\\eta\\lambda\\theta$",
"$\\theta-\\eta\\,(\\hat m+\\lambda\\theta)/(\\sqrt{\\hat v}+\\epsilon)$",
"$\\theta-\\eta\\big(\\hat m/(\\sqrt{\\hat v}+\\epsilon)+\\lambda\\theta\\big)$",
"$\\theta-\\eta\\,\\hat m/(\\sqrt{\\hat v}+\\epsilon)$ with $g\\to g-\\lambda\\theta$"
],
"answer": 2,
"why": "In AdamW the decay $\\lambda\\theta$ is added outside the adaptive ratio, so it is uniform. B divides it by $\\sqrt{\\hat v}$, which is Adam with an L2 loss term; A has the wrong sign (growth); D has the wrong sign inside $g$.",
"zh": "AdamW：权重衰减项 $\\lambda\\theta$ 不除以 $\\sqrt{\\hat v}$，与 Adam+L2 不同。"
},
{
"id": "L12-006",
"lec": "L12",
"type": "calc",
"level": 2,
"q": "1–1–1 network, input $x=2$, $W_1=0.5$, ReLU, $W_2=3$, no biases, target $y=1$, $L=\\tfrac12(\\hat y-y)^2$ with $\\hat y=z_2$. What is $\\partial L/\\partial W_1$?",
"choices": [
"$12$",
"$6$",
"$4$",
"$18$"
],
"answer": 0,
"why": "Forward $z_1=1$, $a_1=1$, $\\hat y=3$. Backward $\\delta_2=2$, $\\delta_1=\\delta_2W_2\\varphi'(z_1)=6$, $\\partial L/\\partial W_1=\\delta_1x=12$. B forgets the input $x$, C forgets $W_2$.",
"zh": "$\\partial L/\\partial W_1=\\delta_1x$，其中 $\\delta_1=\\delta_2W_2\\varphi'(z_1)$。"
},
{
"id": "L12-007",
"lec": "L12",
"type": "calc",
"level": 3,
"q": "Adam at $t=1$ with $\\eta=0.01$, $(\\beta_1,\\beta_2)=(0.9,0.999)$, $\\epsilon$ negligible. Two parameters have gradients $g=(0.001,\\ 50)$. What is the update $\\Delta\\theta$?",
"choices": [
"$(-10^{-5},\\ -0.5)$",
"$(-0.0316,\\ -0.0316)$",
"$(-0.316,\\ -0.316)$",
"$(-0.01,\\ -0.01)$"
],
"answer": 3,
"why": "With bias correction $\\hat m_1=g$, $\\hat v_1=g^2$, so $\\Delta\\theta=-\\eta\\,\\mathrm{sign}(g)$ for every parameter. A is plain SGD; B uses no correction at all ($0.1g/\\sqrt{0.001}|g|$); C corrects only $m$.",
"zh": "Adam 第一步 $\\approx-\\eta\\,\\mathrm{sign}(g)$，每个参数移动约 $\\eta$，与梯度大小无关。"
},
{
"id": "L12-008",
"lec": "L12",
"type": "calc",
"level": 2,
"q": "$E=\\tfrac12(10w_1^2+w_2^2)$, so $\\lambda_{\\max}=10$, $\\lambda_{\\min}=1$. With the optimal GD step $\\eta=2/(\\lambda_{\\max}+\\lambda_{\\min})$, what is the per-step contraction factor of the slowest component?",
"choices": [
"$9/10$",
"$9/11$",
"$0.52$",
"$1/11$"
],
"answer": 1,
"why": "$\\eta=2/11$, so $|1-\\eta\\lambda|=9/11$ for both directions, i.e. $(\\kappa-1)/(\\kappa+1)$. A is $1-1/\\kappa$ (the factor for $\\eta=1/\\lambda_{\\max}$), C is the heavy-ball rate $(\\sqrt\\kappa-1)/(\\sqrt\\kappa+1)$.",
"zh": "最优步长下收缩因子 $(\\kappa-1)/(\\kappa+1)=9/11$；动量才是 $(\\sqrt\\kappa-1)/(\\sqrt\\kappa+1)$。"
},
{
"id": "L12-009",
"lec": "L12",
"type": "calc",
"level": 1,
"q": "A training set has $n=12\\,000$ samples, minibatch size $B=48$. How many SGD updates make up 20 epochs?",
"choices": [
"$20$",
"$250$",
"$5000$",
"$240\\,000$"
],
"answer": 2,
"why": "One epoch is $n/B=250$ steps, so 20 epochs are $5000$ steps. B is a single epoch, D counts one update per sample.",
"zh": "1 个 epoch = $n/B$ 步；20 个 epoch = 5000 步。"
},
{
"id": "L12-010",
"lec": "L12",
"type": "calc",
"level": 2,
"q": "Heavy-ball momentum $v\\leftarrow\\beta v-\\eta g$, $\\theta\\leftarrow\\theta+v$ with $\\beta=0.9$, $\\eta=0.01$. The gradient is constant, $g=2$, for many steps. What is the asymptotic displacement $\\Delta\\theta$ per step?",
"choices": [
"$-0.2$",
"$-0.02$",
"$-0.002$",
"$-2.0$"
],
"answer": 0,
"why": "The fixed point of $v=\\beta v-\\eta g$ is $v=-\\eta g/(1-\\beta)=-0.02/0.1=-0.2$: the effective step is $\\eta/(1-\\beta)$. B is plain GD; C multiplies instead of dividing by $1-\\beta$.",
"zh": "动量的有效步长 $\\eta/(1-\\beta)$：稳态位移 $-\\eta g/(1-\\beta)=-0.2$。"
},
{
"id": "L12-011",
"lec": "L12",
"type": "pic",
"level": 1,
"q": "The contours of $E$ are long thin ellipses (large $\\kappa=\\lambda_{\\max}/\\lambda_{\\min}$). Plain GD with $\\eta$ just below $2/\\lambda_{\\max}$ starts on the valley wall. What does its path look like?",
"choices": [
"A straight line to the minimum",
"Zig-zags across the narrow direction while creeping along the valley",
"A spiral inwards around the minimum",
"Fast convergence along the valley, slow across it"
],
"answer": 1,
"why": "The steep direction has $|1-\\eta\\lambda_{\\max}|\\approx1$ and oscillates in sign; the flat direction contracts only by $1-\\eta\\lambda_{\\min}\\approx1$ per step, hence slow progress. D reverses the two directions.",
"zh": "病态谷底：陡方向来回震荡，沿谷方向（小 $\\lambda$）缓慢收敛。"
},
{
"id": "L12-012",
"lec": "L12",
"type": "pic",
"level": 2,
"q": "Heavy-ball is a particle in the potential $E$ with friction coefficient $1-\\beta$. Raising $\\beta$ from $0.9$ to $0.99$ in a 1-D bowl does what to the trajectory?",
"choices": [
"Faster monotone approach with no overshoot",
"Stronger friction, so it stops sooner",
"The velocity vanishes and it stays put",
"Weaker friction: more overshoot and longer oscillations before settling"
],
"answer": 3,
"why": "Friction is $1-\\beta$, which falls from $0.1$ to $0.01$. The particle keeps its velocity longer, so it overshoots more and rings for longer; the effective step $\\eta/(1-\\beta)$ also grows tenfold.",
"zh": "动量 = 带摩擦的粒子，摩擦系数 $1-\\beta$；$\\beta\\to1$ 摩擦变小，振荡更久。"
},
{
"id": "L12-013",
"lec": "L12",
"type": "pic",
"level": 3,
"q": "$E=\\tfrac12(10w_1^2+w_2^2)$, plain GD with $\\eta=0.25$ from $w=(1,1)$. Which description is right?",
"choices": [
"$w_1$: sign flips, amplitude $\\times1.5$ per step; $w_2$: shrinks $\\times0.75$",
"$w_1$: monotone, $\\times0.5$ per step; $w_2$: shrinks $\\times0.75$",
"$w_1$: grows, no sign flip, $\\times1.5$; $w_2$: shrinks $\\times0.75$",
"$w_1$: sign flips, amplitude $\\times0.5$; $w_2$: shrinks $\\times0.75$"
],
"answer": 0,
"why": "Factors $1-\\eta\\lambda$: $1-2.5=-1.5$ for $w_1$ (unstable, since $\\eta>2/\\lambda_{\\max}=0.2$) and $1-0.25=0.75$ for $w_2$. A negative factor means the sign flips each step.",
"zh": "因子 $1-\\eta\\lambda_k$：$-1.5$（符号翻转且放大，发散）与 $0.75$（收缩）。"
},
{
"id": "L12-014",
"lec": "L12",
"type": "pic",
"level": 2,
"q": "Scalar loss $L(\\theta)$, $\\theta\\in\\mathbb R^N$, Jacobian chain $J=J_3J_2J_1$. Reverse mode (backprop) multiplies from the output side. What are the intermediates and the cost?",
"choices": [
"Column vectors, one per parameter; cost $\\approx N$ forward passes",
"Full $N\\times N$ matrices; cost $\\approx$ one forward pass",
"Row vectors $\\delta$; cost $\\approx2$–$3$ forward passes, activations stored",
"Row vectors $\\delta$; cost $\\approx N$ forward passes, nothing stored"
],
"answer": 2,
"why": "Starting from the $1\\times1$ output, every product stays a row vector, so one sweep gives all $N$ partials; the price is memory for the forward activations. A describes forward mode.",
"zh": "反向模式：从输出端出发，中间量是行向量 $\\delta$，代价约 2–3 次前向，需存激活。"
},
{
"id": "L13-001",
"lec": "L13",
"type": "term",
"level": 1,
"q": "A classifier has predicted label $\\hat y$ and confidence $\\hat p=\\max_kp_k$. Which equation says it is **calibrated**?",
"choices": [
"$P(\\hat p=c\\mid Y=\\hat y)=c$ for all $c$",
"$P(Y=\\hat y\\mid\\hat p=c)=c$ for all $c$",
"$\\mathbb E[\\mathbf 1[\\hat y=Y]]=\\mathbb E[\\hat p]$",
"$\\hat p=1$ whenever $\\hat y=Y$"
],
"answer": 1,
"why": "Of all events predicted with confidence $c$, a fraction $c$ must be correct. A flips the conditioning; C is only the average (global) condition and can hold for a badly calibrated model.",
"zh": "校准：$P(Y=\\hat y\\mid\\hat p=c)=c$，对每个置信度 $c$ 成立，而非仅平均成立。"
},
{
"id": "L13-002",
"lec": "L13",
"type": "term",
"level": 1,
"q": "With $M$ confidence bins $B_m$ among $n$ predictions, which expression is the expected calibration error?",
"choices": [
"$\\sum_m\\big|\\operatorname{acc}(B_m)-\\operatorname{conf}(B_m)\\big|$",
"$\\sum_m\\frac{|B_m|}{n}\\big(\\operatorname{acc}(B_m)-\\operatorname{conf}(B_m)\\big)$",
"$\\max_m\\big|\\operatorname{acc}(B_m)-\\operatorname{conf}(B_m)\\big|$",
"$\\sum_m\\frac{|B_m|}{n}\\big|\\operatorname{acc}(B_m)-\\operatorname{conf}(B_m)\\big|$"
],
"answer": 3,
"why": "ECE is the bin-size-weighted average of the absolute gap. A ignores the weights, B lets over- and under-confident bins cancel, C is the maximum calibration error.",
"zh": "ECE = 按样本数加权的 $|{\\rm acc}-{\\rm conf}|$ 之和；不加权或不取绝对值都不对。"
},
{
"id": "L13-003",
"lec": "L13",
"type": "term",
"level": 1,
"q": "Each model $\\theta$ predicts mean $\\mu_\\theta(x)$ and variance $\\sigma^2_\\theta(x)$. By the law of total variance, which pair is (aleatoric ; epistemic) in $\\operatorname{Var}[y\\mid x,\\mathcal D]$?",
"choices": [
"$\\operatorname{Var}_\\theta[\\mu_\\theta]$ ; $\\mathbb E_\\theta[\\sigma^2_\\theta]$",
"$(\\mathbb E_\\theta[\\sigma_\\theta])^2$ ; $\\operatorname{Var}_\\theta[\\mu_\\theta]$",
"$\\mathbb E_\\theta[\\sigma^2_\\theta]$ ; $\\operatorname{Var}_\\theta[\\mu_\\theta]$",
"$\\mathbb E_\\theta[\\sigma^2_\\theta]$ ; $\\mathbb E_\\theta[\\mu_\\theta^2]$"
],
"answer": 2,
"why": "Noise inside each model, averaged over models, is aleatoric; disagreement between the model means is epistemic. A swaps the labels; D uses the second moment of $\\mu$ instead of its variance; B squares the mean of $\\sigma$.",
"zh": "总方差 = 模型内噪声均值（偶然）+ 模型均值的方差（认知）。"
},
{
"id": "L13-004",
"lec": "L13",
"type": "term",
"level": 2,
"q": "Read $p_k(x;T)=\\operatorname{softmax}(z(x)/T)_k$ with $T^*=\\arg\\min_T\\sum_{i\\in\\text{val}}-\\log p_{y_i}(x_i;T)$. Which sentence is correct?",
"choices": [
"One scalar fitted on held-out data; the argmax, hence the accuracy, is unchanged",
"One scalar fitted on the training set; accuracy can change",
"One scalar per class fitted on held-out data; accuracy is unchanged",
"One scalar fitted on held-out data; it changes the ranking of the classes"
],
"answer": 0,
"why": "Dividing all logits by the same $T>0$ is monotone, so $\\arg\\max_kz_k/T=\\arg\\max_kz_k$. The fit must use validation data, since the training NLL is already minimised. C describes vector scaling.",
"zh": "温度缩放：单个标量 $T$，在验证集上拟合；不改变 argmax，故准确率不变。"
},
{
"id": "L13-005",
"lec": "L13",
"type": "term",
"level": 2,
"q": "For one event with predicted probability vector $p\\in\\mathbb R^K$ and one-hot truth $y$, which expression is the **Brier score**?",
"choices": [
"$-\\sum_ky_k\\log p_k$",
"$\\sum_k(p_k-y_k)^2$",
"$\\sum_k|p_k-y_k|$",
"$\\mathbf 1[\\arg\\max_kp_k\\ne\\arg\\max_ky_k]$"
],
"answer": 1,
"why": "Brier is the squared Euclidean distance $\\lVert p-y\\rVert^2$ and is strictly proper. A is the log score (NLL), also proper; C is not proper; D is the 0-1 loss (accuracy), which is not strictly proper.",
"zh": "Brier 分数 $=\\lVert p-y\\rVert^2$；A 是对数分数，D 是 0-1 损失。"
},
{
"id": "L13-006",
"lec": "L13",
"type": "calc",
"level": 2,
"q": "$n=10$ predictions in 3 bins: 6 events with mean confidence $0.90$ and accuracy $0.70$; 3 events with $0.60$ and $0.60$; 1 event with $0.55$ and accuracy $1.00$. The ECE is",
"choices": [
"$0.12$",
"$0.22$",
"$0.165$",
"$0.65$"
],
"answer": 2,
"why": "$0.6\\cdot0.20+0.3\\cdot0+0.1\\cdot0.45=0.165$. B averages the three gaps without weights, D adds them without weights, A drops the small underconfident bin.",
"zh": "ECE $=\\sum_m\\frac{|B_m|}{n}|{\\rm acc}-{\\rm conf}|=0.6\\cdot0.2+0.1\\cdot0.45$。"
},
{
"id": "L13-007",
"lec": "L13",
"type": "calc",
"level": 2,
"q": "A 2-member ensemble at one $x$: member 1 gives $\\mu=0$, $\\sigma^2=0.5$; member 2 gives $\\mu=4$, $\\sigma^2=1.5$. What is the predictive variance of the equal-weight mixture?",
"choices": [
"$5.0$",
"$4.0$",
"$1.0$",
"$6.0$"
],
"answer": 0,
"why": "Aleatoric $\\mathbb E[\\sigma^2]=1.0$; epistemic $\\operatorname{Var}[\\mu]=\\tfrac12(2^2+2^2)=4$; total $5.0$. B and C each give only one part; D sums the two $\\sigma^2$ instead of averaging.",
"zh": "总方差 = 平均 $\\sigma^2$（1.0）+ 均值的方差（4.0）= 5.0。"
},
{
"id": "L13-008",
"lec": "L13",
"type": "calc",
"level": 1,
"q": "A binary classifier has logits $z=(2,0)$. Temperature scaling with $T=2$ gives $p_1=$",
"choices": [
"$0.88$",
"$0.50$",
"$0.98$",
"$0.73$"
],
"answer": 3,
"why": "$\\operatorname{softmax}(1,0)_1=e/(e+1)=0.73$. A is the unscaled value ($T=1$), C would be $T=0.5$ (sharpening), and B corresponds to $T\\to\\infty$.",
"zh": "$T=2$ 把 logit 除以 2：$p_1=e/(e+1)\\approx0.73$（变软）。"
},
{
"id": "L13-009",
"lec": "L13",
"type": "calc",
"level": 3,
"q": "An event occurs with true probability $q=0.8$. A forecaster always states $p=0.6$. By how much does the expected Brier score $q(1-p)^2+(1-q)p^2$ exceed its minimum (reached at $p=q$)?",
"choices": [
"$0.20$",
"$0.04$",
"$0.16$",
"$0.40$"
],
"answer": 1,
"why": "At $p=0.6$: $0.8\\cdot0.16+0.2\\cdot0.36=0.20$; at $p=q$: $0.16$. The excess is $0.04=(p-q)^2$. A is the raw value, C the minimum itself.",
"zh": "期望 Brier 的超额 $=(p-q)^2$，在 $p=q$ 处最小（严格适当）。"
},
{
"id": "L13-010",
"lec": "L13",
"type": "calc",
"level": 2,
"q": "Three-class logits $z=(2,1,0)$ and the true class is the one with logit $1$. What is the NLL $-\\log p_y$ (natural log)?",
"choices": [
"$0.41$",
"$2.41$",
"$0.24$",
"$1.41$"
],
"answer": 3,
"why": "$-z_y+\\log\\sum_ke^{z_k}=-1+\\ln(e^2+e+1)=-1+2.41=1.41$ (so $p_y=0.245$). A is the NLL if class 1 were true, B forgets $-z_y$, C is $p_y$ itself.",
"zh": "NLL $=-z_y+\\log\\sum_ke^{z_k}$，不是概率本身。"
},
{
"id": "L13-011",
"lec": "L13",
"type": "pic",
"level": 1,
"q": "In a reliability diagram (accuracy vs. confidence), the bars at high confidence lie clearly below the diagonal. What does this say about the network?",
"choices": [
"Overconfident: it claims e.g. 90 % but is right less often",
"Underconfident: it is right more often than it claims",
"Calibrated, but with low accuracy",
"Its aleatoric uncertainty is too small, and more data would fix it"
],
"answer": 0,
"why": "Below the diagonal means $\\operatorname{acc}(B_m)<\\operatorname{conf}(B_m)$, the typical picture for large modern nets. B would be above the diagonal; calibration means on the diagonal.",
"zh": "柱子在对角线下方 = 置信度高于实际准确率 = 过度自信。"
},
{
"id": "L13-012",
"lec": "L13",
"type": "pic",
"level": 2,
"q": "An overconfident network gets temperature scaling with fitted $T^*>1$ on a validation set. What happens to its reliability diagram and accuracy?",
"choices": [
"Confidences grow towards 1, the net becomes sharper; accuracy rises",
"Confidences shrink and accuracy changes slightly",
"Confidences shrink towards accuracy, bars near the diagonal; accuracy unchanged",
"The bars stay where they are; only the class ranking changes"
],
"answer": 2,
"why": "$T>1$ softens the softmax, so the confidences move left, towards the empirical accuracy. The ranking and argmax of the logits stay the same, so accuracy (and AUC) are untouched.",
"zh": "$T>1$ 使置信度下降、柱子靠近对角线；排序不变，准确率不变。"
},
{
"id": "L13-013",
"lec": "L13",
"type": "pic",
"level": 2,
"q": "Five deep-ensemble nets are trained on $x\\in[-2,2]$. At $x=6$ their predicted means $\\mu_m$ fan out widely while each $\\sigma_m$ is about as large as inside the data range. Which uncertainty dominates there?",
"choices": [
"Aleatoric: the detector noise is larger at $x=6$",
"Epistemic: $\\operatorname{Var}_m[\\mu_m]$ is large, and data near $x=6$ would shrink it",
"Aleatoric: it shrinks with more data near $x=6$",
"Epistemic: it is $\\mathbb E_m[\\sigma_m^2]$, which grows with extrapolation"
],
"answer": 1,
"why": "Disagreement between members is the epistemic part $\\operatorname{Var}_\\theta[\\mu_\\theta]$ and is reducible with data. The $\\sigma_m^2$ are unchanged, so the aleatoric part $\\mathbb E[\\sigma_m^2]$ is not what grows.",
"zh": "成员均值分散 = 认知不确定性（可由数据减小）；$\\sigma_m$ 不变说明偶然部分没变。"
},
{
"id": "L13-014",
"lec": "L13",
"type": "pic",
"level": 3,
"q": "A signal classifier outputs $\\hat p=0.2$ for every event; the true signal fraction is $0.2$. What do the reliability diagram, ECE and AUC look like?",
"choices": [
"Single bar on the diagonal at 0.2; ECE $=0$; AUC $=1$",
"Single bar below the diagonal; ECE $=0.2$; AUC $=0.5$",
"Single bar on the diagonal at 0.2; ECE $=0.2$; AUC $=0.5$",
"Single bar on the diagonal at 0.2; ECE $=0$; AUC $=0.5$"
],
"answer": 3,
"why": "Among events with $\\hat p=0.2$, 20 % are signal, so it is perfectly calibrated and ECE $=0$. But all scores tie, so it cannot rank signal above background: AUC $=0.5$. Calibration needs sharpness too.",
"zh": "常数预测 $\\hat p=$ 基准率：完美校准（ECE=0）但毫无区分力（AUC=0.5）。"
},
{
"id": "L14-001",
"lec": "L14",
"type": "term",
"level": 1,
"q": "A 2-D conv layer has $C_{\\text{in}}$ input channels, $C_{\\text{out}}$ filters of size $K\\times K$, and one bias per output channel. Its number of parameters is",
"choices": [
"$C_{\\text{out}}(C_{\\text{in}}K^2+1)$",
"$C_{\\text{in}}(C_{\\text{out}}K^2+1)$",
"$C_{\\text{out}}C_{\\text{in}}K^2HW$",
"$C_{\\text{out}}C_{\\text{in}}K+C_{\\text{out}}$"
],
"answer": 0,
"why": "Each of the $C_{\\text{out}}$ filters has $C_{\\text{in}}K^2$ weights plus one bias. The count does not depend on the image size $H\\times W$ (C), and the kernel is $K^2$, not $K$ (D).",
"zh": "卷积层参数量 $C_{out}(C_{in}K^2+1)$，与图像尺寸无关。"
},
{
"id": "L14-002",
"lec": "L14",
"type": "term",
"level": 1,
"q": "Input length $N$, kernel size $K$, padding $P$ on each side, stride $S$. Which formula gives the output length?",
"choices": [
"$\\lfloor(N+P-K)/S\\rfloor+1$",
"$\\lfloor(N+2P-K)/S\\rfloor$",
"$\\lfloor(N+2P-K)/S\\rfloor+1$",
"$\\lfloor(N-2P+K)/S\\rfloor+1$"
],
"answer": 2,
"why": "The padded length is $N+2P$; the window of size $K$ has $\\lfloor(N+2P-K)/S\\rfloor$ full strides, plus one for the first position. A pads only one side; B misses the $+1$.",
"zh": "输出长度 $\\lfloor(N+2P-K)/S\\rfloor+1$（两侧各填充 $P$）。"
},
{
"id": "L14-003",
"lec": "L14",
"type": "term",
"level": 2,
"q": "With the shift $(T_sf)[n]=f[n-s]$, which equation states that a layer $F$ is **translation equivariant**?",
"choices": [
"$F(T_sf)=F(f)$",
"$F(T_sf)=T_{-s}F(f)$",
"$F(T_sf)=T_sf$",
"$F(T_sf)=T_sF(f)$"
],
"answer": 3,
"why": "Equivariance: shifting the input shifts the output identically. A is invariance (what global pooling provides), B shifts the output the opposite way, C holds only for the identity map.",
"zh": "平移等变 $F(T_sf)=T_sF(f)$；不变性是 $F(T_sf)=F(f)$。"
},
{
"id": "L14-004",
"lec": "L14",
"type": "term",
"level": 2,
"q": "Receptive field $r_l$ and jump $j_l$ of layer $l$ (kernel $K_l$, stride $S_l$) obey, with $r_0=j_0=1$,",
"choices": [
"$r_l=r_{l-1}+(K_l-1)S_l$",
"$r_l=r_{l-1}+(K_l-1)\\,j_{l-1}$, $\\;j_l=j_{l-1}S_l$",
"$r_l=r_{l-1}+K_l\\,j_{l-1}$, $\\;j_l=j_{l-1}S_l$",
"$r_l=r_{l-1}K_l$, $\\;j_l=j_{l-1}+S_l$"
],
"answer": 1,
"why": "A kernel of size $K_l$ adds $K_l-1$ steps, each worth $j_{l-1}$ input pixels (the stride accumulated so far). C overcounts by one step; A ignores the earlier strides.",
"zh": "感受野递推 $r_l=r_{l-1}+(K_l-1)j_{l-1}$，$j_l=j_{l-1}S_l$。"
},
{
"id": "L14-005",
"lec": "L14",
"type": "term",
"level": 1,
"q": "A valid 1-D convolution with kernel $(k_0,k_1,k_2)$ maps $f\\in\\mathbb R^5$ to $g\\in\\mathbb R^3$ as $g=Tf$. What are the shape and structure of $T$?",
"choices": [
"$3\\times5$, banded and constant along diagonals (Toeplitz)",
"$5\\times3$, banded and constant along diagonals",
"$3\\times5$, banded but with independent entries on every row",
"$5\\times5$, circulant"
],
"answer": 0,
"why": "Row $i$ is $(k_0,k_1,k_2)$ shifted by $i$: locality gives the band, weight sharing gives constant diagonals. C would be a locally connected layer without weight sharing; D needs periodic boundaries.",
"zh": "卷积 = 带状（局部）+ 对角线上取值相同（权重共享）的 Toeplitz 矩阵 $3\\times5$。"
},
{
"id": "L14-006",
"lec": "L14",
"type": "calc",
"level": 1,
"q": "A conv layer takes an RGB image ($C_{\\text{in}}=3$) to $C_{\\text{out}}=16$ channels with $5\\times5$ kernels and biases. How many parameters does it have?",
"choices": [
"$1200$",
"$1216$",
"$400$",
"$76$"
],
"answer": 1,
"why": "$16\\,(3\\cdot25+1)=16\\cdot76=1216$. A forgets the 16 biases, C forgets the input channels, D is a single filter.",
"zh": "$16\\times(3\\times25+1)=1216$，别忘了偏置与输入通道。"
},
{
"id": "L14-007",
"lec": "L14",
"type": "calc",
"level": 2,
"q": "Input length $32$, kernel $5$, padding $0$, stride $2$. What is the output length?",
"choices": [
"$15$",
"$28$",
"$13$",
"$14$"
],
"answer": 3,
"why": "$\\lfloor(32+0-5)/2\\rfloor+1=\\lfloor13.5\\rfloor+1=14$. A rounds up instead of taking the floor, B is the stride-1 result, C forgets the $+1$.",
"zh": "$\\lfloor(32-5)/2\\rfloor+1=14$，向下取整。"
},
{
"id": "L14-008",
"lec": "L14",
"type": "calc",
"level": 3,
"q": "Three $3\\times3$ conv layers with strides $S=2,1,1$ (in this order). Using $r_l=r_{l-1}+(K_l-1)j_{l-1}$ and $j_l=j_{l-1}S_l$, what is the receptive field per axis of the last layer?",
"choices": [
"$7$",
"$9$",
"$11$",
"$13$"
],
"answer": 2,
"why": "$r_1=3$, $j_1=2$; $r_2=3+2\\cdot2=7$, $j_2=2$; $r_3=7+2\\cdot2=11$. A is the all-stride-1 result, B forgets that the jump is 2 in the last step.",
"zh": "先 stride 2 使后面每层步长按跳距 2 计：$3\\to7\\to11$。"
},
{
"id": "L14-009",
"lec": "L14",
"type": "calc",
"level": 2,
"q": "A dense layer maps a flattened $1\\times64\\times64$ image (4096 numbers) to a $16\\times64\\times64$ output (no biases). How many weights?",
"choices": [
"$2.7\\times10^{8}$",
"$6.6\\times10^{4}$",
"$1.7\\times10^{7}$",
"$1.4\\times10^{2}$"
],
"answer": 0,
"why": "$4096\\times(16\\cdot4096)=4096\\times65\\,536\\approx2.7\\times10^8$. A $3\\times3$ conv with 16 channels needs only $16\\cdot9=144$ weights (D) — locality and weight sharing. C is $4096^2$ (one output channel).",
"zh": "稠密层 $4096\\times65536\\approx2.7\\times10^8$；同尺寸 $3\\times3$ 卷积仅 144 个权重。"
},
{
"id": "L14-010",
"lec": "L14",
"type": "calc",
"level": 3,
"q": "Input $1\\times16\\times16$ $\\to$ conv $3\\times3$, 8 channels, $P=1$, $S=1$ $\\to$ max-pool $2\\times2$, $S=2$ $\\to$ flatten $\\to$ dense to 4 outputs. Total number of parameters (with biases)?",
"choices": [
"$2128$",
"$2132$",
"$2052$",
"$8276$"
],
"answer": 1,
"why": "Conv: $8(1\\cdot9+1)=80$. After pooling the map is $8\\times8\\times8=512$, so dense: $4(512+1)=2052$. Total $2132$. D forgets the pooling (2048 inputs), C forgets the conv, A drops the dense biases.",
"zh": "卷积 80 + 全连接 $4(512+1)=2052$ = 2132；池化后是 $8\\times8\\times8$。"
},
{
"id": "L14-011",
"lec": "L14",
"type": "pic",
"level": 1,
"q": "A periodic 1-D signal contains a single spike at position $n=2$. It is shifted to $n=5$ and passed through a stride-1 conv layer with periodic padding. How does the feature map compare with the one for the unshifted signal?",
"choices": [
"Identical at the same positions",
"Mirrored",
"The same pattern, moved by 3 positions",
"A different pattern, since the kernel sees new neighbours"
],
"answer": 2,
"why": "Convolution with a fixed kernel commutes with shifts: $k\\star T_sf=T_s(k\\star f)$, so the feature map shifts by the same 3 positions. A would be invariance, which needs global pooling.",
"zh": "卷积平移等变：输入平移 3 格，特征图同样平移 3 格。"
},
{
"id": "L14-012",
"lec": "L14",
"type": "pic",
"level": 3,
"q": "A shower image is shifted by one pixel (periodic boundaries). Which network's output is **exactly** unchanged?",
"choices": [
"conv (stride 1) $\\to$ ReLU $\\to$ global average pool $\\to$ dense",
"conv $\\to$ ReLU $\\to$ max-pool $2\\times2$ (stride 2) $\\to$ flatten $\\to$ dense",
"conv (stride 2) $\\to$ ReLU $\\to$ global average pool $\\to$ dense",
"conv (stride 1) $\\to$ ReLU $\\to$ flatten $\\to$ dense"
],
"answer": 0,
"why": "Stride-1 conv and ReLU are equivariant, and a global average pool is shift invariant. Stride 2 (C) or pooling with stride 2 (B) is equivariant only to shifts by multiples of 2; flatten + dense (D) is position dependent.",
"zh": "精确平移不变 = 步长 1 的卷积（等变）+ 全局池化；步长 2 会破坏。"
},
{
"id": "L14-013",
"lec": "L14",
"type": "pic",
"level": 2,
"q": "A 1-D kernel $(1,-2,1)$ acts as $g[n]=f[n]-2f[n+1]+f[n+2]$. What does it give for the straight line $f[n]=3n+1$ and for the parabola $f[n]=n^2$?",
"choices": [
"$3$ and $2n$",
"$0$ and $2n$",
"the constant $2$ and $0$",
"$0$ and the constant $2$"
],
"answer": 3,
"why": "It is the discrete second derivative (Laplacian): lines have zero curvature, and the parabola has $f''=2$. Check: $n^2-2(n+1)^2+(n+2)^2=2$.",
"zh": "核 $(1,-2,1)$ = 离散二阶导：直线得 0，抛物线 $n^2$ 得常数 2。"
},
{
"id": "L14-014",
"lec": "L14",
"type": "pic",
"level": 2,
"q": "A periodic signal of even length is cross-correlated with the box kernel $\\tfrac13(1,1,1)$. In Fourier space this multiplies each mode. What happens to the constant mode and to the alternating mode $(+1,-1,+1,\\dots)$?",
"choices": [
"Both unchanged",
"Constant mode $\\times\\tfrac13$, alternating mode $\\times1$",
"Constant mode $\\times1$, alternating mode $\\times\\tfrac13$",
"Constant mode $\\times1$, alternating mode removed ($\\times0$)"
],
"answer": 2,
"why": "Constant: $\\tfrac13(1+1+1)=1$. Alternating: $\\tfrac13(1-1+1)(-1)^n=\\tfrac13(-1)^n$. So it is a low-pass filter. D would hold for the 2-point kernel $\\tfrac12(1,1)$.",
"zh": "卷积定理：盒式核是低通；常数模式不变，交替（最高频）模式乘 $1/3$。"
},
{
"id": "L15-001",
"lec": "L15",
"type": "term",
"level": 1,
"q": "Which expression is the PDE-residual term of a PINN loss at collocation points $(x_r,t_r)$ for the heat equation $u_t=\\kappa u_{xx}$?",
"choices": [
"$\\frac1{N_r}\\sum_r\\big(\\partial_tu_\\theta-\\kappa\\,\\partial_x^2u_\\theta\\big)^2$",
"$\\frac1{N_r}\\sum_r\\big(u_\\theta(x_r,t_r)-u^{\\text{obs}}_r\\big)^2$",
"$\\frac1{N_r}\\sum_r\\big(\\partial_tu_\\theta-\\kappa\\,\\partial_xu_\\theta\\big)^2$",
"$\\frac1{N_r}\\sum_r\\big(u_\\theta(x_r,0)-u_0(x_r)\\big)^2$"
],
"answer": 0,
"why": "The residual is $\\mathcal N[u_\\theta]=u_t-\\kappa u_{xx}$ squared at interior points. B is the data term, D the initial-condition term, C has the wrong spatial derivative order.",
"zh": "PDE 残差项 = 配点处 $(\\partial_tu_\\theta-\\kappa\\partial_x^2u_\\theta)^2$ 的平均。"
},
{
"id": "L15-002",
"lec": "L15",
"type": "term",
"level": 1,
"q": "In a PINN, the derivative $u_{xx}$ appearing in the residual is computed by",
"choices": [
"finite differences on a fixed mesh",
"differentiating $u_\\theta$ with respect to the weights $\\theta$",
"automatic differentiation of the network output w.r.t. its input $x$",
"a Fourier transform of the training data"
],
"answer": 2,
"why": "$u_\\theta(x,t)$ is a smooth function of its inputs, so autodiff gives exact $u_t,u_x,u_{xx}$ without a mesh. Derivatives w.r.t. $\\theta$ (B) are used only afterwards, to train the net.",
"zh": "PINN 的 $u_{xx}$ 来自网络输出对**输入**的自动微分；对权重求导是用来训练。"
},
{
"id": "L15-003",
"lec": "L15",
"type": "term",
"level": 2,
"q": "In an FNO layer $v_{l+1}=\\varphi\\big(Wv_l+\\mathcal F^{-1}[R_\\phi(\\xi)\\,\\mathcal F[v_l](\\xi)]\\big)$ with $d$ channels, what is $R_\\phi(\\xi)$?",
"choices": [
"A real $N\\times N$ matrix over the grid points",
"A complex $d\\times d$ matrix for each retained Fourier mode $\\xi$",
"A scalar function of the position $x$",
"A real $d\\times d$ matrix applied pointwise at every $x$"
],
"answer": 1,
"why": "The spectral term multiplies each retained mode by a learned channel-mixing matrix and discards higher modes. D describes the local term $W$ (a $1\\times1$ conv); A would tie the weights to the grid.",
"zh": "$R_\\phi(\\xi)$：每个保留的傅里叶模式一个复 $d\\times d$ 矩阵；$W$ 才是逐点线性映射。"
},
{
"id": "L15-004",
"lec": "L15",
"type": "term",
"level": 1,
"q": "DeepONet writes $\\mathcal G(a)(y)=\\sum_{k=1}^pb_k\\,t_k(y)$. Which network sees which input?",
"choices": [
"Branch sees the query point $y$, trunk sees the sensor values of $a$",
"Both nets see $y$ only",
"Trunk sees the sensor values of $a$ and $y$ together",
"Branch sees the sensor values $a(x_1),\\dots,a(x_m)$, trunk sees $y$"
],
"answer": 3,
"why": "The branch encodes the input function (sampled at fixed sensors) into coefficients $b_k$; the trunk gives learned basis functions $t_k(y)$ evaluated at the query location. A swaps the roles.",
"zh": "DeepONet：branch 处理输入函数 $a$ 的传感器值，trunk 处理查询点 $y$，输出点积。"
},
{
"id": "L15-005",
"lec": "L15",
"type": "term",
"level": 2,
"q": "Which ansatz satisfies the initial condition $u(x,0)=u_0(x)$ **exactly** for any network $\\mathrm{NN}_\\theta$?",
"choices": [
"$u_\\theta(x,t)=u_0(x)+t\\,\\mathrm{NN}_\\theta(x,t)$",
"$u_\\theta(x,t)=u_0(x)+\\mathrm{NN}_\\theta(x,t)$",
"$u_\\theta(x,t)=t\\,u_0(x)+\\mathrm{NN}_\\theta(x,t)$",
"$u_\\theta(x,t)=u_0(x)\\,\\mathrm{NN}_\\theta(x,t)$"
],
"answer": 0,
"why": "At $t=0$ the extra term vanishes, leaving $u_0(x)$. In B, C and D the value at $t=0$ still depends on $\\mathrm{NN}_\\theta(x,0)$, so the condition is only learned approximately.",
"zh": "硬约束初值：$u_0(x)+t\\,\\mathrm{NN}$，$t=0$ 时网络项消失。"
},
{
"id": "L15-006",
"lec": "L15",
"type": "calc",
"level": 2,
"q": "Heat equation, Fourier mode $\\xi=3$, $\\kappa=0.1$, time $T=2$. By what factor $e^{-\\kappa\\xi^2T}$ is this mode damped?",
"choices": [
"$0.41$",
"$0.55$",
"$0.17$",
"$0.03$"
],
"answer": 2,
"why": "$\\kappa\\xi^2T=0.1\\cdot9\\cdot2=1.8$ and $e^{-1.8}=0.165$. A forgets $T$ ($e^{-0.9}$), B uses $\\xi$ instead of $\\xi^2$ ($e^{-0.6}$), D doubles the exponent.",
"zh": "衰减因子 $e^{-\\kappa\\xi^2T}=e^{-1.8}\\approx0.17$。"
},
{
"id": "L15-007",
"lec": "L15",
"type": "calc",
"level": 2,
"q": "The function $u(x,t)=e^{-8t}\\sin(2x)$ has zero residual $u_t-\\kappa u_{xx}$ for which $\\kappa$?",
"choices": [
"$1/2$",
"$2$",
"$4$",
"$8$"
],
"answer": 1,
"why": "$u_t=-8u$ and $u_{xx}=-4u$, so $u_t-\\kappa u_{xx}=(-8+4\\kappa)u=0$ gives $\\kappa=2$. A inverts the ratio, C and D take one of the exponents.",
"zh": "$u_t=-8u$，$u_{xx}=-4u$，残差为零要求 $\\kappa=u_t/u_{xx}=2$。"
},
{
"id": "L15-008",
"lec": "L15",
"type": "calc",
"level": 3,
"q": "Damped oscillator, inverse PINN. The residual term is $\\frac{w_r}{N_r}\\sum_rR_r^2$ with $R_r=m\\ddot x_\\theta+c\\dot x_\\theta+kx_\\theta$. At $N_r=3$ points $R=(0.5,-0.2,0.3)$, $\\dot x_\\theta=(1,2,-1)$, $w_r=1$. What is $\\partial\\mathcal L/\\partial c$ of this term?",
"choices": [
"$-1/5$",
"$+2/15$",
"$-1/15$",
"$-2/15$"
],
"answer": 3,
"why": "$\\partial R_r/\\partial c=\\dot x_r$, so the gradient is $\\frac{2w_r}{N_r}\\sum_rR_r\\dot x_r=\\frac23(0.5-0.4-0.3)=-\\frac2{15}$. A lacks the factor $2/N_r$, C lacks the 2, B has the wrong sign.",
"zh": "$\\partial\\mathcal L/\\partial c=\\frac{2w_r}{N_r}\\sum_rR_r\\dot x_r=-2/15$。"
},
{
"id": "L15-009",
"lec": "L15",
"type": "calc",
"level": 1,
"q": "The data term is $\\frac1{N_d}\\sum_d(x_\\theta(t_d)-x^{\\text{obs}}_d)^2$. For $x_\\theta=(1.0,\\,0.3)$ and $x^{\\text{obs}}=(0.9,\\,0.5)$ it equals",
"choices": [
"$0.025$",
"$0.05$",
"$0.15$",
"$0.16$"
],
"answer": 0,
"why": "$\\tfrac12(0.1^2+0.2^2)=\\tfrac12\\cdot0.05=0.025$. B is the sum without $1/N_d$, C the mean absolute error, D the root-mean-square error.",
"zh": "数据项 = 均方误差 $\\frac12(0.01+0.04)=0.025$。"
},
{
"id": "L15-010",
"lec": "L15",
"type": "calc",
"level": 3,
"q": "For the heat equation with $\\kappa=0.5$ and $T=1$, mode $\\xi$ is damped by $e^{-\\kappa\\xi^2T}$. What is the largest integer $\\xi$ whose factor is still $\\ge0.01$?",
"choices": [
"$2$",
"$3$",
"$4$",
"$9$"
],
"answer": 1,
"why": "Need $\\xi^2\\le\\ln(100)/0.5=9.2$, so $\\xi\\le3$ (factor $e^{-4.5}=0.011$). At $\\xi=4$ it is $e^{-8}\\approx3\\times10^{-4}$. D forgets that $\\xi$ enters squared.",
"zh": "要求 $\\xi^2\\le\\ln100/\\kappa T\\approx9.2$，故 $\\xi_{\\max}=3$：高阶模式被扩散迅速抹去。"
},
{
"id": "L15-011",
"lec": "L15",
"type": "pic",
"level": 1,
"q": "A PINN for the heat equation uses a ReLU MLP $u_\\theta(x,t)$. What does autodiff give for $u_{xx}$ at the collocation points?",
"choices": [
"Infinite at the kinks and large elsewhere",
"The same value as $u_t$",
"The true $u_{xx}$ up to a small error",
"Zero almost everywhere, so the $\\kappa u_{xx}$ part of the residual is blind"
],
"answer": 3,
"why": "A ReLU network is piecewise linear in $x$, so its second derivative vanishes except on a measure-zero set. Smooth activations such as tanh are needed for second-order PDEs.",
"zh": "ReLU 网络分段线性，$u_{xx}\\approx0$ 几乎处处成立，PINN 需用 tanh 等光滑激活。"
},
{
"id": "L15-012",
"lec": "L15",
"type": "pic",
"level": 2,
"q": "You need the heat-equation solution at time $T$ for $10^4$ different initial profiles $u_0$ (same $\\kappa$). What is cheap per **new** profile after the set-up?",
"choices": [
"Retraining a PINN for each profile",
"Evaluating the single trained PINN $u_\\theta(x,t)$, which contains all profiles",
"One forward pass of a neural operator trained on solved pairs $(u_0,u_T)$",
"Nothing: any ML surrogate must rerun the classical solver"
],
"answer": 2,
"why": "A neural operator learns the map $u_0\\mapsto u_T$ between function spaces, so a new profile costs one forward pass. A PINN encodes one solution (A needs retraining; B holds only one $u_0$).",
"zh": "神经算子学习映射 $u_0\\mapsto u_T$，新初值只需一次前向；PINN 只学一个解。"
},
{
"id": "L15-013",
"lec": "L15",
"type": "pic",
"level": 2,
"q": "The initial profile is a sharp step on a periodic domain. After time $T$ of the heat equation, which picture is right in Fourier space and in $x$-space?",
"choices": [
"The step sharpens, since the high modes grow",
"High modes are damped far more than low ones: edges are smoothed, the mean is preserved",
"All modes are damped equally: the profile shrinks to $0$",
"Low modes are damped more than high ones: only ripples remain"
],
"answer": 1,
"why": "Mode $\\xi$ gets $e^{-\\kappa\\xi^2T}$, so large $\\xi$ (sharp features) vanish fastest while $\\xi=0$ (the mean) is unchanged. This also justifies truncating high modes in an FNO.",
"zh": "热方程：高频衰减最快 → 边缘被抹平，平均值（$\\xi=0$）不变。"
},
{
"id": "L15-014",
"lec": "L15",
"type": "pic",
"level": 3,
"q": "Heat equation on $(0,1)$ with $u(0,t)=u(1,t)=0$. By mistake the initial-condition term is dropped ($w_0=0$) and there is no data. What are the minimisers of the PINN loss?",
"choices": [
"Zero loss for $u\\equiv0$ and for $c\\,e^{-\\pi^2\\kappa t}\\sin\\pi x$ (any $c$)",
"Only the true solution, since the residual alone fixes the initial profile",
"None: the boundary condition contradicts the PDE",
"Only $u\\equiv0$, because it is the smoothest function"
],
"answer": 0,
"why": "The residual and boundary terms are linear and homogeneous, so every decaying eigenmode with any amplitude, including $0$, has zero loss. The IC term is what pins the amplitude. Small residual loss $\\ne$ correct solution.",
"zh": "缺少初值项时，残差与边界条件只确定形状，不确定振幅；$u\\equiv0$ 也是零损失。"
},
{
"id": "L16-001",
"lec": "L16",
"type": "term",
"level": 1,
"q": "An autoencoder has encoder $z=f_\\phi(x)\\in\\mathbb R^k$ and decoder $\\hat x=g_\\psi(z)\\in\\mathbb R^p$ with $k<p$. Which is its training objective?",
"choices": [
"$\\frac1n\\sum_i\\lVert z_i-x_i\\rVert^2$",
"$\\frac1n\\sum_i\\lVert g_\\psi(x_i)-f_\\phi(x_i)\\rVert^2$",
"$\\frac1n\\sum_i\\lVert x_i-g_\\psi(f_\\phi(x_i))\\rVert^2$",
"$\\frac1n\\sum_i\\lVert x_i-f_\\phi(g_\\psi(x_i))\\rVert^2$"
],
"answer": 2,
"why": "Reconstruct the input after the round trip encoder, then decoder: $\\hat x=g_\\psi(f_\\phi(x))$. A compares $z\\in\\mathbb R^k$ with $x\\in\\mathbb R^p$, and in B and D the maps are applied to the wrong spaces.",
"zh": "自编码器：最小化重构误差 $\\lVert x-g_\\psi(f_\\phi(x))\\rVert^2$，先编码再解码。"
},
{
"id": "L16-002",
"lec": "L16",
"type": "term",
"level": 2,
"q": "Logits $s_+=z_i^Tz_i^+/\\tau$ and $s_j=z_i^Tz_j/\\tau$ (negatives $j\\ne i$). Which is the InfoNCE loss $\\ell_i$ of anchor $i$?",
"choices": [
"$-\\log\\dfrac{e^{s_+}}{e^{s_+}+\\sum_{j\\ne i}e^{s_j}}$",
"$-\\log\\dfrac{e^{s_+}}{\\sum_{j\\ne i}e^{s_j}}$",
"$-\\dfrac{e^{s_+}}{e^{s_+}+\\sum_{j\\ne i}e^{s_j}}$",
"$\\log\\dfrac{e^{s_+}}{e^{s_+}+\\sum_{j\\ne i}e^{s_j}}$"
],
"answer": 0,
"why": "It is softmax cross-entropy: minus the log-probability of the positive among all candidates. B leaves the positive out of the denominator, C lacks the log, D has the wrong sign (the loss would be $\\le0$).",
"zh": "InfoNCE = 在所有候选中识别正样本的 softmax 交叉熵 $-\\log p_+$。"
},
{
"id": "L16-003",
"lec": "L16",
"type": "term",
"level": 2,
"q": "$X\\in\\mathbb R^{p\\times n}$ is centred with SVD $X=U\\Sigma V^T$. For the linear autoencoder $\\min_{D,E}\\lVert X-DEX\\rVert_F^2$ with bottleneck $k$, the optimal product $DE$ is",
"choices": [
"$U_k^TU_k$",
"$U_kU_k^T$",
"$V_kV_k^T$",
"$U_k\\Sigma_kV_k^T$"
],
"answer": 1,
"why": "$DE$ must be $p\\times p$ and the optimum is the orthogonal projector onto the top-$k$ left singular vectors (PCA subspace). A is $k\\times k$, C is $n\\times n$, and D is the rank-$k$ data matrix $X_k$ (it is $p\\times n$).",
"zh": "线性 AE 最优 $DE=U_kU_k^T$：投影到前 $k$ 个主方向张成的子空间（$p\\times p$）。"
},
{
"id": "L16-004",
"lec": "L16",
"type": "term",
"level": 1,
"q": "For InfoNCE with logits $s_j$ and softmax probabilities $p_j$ (candidate $+$ is the positive), $\\partial\\ell_i/\\partial s_j$ equals",
"choices": [
"$\\mathbf 1[j=+]-p_j$",
"$p_j(1-p_j)$",
"$-\\log p_j$",
"$p_j-\\mathbf 1[j=+]$"
],
"answer": 3,
"why": "Softmax plus cross-entropy has gradient \"prediction minus target\", so the positive's logit is pushed up ($p_+-1<0$) and the negatives' down. A has the wrong sign, B is the derivative of a sigmoid.",
"zh": "softmax+CE 的梯度 = 预测 − 目标：$p_j-\\mathbf 1[j=+]$。"
},
{
"id": "L16-005",
"lec": "L16",
"type": "term",
"level": 2,
"q": "Which transformation of all unit embeddings $z_i$ leaves every inner product $z_i^Tz_j$, and hence the cosine-similarity InfoNCE loss, unchanged?",
"choices": [
"$z\\mapsto Az$ with any invertible $A$",
"$z\\mapsto Qz$ with $Q^TQ=I$",
"$z\\mapsto2z$",
"$z\\mapsto z+b$ for a fixed vector $b$"
],
"answer": 1,
"why": "$(Qz_i)^T(Qz_j)=z_i^TQ^TQz_j=z_i^Tz_j$, so the embedding is defined only up to rotation/reflection. Any invertible $A$ (A) is the larger ambiguity of the linear AE, where only $DE$ is fixed.",
"zh": "对比损失只依赖内积：嵌入只定义到正交变换 $Q$；线性 AE 的歧义是任意可逆 $A$。"
},
{
"id": "L16-006",
"lec": "L16",
"type": "calc",
"level": 1,
"q": "Centred $X$ has singular values $s=(6,3,2,1)$. A linear autoencoder with bottleneck $k=2$ reaches the minimal loss $\\lVert X-DEX\\rVert_F^2=$",
"choices": [
"$45$",
"$13$",
"$5$",
"$3$"
],
"answer": 2,
"why": "The minimum is $\\sum_{j>k}s_j^2=2^2+1^2=5$ (Eckart–Young). A is the retained part $36+9$, B uses $s_2^2+s_3^2$ (wrong indices), D forgets to square.",
"zh": "最小损失 $=\\sum_{j>k}s_j^2=4+1=5$（被丢弃的奇异值平方和）。"
},
{
"id": "L16-007",
"lec": "L16",
"type": "calc",
"level": 1,
"q": "Singular values $s=(4,3,2,1)$. A rank-2 PCA/linear AE retains which fraction of the total $\\lVert X\\rVert_F^2$?",
"choices": [
"$0.83$",
"$0.70$",
"$0.50$",
"$0.17$"
],
"answer": 0,
"why": "$\\lVert X\\rVert_F^2=\\sum s_j^2=30$ and the top two give $16+9=25$, so $25/30=0.83$. B uses $s_j$ instead of $s_j^2$, D is the lost fraction, C is $k/p$.",
"zh": "保留的比例 $=\\sum_{j\\le k}s_j^2/\\sum_js_j^2=25/30$，是平方不是 $s_j$ 本身。"
},
{
"id": "L16-008",
"lec": "L16",
"type": "calc",
"level": 2,
"q": "InfoNCE with $\\tau=0.5$: the anchor has cosine similarity $1.0$ to its positive and $0$ to each of two negatives. What is $\\ell_i$ (natural log)?",
"choices": [
"$0.13$",
"$1.10$",
"$0.79$",
"$0.24$"
],
"answer": 3,
"why": "Logits $(2,0,0)$, so $p_+=e^2/(e^2+2)=0.787$ and $\\ell=-\\ln0.787=0.24$. A uses only one negative, C is $p_+$ itself, B is $\\ln3$, the chance level for all-equal logits.",
"zh": "logits $=(2,0,0)$，$p_+=0.787$，$\\ell=-\\ln p_+\\approx0.24$。"
},
{
"id": "L16-009",
"lec": "L16",
"type": "calc",
"level": 3,
"q": "InfoNCE with $\\tau=0.5$, treating $z_i=(1,0)$ as a free vector (ignore normalisation). Positive $z^+=(1,0)$, negatives $(0,1)$ and $(0,-1)$. Using $\\partial\\ell_i/\\partial z_i=\\frac1\\tau\\big(\\sum_jp_jz_j-z^+\\big)^T$, what is the gradient?",
"choices": [
"$(-0.21,\\ 0)$",
"$(-0.43,\\ 0)$",
"$(+0.43,\\ 0)$",
"$(-0.85,\\ 0)$"
],
"answer": 1,
"why": "Logits $(2,0,0)$ give $p=(0.787,0.106,0.106)$. Then $\\sum_jp_jz_j=(0.787,0)$, minus $z^+$ gives $(-0.213,0)$, times $1/\\tau=2$ gives $(-0.43,0)$. A forgets $1/\\tau$; C has the wrong sign.",
"zh": "梯度 $=\\frac1\\tau(\\sum p_jz_j-z^+)$：下降方向把 $z_i$ 拉向正样本。"
},
{
"id": "L16-010",
"lec": "L16",
"type": "calc",
"level": 2,
"q": "A linear AE with $k=2$ has $D=U_2A$, $A=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$. Which encoder $E$ gives the same reconstructions ($DE=U_2U_2^T$)?",
"choices": [
"$\\begin{pmatrix}1&-1\\\\0&1\\end{pmatrix}U_2^T$",
"$\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}U_2^T$",
"$\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}U_2^T$",
"$U_2^T$"
],
"answer": 0,
"why": "We need $E=A^{-1}U_2^T$, since $U_2AA^{-1}U_2^T=U_2U_2^T$. Here $A^{-1}=\\begin{pmatrix}1&-1\\\\0&1\\end{pmatrix}$. B is $A^T$, C is $A$, D ignores $A$ and would change $DE=U_2AU_2^T$.",
"zh": "线性 AE 的歧义：$D\\to DA$ 需同时 $E\\to A^{-1}E$（逆，不是转置）。"
},
{
"id": "L16-011",
"lec": "L16",
"type": "pic",
"level": 1,
"q": "Embeddings live on the unit sphere. Which picture does minimising InfoNCE aim for?",
"choices": [
"All embeddings at one point",
"Two views of the same sample far apart, different samples close",
"Two views of the same sample close together, different samples spread over the sphere",
"All embeddings in a single cluster, with the positives at its centre"
],
"answer": 2,
"why": "The numerator pulls positives together (alignment), the negatives in the denominator push embeddings apart (uniformity). Everything at one point is the collapse that gives $\\ell=\\log N$.",
"zh": "对比学习：正样本对靠近（对齐），不同样本散开（均匀），避免坍缩。"
},
{
"id": "L16-012",
"lec": "L16",
"type": "pic",
"level": 2,
"q": "Points lie uniformly on a ring in 2-D, $x=(\\cos\\varphi,\\sin\\varphi)$, and the bottleneck is $k=1$. Which statement is right?",
"choices": [
"A linear AE recovers the ring exactly; a nonlinear AE cannot",
"Neither can reduce the error below the full variance",
"Both linear and nonlinear AEs reach zero error",
"Linear AE keeps half the variance; nonlinear AE with $z\\approx\\varphi$ reaches zero error"
],
"answer": 3,
"why": "The ring has covariance $\\tfrac12I$, so PCA (= linear AE) keeps $\\tfrac12$ of the total variance 1 in a single direction. A nonlinear decoder $z\\mapsto(\\cos z,\\sin z)$ reconstructs the curved manifold exactly.",
"zh": "圆环的协方差各向同性：线性 AE（PCA）只能留一半方差；非线性 AE 可用角度 $\\varphi$ 完美重构。"
},
{
"id": "L16-013",
"lec": "L16",
"type": "pic",
"level": 2,
"q": "You want contrastive embeddings of galaxy spectra to keep the redshift information. Which augmentation would erase exactly this information?",
"choices": [
"Randomly shifting or stretching the whole wavelength axis",
"Adding Gaussian noise at the typical S/N level",
"Masking small wavelength windows (cosmic-ray-like)",
"Randomly rescaling the overall flux"
],
"answer": 0,
"why": "Augmentations define the invariances. Shifting the wavelength axis mimics a change of redshift, so the encoder would learn to ignore it. B, C and D mimic nuisances that do not change the line positions.",
"zh": "增广 = 想要的不变性；整体平移波长轴等同改红移，会抹掉红移信息。"
},
{
"id": "L16-014",
"lec": "L16",
"type": "pic",
"level": 3,
"q": "An AE is trained on background-only detector images and flags events with large $\\lVert x-\\hat x\\rVert^2$. Which anomaly is most likely **missed**?",
"choices": [
"A burst of high-amplitude noise on all pixels",
"A new shower topology with many extra hits",
"A nearly blank, low-complexity image",
"A coherent ring pattern never seen in background"
],
"answer": 2,
"why": "The AE spends its capacity on complex background patterns, so a simple, nearly empty image is easy to reconstruct and gets a low anomaly score. A, B and D are hard to reconstruct and score high.",
"zh": "AE 异常检测的盲点：比背景更“简单”的异常（如近乎空白）也容易被重构，得分低。"
},
{
"id": "L17-001",
"lec": "L17",
"type": "term",
"level": 1,
"q": "For an undirected graph with adjacency $A$ and degree matrix $D=\\operatorname{diag}(A\\mathbf 1)$, the (combinatorial) graph Laplacian is",
"choices": [
"$A-D$",
"$D^{-1/2}AD^{-1/2}$",
"$D^{-1}A$",
"$D-A$"
],
"answer": 3,
"why": "$L=D-A$ has row sums $0$ and is positive semi-definite. A has the opposite sign (negative semi-definite); B and C are normalised adjacency matrices (propagation operators), not the Laplacian.",
"zh": "图拉普拉斯 $L=D-A$（度矩阵减邻接矩阵），半正定，行和为 0。"
},
{
"id": "L17-002",
"lec": "L17",
"type": "term",
"level": 1,
"q": "For a scalar signal $x\\in\\mathbb R^n$ on an undirected graph, which expression equals $x^TLx$ (the Dirichlet energy)?",
"choices": [
"$\\tfrac12\\sum_{i,j}A_{ij}(x_i-x_j)^2$",
"$\\tfrac12\\sum_{i,j}A_{ij}(x_i+x_j)^2$",
"$\\sum_id_ix_i^2$",
"$\\tfrac12\\sum_{i,j}A_{ij}(x_i^2-x_j^2)$"
],
"answer": 0,
"why": "$x^TLx=\\sum_id_ix_i^2-\\sum_{ij}A_{ij}x_ix_j$, which rearranges to $\\tfrac12\\sum A_{ij}(x_i-x_j)^2\\ge0$: small for smooth signals. C is only the $D$ part; D vanishes for symmetric $A$.",
"zh": "$x^TLx=\\frac12\\sum A_{ij}(x_i-x_j)^2$：衡量信号在图上的平滑度。"
},
{
"id": "L17-003",
"lec": "L17",
"type": "term",
"level": 2,
"q": "Node features $H\\in\\mathbb R^{d\\times n}$ (columns = nodes). Relabelling by a permutation matrix $P$ gives $A\\mapsto PAP^T$, $H\\mapsto HP^T$. Which condition makes a node-level $F$ (output $d'\\times n$) permutation **equivariant**?",
"choices": [
"$F(PAP^T,HP^T)=F(A,H)$",
"$F(PAP^T,HP^T)=P\\,F(A,H)$",
"$F(PAP^T,HP^T)=F(A,H)\\,P^T$",
"$F(PAP^T,HP^T)=F(A,H)\\,P$"
],
"answer": 2,
"why": "The output columns must be permuted exactly like the input columns, i.e. by $P^T$ from the right. A is invariance (graph-level outputs). B has the wrong layout (nodes × features); D applies the inverse permutation.",
"zh": "节点级等变：$F(PAP^T,HP^T)=F(A,H)P^T$；图级不变：右边不带 $P$。"
},
{
"id": "L17-004",
"lec": "L17",
"type": "term",
"level": 1,
"q": "Which matrix is the propagation operator $\\hat A$ of the Kipf–Welling GCN, with $\\tilde D=\\operatorname{diag}((A+I)\\mathbf 1)$?",
"choices": [
"$D^{-1/2}AD^{-1/2}$",
"$\\tilde D^{-1/2}(A+I)\\tilde D^{-1/2}$",
"$\\tilde D^{-1}(A+I)$",
"$A+I$"
],
"answer": 1,
"why": "Self-loops $A+I$ keep a node's own state, and the symmetric normalisation by $\\tilde d_i\\tilde d_j$ keeps the scale stable. A has no self-loops, C is row-normalised (random walk), D is unnormalised (scale grows with degree).",
"zh": "GCN：$\\hat A=\\tilde D^{-1/2}(A+I)\\tilde D^{-1/2}$，加自环并做对称归一化。"
},
{
"id": "L17-005",
"lec": "L17",
"type": "term",
"level": 2,
"q": "$H\\in\\mathbb R^{d\\times n}$, $W\\in\\mathbb R^{d'\\times d}$, $\\hat A\\in\\mathbb R^{n\\times n}$. Which GCN layer mixes channels with $W$, mixes nodes with $\\hat A$, and has consistent shapes?",
"choices": [
"$\\varphi(W\\,H\\,\\hat A)$",
"$\\varphi(\\hat A\\,H\\,W)$",
"$\\varphi(H\\,W\\,\\hat A)$",
"$\\varphi(W\\,\\hat A\\,H)$"
],
"answer": 0,
"why": "$WH$ is $d'\\times n$ and $\\cdot\\hat A$ keeps it $d'\\times n$: features on the left, nodes on the right. B, C and D multiply incompatible dimensions ($n\\times n$ with $d\\times n$, or $d\\times n$ with $d'\\times d$).",
"zh": "特征×节点布局下：$H'=\\varphi(WH\\hat A)$，$W$ 在左（通道），$\\hat A$ 在右（节点）。"
},
{
"id": "L17-006",
"lec": "L17",
"type": "calc",
"level": 1,
"q": "Path graph $1\\!-\\!2\\!-\\!3$ with signal $x=(2,0,1)$. What is $x^TLx$?",
"choices": [
"$10$",
"$5$",
"$3$",
"$2.5$"
],
"answer": 1,
"why": "Each edge counts once: $(2-0)^2+(0-1)^2=4+1=5$. The formula $\\tfrac12\\sum_{ij}A_{ij}(x_i-x_j)^2$ counts every edge twice and halves it; A forgets the $\\tfrac12$.",
"zh": "$x^TLx=\\sum_{\\text{边}}(x_i-x_j)^2=4+1=5$。"
},
{
"id": "L17-007",
"lec": "L17",
"type": "calc",
"level": 2,
"q": "Path $1\\!-\\!2\\!-\\!3$, scalar features $H=(0,1,0)$, $W=1$, $\\varphi=\\mathrm{id}$, $\\hat A=\\tilde D^{-1/2}(A+I)\\tilde D^{-1/2}$. What is the value at node 1 after one GCN layer?",
"choices": [
"$0.50$",
"$0.33$",
"$1.00$",
"$0.41$"
],
"answer": 3,
"why": "Node 1 receives from node 2 with weight $1/\\sqrt{\\tilde d_1\\tilde d_2}=1/\\sqrt{2\\cdot3}=0.408$. A would be $1/\\tilde d_1$, B is $1/\\tilde d_2$ (both ignore the symmetric normalisation); C is the unnormalised sum.",
"zh": "权重 $1/\\sqrt{\\tilde d_1\\tilde d_2}=1/\\sqrt6\\approx0.41$（$\\tilde d=(2,3,2)$）。"
},
{
"id": "L17-008",
"lec": "L17",
"type": "calc",
"level": 3,
"q": "Graph (a): two disjoint triangles; graph (b): a 6-cycle. All $h_i^{(0)}=1$; each layer uses sum aggregation, $h_i'=\\sum_{j\\in\\mathcal N(i)}h_j$. What are the node values after 2 layers?",
"choices": [
"$4$ in (b), but $3$ in (a)",
"$2$ in both",
"$4$ in both",
"$8$ in both"
],
"answer": 2,
"why": "Every node has degree 2: layer 1 gives $2$, layer 2 gives $2+2=4$, on both graphs. The two graphs are indistinguishable for message passing (1-WL), so a graph-level readout cannot tell them apart.",
"zh": "两个三角形与六边形中每点度都为 2，每层结果相同：2、4；MPNN（1-WL）无法区分。"
},
{
"id": "L17-009",
"lec": "L17",
"type": "calc",
"level": 1,
"q": "Path $1\\!-\\!2\\!-\\!3\\!-\\!4\\!-\\!5\\!-\\!6$. What is the minimum number of message-passing layers after which node 1's state can depend on node 6's input feature?",
"choices": [
"$5$",
"$6$",
"$3$",
"$1$"
],
"answer": 0,
"why": "One layer moves information one hop, and node 6 is 5 hops from node 1. An $L$-layer GNN has the $L$-hop neighbourhood as receptive field. B counts nodes instead of hops.",
"zh": "每层传一跳；节点 6 距节点 1 有 5 跳，故至少 5 层。"
},
{
"id": "L17-010",
"lec": "L17",
"type": "calc",
"level": 3,
"q": "Path $1\\!-\\!2\\!-\\!3$, $H=(0,1,0)$, $W=1$, $\\varphi=\\mathrm{id}$, $\\hat A=\\begin{pmatrix}\\frac12&\\frac1{\\sqrt6}&0\\\\\\frac1{\\sqrt6}&\\frac13&\\frac1{\\sqrt6}\\\\0&\\frac1{\\sqrt6}&\\frac12\\end{pmatrix}$. What is the value at node 2 after two layers, $(H\\hat A^2)_2$?",
"choices": [
"$1/3$",
"$4/9$",
"$1/9$",
"$5/9$"
],
"answer": 1,
"why": "$H\\hat A=(\\tfrac1{\\sqrt6},\\tfrac13,\\tfrac1{\\sqrt6})$, then $(H\\hat A^2)_2=\\tfrac16+\\tfrac19+\\tfrac16=\\tfrac49$. A is the one-layer value, C keeps only the self-loop path $\\tfrac13\\cdot\\tfrac13$.",
"zh": "两层：对节点 2 的所有两步路径求和 $\\frac16+\\frac19+\\frac16=\\frac49$。"
},
{
"id": "L17-011",
"lec": "L17",
"type": "pic",
"level": 1,
"q": "A graph consists of two disjoint triangles and one isolated node (7 nodes). How many zero eigenvalues does its Laplacian $L=D-A$ have?",
"choices": [
"$1$",
"$2$",
"$3$",
"$7$"
],
"answer": 2,
"why": "The multiplicity of eigenvalue $0$ equals the number of connected components: two triangles and one isolated node give 3, with indicator vectors of the components as eigenvectors.",
"zh": "$L$ 的零特征值个数 = 连通分量个数 = 3。"
},
{
"id": "L17-012",
"lec": "L17",
"type": "pic",
"level": 2,
"q": "The GCN propagation $\\hat A$ (with $\\varphi=\\mathrm{id}$) is applied many times to the node features of a connected graph. What do the features look like?",
"choices": [
"Differences between nodes are amplified",
"Each node keeps its own input value",
"All features decay to $0$",
"Features of all nodes become nearly equal, up to a degree-dependent factor"
],
"answer": 3,
"why": "$\\hat A^LH$ is a power iteration that converges to the dominant eigenvector (eigenvalue 1), so node features become indistinguishable: oversmoothing. Few layers, residual connections or normalisation help.",
"zh": "反复邻域平均 → 幂迭代收敛到主特征向量 → 过平滑，节点特征趋同。"
},
{
"id": "L17-013",
"lec": "L17",
"type": "pic",
"level": 2,
"q": "A hot spot $x=(1,0,\\dots,0)$ sits on one node of a connected undirected graph. Repeating $x\\leftarrow x-\\epsilon Lx$ with small $\\epsilon>0$ does what?",
"choices": [
"Heat spreads; $x$ converges to the constant vector with the same sum",
"$x$ decays to $0$",
"$x$ concentrates on the node of highest degree",
"$x$ oscillates forever"
],
"answer": 0,
"why": "This is the heat equation on the graph. $\\mathbf 1^TL=0$ conserves the sum, and the only fixed points ($Lx=0$) are constants on a connected graph. Heat is conserved, not lost.",
"zh": "$x\\leftarrow x-\\epsilon Lx$ 是图上的热方程：热量扩散、总和守恒，收敛到常数向量。"
},
{
"id": "L17-014",
"lec": "L17",
"type": "pic",
"level": 2,
"q": "Points in the plane are connected to their single nearest neighbour only ($k=1$ kNN graph, edges symmetrised). Which picture is right for typical data?",
"choices": [
"Always one connected graph, so $L$ has exactly one zero eigenvalue",
"Many small components: many zero eigenvalues, no messages between components",
"A complete graph, since every point sees all others",
"One long path through all points"
],
"answer": 1,
"why": "Nearest neighbours are often mutual, so points form small clusters (pairs with a few attached points). Messages cannot cross components, and $L$ gets one zero eigenvalue per component. A larger $k$ connects them.",
"zh": "$k=1$ 的 kNN 图通常碎成许多小连通块：零特征值多，消息无法跨块传递。"
},
{
"id": "L18-001",
"lec": "L18",
"type": "term",
"level": 1,
"q": "Course layout: tokens are the columns of $X\\in\\mathbb R^{d\\times n}$, and $Q=W_QX$, $K=W_KX$ both lie in $\\mathbb R^{d_k\\times n}$. What is the shape of the score matrix $S=K^\\top Q/\\sqrt{d_k}$?",
"choices": [
"$n\\times n$",
"$d_k\\times d_k$",
"$d_k\\times n$",
"$d\\times d$"
],
"answer": 0,
"why": "$K^\\top$ is $n\\times d_k$ and $Q$ is $d_k\\times n$, so $K^\\top Q$ is $n\\times n$: one score per (key, query) pair. $d_k\\times d_k$ would be $KK^\\top$, which compares feature rows, not tokens.",
"zh": "$S=K^\\top Q/\\sqrt{d_k}$ 是 $n\\times n$：每对（key, query）一个分数。"
},
{
"id": "L18-002",
"lec": "L18",
"type": "term",
"level": 1,
"q": "In the course layout $A_{ij}=\\exp S_{ij}/\\sum_l\\exp S_{lj}$. Which statement is correct?",
"choices": [
"Each row of $A$ sums to 1; it normalises over queries.",
"The whole matrix $A$ sums to 1.",
"Each column sums to 1; it normalises over keys $l$ for a fixed query $j$.",
"Each column sums to $n$, since there are $n$ keys."
],
"answer": 2,
"why": "The softmax runs over the key index $l$ for each query $j$, so every column is a probability vector. Row-wise normalisation is the transposed (row-convention) layout, not this one.",
"zh": "课程布局下 softmax 对 key 下标归一化：每一列和为 1。"
},
{
"id": "L18-003",
"lec": "L18",
"type": "term",
"level": 2,
"q": "Read $y_j=\\sum_i A_{ij}\\,v_i$ aloud. Which sentence is correct?",
"choices": [
"Token $i$ collects a weighted average of all query vectors.",
"The output for query token $j$ is a convex combination of all value vectors $v_i$.",
"The output for token $j$ is the sum of all keys weighted by the values.",
"The output for token $j$ is the single value $v_i$ whose key matches query $j$ best."
],
"answer": 1,
"why": "$A_{ij}\\ge0$ and $\\sum_iA_{ij}=1$, so $y_j$ is a convex combination of the values. D is the hard-dictionary limit, reached only when the softmax saturates.",
"zh": "$y_j=\\sum_iA_{ij}v_i$：query $j$ 对所有 value 做凸组合（软查字典）。"
},
{
"id": "L18-004",
"lec": "L18",
"type": "term",
"level": 2,
"q": "Target tokens $X_a\\in\\mathbb R^{d\\times n_a}$ should read from context tokens $X_b\\in\\mathbb R^{d\\times n_b}$. Which choice defines **cross-attention** (before the softmax)?",
"choices": [
"$Q=W_QX_b,\\ K=W_KX_a,\\ V=W_VX_a$",
"$Q=W_QX_a,\\ K=W_KX_a,\\ V=W_VX_b$",
"$Q=W_QX_a,\\ K=W_KX_b,\\ V=W_VX_a$",
"$Q=W_QX_a,\\ K=W_KX_b,\\ V=W_VX_b$"
],
"answer": 3,
"why": "Queries come from the reader (target), keys and values from the context. Key $i$ and value $v_i$ must belong to the same context token, so B and C are inconsistent; A swaps the roles.",
"zh": "交叉注意力：query 来自目标序列，key 和 value 都来自上下文序列。"
},
{
"id": "L18-005",
"lec": "L18",
"type": "calc",
"level": 1,
"q": "One attention head with $d=8$, $d_k=d_v=4$ processes $n=100$ tokens. How many entries do $W_Q$, $W_K$, $W_V$ have together?",
"choices": [
"32",
"96",
"192",
"9600"
],
"answer": 1,
"why": "Each of the three matrices is $4\\times8=32$ entries, so $3\\cdot32=96$. The number of parameters does not depend on $n$ (D); 192 would be three $8\\times8$ matrices, i.e. $d_k=d$.",
"zh": "每个投影矩阵 $4\\times8=32$，三个共 96；参数数与 $n$ 无关。"
},
{
"id": "L18-006",
"lec": "L18",
"type": "calc",
"level": 2,
"q": "Entries of $q,k\\in\\mathbb R^{64}$ are independent with mean 0 and variance 1. What is $\\operatorname{Var}\\!\\big[q^\\top k/\\sqrt{64}\\big]$?",
"choices": [
"64",
"8",
"$1/8$",
"1"
],
"answer": 3,
"why": "$\\operatorname{Var}[q^\\top k]=\\sum_{m=1}^{64}1=64$; dividing by $8$ divides the variance by $64$, giving 1. The value 8 is the standard deviation of the *unscaled* score.",
"zh": "$\\mathrm{Var}[q^\\top k]=d_k=64$，除以 $\\sqrt{d_k}$ 后方差为 1。"
},
{
"id": "L18-007",
"lec": "L18",
"type": "calc",
"level": 2,
"q": "Two keys with scores $s=(0,\\ \\ln3)$ for a given query, and scalar values $v=(4,\\ 8)$. What is the attention output $\\sum_i a_iv_i$?",
"choices": [
"7",
"6",
"8",
"5"
],
"answer": 0,
"why": "$a=(1,3)/4=(0.25,0.75)$, so the output is $0.25\\cdot4+0.75\\cdot8=7$. B is the uniform average; D comes from swapping the weights.",
"zh": "softmax 权重 $(1/4,3/4)$，输出 $1+6=7$。"
},
{
"id": "L18-008",
"lec": "L18",
"type": "calc",
"level": 3,
"q": "$n=4$ tokens, all raw scores $S_{ij}=0$. Causal mask: $S_{ij}\\leftarrow-\\infty$ for $i>j$, then column-wise softmax. What is column $j=3$ of $A$ (indices start at 1)?",
"choices": [
"$(\\tfrac14,\\tfrac14,\\tfrac14,\\tfrac14)^\\top$",
"$(\\tfrac14,\\tfrac14,\\tfrac14,0)^\\top$",
"$(\\tfrac13,\\tfrac13,\\tfrac13,0)^\\top$",
"$(0,0,0,1)^\\top$"
],
"answer": 2,
"why": "Query 3 may only see keys $i\\le3$; three equal scores give weight $1/3$ each, and key 4 gets $e^{-\\infty}=0$ *before* normalisation. B (zeroing after the softmax) breaks normalisation: it sums to $3/4$.",
"zh": "先加 $-\\infty$ 再 softmax：可见的 3 个 key 各 $1/3$，列和仍为 1。"
},
{
"id": "L18-009",
"lec": "L18",
"type": "pic",
"level": 1,
"q": "With causal masking in the course layout ($S_{ij}=-\\infty$ for $i>j$; row $i$ = key, column $j$ = query), where are the nonzero entries of the $n\\times n$ matrix $A$?",
"choices": [
"On and below the diagonal ($i\\ge j$).",
"Only on the diagonal.",
"Everywhere, but each row renormalised.",
"On and above the diagonal ($i\\le j$)."
],
"answer": 3,
"why": "Query $j$ may only use keys $i\\le j$, so $A$ is upper triangular here. A is the picture in the row convention (most papers), which is the transpose.",
"zh": "本课布局中行=key、列=query，因果掩码后 $A$ 为上三角。"
},
{
"id": "L18-010",
"lec": "L18",
"type": "pic",
"level": 2,
"q": "All entries of the query $q$ are doubled, keys unchanged. Viewing $a_i\\propto\\exp(k_i^\\top q/\\sqrt{d_k})$ as a Boltzmann distribution over keys, what happens to the weights $a_i$?",
"choices": [
"They become flatter, closer to uniform.",
"They become more peaked: lower effective temperature, closer to one-hot on the best key.",
"They are unchanged, because the softmax normalises.",
"The peak moves to the key with the lowest score."
],
"answer": 1,
"why": "Doubling $q$ doubles all scores, i.e. halves the temperature: large differences get amplified (in the notes' example $0.445\\to0.486$ for the best keys). Normalisation fixes the sum, not the shape.",
"zh": "$q$ 加倍=分数加倍=温度减半，注意力更尖锐（趋近 one-hot）。"
},
{
"id": "L18-011",
"lec": "L18",
"type": "pic",
"level": 3,
"q": "A jet tagger stacks $n$ particles as columns of $X$, applies self-attention blocks **without** positional encoding, mean-pools over the tokens and applies a logistic head. Shuffling the order of the particles changes the signal probability by …",
"choices": [
"nothing: equivariant layers followed by pooling give permutation invariance.",
"a shuffle of the probability, because attention is only equivariant.",
"some amount, since the softmax depends on the order of the keys.",
"some amount, unless positional encodings are added."
],
"answer": 0,
"why": "$f(XP)=f(X)P$ for the attention blocks; the mean over columns is unchanged by $P$, so the output is invariant. Equivariance of the blocks is exactly what makes the pooled output invariant.",
"zh": "自注意力等变 $f(XP)=f(X)P$，再对 token 池化即得排列不变。"
},
{
"id": "L18-012",
"lec": "L18",
"type": "pic",
"level": 3,
"q": "Sinusoidal positional encoding gives each frequency $\\omega_m$ the pair $(\\sin\\omega_mt,\\ \\cos\\omega_mt)$. Shifting the position $t\\to t+\\Delta$ acts on this pair as …",
"choices": [
"adding the constant vector $(\\Delta,\\Delta)$",
"multiplying the pair by $\\Delta$",
"a rotation by angle $\\omega_m\\Delta$, the same matrix for every $t$",
"a reflection about an axis at angle $\\omega_m\\Delta$"
],
"answer": 2,
"why": "By the angle-addition formulas $(\\sin\\omega(t+\\Delta),\\cos\\omega(t+\\Delta))$ is the old pair rotated by $\\omega\\Delta$ with a $t$-independent $2\\times2$ matrix. So relative offsets are linear functions of the encoding.",
"zh": "位置平移 $\\Delta$ = 每个 (sin, cos) 对旋转 $\\omega_m\\Delta$，与 $t$ 无关。"
},
{
"id": "L19-001",
"lec": "L19",
"type": "term",
"level": 1,
"q": "Which expression is the exact autoregressive factorisation of a token sequence used by an LLM?",
"choices": [
"$\\sum_{t=1}^T p_\\theta(x_t\\mid x_{<t})$",
"$\\prod_{t=1}^T p_\\theta(x_t)$",
"$\\prod_{t=1}^T p_\\theta(x_t\\mid x_{t-1})$",
"$\\prod_{t=1}^T p_\\theta(x_t\\mid x_{<t})$"
],
"answer": 3,
"why": "The chain rule of probability gives a product of conditionals on the whole prefix $x_{<t}$; it is exact. B assumes independence and C a first-order Markov chain, which are approximations. A sums instead of multiplying.",
"zh": "自回归分解是链式法则：$\\prod_tp(x_t\\mid x_{<t})$，是精确的。"
},
{
"id": "L19-002",
"lec": "L19",
"type": "term",
"level": 1,
"q": "Which expression is the pre-training loss of an LLM (average over $T$ positions)?",
"choices": [
"$-\\frac1T\\sum_t\\log p_\\theta(x_t\\mid x_{<t})$",
"$+\\frac1T\\sum_t\\log p_\\theta(x_t\\mid x_{<t})$",
"$-\\log\\big(\\frac1T\\sum_t p_\\theta(x_t\\mid x_{<t})\\big)$",
"$-\\frac1T\\sum_t p_\\theta(x_t\\mid x_{<t})$"
],
"answer": 0,
"why": "It is the mean negative log-likelihood of each token given its prefix, i.e. the cross-entropy. B has the wrong sign (it would be maximised by being wrong), C and D take the logarithm of an average or drop the log.",
"zh": "预训练损失 = 平均负对数似然（交叉熵）。"
},
{
"id": "L19-003",
"lec": "L19",
"type": "term",
"level": 2,
"q": "For one position with logits $z\\in\\mathbb R^{|\\mathcal V|}$ and one-hot target $y$, what is $\\partial\\mathcal L_t/\\partial z$ for the softmax cross-entropy?",
"choices": [
"$y-\\operatorname{softmax}(z)$",
"$\\operatorname{softmax}(z)\\odot\\big(1-\\operatorname{softmax}(z)\\big)$",
"$\\operatorname{softmax}(z)-y$",
"$z-y$"
],
"answer": 2,
"why": "\"Prediction minus target\" gives the gradient that raises the target logit when descended. A has the opposite sign (gradient ascent direction). B is the diagonal of the softmax Jacobian, which the cross-entropy cancels.",
"zh": "交叉熵对 logits 的梯度 = $\\mathrm{softmax}(z)-y$（预测减目标）。"
},
{
"id": "L19-004",
"lec": "L19",
"type": "term",
"level": 3,
"q": "Which identity shows that minimising the next-token cross-entropy is minimising a KL divergence, and that the loss cannot reach zero?",
"choices": [
"$H(p,p_\\theta)=H(p_\\theta)+\\mathrm{KL}(p\\,\\|\\,p_\\theta)$",
"$H(p,p_\\theta)=H(p)+\\mathrm{KL}(p\\,\\|\\,p_\\theta)$",
"$H(p,p_\\theta)=H(p)-\\mathrm{KL}(p\\,\\|\\,p_\\theta)$",
"$H(p,p_\\theta)=H(p)+\\mathrm{KL}(p_\\theta\\,\\|\\,p)$"
],
"answer": 1,
"why": "$\\mathrm{KL}\\ge0$ and $H(p)$ (entropy of language) does not depend on $\\theta$, so the loss is bounded below by $H(p)>0$. D has the KL in the wrong direction; C would allow loss below $H(p)$.",
"zh": "$H(p,q)=H(p)+\\mathrm{KL}(p\\|q)$：下界是数据熵，KL 方向是 $p\\|q$。"
},
{
"id": "L19-005",
"lec": "L19",
"type": "term",
"level": 2,
"q": "Read the RLHF objective $\\mathbb E_{y\\sim\\pi_\\theta}[r_\\phi(x,y)]-\\beta\\,\\mathrm{KL}(\\pi_\\theta\\|\\pi_{\\rm ref})$. Which sentence is correct?",
"choices": [
"Maximise reward and also the divergence from the SFT model, to explore.",
"Maximise expected reward, paying a price $\\beta$ for drifting from the reference.",
"Maximise reward subject to the policy being identical to $\\pi_{\\rm ref}$.",
"Maximise the KL to $\\pi_{\\rm ref}$, weighted by the reward."
],
"answer": 1,
"why": "The KL term is a regulariser (like ridge) that keeps the policy near $\\pi_{\\rm ref}$ and limits exploitation of reward-model errors. It is a soft penalty with strength $\\beta$, not a hard constraint (C) and not a bonus (A).",
"zh": "RLHF：最大化期望奖励，同时用 $\\beta\\,$KL 惩罚偏离参考模型。"
},
{
"id": "L19-006",
"lec": "L19",
"type": "calc",
"level": 2,
"q": "Vocabulary $\\{a,b,c\\}$, logits $z=(2,1,0)$, so $\\operatorname{softmax}(z)\\approx(0.665,0.245,0.090)$. The true next token is $c$. What is $\\partial\\mathcal L/\\partial z$?",
"choices": [
"$(-0.335,\\ 0.245,\\ 0.090)$",
"$(0.665,\\ 0.245,\\ 0.910)$",
"$(0.665,\\ -0.755,\\ 0.090)$",
"$(0.665,\\ 0.245,\\ -0.910)$"
],
"answer": 3,
"why": "Subtract 1 from the component of the true token: $(0.665,0.245,0.090-1)$. C subtracts at $b$ (the worked example's target), A at $a$; B adds instead of subtracts.",
"zh": "梯度 = softmax − one-hot：只在真实 token 那一维减 1。"
},
{
"id": "L19-007",
"lec": "L19",
"type": "calc",
"level": 3,
"q": "Compute budget $C=6ND=1.2\\cdot10^{22}$ FLOPs with the Chinchilla rule $D=20N$. How many parameters $N$?",
"choices": [
"$1.0\\cdot10^{10}$",
"$1.7\\cdot10^{10}$",
"$2.4\\cdot10^{10}$",
"$1.0\\cdot10^{11}$"
],
"answer": 0,
"why": "$6N\\cdot20N=120N^2=1.2\\cdot10^{22}$ gives $N^2=10^{20}$, $N=10^{10}$ (and $D=2\\cdot10^{11}$). B uses forward-only $2ND$, C forgets the factor 6.",
"zh": "$120N^2=1.2\\times10^{22}\\Rightarrow N=10^{10}$；别忘反向传播的因子 3。"
},
{
"id": "L19-008",
"lec": "L19",
"type": "pic",
"level": 1,
"q": "Sampling with $p_i\\propto\\exp(z_i/\\tau)$ and $\\tau\\to0$. What does the generated text look like?",
"choices": [
"Random gibberish drawn uniformly from the vocabulary.",
"Samples from the model's own distribution, as for $\\tau=1$.",
"The argmax token at every step: deterministic and often repetitive.",
"The same distribution truncated to the top-$k$ tokens."
],
"answer": 2,
"why": "Boltzmann weights with temperature $\\tau\\to0$ concentrate on the largest logit (ground state), which is greedy decoding. $\\tau\\to\\infty$ would give A.",
"zh": "$\\tau\\to0$：玻尔兹曼分布塌缩到最大 logit，即贪心、确定、易重复。"
},
{
"id": "L19-009",
"lec": "L19",
"type": "pic",
"level": 2,
"q": "At fixed large $D$, the model-size term of the loss is $A/N^{\\alpha}$. On a log–log plot of this term against $N$, what do you see?",
"choices": [
"A straight line of slope $+\\alpha$.",
"A straight line of slope $-1/\\alpha$.",
"A straight line of slope $-\\alpha$.",
"A horizontal line at the irreducible loss $E$."
],
"answer": 2,
"why": "$\\log(A N^{-\\alpha})=\\log A-\\alpha\\log N$ is linear in $\\log N$ with slope $-\\alpha$ (scale-free power law, as near a critical point). The constant $E$ is what the full loss flattens to at huge $N$.",
"zh": "幂律在 log–log 图上是斜率为 $-\\alpha$ 的直线。"
},
{
"id": "L19-010",
"lec": "L19",
"type": "pic",
"level": 2,
"q": "The RLHF optimum is $\\pi^*(y|x)\\propto\\pi_{\\rm ref}(y|x)\\exp(r(x,y)/\\beta)$. As $\\beta\\to\\infty$, what does $\\pi^*$ look like?",
"choices": [
"It returns to $\\pi_{\\rm ref}$: the reward is ignored.",
"It collapses onto the single highest-reward answer.",
"It becomes uniform over all answers.",
"It sharpens around the answer with the average reward."
],
"answer": 0,
"why": "$\\beta$ plays the role of a temperature: $r/\\beta\\to0$ makes the reweighting factor 1. Small $\\beta$ would give B (greedy on reward, strongest reward hacking).",
"zh": "$\\beta\\to\\infty$（高温）：奖励被忽略，策略回到参考模型。"
},
{
"id": "L19-011",
"lec": "L19",
"type": "pic",
"level": 1,
"q": "A language model has perplexity 4 on a text. Which picture is right?",
"choices": [
"It gets every fourth token wrong.",
"On average it is as uncertain as choosing uniformly among 4 tokens at each step.",
"It has reduced the vocabulary size by a factor 4.",
"Its loss is 4 nats per token."
],
"answer": 1,
"why": "Perplexity is $\\exp(\\mathcal L)$, the effective branching factor; uniform guessing has perplexity $|\\mathcal V|$. Perplexity 4 means $\\mathcal L=\\ln4\\approx1.39$ nats, not 4 (D).",
"zh": "困惑度 $=e^{\\mathcal L}$：等效的\"每步等概率候选数\"。"
},
{
"id": "L19-012",
"lec": "L19",
"type": "pic",
"level": 3,
"q": "With $\\alpha=\\beta$ in the loss fit, the compute-optimal $(N,D)$ for growing $C$ moves on a log–log plot of $D$ versus $N$ along a line of slope …",
"choices": [
"$-1$",
"$\\tfrac12$",
"$0$",
"$+1$"
],
"answer": 3,
"why": "$N_{\\rm opt}\\propto C^{\\beta/(\\alpha+\\beta)}$ and $D_{\\rm opt}\\propto C^{\\alpha/(\\alpha+\\beta)}$, so the slope is $\\alpha/\\beta=1$ ($D\\approx20N$). Slope $-1$ is the *iso-compute* line $ND=C/6$, a different line.",
"zh": "最优路径斜率 $\\alpha/\\beta=1$（$D\\propto N$）；斜率 $-1$ 是等算力线。"
},
{
"id": "L20-001",
"lec": "L20",
"type": "term",
"level": 1,
"q": "A sparse autoencoder maps activations $h\\in\\mathbb R^d$ to a code $f=\\operatorname{ReLU}(W_e(h-b_d)+b_e)\\in\\mathbb R^m$ with $m\\gg d$ and $\\hat h=W_df+b_d$. Which loss is used?",
"choices": [
"$\\lVert h-\\hat h\\rVert_2^2+\\lambda\\lVert f\\rVert_2^2$",
"$\\lVert h-\\hat h\\rVert_2^2+\\lambda\\lVert f\\rVert_1$",
"$\\lVert h-\\hat h\\rVert_1+\\lambda\\lVert f\\rVert_2^2$",
"$\\lVert h-\\hat h\\rVert_2^2-\\lambda\\lVert f\\rVert_1$"
],
"answer": 1,
"why": "Reconstruction error plus an $\\ell_1$ penalty on the code: sparse coding, the same idea as the lasso. A is ridge (shrinks but does not make sparse); D would reward large codes.",
"zh": "SAE 损失 = 重构误差 + $\\lambda\\lVert f\\rVert_1$，即 lasso 式稀疏编码。"
},
{
"id": "L20-002",
"lec": "L20",
"type": "term",
"level": 1,
"q": "Proxy $R=U+\\varepsilon$ for a true utility $U$, independent Gaussians with variances $\\sigma_U^2,\\sigma_\\varepsilon^2$. Which is $\\mathbb E[U\\mid R=r]$?",
"choices": [
"$\\dfrac{\\sigma_\\varepsilon^2}{\\sigma_U^2+\\sigma_\\varepsilon^2}\\,r$",
"$r$",
"$\\dfrac{\\sigma_U}{\\sigma_U+\\sigma_\\varepsilon}\\,r$",
"$\\dfrac{\\sigma_U^2}{\\sigma_U^2+\\sigma_\\varepsilon^2}\\,r$"
],
"answer": 3,
"why": "Gaussian conditioning shrinks $r$ by the signal fraction of the variance. B would hold only for $\\sigma_\\varepsilon=0$; A is the noise fraction (the part of $r$ that is error).",
"zh": "$\\mathbb E[U|R=r]=\\frac{\\sigma_U^2}{\\sigma_U^2+\\sigma_\\varepsilon^2}r$：向均值收缩。"
},
{
"id": "L20-003",
"lec": "L20",
"type": "term",
"level": 2,
"q": "Which procedure supports a **causal** claim that an internal component is used by the model?",
"choices": [
"Activation patching: copy its activation from run B into run A, measure the change.",
"Fitting a linear probe from the activation to the concept label.",
"Plotting the attention weights of that head.",
"Reading the saliency map $\\partial y/\\partial x$."
],
"answer": 0,
"why": "Patching is an intervention on the computational graph. A probe only shows the concept is linearly decodable; attention weights and saliency are correlational and can be misleading.",
"zh": "因果证据来自干预（activation patching）；probe 只说明可线性解码。"
},
{
"id": "L20-004",
"lec": "L20",
"type": "term",
"level": 3,
"q": "FGSM for a loss $\\mathcal L(x)$ with budget $\\lVert\\delta\\rVert_\\infty=\\epsilon$ (a step that **increases** the loss). Which perturbation is it?",
"choices": [
"$\\delta=\\epsilon\\,\\nabla_x\\mathcal L$",
"$\\delta=-\\epsilon\\,\\operatorname{sign}(\\nabla_x\\mathcal L)$",
"$\\delta=\\epsilon\\,\\operatorname{sign}(\\nabla_x\\mathcal L)$",
"$\\delta=\\epsilon\\,\\nabla_x\\mathcal L/\\lVert\\nabla_x\\mathcal L\\rVert_2$"
],
"answer": 2,
"why": "Each component moves by $\\pm\\epsilon$ in the direction that raises the loss, so $\\lVert\\delta\\rVert_\\infty=\\epsilon$. B lowers the loss. A and D do not saturate the $\\ell_\\infty$ budget (D is an $\\ell_2$-normalised step).",
"zh": "FGSM：$\\delta=\\epsilon\\,\\mathrm{sign}(\\nabla_x\\mathcal L)$，沿使损失增大的方向。"
},
{
"id": "L20-005",
"lec": "L20",
"type": "term",
"level": 2,
"q": "In the toy model $h=Wx$, $W\\in\\mathbb R^{d\\times m}$, $\\hat x=\\operatorname{ReLU}(W^\\top h+b)$, when does the network use **superposition** instead of learning a PCA-like orthogonal basis?",
"choices": [
"Features are sparse and there are more features than dimensions, $m>d$.",
"Features are dense and $m>d$.",
"Features are sparse but $m\\le d$.",
"An $\\ell_1$ penalty is placed on the entries of $W$."
],
"answer": 0,
"why": "Sparsity makes interference between almost-orthogonal directions rarely matter (ReLU with negative bias removes it). For dense features, or $m\\le d$, the model keeps the $d$ most important features orthogonally, as PCA does.",
"zh": "特征稀疏且 $m>d$ 才会叠加；稠密或 $m\\le d$ 则退化为 PCA。"
},
{
"id": "L20-006",
"lec": "L20",
"type": "calc",
"level": 2,
"q": "Independent Gaussians with $\\sigma_U^2=1$ and $\\sigma_\\varepsilon^2=3$. A candidate is selected with proxy score $R=4$. What is $\\mathbb E[U\\mid R=4]$?",
"choices": [
"3",
"2",
"1",
"4"
],
"answer": 2,
"why": "$\\mathbb E[U|R]=\\frac{1}{1+3}\\cdot4=1$. A is the noise share $\\frac34\\cdot4$ (the part that is error), D takes the proxy at face value.",
"zh": "收缩因子 $1/(1+3)=1/4$，所以 $\\mathbb E[U|R=4]=1$。"
},
{
"id": "L20-007",
"lec": "L20",
"type": "calc",
"level": 2,
"q": "A linear score $w^\\top x$ on $p=10^4$ pixels with $|w_j|=0.02$ for all $j$. Every pixel is shifted by $\\epsilon=0.005$ along $\\operatorname{sign}(w_j)$. By how much does the score change?",
"choices": [
"0.01",
"1.0",
"200",
"0.005"
],
"answer": 1,
"why": "Shift $=\\epsilon\\lVert w\\rVert_1=0.005\\cdot(10^4\\cdot0.02)=0.005\\cdot200=1.0$. A uses $\\lVert w\\rVert_2=2$ instead; tiny per-pixel changes add up linearly with $p$.",
"zh": "变化量 $=\\epsilon\\lVert w\\rVert_1=0.005\\times200=1$，随维度线性累积。"
},
{
"id": "L20-008",
"lec": "L20",
"type": "pic",
"level": 1,
"q": "In RLHF, proxy reward (learned reward model) and gold (true) reward are plotted against optimisation pressure, e.g. KL from the reference model. What is the typical picture?",
"choices": [
"Both rise monotonically and saturate together.",
"Proxy falls while gold rises.",
"Both fall after a short rise.",
"Proxy keeps rising, gold rises, peaks, then falls."
],
"answer": 3,
"why": "This is the Goodhart curve: moderate optimisation helps, extreme optimisation exploits reward-model errors, so the gap between proxy and gold grows.",
"zh": "Goodhart 曲线：代理奖励一直升，真实奖励先升后降。"
},
{
"id": "L20-009",
"lec": "L20",
"type": "pic",
"level": 3,
"q": "Three unit feature directions $w_1,w_2,w_3\\in\\mathbb R^2$ at $120^\\circ$, columns of $W$, with $h=Wx$ and $b=0$. Only feature 1 is active, $x=e_1$. What is $\\hat x=\\operatorname{ReLU}(W^\\top h)$?",
"choices": [
"$(1,-\\tfrac12,-\\tfrac12)$",
"$(1,\\tfrac12,\\tfrac12)$",
"$(\\tfrac13,\\tfrac13,\\tfrac13)$",
"$(1,0,0)$"
],
"answer": 3,
"why": "$h=w_1$ and $W^\\top h=(w_i\\cdot w_1)_i=(1,-\\tfrac12,-\\tfrac12)$; the ReLU clips the negative interference to 0. A is the pre-activation, before the ReLU.",
"zh": "$W^\\top h=(1,-\\tfrac12,-\\tfrac12)$，ReLU 滤掉干扰得 $(1,0,0)$。"
},
{
"id": "L20-010",
"lec": "L20",
"type": "pic",
"level": 1,
"q": "One neuron fires for \"DNA sequences\" and also for \"legal text\". In the superposition picture, why?",
"choices": [
"The neuron is broken or dead.",
"Features are near-orthogonal directions off the neuron axes; a neuron mixes several.",
"The layer has fewer features than neurons.",
"Attention weights of that layer are too large."
],
"answer": 1,
"why": "With $m>d$ sparse features, each feature is a direction in activation space, not a coordinate axis, so single neurons are polysemantic. C is the opposite condition.",
"zh": "叠加使特征是非坐标轴方向，单个神经元因此多义。"
},
{
"id": "L20-011",
"lec": "L20",
"type": "pic",
"level": 2,
"q": "Residual stream: $x^{(\\ell+1)}=x^{(\\ell)}+\\sum_h\\mathrm{head}_h(x^{(\\ell)})+\\mathrm{MLP}(\\cdot)$. What is the picture?",
"choices": [
"One shared vector that all components read and add to; logits = sum of contributions.",
"Each layer overwrites the previous activation.",
"The heads of a layer are applied one after another, each on the previous head's output.",
"Only the last layer influences the logits."
],
"answer": 0,
"why": "Because layers only add, the unembedding of the final stream splits linearly into per-component contributions (direct logit attribution), and later layers can read earlier writes.",
"zh": "残差流是共享工作区：各组件读写同一向量，logits 是各贡献之和。"
},
{
"id": "L20-012",
"lec": "L20",
"type": "pic",
"level": 2,
"q": "Scatter plot of $(R,U)$ with $R=U+\\varepsilon$, $\\sigma_U=\\sigma_\\varepsilon$. For candidates selected at a fixed large $R=r$, where does the true $U$ typically lie?",
"choices": [
"At $U=r$, on the diagonal.",
"At $U=0$.",
"About halfway, at $U\\approx r/2$ (regression to the mean).",
"At $U\\approx2r$."
],
"answer": 2,
"why": "The shrinkage factor is $\\sigma_U^2/(\\sigma_U^2+\\sigma_\\varepsilon^2)=\\tfrac12$: half of the apparent excellence is noise. Selecting on the proxy still helps, but only by that factor.",
"zh": "方差相等时 $\\mathbb E[U|R=r]=r/2$：选出来的\"优秀\"有一半是噪声。"
},
{
"id": "L21-001",
"lec": "L21",
"type": "term",
"level": 1,
"q": "Which object is called the **score** of a density $p(x)$, $x\\in\\mathbb R^p$?",
"choices": [
"$\\nabla_x\\log p(x)\\in\\mathbb R^p$",
"$\\nabla_\\theta\\log p(x\\mid\\theta)$, the gradient with respect to the parameters",
"$\\nabla_x p(x)$, the gradient of the density itself",
"$\\nabla_x^2\\log p(x)\\in\\mathbb R^{p\\times p}$"
],
"answer": 0,
"why": "The score is the gradient of the log-density with respect to $x$. B is the parameter score of Fisher information, a different object; D is the Hessian; C lacks the log and so depends on the normalisation scale.",
"zh": "score = $\\nabla_x\\log p(x)$（对 $x$ 求导，不是对参数）。"
},
{
"id": "L21-002",
"lec": "L21",
"type": "term",
"level": 1,
"q": "For a Boltzmann density $p(x)\\propto e^{-E(x)/k_BT}$, which expression is the score?",
"choices": [
"$-\\nabla E$",
"$+\\nabla E/k_BT$",
"$-\\nabla E/k_BT$, i.e. the force $F$ divided by $k_BT$",
"$-k_BT\\,\\nabla E$"
],
"answer": 2,
"why": "$\\log p=-E/k_BT-\\log Z$, and $\\log Z$ drops out under $\\nabla$. So $s=-\\nabla E/k_BT=F/k_BT$. A forgets the temperature, B has the wrong sign, D inverts the temperature factor.",
"zh": "玻尔兹曼分布的 score = 力 / $k_BT$，归一化常数 $Z$ 消失。"
},
{
"id": "L21-003",
"lec": "L21",
"type": "term",
"level": 2,
"q": "Which is the closed form of the DDPM forward marginal $q(x_t\\mid x_0)$, with $\\bar\\alpha_t=\\prod_{s\\le t}(1-\\beta_s)$?",
"choices": [
"$\\mathcal N\\big(\\bar\\alpha_t\\,x_0,\\ (1-\\bar\\alpha_t)I\\big)$",
"$\\mathcal N\\big(\\sqrt{\\bar\\alpha_t}\\,x_0,\\ (1-\\bar\\alpha_t)I\\big)$",
"$\\mathcal N\\big(\\sqrt{\\bar\\alpha_t}\\,x_0,\\ \\sqrt{1-\\bar\\alpha_t}\\,I\\big)$",
"$\\mathcal N\\big(\\sqrt{\\bar\\alpha_t}\\,x_0,\\ \\bar\\alpha_tI\\big)$"
],
"answer": 1,
"why": "The mean shrinks by $\\sqrt{\\bar\\alpha_t}$ and the variances add up to $1-\\bar\\alpha_t$, so total variance stays bounded (variance preserving). C puts the standard deviation in the covariance slot.",
"zh": "$q(x_t|x_0)=\\mathcal N(\\sqrt{\\bar\\alpha_t}x_0,(1-\\bar\\alpha_t)I)$：方差（非标准差）。"
},
{
"id": "L21-004",
"lec": "L21",
"type": "term",
"level": 3,
"q": "For $x_t=a\\,x_0+\\sigma\\varepsilon$, which is Tweedie's formula for the denoiser $\\mathbb E[x_0\\mid x_t]$ in terms of the score of $q_t$?",
"choices": [
"$\\big(x_t-\\sigma^2\\nabla\\log q_t(x_t)\\big)/a$",
"$x_t+\\sigma^2\\nabla\\log q_t(x_t)$",
"$a\\,x_t+\\sigma^2\\nabla\\log q_t(x_t)$",
"$\\big(x_t+\\sigma^2\\nabla\\log q_t(x_t)\\big)/a$"
],
"answer": 3,
"why": "The score points toward higher density, i.e. toward the clean signal, so it is added to $x_t$; the factor $1/a$ undoes the signal shrinkage. B forgets the $1/a$; A has the wrong sign.",
"zh": "Tweedie：$\\mathbb E[x_0|x_t]=(x_t+\\sigma^2\\nabla\\log q_t)/a$。"
},
{
"id": "L21-005",
"lec": "L21",
"type": "calc",
"level": 2,
"q": "In 1-D, $\\alpha_1=\\alpha_2=0.8$ and $x_0=5$. What are the mean and variance of $q(x_2\\mid x_0)$?",
"choices": [
"mean 3.2, variance 0.36",
"mean 4.0, variance 0.6",
"mean 4.0, variance 0.4",
"mean 4.0, variance 0.36"
],
"answer": 3,
"why": "$\\bar\\alpha_2=0.64$, so mean $=\\sqrt{0.64}\\cdot5=4.0$ and variance $=1-0.64=0.36$. A uses $\\bar\\alpha$ instead of $\\sqrt{\\bar\\alpha}$; B reports the standard deviation; C adds $\\beta_1+\\beta_2$ without the shrinkage.",
"zh": "$\\bar\\alpha_2=0.64$：均值 $0.8\\times5=4$，方差 $1-0.64=0.36$。"
},
{
"id": "L21-006",
"lec": "L21",
"type": "calc",
"level": 1,
"q": "$p=\\mathcal N(1,\\ 4)$ in 1-D (**variance** 4). What is the score $\\nabla_x\\log p$ at $x=5$?",
"choices": [
"$-4$",
"$-1$",
"$+1$",
"$-2$"
],
"answer": 1,
"why": "$\\nabla\\log p=-(x-\\mu)/s^2=-(5-1)/4=-1$: a restoring force toward the mean. A forgets to divide by the variance, D divides by the standard deviation.",
"zh": "高斯的 score $=-(x-\\mu)/s^2$，恢复力指向均值。"
},
{
"id": "L21-007",
"lec": "L21",
"type": "calc",
"level": 3,
"q": "$x_0\\sim\\mathcal N(0,1)$ and $x_t=0.8\\,x_0+0.6\\,\\varepsilon$, so $q_t=\\mathcal N(0,1)$. For the observation $x_t=2.5$, what is $\\mathbb E[x_0\\mid x_t]$ from Tweedie's formula?",
"choices": [
"2.0",
"3.125",
"1.6",
"0.9"
],
"answer": 0,
"why": "Score $=-2.5$, $\\sigma^2=0.36$: $\\big(2.5-0.36\\cdot2.5\\big)/0.8=1.6/0.8=2.0$. This equals Gaussian conditioning $a\\,x_t=0.8\\cdot2.5$. B is $x_t/a$ (ignores the prior), D is $\\sigma^2x_t$.",
"zh": "Tweedie：$(2.5-0.36\\times2.5)/0.8=2.0$，与高斯条件期望一致。"
},
{
"id": "L21-008",
"lec": "L21",
"type": "calc",
"level": 2,
"q": "At a step with $\\bar\\alpha_t=0.36$ a network predicts the noise $\\varepsilon_\\theta=(1.6,\\,-0.8)^\\top$. What score $s_\\theta=-\\varepsilon_\\theta/\\sqrt{1-\\bar\\alpha_t}$ does this imply?",
"choices": [
"$(2,\\,-1)^\\top$",
"$(-1.28,\\,0.64)^\\top$",
"$(-2,\\,1)^\\top$",
"$(-1.6,\\,0.8)^\\top$"
],
"answer": 2,
"why": "$\\sqrt{1-0.36}=0.8$, so $s=-(1.6,-0.8)/0.8=(-2,1)$. B multiplies by 0.8 instead of dividing; D forgets the scale; A has the wrong sign.",
"zh": "$s_\\theta=-\\varepsilon_\\theta/\\sqrt{1-\\bar\\alpha_t}$：负号，并除以 0.8。"
},
{
"id": "L21-009",
"lec": "L21",
"type": "pic",
"level": 1,
"q": "Run the heat equation $\\partial_tp=\\Delta p$ on a sample, i.e. on $\\frac1n\\sum_i\\delta(x-x_i)$. What does $p_t$ look like?",
"choices": [
"Spikes that stay at the data points and move apart.",
"A KDE with bandwidth $h=t$.",
"A Gaussian KDE with $h=\\sqrt{2t}$: bumps widen and merge as $t$ grows.",
"A single Gaussian at once, for any $t>0$."
],
"answer": 2,
"why": "The solution is $p_0*\\mathcal N(0,2tI)$, the Gaussian KDE with $h^2=2t$. So forward diffusion is a KDE with growing bandwidth; B has the wrong scaling, since variance grows linearly in $t$.",
"zh": "热方程作用于样本 = 带宽 $h=\\sqrt{2t}$ 的高斯 KDE。"
},
{
"id": "L21-010",
"lec": "L21",
"type": "pic",
"level": 2,
"q": "Langevin dynamics $dx=\\nabla\\log p(x)\\,dt+\\sqrt2\\,dW$. What does a particle do?",
"choices": [
"Drift toward higher density (downhill in $-\\log p$), noise explores; equilibrates to $p$.",
"It drifts down the density gradient, away from the modes.",
"It performs a pure random walk; the drift only rescales time.",
"It moves to the nearest training point and stays there."
],
"answer": 0,
"why": "With $E=-\\log p$ this is a Brownian particle in a potential well: drift along $-\\nabla E$, noise from the bath, stationary distribution $e^{-E}=p$ (Fokker–Planck check). B has the wrong sign.",
"zh": "漂移朝高密度（势能下坡），噪声使其探索，平稳分布为 $p$。"
},
{
"id": "L21-011",
"lec": "L21",
"type": "pic",
"level": 3,
"q": "Forward SDE $dx=f\\,dt+g\\,dW$. How do the reverse SDE and the probability-flow ODE differ?",
"choices": [
"The ODE has drift $f-g^2\\nabla\\log p_t$; the SDE has $f-\\tfrac12g^2\\nabla\\log p_t$.",
"They have different marginals $p_t$ but similar trajectories.",
"Both are deterministic; only the time direction differs.",
"Same $p_t$: SDE drift $f-g^2\\nabla\\log p_t$ (noisy); ODE $f-\\tfrac12g^2\\nabla\\log p_t$."
],
"answer": 3,
"why": "Rewriting Fokker–Planck as a continuity equation gives velocity $f-\\tfrac12g^2\\nabla\\log p_t$ (ODE, no noise). The reverse SDE needs the full $g^2$ to compensate for the injected noise $g\\,d\\bar W$. A swaps the factors.",
"zh": "SDE 漂移 $f-g^2\\nabla\\log p$ 且有噪声；ODE 为 $f-\\tfrac12g^2\\nabla\\log p$，边缘分布相同。"
},
{
"id": "L21-012",
"lec": "L21",
"type": "pic",
"level": 2,
"q": "$p$ is a mixture of two well-separated 1-D Gaussians. What does the score field $\\nabla\\log p(x)$ look like near a mode?",
"choices": [
"Large, pointing away from the mode.",
"Small at the peak, pointing back toward the mode on both sides (a restoring force).",
"Constant, equal to the mixture weight.",
"Zero everywhere between the two modes."
],
"answer": 1,
"why": "Near a Gaussian peak $\\nabla\\log p\\approx-(x-\\mu)/s^2$: zero at the centre and growing linearly toward the flanks, pointing inward. Between the modes (the valley) it points toward the nearer mode, not zero.",
"zh": "峰附近 score 是指向峰值的恢复力，峰顶为零。"
},
{
"id": "L22-001",
"lec": "L22",
"type": "term",
"level": 1,
"q": "For an invertible flow $x=f(z)$ with Jacobian $J_f=\\partial f/\\partial z$, which is the exact log-density of $x$?",
"choices": [
"$\\log p_z(z)+\\log\\lvert\\det J_f(z)\\rvert$",
"$\\log p_z(z)-\\log\\lvert\\det J_f(z)\\rvert$",
"$\\log p_z(z)-\\lvert\\det J_f(z)\\rvert$",
"$\\log p_z(z)-\\operatorname{tr}J_f(z)$"
],
"answer": 1,
"why": "Probability mass is conserved: expanding volume ($\\lvert\\det J_f\\rvert>1$) dilutes the density, so the log-det is subtracted. A has the wrong sign, C drops the log, D is the continuous-time (CNF) formula, not the discrete one.",
"zh": "$\\log p_x=\\log p_z-\\log|\\det J_f|$：体积膨胀则密度下降。"
},
{
"id": "L22-002",
"lec": "L22",
"type": "term",
"level": 1,
"q": "Affine coupling layer: $y_A=x_A$, $y_B=x_B\\odot e^{s(x_A)}+t(x_A)$. Which is $\\log\\lvert\\det J\\rvert$?",
"choices": [
"$\\sum_j e^{s_j(x_A)}$",
"$\\sum_j t_j(x_A)$",
"$0$ for every choice of $s,t$",
"$\\sum_j s_j(x_A)$"
],
"answer": 3,
"why": "$J$ is block lower triangular with diagonal blocks $I$ and $\\operatorname{diag}(e^{s})$, so $\\det J=\\prod_je^{s_j}$ and $\\log\\lvert\\det J\\rvert=\\sum_js_j$. $C$ holds only for $s=0$ (volume preserving).",
"zh": "三角 Jacobian：$\\log|\\det J|=\\sum_js_j(x_A)$。"
},
{
"id": "L22-003",
"lec": "L22",
"type": "term",
"level": 2,
"q": "A continuous flow $\\dot x=v_t(x)$ transports the density $p_t$. How does $\\log p_t$ change along a trajectory $x(t)$?",
"choices": [
"$\\dfrac{d}{dt}\\log p_t=-\\nabla\\cdot v_t=-\\operatorname{tr}\\,\\partial_xv_t$",
"$\\dfrac{d}{dt}\\log p_t(x(t))=+\\operatorname{tr}\\dfrac{\\partial v_t}{\\partial x}$",
"$\\dfrac{d}{dt}\\log p_t(x(t))=-\\det\\dfrac{\\partial v_t}{\\partial x}$",
"$\\dfrac{d}{dt}\\log p_t(x(t))=-\\lVert v_t\\rVert^2$"
],
"answer": 0,
"why": "The continuity equation $\\partial_tp+\\nabla\\cdot(pv)=0$ gives $\\frac{d}{dt}p=-p\\,\\nabla\\cdot v$. The *trace* (divergence) appears, not the determinant: $\\det(I+hJ)\\approx1+h\\operatorname{tr}J$.",
"zh": "瞬时变量替换用迹（散度）：$d\\log p/dt=-\\nabla\\!\\cdot v$。"
},
{
"id": "L22-004",
"lec": "L22",
"type": "term",
"level": 2,
"q": "With the linear interpolant $x_t=(1-t)x_0+t\\,x_1$ ($t=0$ noise, $t=1$ data), which is the conditional flow matching loss?",
"choices": [
"$\\mathbb E\\lVert v_\\theta(x_t,t)-x_t\\rVert^2$",
"$\\mathbb E\\lVert v_\\theta(x_t,t)-(x_0-x_1)\\rVert^2$",
"$\\mathbb E\\lVert v_\\theta(x_t,t)-(x_1-x_0)\\rVert^2$",
"$\\mathbb E\\lVert v_\\theta(x_0,t)-(x_1-x_0)\\rVert^2$"
],
"answer": 2,
"why": "$dx_t/dt=x_1-x_0$ is the velocity of the interpolant, and the network sees the point $x_t$ and time $t$. B has the sign of the reversed (data→noise) direction; D feeds the wrong input.",
"zh": "CFM 损失：$\\|v_\\theta(x_t,t)-(x_1-x_0)\\|^2$，输入是 $x_t$。"
},
{
"id": "L22-005",
"lec": "L22",
"type": "calc",
"level": 2,
"q": "$z\\sim\\mathcal N(0,1)$ and $x=f(z)=2z+1$. What is the density $p_x(1)$? ($1/\\sqrt{2\\pi}\\approx0.40$)",
"choices": [
"0.40",
"0.80",
"0.20",
"0.10"
],
"answer": 2,
"why": "$z=f^{-1}(1)=0$, $p_z(0)=0.40$, $\\lvert\\det J_f\\rvert=2$, so $p_x(1)=0.40/2=0.20$. This equals $\\mathcal N(1;1,4)$ at its peak. B multiplies by 2, D divides by the variance 4.",
"zh": "$p_x=p_z/|f'|=0.40/2=0.20$。"
},
{
"id": "L22-006",
"lec": "L22",
"type": "calc",
"level": 2,
"q": "Affine coupling with $x_A=1$, $x_B=2$, $s(x_A)=0.5$, $t(x_A)=1$. What are $y_B=x_Be^{s}+t$ and $\\log\\lvert\\det J\\rvert$?",
"choices": [
"$y_B\\approx4.30$, $\\log\\lvert\\det J\\rvert=0.5$",
"$y_B\\approx4.30$, $\\log\\lvert\\det J\\rvert\\approx1.65$",
"$y_B\\approx3.30$, $\\log\\lvert\\det J\\rvert=0.5$",
"$y_B=3.00$, $\\log\\lvert\\det J\\rvert=0.5$"
],
"answer": 0,
"why": "$y_B=2e^{0.5}+1=2\\cdot1.649+1\\approx4.30$; the log-det is simply $s=0.5$. B reports $e^s$, i.e. the determinant itself; C forgets the shift $t$; D forgets the scale.",
"zh": "$y_B=2e^{0.5}+1\\approx4.30$；$\\log|\\det J|=s=0.5$。"
},
{
"id": "L22-007",
"lec": "L22",
"type": "calc",
"level": 3,
"q": "$x_0=(1,-1)^\\top$, $x_1=(3,1)^\\top$, $t=0.25$, linear interpolant ($t=0$ noise, $t=1$ data). What are $x_t$ and the regression target?",
"choices": [
"$x_t=(2.5,0.5)^\\top$, target $(2,2)^\\top$",
"$x_t=(1.5,-0.5)^\\top$, target $(-2,-2)^\\top$",
"$x_t=(2,0)^\\top$, target $(2,2)^\\top$",
"$x_t=(1.5,-0.5)^\\top$, target $(2,2)^\\top$"
],
"answer": 3,
"why": "$x_t=0.75\\,x_0+0.25\\,x_1=(0.75+0.75,\\,-0.75+0.25)=(1.5,-0.5)$; target $x_1-x_0=(2,2)$. A swaps the weights (data-heavy), B flips the target sign, C uses $t=0.5$.",
"zh": "$x_t=0.75x_0+0.25x_1=(1.5,-0.5)$，目标 $x_1-x_0=(2,2)$。"
},
{
"id": "L22-008",
"lec": "L22",
"type": "calc",
"level": 2,
"q": "A contracting velocity field $v(x)=-2x$ in $\\mathbb R^3$. What is $\\frac{d}{dt}\\log p_t(x(t))$ along a trajectory?",
"choices": [
"$-6$",
"$+6$",
"$+2$",
"$-2$"
],
"answer": 1,
"why": "$\\nabla\\cdot v=-2\\cdot3=-6$ and $\\frac{d}{dt}\\log p=-\\nabla\\cdot v=+6$: compressing the flow raises the density along the trajectory. C is a single dimension's contribution; A forgets the minus sign; D has both slips.",
"zh": "$\\nabla\\!\\cdot v=-6$，故 $d\\log p/dt=+6$：收缩使密度升高。"
},
{
"id": "L22-009",
"lec": "L22",
"type": "pic",
"level": 1,
"q": "In flow matching (conventions of the notes), what does $x_t=(1-t)x_0+t\\,x_1$ look like for one fixed pair $(x_0,x_1)$?",
"choices": [
"A curved arc from data at $t=0$ to noise at $t=1$.",
"A straight segment traversed at constant velocity from noise ($t=0$) to data ($t=1$).",
"A random walk that ends near $x_1$.",
"A straight line along which all points shrink to the origin at $t=1$."
],
"answer": 1,
"why": "The path is linear in $t$ with constant velocity $x_1-x_0$. Flow matching has $t=0$ noise and $t=1$ data, opposite to the DDPM time convention (A).",
"zh": "线性插值是匀速直线，$t=0$ 噪声、$t=1$ 数据（与 DDPM 相反）。"
},
{
"id": "L22-010",
"lec": "L22",
"type": "pic",
"level": 3,
"q": "For independent pairs $(x_0,x_1)$ the straight lines cross. What does the trained $v_\\theta$ do at a crossing point $x$ at time $t$?",
"choices": [
"It takes several values at $x$, one per crossing line.",
"It is zero at crossings.",
"It equals the largest of the crossing velocities.",
"It equals $\\mathbb E[x_1-x_0\\mid x_t=x]$, a weighted average; flow lines do not cross."
],
"answer": 3,
"why": "$v_\\theta(x,t)$ is a single-valued field, and regression on $x_1-x_0$ with squared loss returns the conditional mean, the marginal velocity $u_t$. Hence the marginal paths are curved although each conditional path is straight.",
"zh": "回归得到条件均值 $u_t(x)=\\mathbb E[x_1-x_0|x_t=x]$，单值场，轨迹不交叉。"
},
{
"id": "L22-011",
"lec": "L22",
"type": "pic",
"level": 3,
"q": "A flow $q_\\theta$ is trained by the **reverse** KL $\\mathrm{KL}(q_\\theta\\|p)$ against a double-well Boltzmann density $p$ with two equally deep wells. What does $q_\\theta$ typically look like?",
"choices": [
"It concentrates in one well (mode-seeking).",
"It is broad and covers both wells and the barrier (mass-covering).",
"It is uniform over the whole range.",
"It puts weight only on the barrier top."
],
"answer": 0,
"why": "$\\mathbb E_{q}[\\log q-\\log p]$ is huge wherever $q>0$ but $p\\approx0$, so $q$ avoids the barrier and may settle in one well, missing metastable states. B is the forward-KL (mass-covering) picture. Importance reweighting repairs weights, not missing modes.",
"zh": "反向 KL 是 mode-seeking：q 倾向塌到一个势阱，会漏掉其他亚稳态。"
},
{
"id": "L22-012",
"lec": "L22",
"type": "pic",
"level": 1,
"q": "$v(x,y)=(-y,\\,x)^\\top$ is a rigid rotation in 2-D. Along a trajectory of the flow, what happens to $\\log p_t$?",
"choices": [
"It increases exponentially.",
"It decreases exponentially.",
"It stays constant, because $\\nabla\\cdot v=\\partial_x(-y)+\\partial_y(x)=0$.",
"It oscillates with the rotation angle."
],
"answer": 2,
"why": "$\\frac{d}{dt}\\log p_t=-\\nabla\\cdot v=0$: an incompressible flow leaves the density unchanged along trajectories (Liouville-type statement). The pattern rotates but is not compressed.",
"zh": "刚性旋转无散度：沿轨迹 $\\log p_t$ 不变（类似 Liouville 定理）。"
},
{
"id": "L23-001",
"lec": "L23",
"type": "term",
"level": 1,
"q": "Simulated pairs $(\\theta_i,x_i)\\sim p(\\theta,x)$ are available, but $p(x\\mid\\theta)$ cannot be evaluated. Which objective trains **neural posterior estimation** (NPE)?",
"choices": [
"$\\max_\\phi\\sum_i\\log q_\\phi(x_i\\mid\\theta_i)$",
"$\\max_\\phi\\sum_i\\log q_\\phi(\\theta_i\\mid x_{\\pi(i)})$, with shuffled pairing $\\pi$",
"$\\max_\\phi\\sum_i\\log q_\\phi(\\theta_i\\mid x_i)$",
"$\\max_\\phi\\sum_i\\log p(x_i\\mid\\theta_i)$"
],
"answer": 2,
"why": "NPE maximises the conditional log-likelihood of the parameters given the data, which equals minimising $\\mathbb E_{p(x)}\\mathrm{KL}(p(\\theta|x)\\|q_\\phi(\\theta|x))$ up to a constant. A is neural likelihood estimation; D needs the intractable likelihood.",
"zh": "NPE：对模拟对 $(\\theta_i,x_i)$ 最大化 $\\sum\\log q_\\phi(\\theta_i|x_i)$。"
},
{
"id": "L23-002",
"lec": "L23",
"type": "term",
"level": 1,
"q": "A balanced classifier $d(x,\\theta)$ separates dependent pairs $(\\theta,x)\\sim p(\\theta,x)$ (label 1) from independent pairs $\\sim p(\\theta)p(x)$ (label 0). For the optimal $d^*$, what is $d^*/(1-d^*)$?",
"choices": [
"$\\dfrac{p(\\theta,x)}{p(\\theta)p(x)}=\\dfrac{p(x\\mid\\theta)}{p(x)}$",
"$\\dfrac{p(\\theta)p(x)}{p(\\theta,x)}$",
"$p(x\\mid\\theta)\\,p(\\theta)$",
"$\\dfrac{p(x\\mid\\theta)}{p(\\theta)}$"
],
"answer": 0,
"why": "$d^*=p(\\theta,x)/[p(\\theta,x)+p(\\theta)p(x)]$, so the odds are the ratio of the two class densities, the likelihood-to-evidence ratio $r(x,\\theta)$. B is its inverse; C is the joint density.",
"zh": "最优分类器的 odds $d/(1-d)=p(x|\\theta)/p(x)=r(x,\\theta)$。"
},
{
"id": "L23-003",
"lec": "L23",
"type": "term",
"level": 2,
"q": "With $r(x,\\theta)=p(x\\mid\\theta)/p(x)$, which expression gives the posterior at the observation $x_o$?",
"choices": [
"$r(x_o,\\theta)\\,p(x_o)$",
"$r(x_o,\\theta)/p(\\theta)$",
"$r(x_o,\\theta)\\,p(x_o\\mid\\theta)$",
"$r(x_o,\\theta)\\,p(\\theta)$"
],
"answer": 3,
"why": "Bayes: $p(\\theta|x_o)=\\frac{p(x_o|\\theta)}{p(x_o)}p(\\theta)=r\\,p(\\theta)$, i.e. ratio times prior. A gives back the likelihood $p(x_o|\\theta)$, a different object.",
"zh": "后验 $=r(x_o,\\theta)\\,p(\\theta)$：比值乘先验。"
},
{
"id": "L23-004",
"lec": "L23",
"type": "term",
"level": 2,
"q": "Which expression is the likelihood ratio $p(x_o\\mid\\theta_1)/p(x_o\\mid\\theta_0)$ in terms of $r$?",
"choices": [
"$r(x_o,\\theta_1)-r(x_o,\\theta_0)$",
"$r(x_o,\\theta_1)\\,/\\,r(x_o,\\theta_0)$",
"$r(x_o,\\theta_1)\\,r(x_o,\\theta_0)$",
"$\\dfrac{r(x_o,\\theta_1)\\,p(\\theta_1)}{r(x_o,\\theta_0)\\,p(\\theta_0)}$"
],
"answer": 1,
"why": "The evidence $p(x_o)$ cancels in the ratio of ratios. D is the posterior ratio (it includes the prior ratio), which is what you get if you forget to remove the priors.",
"zh": "似然比 $=r(x_o,\\theta_1)/r(x_o,\\theta_0)$，证据 $p(x_o)$ 约掉。"
},
{
"id": "L23-005",
"lec": "L23",
"type": "calc",
"level": 2,
"q": "$\\theta\\sim\\mathcal N(0,1)$, $x\\mid\\theta\\sim\\mathcal N(\\theta,\\sigma^2)$ with $\\sigma=1$, observation $x_o=2$. What is the posterior $p(\\theta\\mid x_o)$ (mean, variance)?",
"choices": [
"mean 2, variance 1",
"mean 1, variance $\\tfrac12$",
"mean 1, variance 1",
"mean 2, variance $\\tfrac12$"
],
"answer": 1,
"why": "$p(\\theta|x)=\\mathcal N\\big(\\tfrac{x}{1+\\sigma^2},\\tfrac{\\sigma^2}{1+\\sigma^2}\\big)=\\mathcal N(1,\\tfrac12)$. The prior pulls the mean from 2 toward 0 and narrows the width. A is just the likelihood $\\mathcal N(x_o,\\sigma^2)$.",
"zh": "后验 $\\mathcal N(x/(1+\\sigma^2),\\sigma^2/(1+\\sigma^2))=\\mathcal N(1,\\tfrac12)$。"
},
{
"id": "L23-006",
"lec": "L23",
"type": "calc",
"level": 2,
"q": "Rejection ABC with a 3-dimensional summary statistic: acceptance probability scales as $\\varepsilon^{\\dim s}$. By what factor does the acceptance rate change if $\\varepsilon$ is halved?",
"choices": [
"$1/2$",
"$1/3$",
"$1/9$",
"$1/8$"
],
"answer": 3,
"why": "$(\\varepsilon/2)^3/\\varepsilon^3=1/8$. The loss per halving grows exponentially with $\\dim s$, the curse of dimensionality that forces hand-made low-dimensional summaries. A is the 1-D result.",
"zh": "接受率 $\\propto\\varepsilon^{\\dim s}$：$\\varepsilon$ 减半则降为 $(1/2)^3=1/8$。"
},
{
"id": "L23-007",
"lec": "L23",
"type": "calc",
"level": 2,
"q": "SBC uses $L=9$ posterior draws per simulation and records the rank of the true $\\theta^*$ among them (ranks $0,\\dots,9$). If $q$ equals the true posterior, what is $P(\\text{rank}=0)$?",
"choices": [
"$1/9$",
"$1/2$",
"$1/10$",
"$9/10$"
],
"answer": 2,
"why": "$\\theta^*$ is exchangeable with the 9 draws, so its rank is uniform on the $L+1=10$ values: $1/10$ each. A miscounts the number of possible ranks.",
"zh": "排名在 $L+1=10$ 个取值上均匀，所以概率 $1/10$。"
},
{
"id": "L23-008",
"lec": "L23",
"type": "calc",
"level": 3,
"q": "Same Gaussian toy, $\\sigma=1$: $\\log r(x,\\theta)=\\log\\mathcal N(x;\\theta,1)-\\log\\mathcal N(x;0,2)$. What is it at $x=2$, $\\theta=1$?",
"choices": [
"$0.85$",
"$1.50$",
"$0.50$",
"$-0.50$"
],
"answer": 0,
"why": "$\\log\\mathcal N(2;1,1)=-0.919-0.5$ and $\\log\\mathcal N(2;0,2)=-0.919-\\tfrac12\\ln2-\\tfrac{4}{4}$. The difference is $-0.5+0.347+1=0.847$. C drops the $\\tfrac12\\ln2$ normalisation; B uses variance 1 for the evidence.",
"zh": "差 $=-0.5+\\tfrac12\\ln2+1\\approx0.85$；证据分布方差是 $1+\\sigma^2=2$。"
},
{
"id": "L23-009",
"lec": "L23",
"type": "pic",
"level": 1,
"q": "An SBC rank histogram of $\\theta^*$ among posterior samples is ∪-shaped: the true value often lies in the tails of the samples. What does this say about $q(\\theta|x)$?",
"choices": [
"It is too narrow: overconfident.",
"It is too wide: underconfident.",
"It is biased toward large $\\theta$.",
"It is perfectly calibrated."
],
"answer": 0,
"why": "If the samples are too concentrated, $\\theta^*$ falls outside most of them, so ranks pile up at $0$ and $L$. ∩-shaped (B) means too wide; a slope signals bias.",
"zh": "∪ 形直方图：后验过窄，过度自信。"
},
{
"id": "L23-010",
"lec": "L23",
"type": "pic",
"level": 3,
"q": "Rejection ABC with $\\varepsilon\\to0$, but the summary $s(x)$ discards information about $\\theta$. The accepted $\\theta$ are distributed like …",
"choices": [
"the true posterior $p(\\theta\\mid x_o)$, since $\\varepsilon\\to0$ removes all bias.",
"the prior $p(\\theta)$.",
"$p(\\theta\\mid s(x_o))$, in general broader than the true posterior.",
"the normalised likelihood $p(x_o\\mid\\theta)$."
],
"answer": 2,
"why": "$\\varepsilon\\to0$ only conditions on the *summary*. The result equals $p(\\theta|x_o)$ only if $s$ is sufficient; otherwise information is lost and the posterior is broader.",
"zh": "$\\varepsilon\\to0$ 得到 $p(\\theta|s(x_o))$；只有 $s$ 充分时才等于真后验。"
},
{
"id": "L23-011",
"lec": "L23",
"type": "pic",
"level": 2,
"q": "NRE: simulated pairs $(\\theta_i,x_i)$ form a tight diagonal band in the $(\\theta,x)$ plane (class 1). What do the class-0 points look like?",
"choices": [
"The same band, shifted along $x$.",
"A broad uncorrelated blob: shuffled $\\theta$, i.e. the product of marginals.",
"The band mirrored about the diagonal.",
"Points only on the $x$-axis."
],
"answer": 1,
"why": "Class 0 is drawn from $p(\\theta)p(x)$: keep each $\\theta$ and $x$ marginal but break the pairing. The classifier learns exactly the band-vs-blob difference, which is the dependence between $\\theta$ and $x$.",
"zh": "类别 0 = 打乱配对得到 $p(\\theta)p(x)$：无相关性的宽团。"
},
{
"id": "L23-012",
"lec": "L23",
"type": "pic",
"level": 3,
"q": "NPE with $q_\\phi(\\theta|x)=\\mathcal N(ax+b,c^2)$ is fit to $\\theta\\sim\\mathcal N(0,1)$, $x|\\theta\\sim\\mathcal N(\\theta,1)$. In the $(x,\\theta)$ scatter, what does the fit look like?",
"choices": [
"Line of slope 1 with $c^2=1$.",
"Line of slope $\\tfrac12$ with $c^2=1$.",
"Line of slope 1 with $c^2=\\tfrac12$.",
"Slope $\\tfrac12$ and $c^2=\\tfrac12$: shallower than the diagonal, narrower than the prior."
],
"answer": 3,
"why": "MLE on simulations is linear regression of $\\theta$ on $x$: $a=1/(1+\\sigma^2)=\\tfrac12$, $b=0$, $c^2=\\sigma^2/(1+\\sigma^2)=\\tfrac12$. Slope 1 (A, C) would regress $x$ on $\\theta$, i.e. the likelihood direction.",
"zh": "NPE 即 $\\theta$ 对 $x$ 的回归：斜率 $\\tfrac12$、方差 $\\tfrac12$。"
},
{
"id": "L24-001",
"lec": "L24",
"type": "term",
"level": 1,
"q": "Which equation defines that $f$ is **equivariant** under a group $G$ with input and output representations $\\rho_{\\rm in},\\rho_{\\rm out}$?",
"choices": [
"$f(\\rho_{\\rm in}(g)x)=f(x)$ for all $g$",
"$f(\\rho_{\\rm in}(g)x)=\\rho_{\\rm out}(g)^{-1}f(x)$ for all $g$",
"$f(\\rho_{\\rm out}(g)x)=\\rho_{\\rm in}(g)f(x)$ for all $g$",
"$f(\\rho_{\\rm in}(g)x)=\\rho_{\\rm out}(g)f(x)$ for all $g$"
],
"answer": 3,
"why": "\"Transform then predict = predict then transform\", each side with the representation that acts on its space. A is invariance (trivial $\\rho_{\\rm out}$); C swaps input and output representations.",
"zh": "等变：$f(\\rho_{\\rm in}(g)x)=\\rho_{\\rm out}(g)f(x)$；A 是不变性。"
},
{
"id": "L24-002",
"lec": "L24",
"type": "term",
"level": 1,
"q": "For a molecule with positions $x$ and a rotation $R$, which pair of statements is right?",
"choices": [
"$E(Rx)=E(x)$ and $F_i(Rx)=F_i(x)$",
"$E(Rx)=E(x)$ and $F_i(Rx)=R\\,F_i(x)$",
"$E(Rx)=E(x)$ and $F_i(Rx)=R^\\top F_i(x)$",
"$E(Rx)=E(x)$ and $F_i(Rx)=F_{\\sigma(i)}(x)$ (forces only permute)"
],
"answer": 1,
"why": "The energy is an invariant scalar; the forces are vectors and rotate with the molecule. A would make forces point in the lab frame regardless of orientation; C rotates them the wrong way.",
"zh": "能量不变，力等变：$E(Rx)=E(x)$，$F_i(Rx)=RF_i(x)$。"
},
{
"id": "L24-003",
"lec": "L24",
"type": "term",
"level": 2,
"q": "$E$ is rotation invariant, $E(Rx)=E(x)$ for all $x$, with $R^\\top R=I$. The chain rule gives $R^\\top\\nabla E(Rx)=\\nabla E(x)$. What follows?",
"choices": [
"$\\nabla E(Rx)=R\\,\\nabla E(x)$: the gradient is equivariant.",
"$\\nabla E(Rx)=\\nabla E(x)$: the gradient is invariant.",
"$\\nabla E(Rx)=R^\\top\\nabla E(x)$",
"$\\nabla E(Rx)=\\det(R)\\,\\nabla E(x)$"
],
"answer": 0,
"why": "Multiply both sides by $R$ and use $RR^\\top=I$. Hence $F=-\\nabla E$ is automatically rotation-equivariant; this is the standard way to get forces from an invariant energy.",
"zh": "两边左乘 $R$：$\\nabla E(Rx)=R\\nabla E(x)$，所以 $F=-\\nabla E$ 等变。"
},
{
"id": "L24-004",
"lec": "L24",
"type": "term",
"level": 3,
"q": "Which EGNN coordinate update is $E(n)$-equivariant? ($m_{ij}$ is built from $h_i,h_j$ and $\\lVert x_i-x_j\\rVert^2$.)",
"choices": [
"$x_i'=x_i+C\\sum_j x_j\\,\\phi_x(m_{ij})$",
"$x_i'=x_i+C\\sum_j\\operatorname{ReLU}(x_i-x_j)\\,\\phi_x(m_{ij})$, componentwise",
"$x_i'=x_i+C\\sum_j(x_i-x_j)\\,\\phi_x(m_{ij})$",
"$x_i'=x_i+C\\sum_j(x_i-x_j)\\,\\phi_x(x_i-x_j)$, $\\phi_x$ an MLP of the raw vector"
],
"answer": 2,
"why": "Scalar weights built from invariants times relative vectors $x_i-x_j$, which rotate and ignore translations. A uses absolute positions (not translation-equivariant), B breaks rotation equivariance by clipping components, D feeds raw components to an MLP.",
"zh": "权重只依赖不变量，方向取相对向量 $x_i-x_j$，才保证 $E(n)$ 等变。"
},
{
"id": "L24-005",
"lec": "L24",
"type": "calc",
"level": 2,
"q": "Pair energy $E=\\tfrac12k(r-r_0)^2$, $r=\\lVert x_1-x_2\\rVert$, with $k=4$, $r_0=1$, $x_1=(0,0,0)^\\top$, $x_2=(3,0,0)^\\top$. What is the force $F_1=-\\nabla_{x_1}E$?",
"choices": [
"$(8,0,0)^\\top$",
"$(-8,0,0)^\\top$",
"$(24,0,0)^\\top$",
"$(2,0,0)^\\top$"
],
"answer": 0,
"why": "$F_1=-k(r-r_0)\\frac{x_1-x_2}{r}=-4\\cdot2\\cdot(-1,0,0)=(8,0,0)$: the stretched bond pulls atom 1 toward atom 2. C forgets the unit vector (divide by $r$), D forgets $k$, B has the sign wrong.",
"zh": "$F_1=-k(r-r_0)\\hat r_{12}=(8,0,0)$：拉伸的键把原子 1 拉向原子 2。"
},
{
"id": "L24-006",
"lec": "L24",
"type": "calc",
"level": 2,
"q": "$E$ is translation invariant. In a 3-atom system $F_1=(1,2,0)^\\top$ and $F_2=(-3,0,1)^\\top$. What is $F_3$?",
"choices": [
"$(-2,2,1)^\\top$",
"$(2,-2,1)^\\top$",
"$(2,-2,-1)^\\top$",
"$(4,2,-1)^\\top$"
],
"answer": 2,
"why": "Translation invariance implies $\\sum_iF_i=0$ (momentum conservation), so $F_3=-(F_1+F_2)=-(-2,2,1)=(2,-2,-1)$. A has the sign wrong, D subtracts instead of adding.",
"zh": "平移不变 ⇒ $\\sum_iF_i=0$，故 $F_3=(2,-2,-1)$。"
},
{
"id": "L24-007",
"lec": "L24",
"type": "pic",
"level": 2,
"q": "Bond along $x$; an equivariant model gives $F_1=(-2,0,0)^\\top$. The molecule is rotated by $90^\\circ$ about $z$, $R(x,y,z)=(-y,x,z)$. What force does the model give on atom 1 now?",
"choices": [
"$(-2,0,0)^\\top$",
"$(0,-2,0)^\\top$",
"$(0,2,0)^\\top$",
"$(2,0,0)^\\top$"
],
"answer": 1,
"why": "Equivariance means the output arrow rotates with the molecule: $RF_1=(0,-2,0)$. A would be an invariant (lab-fixed) prediction; C rotates the wrong way.",
"zh": "等变：力箭头随分子一起转，$RF_1=(0,-2,0)$。"
},
{
"id": "L24-008",
"lec": "L24",
"type": "calc",
"level": 3,
"q": "Clebsch–Gordan: a type-$\\ell=1$ neighbour feature is combined with an $\\ell=2$ edge harmonic. Which output types appear, with consistent dimension count $3\\times5$?",
"choices": [
"$\\ell=0,1,2,3$",
"$\\ell=1,2$",
"$\\ell=2,3$",
"$\\ell=1,2,3$"
],
"answer": 3,
"why": "$\\ell_3\\in\\{|\\ell_1-\\ell_2|,\\dots,\\ell_1+\\ell_2\\}=\\{1,2,3\\}$ with dimensions $3+5+7=15=3\\cdot5$. A would give 16, B 8, C 12. Same logic as $1\\otimes1=0\\oplus1\\oplus2$ ($1+3+5=9$).",
"zh": "角动量耦合：$\\ell_3=1,2,3$，维数 $3+5+7=15$。"
},
{
"id": "L24-009",
"lec": "L24",
"type": "pic",
"level": 1,
"q": "A molecule and its mirror image have identical interatomic distance matrices. What does an $O(3)$-invariant model using only distances $r_{ij}$ predict for the two?",
"choices": [
"Opposite signs of the energy.",
"Different energies, because the atom ordering differs.",
"Identical outputs: it is blind to chirality.",
"Different energies, but only for large molecules."
],
"answer": 2,
"why": "Reflection is part of $O(3)$ and leaves all $r_{ij}$ unchanged. Telling enantiomers apart needs signed quantities such as the triple product $(x_2-x_1)\\cdot[(x_3-x_1)\\times(x_4-x_1)]$.",
"zh": "只用距离的模型分不出镜像分子（手性），输出相同。"
},
{
"id": "L24-010",
"lec": "L24",
"type": "pic",
"level": 1,
"q": "A molecule with force arrows on its atoms is rotated by $R$. For an equivariant force model, what happens to the arrows?",
"choices": [
"They stay fixed in the lab frame.",
"They rotate with the molecule by the same $R$.",
"They reverse direction.",
"They rotate by $R^{-1}$."
],
"answer": 1,
"why": "Equivariance: $F_i(Rx)=RF_i(x)$, the commuting diagram \"rotate then predict = predict then rotate\". Lab-fixed arrows (A) would be invariant, which is wrong for vectors.",
"zh": "等变模型的力箭头随分子同样旋转 $R$。"
},
{
"id": "L24-011",
"lec": "L24",
"type": "calc",
"level": 3,
"q": "Component-wise ReLU on a 2-D vector feature $v=(1,-1)^\\top$, with $R$ the $90^\\circ$ rotation $(x,y)\\mapsto(-y,x)$. Which is true?",
"choices": [
"$\\operatorname{ReLU}(Rv)=R\\operatorname{ReLU}(v)=(0,1)^\\top$",
"$\\operatorname{ReLU}(Rv)=(0,1)^\\top$ and $R\\operatorname{ReLU}(v)=(1,1)^\\top$",
"$\\operatorname{ReLU}(Rv)=R\\operatorname{ReLU}(v)=(1,0)^\\top$",
"$\\operatorname{ReLU}(Rv)=(1,1)^\\top\\ne R\\operatorname{ReLU}(v)=(0,1)^\\top$"
],
"answer": 3,
"why": "$Rv=(1,1)$, so $\\operatorname{ReLU}(Rv)=(1,1)$; but $\\operatorname{ReLU}(v)=(1,0)$ and $R(1,0)=(0,1)$. The two orders disagree, so component-wise ReLU on vectors breaks rotation equivariance; use it on norms (invariants) as a gate.",
"zh": "$\\mathrm{ReLU}(Rv)\\neq R\\,\\mathrm{ReLU}(v)$：对向量分量用 ReLU 破坏等变。"
},
{
"id": "L24-012",
"lec": "L24",
"type": "pic",
"level": 2,
"q": "An MLP trained with rotation augmentation and an equivariant network are both tested on a molecule rotated by $37^\\circ$, an orientation never seen in training. What do you expect?",
"choices": [
"The equivariant net gives exactly the rotated forces; the MLP only approximately.",
"Both give exactly the rotated forces.",
"Both fail equally, since $37^\\circ$ is unseen.",
"The MLP is exact, the equivariant net only approximate."
],
"answer": 0,
"why": "Architecture enforces $F(Rx)=RF(x)$ for every $R$ exactly. Augmentation teaches equivariance only approximately and only where the training distribution has support.",
"zh": "架构保证对任意旋转精确等变；数据增强只是近似、依赖训练分布。"
},
{
"id": "L25-001",
"lec": "L25",
"type": "term",
"level": 1,
"q": "Which expression gives the force on atom $i$ from the potential energy surface $E(x_1,\\dots,x_N)$?",
"choices": [
"$F_i=-\\nabla_{x_i}E\\in\\mathbb R^3$",
"$F_i=+\\nabla_{x_i}E\\in\\mathbb R^3$",
"$F_i=-\\sum_j\\nabla_{x_j}E$",
"$F_i=-\\partial^2E/\\partial x_i^2$"
],
"answer": 0,
"why": "Force is the negative gradient of the energy with respect to that atom's position (a 3-vector), the downhill direction on the PES. D is the Hessian (force constant), and C sums over all atoms and is always zero for translation-invariant $E$.",
"zh": "力 $F_i=-\\nabla_{x_i}E$：PES 下坡方向；D 是 Hessian（力常数）。"
},
{
"id": "L25-002",
"lec": "L25",
"type": "term",
"level": 1,
"q": "Which formula is the **locality ansatz** of a machine-learned interatomic potential with cutoff $r_c$?",
"choices": [
"$E=\\sum_i\\varepsilon_i$, each $\\varepsilon_i$ depending on all atoms at any distance",
"$E=\\prod_i\\varepsilon_i(\\dots)$ of local environments",
"$E=\\sum_i\\varepsilon_i\\big(\\{x_j-x_i,\\,Z_j:\\ r_{ij}<r_c\\}\\big)$",
"$E=\\tfrac1N\\sum_i\\varepsilon_i\\big(\\{x_j-x_i,\\,Z_j:\\ r_{ij}<r_c\\}\\big)$"
],
"answer": 2,
"why": "Sum of atomic energies, each from the neighbours within $r_c$: cost $O(N)$ and size extensive. D (an average) would not scale with system size; A has no locality.",
"zh": "局域性：$E=\\sum_i\\varepsilon_i$，每个 $\\varepsilon_i$ 只看 $r_c$ 内邻居。"
},
{
"id": "L25-003",
"lec": "L25",
"type": "term",
"level": 2,
"q": "Pair potential $V(r)=\\sum_kc_kB_k(r)$, $\\phi(s)\\in\\mathbb R^K$ the energy features of structure $s$. In the design matrix $X\\in\\mathbb R^{K\\times n}$, which is the column for the force component $F_{i\\alpha}$ of $s$?",
"choices": [
"$\\phi(s)$",
"$+\\partial\\phi(s)/\\partial x_{i\\alpha}$",
"$-\\phi(s)\\,x_{i\\alpha}$",
"$-\\partial\\phi(s)/\\partial x_{i\\alpha}$"
],
"answer": 3,
"why": "$F_{i\\alpha}=-\\partial E/\\partial x_{i\\alpha}=-\\sum_kc_k\\,\\partial\\phi_k/\\partial x_{i\\alpha}$ is linear in $c$ with feature column $-\\partial\\phi/\\partial x_{i\\alpha}$. B drops the sign; A is the column of an *energy* label.",
"zh": "力标签的特征列是 $-\\partial\\phi/\\partial x_{i\\alpha}$，对 $c$ 仍然线性。"
},
{
"id": "L25-004",
"lec": "L25",
"type": "term",
"level": 2,
"q": "Which term of the MLIP training loss fits the forces of structure $s$ (model energy $\\hat E_\\theta$, DFT forces $F_{s,i}$)?",
"choices": [
"$\\lVert\\nabla_{x_i}\\hat E_\\theta(s)-F_{s,i}\\rVert^2$",
"$\\lVert-\\nabla_{x_i}\\hat E_\\theta(s)-F_{s,i}\\rVert^2$",
"$\\lVert-\\nabla_{\\theta}\\hat E_\\theta(s)-F_{s,i}\\rVert^2$",
"$\\big(-\\nabla_{x_i}\\hat E_\\theta(s)-E_s\\big)^2$"
],
"answer": 1,
"why": "The model force is the gradient of the predicted energy with respect to the *positions* $x_i$, compared with the DFT force. A forgets the minus sign, C differentiates with respect to the weights, D compares a force with an energy.",
"zh": "模型力 $=-\\nabla_{x_i}\\hat E_\\theta$（对坐标，不是对权重）与 DFT 力比较。"
},
{
"id": "L25-005",
"lec": "L25",
"type": "calc",
"level": 2,
"q": "Lennard-Jones $V=4\\epsilon[(\\sigma/r)^{12}-(\\sigma/r)^6]$ with $\\sigma=2$ Å, $\\epsilon=0.1$ eV. Where is the minimum and how deep is it?",
"choices": [
"$r=2.00$ Å, $V=-0.1$ eV",
"$r\\approx2.24$ Å, $V=-0.4$ eV",
"$r\\approx2.24$ Å, $V=-0.1$ eV",
"$r=2.00$ Å, $V=0$"
],
"answer": 2,
"why": "$V'(r)=0$ gives $r_{\\min}=2^{1/6}\\sigma\\approx1.122\\cdot2=2.24$ Å and $V(r_{\\min})=-\\epsilon$. At $r=\\sigma$ the potential crosses zero (A, D). B takes $4\\epsilon$ as the depth.",
"zh": "极小点 $r=2^{1/6}\\sigma\\approx2.24$ Å，深度 $\\epsilon$；$r=\\sigma$ 处 $V=0$。"
},
{
"id": "L25-006",
"lec": "L25",
"type": "calc",
"level": 2,
"q": "A UF3-type fit uses 100 structures with $N=10$ atoms each; every energy and every force component is a label. How many columns $n$ does $X\\in\\mathbb R^{K\\times n}$ have?",
"choices": [
"3100",
"1100",
"3000",
"100"
],
"answer": 0,
"why": "Per structure: 1 energy $+\\,3N=30$ force components $=31$ labels, so $100\\cdot31=3100$. C forgets the energies, B counts only 1 force number per atom, D only the energies. Forces dominate the information.",
"zh": "每个结构 $1+3N=31$ 个标签，共 $100\\times31=3100$ 列。"
},
{
"id": "L25-007",
"lec": "L25",
"type": "calc",
"level": 3,
"q": "A local MLIP ($r_c=6$ Å) is applied to two identical, non-bonded clusters, each with total energy $-5$ eV when alone, placed $100$ Å apart. What total energy does it give?",
"choices": [
"$-5$ eV",
"$-10$ eV",
"$0$",
"$-20$ eV"
],
"answer": 1,
"why": "Atoms of one cluster have no neighbours in the other within $r_c$, so every $\\varepsilon_i$ is unchanged and $E=\\sum_i\\varepsilon_i$ adds up: $-10$ eV (size extensivity). A averages; D double-counts.",
"zh": "局域加和：互不在截断半径内，$E=-5-5=-10$ eV（广延性）。"
},
{
"id": "L25-008",
"lec": "L25",
"type": "calc",
"level": 3,
"q": "A direct-force model outputs the 2-D field $F(x,y)=(-y,\\,x)^\\top$. What work does it do on an atom moved once counter-clockwise around the unit circle, $\\oint F\\cdot dl$?",
"choices": [
"$0$",
"$\\pi$",
"$4\\pi$",
"$2\\pi$"
],
"answer": 3,
"why": "By Stokes, $\\oint F\\cdot dl=\\iint(\\partial_xF_y-\\partial_yF_x)\\,dA=2\\cdot\\pi\\cdot1^2=2\\pi$. A would hold for $F=-\\nabla E$; here the curl is $2\\neq0$, so every loop pumps energy into MD.",
"zh": "旋度 $=2$，环路功 $=2\\times\\pi=2\\pi\\neq0$：非保守力会使 MD 升温。"
},
{
"id": "L25-009",
"lec": "L25",
"type": "pic",
"level": 1,
"q": "Each atomic energy $\\varepsilon_i$ drops abruptly from $0.1$ eV to $0$ when a neighbour crosses the cutoff radius $r_c$ (hard cutoff). What happens in MD?",
"choices": [
"Nothing: forces stay smooth.",
"The force gets a spike at $r_c$ and energy conservation is violated.",
"Only the energy is affected, the forces are not.",
"The potential becomes long-range."
],
"answer": 1,
"why": "A step in $E$ means $-\\nabla E$ is a delta-like kick at $r_c$, which heats the system. Hence a smooth cutoff function $f_c$ with $f_c(r_c)=0$ and vanishing derivative.",
"zh": "硬截断 ⇒ 力在 $r_c$ 处有脉冲 ⇒ 能量不守恒；需平滑截断函数。"
},
{
"id": "L25-010",
"lec": "L25",
"type": "pic",
"level": 2,
"q": "On the potential energy surface $E(x)$ of a molecule, which picture is right?",
"choices": [
"A minimum has $\\nabla E=0$ and one negative Hessian eigenvalue.",
"A transition state has $\\nabla E\\ne0$, pointing along the reaction path.",
"Equilibrium structures are where $E=0$.",
"Min: $\\nabla E=0$, Hessian pos. definite; saddle: $\\nabla E=0$, one negative eigenvalue."
],
"answer": 3,
"why": "Stationary points have zero force; the Hessian eigenvalues (vibrational frequencies squared) classify them. A mixes up minimum and first-order saddle (reaction barrier top); C confuses the arbitrary zero of energy with stability.",
"zh": "极小：$\\nabla E=0$，Hessian 正定；鞍点：$\\nabla E=0$ 且有一个负本征值。"
},
{
"id": "L25-011",
"lec": "L25",
"type": "pic",
"level": 1,
"q": "SchNet expands one distance as $e_k(r)=\\exp(-\\gamma(r-\\mu_k)^2)$, $k=1,\\dots,K$. What does the vector $(e_1,\\dots,e_K)$ look like for a given $r$?",
"choices": [
"A smooth bump over $k$, peaked at the centre $\\mu_k$ nearest to $r$.",
"A one-hot vector.",
"A sequence increasing with $k$.",
"A constant vector."
],
"answer": 0,
"why": "Each $e_k$ is a Gaussian in $r$ around $\\mu_k$, so for fixed $r$ the vector is a soft \"thermometer\" bump over $k$. This smooth radial basis is the input of the filter network $W(r_{ij})$.",
"zh": "距离的径向基展开是以最近中心 $\\mu_k$ 为峰的光滑小峰。"
},
{
"id": "L25-012",
"lec": "L25",
"type": "pic",
"level": 3,
"q": "A neighbourhood is rotated by $R$. How do the SOAP expansion coefficients $c_{n\\ell m}$ change, and what is invariant?",
"choices": [
"Every coefficient is itself invariant.",
"Rotation mixes different $\\ell$; nothing is invariant.",
"Rotation mixes $m$ within each $\\ell$; $\\sum_mc_{n\\ell m}c^*_{n'\\ell m}$ is invariant.",
"Rotation changes $\\lvert c_{n\\ell m}\\rvert$ but keeps the sign."
],
"answer": 2,
"why": "The coefficients of fixed $\\ell$ rotate like the $2\\ell+1$ components of an angular-momentum multiplet, $c\\mapsto D^\\ell(R)c$. The power spectrum contracts over $m$ (a \"length\" per $\\ell$) and so is rotation-invariant.",
"zh": "旋转用 Wigner 矩阵混合同一 $\\ell$ 的 $m$ 分量；对 $m$ 求和的功率谱不变。"
},
{
"id": "A1-001",
"lec": "A1",
"type": "term",
"level": 1,
"q": "Let $x\\in\\mathbb R^3$ and $y\\in\\mathbb R^2$ be column vectors. Which statement about $xy^T$ is correct?",
"choices": [
"a scalar $\\sum_i x_iy_i$ (the inner product)",
"a $2\\times3$ matrix with entries $x_iy_j$, of rank 1",
"a $3\\times2$ matrix with entries $x_iy_j$, of rank 2",
"a $3\\times2$ matrix with entries $x_iy_j$, of rank 1"
],
"answer": 3,
"why": "$x$ is $3\\times1$ and $y^T$ is $1\\times2$, so $xy^T$ is $3\\times2$ with $(xy^T)_{ij}=x_iy_j$. Every column is a multiple of $x$, hence rank 1. The inner product $x^Ty$ is not even defined for these sizes.",
"zh": "外积 $xy^T$ 是 $3\\times2$ 矩阵，元素 $x_iy_j$，秩为1；内积才是标量。"
},
{
"id": "A1-002",
"lec": "A1",
"type": "term",
"level": 1,
"q": "$X\\in\\mathbb R^{p\\times n}$ has the observations $x_1,\\dots,x_n\\in\\mathbb R^p$ as columns. Which sentence describes $XX^T$?",
"choices": [
"the sum of $n$ outer products $x_ix_i^T$, a $p\\times p$ matrix",
"the matrix of inner products $x_i^Tx_j$, an $n\\times n$ matrix",
"the sum of $n$ inner products $x_i^Tx_i$, a single number",
"the sum of $n$ outer products $x_ix_i^T$, an $n\\times n$ matrix"
],
"answer": 0,
"why": "Columns times rows gives $XX^T=\\sum_ix_ix_i^T$, and $(p\\times n)(n\\times p)=p\\times p$. The matrix of inner products is the Gram matrix $X^TX$.",
"zh": "$XX^T=\\sum x_ix_i^T$ 是 $p\\times p$ 散布/协方差矩阵；$X^TX$ 才是 $n\\times n$ 的Gram矩阵。"
},
{
"id": "A1-003",
"lec": "A1",
"type": "term",
"level": 1,
"q": "For $X\\in\\mathbb R^{p\\times n}$ with columns $x_i$, what is the entry $(X^TX)_{ij}$?",
"choices": [
"$x_ix_j^T$, the outer product of observations $i$ and $j$",
"$\\sum_k X_{ik}X_{jk}$, the inner product of features $i$ and $j$",
"$x_i^Tx_j$, the inner product of observations $i$ and $j$",
"$\\lVert x_i-x_j\\rVert^2$, the squared distance of observations $i,j$"
],
"answer": 2,
"why": "$(X^TX)_{ij}=\\sum_kX_{ki}X_{kj}=x_i^Tx_j$, summed over the $p$ features. The feature-wise sum over samples belongs to $XX^T$.",
"zh": "Gram矩阵元素 $(X^TX)_{ij}=x_i^Tx_j$，对 $p$ 个特征求和。"
},
{
"id": "A1-004",
"lec": "A1",
"type": "term",
"level": 2,
"q": "$A\\in\\mathbb R^{m\\times n}$ and $x\\in\\mathbb R^m$. Which matrix expression has $j$-th component $\\sum_{i=1}^mA_{ij}x_i$?",
"choices": [
"$Ax$",
"$A^Tx$",
"$A^TAx$",
"$\\operatorname{diag}(A)\\,x$"
],
"answer": 1,
"why": "The sum runs over the row index $i$ of $A$, so component $j$ is (column $j$ of $A$)$^T x=(A^Tx)_j$, of shape $(n\\times m)(m\\times1)=n\\times1$. $Ax$ sums over the column index and would need $x\\in\\mathbb R^n$.",
"zh": "对行指标 $i$ 求和 $\\Rightarrow(A^Tx)_j$；对列指标求和才是 $Ax$。"
},
{
"id": "A1-005",
"lec": "A1",
"type": "term",
"level": 2,
"q": "For two square matrices $A,B\\in\\mathbb R^{n\\times n}$, what is $\\operatorname{tr}(A^TB)$ in index form?",
"choices": [
"$\\sum_{i,j}A_{ij}B_{ji}$",
"$\\sum_{i,j}A_{ij}B_{ij}$ (entrywise inner product)",
"$\\sum_{i}A_{ii}B_{ii}$",
"$\\operatorname{tr}(A)\\operatorname{tr}(B)$"
],
"answer": 1,
"why": "$(A^TB)_{jj}=\\sum_iA_{ij}B_{ij}$, and the trace sums over $j$. This is the Frobenius inner product; $\\sum_{i,j}A_{ij}B_{ji}$ is $\\operatorname{tr}(AB)$ instead.",
"zh": "$\\mathrm{tr}(A^TB)=\\sum A_{ij}B_{ij}$，是矩阵逐元素内积（Frobenius内积）。"
},
{
"id": "A1-006",
"lec": "A1",
"type": "term",
"level": 2,
"q": "The Frobenius norm is $\\lVert A\\rVert_F=\\sqrt{\\sum_{i,j}A_{ij}^2}$. Which expression equals $\\lVert A\\rVert_F^2$, with $\\sigma_k$ the singular values of $A$?",
"choices": [
"$\\operatorname{tr}(A^TA)=\\sum_k\\sigma_k^2$",
"$\\operatorname{tr}(A)^2$",
"$\\sigma_1^2$ (largest singular value squared)",
"$\\sum_k\\sigma_k$"
],
"answer": 0,
"why": "$\\sum_{ij}A_{ij}^2=\\operatorname{tr}(A^TA)$, and $A^TA=V\\Sigma^2V^T$ has trace $\\sum_k\\sigma_k^2$. $\\sigma_1^2$ is the squared spectral norm, a different norm.",
"zh": "$\\lVert A\\rVert_F^2=\\mathrm{tr}(A^TA)=\\sum\\sigma_k^2$；$\\sigma_1^2$ 是谱范数的平方，不是Frobenius。"
},
{
"id": "A1-007",
"lec": "A1",
"type": "term",
"level": 1,
"q": "Read aloud: \"$A\\succeq0$\" for a symmetric matrix $A$. Which sentence is correct?",
"choices": [
"every entry $A_{ij}$ is non-negative",
"$\\det A\\ge0$ and $A$ is invertible",
"$x^TAx>0$ for every vector $x\\ne0$",
"$x^TAx\\ge0$ for every vector $x$ (all eigenvalues $\\ge0$)"
],
"answer": 3,
"why": "$\\succeq0$ is positive *semi*-definite: the quadratic form never goes negative, zero allowed. The last choice is strict $\\succ0$. Entries may be negative: $\\begin{pmatrix}1&-1\\\\-1&1\\end{pmatrix}\\succeq0$ (eigenvalues $2,0$).",
"zh": "$A\\succeq0$＝半正定：对所有 $x$ 有 $x^TAx\\ge0$，特征值 $\\ge0$（可为0），与元素符号无关。"
},
{
"id": "A1-008",
"lec": "A1",
"type": "calc",
"level": 1,
"q": "What are the eigenvalues of $\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$?",
"choices": [
"$2$ and $2$",
"$4$ and $0$",
"$3$ and $1$",
"$3$ and $-1$"
],
"answer": 2,
"why": "$\\operatorname{tr}=4$, $\\det=3$, so $\\lambda=2\\pm\\sqrt{4-3}=3,1$, with eigenvectors $(1,\\pm1)/\\sqrt2$. Check: $3+1=\\operatorname{tr}$ and $3\\cdot1=\\det$.",
"zh": "$2\\times2$ 对称阵：$\\lambda=\\text{迹}/2\\pm\\sqrt{(\\text{迹}/2)^2-\\det}$，这里是3和1。"
},
{
"id": "A1-009",
"lec": "A1",
"type": "calc",
"level": 2,
"q": "For $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ and $x=(1,-1)^T$, what is $x^TAx$?",
"choices": [
"$6$",
"$0$",
"$2$",
"$1$"
],
"answer": 2,
"why": "$Ax=(1,-1)^T$, so $x^TAx=1+1=2$. Equivalently $x$ is an eigenvector with $\\lambda=1$ and $\\lVert x\\rVert^2=2$. The value 6 belongs to $x=(1,1)^T$.",
"zh": "$x^TAx=\\lambda\\lVert x\\rVert^2$（$x$ 为本征向量）；沿 $(1,-1)$ 方向 $\\lambda=1$，得2。"
},
{
"id": "A1-010",
"lec": "A1",
"type": "calc",
"level": 2,
"q": "What are the singular values of $M=\\begin{pmatrix}1&2\\\\2&4\\end{pmatrix}$?",
"choices": [
"$25$ and $0$",
"$5$ and $0$",
"$1$ and $4$",
"$\\sqrt5$ and $\\sqrt{20}$"
],
"answer": 1,
"why": "$M^TM=\\begin{pmatrix}5&10\\\\10&20\\end{pmatrix}$ has eigenvalues $25$ and $0$, so $\\sigma=\\sqrt{25}=5$ and $0$ (rank 1). Eigenvalues of $M^TM$ are $\\sigma^2$, not $\\sigma$; column norms are not singular values.",
"zh": "$\\sigma_k=\\sqrt{M^TM\\text{ 的特征值}}$；两列成比例 $\\Rightarrow$ 秩1，$\\sigma=5,0$。"
},
{
"id": "A1-011",
"lec": "A1",
"type": "calc",
"level": 2,
"q": "$XX^T$ has eigenvalues $9$ and $1$. Ridge replaces it by $XX^T+\\lambda I$ with $\\lambda=1$. The condition number $\\lambda_{\\max}/\\lambda_{\\min}$ changes from 9 to?",
"choices": [
"$10$",
"$9$",
"$3$",
"$5$"
],
"answer": 3,
"why": "Eigenvalues shift by $\\lambda$: $9+1=10$ and $1+1=2$, so the ratio is $10/2=5$. The small eigenvalue gains the most in relative terms, which is why ridge stabilises ill-conditioned problems.",
"zh": "$A+\\lambda I$ 的特征值各加 $\\lambda$：10和2，条件数从9降到5（岭回归稳定化）。"
},
{
"id": "A1-012",
"lec": "A1",
"type": "calc",
"level": 3,
"q": "A $3\\times3$ matrix $A$ has eigenvalues $1,2,4$. What is $\\det(2A)$?",
"choices": [
"$64$",
"$16$",
"$8$",
"$32$"
],
"answer": 0,
"why": "$\\det A=1\\cdot2\\cdot4=8$ and $\\det(cA)=c^p\\det A$ with $p=3$, so $\\det(2A)=8\\cdot8=64$. Multiplying by 2 instead of $2^3$ gives the tempting 16.",
"zh": "$\\det(cA)=c^p\\det A$；$p=3$，所以是 $8\\times8=64$，不是 $2\\times8$。"
},
{
"id": "A1-013",
"lec": "A1",
"type": "calc",
"level": 3,
"q": "$M=(1\\ \\ 1)$ is a $1\\times2$ matrix and $y=2$. Which $w\\in\\mathbb R^2$ solves $Mw=y$ with minimum norm, i.e. $w=M^+y$?",
"choices": [
"$(2,0)^T$",
"$(2,2)^T$",
"$(\\tfrac12,\\tfrac12)^T$",
"$(1,1)^T$"
],
"answer": 3,
"why": "All solutions are $(1,1)+t(1,-1)$ (null space $(1,-1)$); the shortest has $t=0$. Also $M^+=M^T(MM^T)^{-1}=\\tfrac12(1,1)^T$, so $w=(1,1)^T$. $(2,0)^T$ solves it but is longer; $(2,2)^T$ gives $Mw=4$.",
"zh": "零空间 $(1,-1)$；最小范数解 $w=M^+y=(1,1)$；$(2,0)$ 虽是解但范数更大。"
},
{
"id": "A1-014",
"lec": "A1",
"type": "pic",
"level": 2,
"q": "In the $(x_1,x_2)$ plane, sketch the level set $x^TAx=1$ for $A=\\operatorname{diag}(4,1)$. What do you see?",
"choices": [
"an ellipse with semi-axis $2$ along $x_1$ and $1$ along $x_2$",
"an ellipse with semi-axis $1/2$ along $x_1$ and $1$ along $x_2$",
"a circle of radius $1$",
"a hyperbola opening along $x_1$"
],
"answer": 1,
"why": "$4x_1^2+x_2^2=1$ has semi-axes $\\sqrt{c/\\lambda_k}=1/2$ and $1$. A large eigenvalue gives a narrow direction. Hyperbolas need eigenvalues of both signs.",
"zh": "半轴 $=\\sqrt{c/\\lambda_k}$：大特征值方向更窄，$x_1$ 方向半轴 $1/2$。"
},
{
"id": "A1-015",
"lec": "A1",
"type": "pic",
"level": 1,
"q": "$M=U\\Sigma V^T$ with $\\sigma_1=3$, $\\sigma_2=1$. What does $x\\mapsto Mx$ do to the unit circle?",
"choices": [
"it becomes an ellipse with semi-axes $3$ and $1$ along $v_1$, $v_2$",
"it becomes a circle of radius $2$ (the average)",
"it becomes an ellipse with semi-axes $3$ and $1$ along $u_1$, $u_2$",
"it becomes an ellipse with semi-axes $9$ and $1$"
],
"answer": 2,
"why": "$V^T$ rotates (circle stays a circle), $\\Sigma$ stretches the axes by $3$ and $1$, $U$ rotates the result so the axes lie along $u_1,u_2$. The $v_k$ are the input directions that get stretched.",
"zh": "SVD＝旋转 $V^T\\to$ 拉伸 $\\Sigma\\to$ 旋转 $U$：单位圆变成半轴 $\\sigma_k$、沿 $u_k$ 的椭圆。"
},
{
"id": "A1-016",
"lec": "A1",
"type": "pic",
"level": 3,
"q": "$M=ab^T$ with nonzero $a,b\\in\\mathbb R^2$. Which picture describes $x\\mapsto Mx$ on the plane?",
"choices": [
"every point lands on the line along $a$; the line $b^\\perp$ is sent to $0$",
"every point lands on the line along $b$; the line $a^\\perp$ is sent to $0$",
"the plane is rotated and stretched; only the origin is sent to $0$",
"every point lands on the line along $a$; the line along $b$ is sent to $0$"
],
"answer": 0,
"why": "$Mx=a\\,(b^Tx)$ is always a multiple of $a$ (rank 1), and it vanishes exactly when $b^Tx=0$, i.e. $x\\perp b$. The null space is $b^\\perp$, not the line along $b$.",
"zh": "$Mx=a(b^Tx)$：像落在 $a$ 方向直线上；$b^Tx=0$ 即 $x\\perp b$ 的方向被压到0。"
},
{
"id": "A2-001",
"lec": "A2",
"type": "term",
"level": 1,
"q": "$y:\\mathbb R^n\\to\\mathbb R^m$. In the course's numerator layout, which statement about $\\partial y/\\partial x$ is right?",
"choices": [
"an $n\\times m$ matrix with entries $\\partial y_i/\\partial x_j$",
"an $m\\times n$ matrix (Jacobian) with entries $\\partial y_i/\\partial x_j$",
"an $n\\times n$ matrix of second derivatives (the Hessian)",
"an $m\\times1$ column vector (the gradient)"
],
"answer": 1,
"why": "Rows follow the outputs $y_i$, columns the inputs $x_j$: $[\\partial y/\\partial x]_{ij}=\\partial y_i/\\partial x_j$, shape $m\\times n$. It maps a step $\\delta\\in\\mathbb R^n$ to $\\frac{\\partial y}{\\partial x}\\delta\\in\\mathbb R^m$.",
"zh": "分子布局：$\\partial y/\\partial x$ 是 $m\\times n$ 的Jacobian，行对应输出，列对应输入。"
},
{
"id": "A2-002",
"lec": "A2",
"type": "term",
"level": 1,
"q": "For $f(x)=a^Tx$ with $a,x\\in\\mathbb R^n$, which pair is correct in the course's (numerator) layout?",
"choices": [
"$\\partial f/\\partial x=a$ (a column), $\\nabla_xf=a^T$ (a row)",
"$\\partial f/\\partial x=a$ and $\\nabla_xf=a$, both columns",
"$\\partial f/\\partial x=a^T$ and $\\nabla_xf=a^T$, both rows",
"$\\partial f/\\partial x=a^T$ (a row), $\\nabla_xf=a$ (a column)"
],
"answer": 3,
"why": "For scalar $f$ the derivative is a $1\\times n$ row, $\\partial f/\\partial x=a^T$; the gradient is its transpose, the column $a$. Components: $\\partial(\\sum_ia_ix_i)/\\partial x_j=a_j$.",
"zh": "标量 $f$：$\\partial f/\\partial x$ 是 $1\\times n$ 行向量，梯度 $\\nabla f$ 是其转置（列向量）。"
},
{
"id": "A2-003",
"lec": "A2",
"type": "term",
"level": 2,
"q": "$B\\in\\mathbb R^{n\\times n}$ is *not* symmetric. Which is $\\nabla_x(x^TBx)$?",
"choices": [
"$(B+B^T)x$",
"$2Bx$",
"$2B^Tx$",
"$Bx$"
],
"answer": 0,
"why": "$\\partial_j\\sum_{i,l}x_iB_{il}x_l=(Bx)_j+(B^Tx)_j$. The shortcut $2Bx$ is valid only when $B=B^T$.",
"zh": "$\\nabla(x^TBx)=(B+B^T)x$；只有 $B$ 对称时才化为 $2Bx$。"
},
{
"id": "A2-004",
"lec": "A2",
"type": "term",
"level": 2,
"q": "$A\\in\\mathbb R^{m\\times n}$, $x\\in\\mathbb R^n$, $d\\in\\mathbb R^m$. Which expression is the *gradient* $\\nabla_x\\lVert Ax-d\\rVert^2$?",
"choices": [
"$2A(Ax-d)$",
"$2(Ax-d)^TA$",
"$2A^T(Ax-d)$",
"$A^T(Ax-d)$"
],
"answer": 2,
"why": "Chain rule: $\\partial L/\\partial y=2y^T$, $\\partial y/\\partial x=A$, so the derivative is the row $2(Ax-d)^TA$. The gradient is its transpose $2A^T(Ax-d)\\in\\mathbb R^n$. $2A(Ax-d)$ does not even fit the shapes.",
"zh": "导数是行向量 $2(Ax-d)^TA$，梯度是其转置 $2A^T(Ax-d)$（$n\\times1$）。"
},
{
"id": "A2-005",
"lec": "A2",
"type": "term",
"level": 1,
"q": "$\\hat y=X^Tw$ with $X\\in\\mathbb R^{p\\times n}$ and $w\\in\\mathbb R^p$. What is $\\partial\\hat y/\\partial w$ (numerator layout)?",
"choices": [
"$X$, a $p\\times n$ matrix",
"$w^T$, a $1\\times p$ row",
"$XX^T$, a $p\\times p$ matrix",
"$X^T$, an $n\\times p$ matrix"
],
"answer": 3,
"why": "$\\partial(Ax)/\\partial x=A$ with $A=X^T$ ($n\\times p$): rows are predictions $\\hat y_i$, columns are weights $w_j$, and $\\partial\\hat y_i/\\partial w_j=X_{ji}$.",
"zh": "$\\hat y=X^Tw$ 对 $w$ 线性，Jacobian$=X^T$（$n\\times p$）：行=样本，列=权重。"
},
{
"id": "A2-006",
"lec": "A2",
"type": "term",
"level": 2,
"q": "What is the Hessian of $f(w)=\\lVert y-X^Tw\\rVert^2$ with respect to $w\\in\\mathbb R^p$, for $X\\in\\mathbb R^{p\\times n}$?",
"choices": [
"$2X^TX$, an $n\\times n$ matrix",
"$-2X(y-X^Tw)$, a $p$-vector",
"$2XX^T$, a $p\\times p$ matrix",
"$XX^T$, a $p\\times p$ matrix"
],
"answer": 2,
"why": "The gradient is $-2Xy+2XX^Tw$; differentiating again with respect to $w$ gives $2XX^T$ (PSD, so $f$ is convex). The third choice is the gradient, the last misses the factor 2.",
"zh": "梯度再对 $w$ 求导：Hessian$=2XX^T$（$p\\times p$，半正定 $\\Rightarrow$ 凸）。"
},
{
"id": "A2-007",
"lec": "A2",
"type": "term",
"level": 1,
"q": "Read aloud: $\\hat w=\\arg\\min_w L(w)$. Which sentence is correct?",
"choices": [
"$\\hat w$ is the smallest value that $L$ takes",
"$\\hat w$ is the argument $w$ at which $L$ is smallest",
"$\\hat w$ is the gradient of $L$ at its minimum",
"$\\hat w$ is the smallest component of the vector $w$"
],
"answer": 1,
"why": "$\\min_wL$ returns the smallest *value* (a number); $\\arg\\min_wL$ returns the *location* where it is attained. For $L=(w-3)^2$: $\\min L=0$ but $\\arg\\min L=3$.",
"zh": "arg min 给出取到最小值的位置w；min 才是最小值本身。"
},
{
"id": "A2-008",
"lec": "A2",
"type": "term",
"level": 2,
"q": "$L:\\mathbb R^m\\to\\mathbb R$, $y=g(x)\\in\\mathbb R^m$, $x\\in\\mathbb R^n$. Write $L_y=\\partial L/\\partial y$, $J=\\partial y/\\partial x$. Which product is $\\partial L(g(x))/\\partial x$ (numerator layout)?",
"choices": [
"$L_yJ$, shapes $(1\\times m)(m\\times n)$",
"$JL_y$, shapes $(m\\times n)(1\\times m)$",
"$L_y\\odot J$, entrywise product",
"$J^TL_y$, shapes $(n\\times m)(1\\times m)$"
],
"answer": 0,
"why": "The inner dimensions must match: a row $(1\\times m)$ times the Jacobian $(m\\times n)$ gives a row $(1\\times n)$. The left-to-right order mirrors the scalar chain rule.",
"zh": "分子布局下链式法则从左往右：$(\\partial L/\\partial y)(\\partial y/\\partial x)$，维数 $(1\\times m)(m\\times n)$。"
},
{
"id": "A2-009",
"lec": "A2",
"type": "term",
"level": 3,
"q": "Dense layer $z=Wa+b$ with $W\\in\\mathbb R^{d_1\\times d_0}$, $a\\in\\mathbb R^{d_0}$, and $\\delta=(\\partial\\ell/\\partial z)^T\\in\\mathbb R^{d_1}$. Which is $\\nabla_W\\ell$ (shaped like $W$)?",
"choices": [
"$\\delta a^T$, an outer product ($d_1\\times d_0$)",
"$a\\delta^T$, an outer product ($d_0\\times d_1$)",
"$W^T\\delta$, a $d_0$-vector",
"$\\operatorname{diag}(\\delta)\\,W$, a $d_1\\times d_0$ matrix"
],
"answer": 0,
"why": "$\\ell$ depends on $W_{ij}$ only via $z_i$, so $\\partial\\ell/\\partial W_{ij}=\\delta_ia_j$, i.e. $\\delta a^T$. $W^T\\delta=\\nabla_a\\ell$ is what is passed back to the previous layer.",
"zh": "$\\partial\\ell/\\partial W_{ij}=\\delta_ia_j\\Rightarrow\\nabla_W\\ell=\\delta a^T$（外积，形状同 $W$）；$W^T\\delta$ 传给上一层。"
},
{
"id": "A2-010",
"lec": "A2",
"type": "calc",
"level": 2,
"q": "$B=\\begin{pmatrix}1&2\\\\0&3\\end{pmatrix}$ and $f(x)=x^TBx$. What is $\\nabla f$ at $x=(1,1)^T$?",
"choices": [
"$(6,6)^T$",
"$(4,8)^T$",
"$(3,3)^T$",
"$(1,5)^T$"
],
"answer": 1,
"why": "$f=x_1^2+2x_1x_2+3x_2^2$, so $\\nabla f=(2x_1+2x_2,\\;2x_1+6x_2)=(4,8)^T=(B+B^T)x$. The wrong choices are $2Bx$ (assumes symmetry), $Bx$, and $B^Tx$.",
"zh": "展开 $f=x_1^2+2x_1x_2+3x_2^2$ 求导得 $(4,8)$；$B$ 不对称时不能用 $2Bx$。"
},
{
"id": "A2-011",
"lec": "A2",
"type": "calc",
"level": 2,
"q": "Compute the Jacobian $\\partial y/\\partial x$ at $x=(2,3)^T$ for $y=(x_1x_2,\\;x_1+x_2^2)^T$.",
"choices": [
"$\\begin{pmatrix}3&1\\\\2&6\\end{pmatrix}$",
"$\\begin{pmatrix}3&2\\\\1&3\\end{pmatrix}$",
"$\\begin{pmatrix}2&3\\\\6&1\\end{pmatrix}$",
"$\\begin{pmatrix}3&2\\\\1&6\\end{pmatrix}$"
],
"answer": 3,
"why": "Row $i$ is $(\\partial y_i/\\partial x_1,\\partial y_i/\\partial x_2)$: row 1 is $(x_2,x_1)=(3,2)$, row 2 is $(1,2x_2)=(1,6)$. The second choice is the transpose; the third forgets the factor 2 in $2x_2$.",
"zh": "Jacobian第 $i$ 行 $=\\partial y_i/\\partial x_j$：第一行 $(x_2,x_1)=(3,2)$，第二行 $(1,2x_2)=(1,6)$。"
},
{
"id": "A2-012",
"lec": "A2",
"type": "calc",
"level": 2,
"q": "$f(x)=\\lVert Ax-d\\rVert^2$ with $A=\\operatorname{diag}(1,2)$ and $d=(0,1)^T$. Evaluate $\\nabla f$ at $x=(1,1)^T$.",
"choices": [
"$(1,2)^T$",
"$(2,2)^T$",
"$(2,4)^T$",
"$(2,8)^T$"
],
"answer": 2,
"why": "Residual $r=Ax-d=(1,1)^T$, and $\\nabla f=2A^Tr=(2,4)^T$. $(1,2)$ forgets the factor 2, $(2,2)$ forgets $A^T$, $(2,8)$ applies $A$ twice.",
"zh": "残差 $r=Ax-d=(1,1)$，梯度 $=2A^Tr=(2,4)$；别漏因子2或 $A^T$。"
},
{
"id": "A2-013",
"lec": "A2",
"type": "calc",
"level": 1,
"q": "What is the Hessian (entries $\\partial^2f/\\partial x_i\\partial x_j$) of $f(x)=x_1^2+3x_1x_2+2x_2^2$?",
"choices": [
"$\\begin{pmatrix}2&3\\\\0&4\\end{pmatrix}$",
"$\\begin{pmatrix}2&3\\\\3&4\\end{pmatrix}$",
"$\\begin{pmatrix}2&6\\\\6&4\\end{pmatrix}$",
"$\\begin{pmatrix}1&3\\\\3&2\\end{pmatrix}$"
],
"answer": 1,
"why": "$\\partial_1^2f=2$, $\\partial_2^2f=4$, $\\partial_1\\partial_2f=3$ and the Hessian is symmetric. The last choice lists the coefficients, not the second derivatives.",
"zh": "Hessian各元素=二阶偏导：$f_{11}=2$，$f_{22}=4$，$f_{12}=f_{21}=3$（对称）。"
},
{
"id": "A2-014",
"lec": "A2",
"type": "calc",
"level": 3,
"q": "$f(x)=x_1^2+3x_1x_2+2x_2^2$ has $\\nabla f=0$ at the origin. What kind of stationary point is it?",
"choices": [
"a local minimum, since both diagonal entries of $H$ are positive",
"a local maximum, since the mixed term is positive",
"a saddle point, since $\\det H=-1<0$",
"undecidable without third derivatives"
],
"answer": 2,
"why": "$H=\\begin{pmatrix}2&3\\\\3&4\\end{pmatrix}$ has $\\operatorname{tr}=6$, $\\det=-1$, so eigenvalues $3\\pm\\sqrt{10}$ of opposite sign: indefinite, hence a saddle. Positive diagonal entries do not imply $H\\succ0$.",
"zh": "$H$ 的 $\\det=-1<0$，特征值一正一负 $\\Rightarrow$ 鞍点；对角元为正不足以保证正定。"
},
{
"id": "A2-015",
"lec": "A2",
"type": "calc",
"level": 3,
"q": "$y=(x_1x_2,\\;x_1+x_2^2)^T$ has Jacobian $J=\\begin{pmatrix}3&2\\\\1&6\\end{pmatrix}$ at $x=(2,3)^T$. Estimate $y(x+\\delta)-y(x)$ for $\\delta=(0.1,-0.1)^T$.",
"choices": [
"$(0.1,-0.5)^T$",
"$(0.2,-0.4)^T$",
"$(0.5,-0.1)^T$",
"$(-0.1,0.5)^T$"
],
"answer": 0,
"why": "First-order Taylor: $\\Delta y\\approx J\\delta=(3\\cdot0.1-2\\cdot0.1,\\;0.1-6\\cdot0.1)=(0.1,-0.5)^T$. $(0.2,-0.4)$ uses $J^T\\delta$ (wrong layout). The exact change is $(0.09,-0.49)$.",
"zh": "一阶近似 $\\Delta y\\approx J\\delta$（$J$ 乘在左边）$=(0.1,-0.5)$；用 $J^T$ 会得错误结果。"
},
{
"id": "A2-016",
"lec": "A2",
"type": "calc",
"level": 2,
"q": "Maximise $f(x)=x_1+x_2$ subject to $x_1^2+x_2^2=1$ with $\\mathcal L=f-\\lambda g$. What is the maximal value of $f$?",
"choices": [
"$1$",
"$2$",
"$1/\\sqrt2$",
"$\\sqrt2$"
],
"answer": 3,
"why": "$\\nabla f=(1,1)^T=\\lambda\\nabla g=2\\lambda x$ gives $x_1=x_2=\\pm1/\\sqrt2$; the plus sign maximises $f=\\sqrt2$. $f=1$ at $(1,0)$ is feasible but not optimal; $2$ would need $x=(1,1)$, off the circle.",
"zh": "$\\nabla f=\\lambda\\nabla g$ 给出 $x_1=x_2=1/\\sqrt2$，最大值 $\\sqrt2$；$(1,0)$ 可行但不最优。"
},
{
"id": "A2-017",
"lec": "A2",
"type": "pic",
"level": 1,
"q": "At $x_0$ the gradient $\\nabla f(x_0)\\ne0$. How does this vector sit relative to the contour line of $f$ through $x_0$?",
"choices": [
"tangent to the contour, along the line of constant $f$",
"perpendicular to the contour, pointing towards decreasing $f$",
"perpendicular to the contour, pointing towards increasing $f$",
"at 45° to the contour, its length being the curvature"
],
"answer": 2,
"why": "Along a contour $f$ does not change, so $\\nabla f^T\\delta=0$ for tangent steps $\\delta$: the gradient is perpendicular. It points uphill; gradient descent uses $-\\nabla f$.",
"zh": "梯度垂直于等值线并指向 $f$ 增大最快的方向；梯度下降走 $-\\nabla f$。"
},
{
"id": "A2-018",
"lec": "A2",
"type": "pic",
"level": 1,
"q": "$\\nabla f(x^*)=0$ and the Hessian has eigenvalues $+2$ (eigenvector $e_1$) and $-1$ (eigenvector $e_2$). Which picture of $f$ near $x^*$ is right?",
"choices": [
"a bowl: $f$ rises in every direction",
"a peak: $f$ falls in every direction",
"a valley: $f$ rises along $e_1$ and is constant along $e_2$",
"a saddle: $f$ rises along $e_1$ and falls along $e_2$"
],
"answer": 3,
"why": "$f(x^*+\\delta)\\approx f(x^*)+\\tfrac12\\delta^TH\\delta=f(x^*)+\\delta_1^2-\\tfrac12\\delta_2^2$ with $\\delta_k$ the components along $e_k$: up along $e_1$, down along $e_2$ (hyperbolic contours).",
"zh": "二阶展开 $\\frac12\\delta^TH\\delta=\\delta_1^2-\\frac12\\delta_2^2$：沿 $e_1$ 上升、沿 $e_2$ 下降，是鞍点。"
},
{
"id": "A2-019",
"lec": "A2",
"type": "pic",
"level": 2,
"q": "Minimise $f$ on the unit circle $g(x)=\\lVert x\\rVert^2-1=0$. Which picture holds at the constrained optimum?",
"choices": [
"a contour of $f$ touches the circle tangentially, so $\\nabla f\\parallel\\nabla g$",
"a contour of $f$ crosses the circle at a right angle, so $\\nabla f\\perp\\nabla g$",
"$\\nabla f=0$ there, as for an unconstrained minimum",
"$\\nabla g=0$ there, so the multiplier is $\\lambda=0$"
],
"answer": 0,
"why": "If a contour crossed the circle, sliding along the circle would lower $f$. At the optimum $\\nabla f$ has no component along the circle, so $\\nabla f=\\lambda\\nabla g$ (like a constraint force in mechanics).",
"zh": "最优点处等值线与约束曲线相切，$\\nabla f\\parallel\\nabla g$，即 $\\nabla f=\\lambda\\nabla g$（类比约束力）。"
},
{
"id": "A2-020",
"lec": "A2",
"type": "pic",
"level": 3,
"q": "A map has constant Jacobian $J=\\begin{pmatrix}2&0\\\\0&-1/2\\end{pmatrix}$. What does it do to a small square?",
"choices": [
"stretches $x_1$ by 2 and shrinks $x_2$; the area is multiplied by $-1$",
"stretches $x_1$ by 2, shrinks and flips $x_2$; area is preserved, orientation reversed",
"doubles the area, because the largest entry is 2",
"leaves area and orientation unchanged, since $\\det J=1$"
],
"answer": 1,
"why": "$\\det J=2\\cdot(-\\tfrac12)=-1$. The area factor is $\\lvert\\det J\\rvert=1$ (preserved); the minus sign means a reflection of $x_2$. Densities change by $1/\\lvert\\det J\\rvert$.",
"zh": "$\\det J=-1$：面积因子 $|\\det J|=1$ 不变，负号表示 $x_2$ 方向翻转（定向反转）。"
},
{
"id": "A3-001",
"lec": "A3",
"type": "term",
"level": 1,
"q": "Which expression gives the marginal $p(x)$ from the joint density $p(x,y)$?",
"choices": [
"$\\int p(x,y)\\,dx$",
"$\\int p(x,y)\\,dy$",
"$\\int p(x\\mid y)\\,dy$",
"$\\int p(y\\mid x)\\,p(y)\\,dy$"
],
"answer": 1,
"why": "Marginalising $y$ means integrating it out of the joint (sum rule). $\\int p(x,y)\\,dx$ is $p(y)$. $\\int p(x\\mid y)\\,dy$ lacks the weight $p(y)$: the correct version is $\\int p(x\\mid y)p(y)\\,dy$.",
"zh": "边缘化＝对不关心的变量积分：$p(x)=\\int p(x,y)\\,dy$。"
},
{
"id": "A3-002",
"lec": "A3",
"type": "term",
"level": 2,
"q": "$X\\in\\mathbb R^p$ is a random vector with covariance $C$, $A\\in\\mathbb R^{m\\times p}$, $b\\in\\mathbb R^m$. What is $\\operatorname{Cov}[AX+b]$?",
"choices": [
"$ACA^T+bb^T$",
"$A^TCA$",
"$AC$, an $m\\times p$ matrix",
"$ACA^T$, an $m\\times m$ matrix"
],
"answer": 3,
"why": "$\\mathbb E[A(X-\\mu)(X-\\mu)^TA^T]=ACA^T$, shape $m\\times m$. A constant shift $b$ moves the mean but not the spread; $A^TCA$ does not fit the shapes.",
"zh": "$\\mathrm{Cov}[AX+b]=ACA^T$（$m\\times m$）；常数平移 $b$ 不改变协方差。"
},
{
"id": "A3-003",
"lec": "A3",
"type": "term",
"level": 3,
"q": "Let $m(Y)=\\mathbb E[X\\mid Y]$ and $v(Y)=\\operatorname{Var}(X\\mid Y)$. Which equation says \"average within-group variance plus variance between the group means\"?",
"choices": [
"$\\operatorname{Var}X=\\mathbb E[v]+\\operatorname{Var}[m]$",
"$\\operatorname{Var}X=\\mathbb E[v]$",
"$\\operatorname{Var}X=\\mathbb E[v]\\cdot\\operatorname{Var}[m]$",
"$\\operatorname{Var}X=\\operatorname{Var}[m]-\\mathbb E[v]$"
],
"answer": 0,
"why": "This is the law of total variance: \"within\" + \"between\". Dropping the between-group term underestimates $\\operatorname{Var}X$ (aleatoric plus epistemic uncertainty in ML).",
"zh": "全方差公式：组内方差的均值＋组均值的方差（within+between）。"
},
{
"id": "A3-004",
"lec": "A3",
"type": "term",
"level": 2,
"q": "$X\\sim\\mathcal U(0,\\tfrac14)$ (uniform on $[0,0.25]$). Which statement about its density $p(x)$ is correct?",
"choices": [
"$p(x)=\\tfrac14$ on the interval, since probabilities are at most 1",
"$p(x)=4$ is impossible, because densities may not exceed 1",
"$p(x)=4$ on the interval; allowed, since $\\int p\\,dx=1$, not $p\\le1$",
"$p(x)=4$, and hence $P(X=x)=4$ for each single $x$"
],
"answer": 2,
"why": "$p=1/(b-a)=4$ and $\\int_0^{1/4}4\\,dx=1$. A density is probability per unit $x$, so it can exceed 1; for each single point $P(X=x)=0$.",
"zh": "密度是单位 $x$ 上的概率，可以大于1；单点概率 $P(X=x)=0$。"
},
{
"id": "A3-005",
"lec": "A3",
"type": "term",
"level": 2,
"q": "$Y=g(X)$ with $g$ invertible and differentiable (1-D). Which formula gives $p_Y(y)$?",
"choices": [
"$p_X\\big(g^{-1}(y)\\big)\\,\\big\\lvert dg^{-1}/dy\\big\\rvert$",
"$p_X\\big(g^{-1}(y)\\big)\\,\\big\\lvert dg/dx\\big\\rvert$",
"$p_X\\big(g(y)\\big)\\,\\big\\lvert dg^{-1}/dy\\big\\rvert$",
"$p_X\\big(g^{-1}(y)\\big)$"
],
"answer": 0,
"why": "Probability mass is conserved, $p_Y\\,dy=p_X\\,dx$, so $p_Y=p_X\\lvert dx/dy\\rvert$ with $x=g^{-1}(y)$. Using $\\lvert dg/dx\\rvert$ (the inverse factor) is the usual slip; dropping the factor ignores stretching.",
"zh": "$p_Y(y)=p_X(x)|dx/dy|$，$x=g^{-1}(y)$；质量守恒 $p_Y\\,dy=p_X\\,dx$。"
},
{
"id": "A3-006",
"lec": "A3",
"type": "calc",
"level": 1,
"q": "$X$ is the number of heads in two fair coin flips. What is $\\mathbb E[X^2]$?",
"choices": [
"$1$",
"$2$",
"$3/2$",
"$1/2$"
],
"answer": 2,
"why": "$P(X=0,1,2)=\\tfrac14,\\tfrac12,\\tfrac14$, so $\\mathbb E[X^2]=0+\\tfrac12\\cdot1+\\tfrac14\\cdot4=\\tfrac32$. Also $\\operatorname{Var}X+(\\mathbb EX)^2=\\tfrac12+1$. The value 1 is $(\\mathbb EX)^2$, which forgets the variance.",
"zh": "$E[X^2]=\\mathrm{Var}X+(EX)^2=1/2+1=3/2$；别把它当成 $(EX)^2$。"
},
{
"id": "A3-007",
"lec": "A3",
"type": "calc",
"level": 2,
"q": "Joint pmf of $x,y\\in\\{0,1\\}$: $p(0,0)=0.1$, $p(0,1)=0.3$, $p(1,0)=0.2$, $p(1,1)=0.4$. What is $p(y=1\\mid x=0)$?",
"choices": [
"$0.30$",
"$3/7\\approx0.43$",
"$0.40$",
"$0.75$"
],
"answer": 3,
"why": "Marginal $p(x=0)=0.1+0.3=0.4$, so $p(y=1\\mid x=0)=0.3/0.4=0.75$. The value $0.3$ is the joint; $3/7$ is $p(x=0\\mid y=1)=0.3/0.7$, with the roles swapped.",
"zh": "条件概率=联合/边缘：$0.3/0.4=0.75$；$3/7$ 是 $p(x=0|y=1)$，条件与被条件弄反了。"
},
{
"id": "A3-008",
"lec": "A3",
"type": "calc",
"level": 1,
"q": "$\\operatorname{Var}X=4$. What is $\\operatorname{Var}(2X+3)$?",
"choices": [
"$8$",
"$16$",
"$19$",
"$11$"
],
"answer": 1,
"why": "$\\operatorname{Var}(aX+b)=a^2\\operatorname{Var}X=4\\cdot4=16$; the shift $b$ does not matter. $8$ forgets to square $a$; $11$ and $19$ wrongly add the shift.",
"zh": "$\\mathrm{Var}(aX+b)=a^2\\mathrm{Var}X=16$；平移 $b$ 不影响方差，$a$ 要平方。"
},
{
"id": "A3-009",
"lec": "A3",
"type": "calc",
"level": 1,
"q": "Measurements are i.i.d. with $\\sigma=2$. What is the standard error of the mean of $n=16$ of them?",
"choices": [
"$0.5$",
"$0.25$",
"$0.125$",
"$1$"
],
"answer": 0,
"why": "$\\mathrm{SE}=\\sigma/\\sqrt n=2/4=0.5$. The value $0.25$ is the variance $\\sigma^2/n$ of the mean; $0.125$ is $\\sigma/n$.",
"zh": "均值的标准误 $=\\sigma/\\sqrt n=0.5$；$\\sigma^2/n$ 是方差，不是标准误。"
},
{
"id": "A3-010",
"lec": "A3",
"type": "calc",
"level": 3,
"q": "$X\\sim\\mathcal U(0,1)$ and $Y=X^2$. What is the density $p_Y(y)$ at $y=1/16$?",
"choices": [
"$1/2$",
"$1$",
"$2$",
"$4$"
],
"answer": 2,
"why": "$x=\\sqrt y=\\tfrac14$ and $\\lvert dx/dy\\rvert=\\tfrac1{2\\sqrt y}=2$, so $p_Y=1\\cdot2=2$. $1/2$ uses $dy/dx=2x$ instead of its inverse; $1$ forgets the Jacobian; $4$ drops the factor $\\tfrac12$.",
"zh": "$p_Y=p_X\\cdot|dx/dy|=1/(2\\sqrt y)=2$；用 $dy/dx=1/2$ 是反了。"
},
{
"id": "A3-011",
"lec": "A3",
"type": "pic",
"level": 2,
"q": "Histograms of sample means $\\bar X_n$ of i.i.d. variables ($\\sigma=1$) are drawn for $n=25$ and $n=100$. What does the $n=100$ histogram look like relative to $n=25$?",
"choices": [
"same centre, a quarter as wide",
"shifted towards $0$ and more skewed",
"same width, but with more bars",
"same centre $\\mu$, bell-shaped, half as wide"
],
"answer": 3,
"why": "The width is $\\sigma/\\sqrt n$: $1/5$ versus $1/10$, so half as wide. Quadrupling $n$ halves the error bar (Monte Carlo $N^{-1/2}$); the shape tends to a Gaussian (CLT).",
"zh": "均值的宽度 $\\sigma/\\sqrt n$：$n$ 变4倍，宽度减半，中心仍为 $\\mu$，趋向钟形(CLT)。"
},
{
"id": "A3-012",
"lec": "A3",
"type": "pic",
"level": 3,
"q": "$X\\sim\\mathcal N(0,1)$ and $Y=X^2$. A scatter plot of $(X,Y)$ shows points on a parabola. Which statement is right?",
"choices": [
"$\\operatorname{Cov}(X,Y)>0$, because $Y$ grows with $\\lvert X\\rvert$",
"$\\operatorname{Cov}(X,Y)=0$, yet $X$ and $Y$ are strongly dependent",
"$X$ and $Y$ are independent, because the covariance is $0$",
"$\\operatorname{Cov}(X,Y)<0$, because the left branch falls"
],
"answer": 1,
"why": "$\\operatorname{Cov}(X,X^2)=\\mathbb E[X^3]-\\mathbb E[X]\\mathbb E[X^2]=0$ by symmetry, but $Y$ is a function of $X$. Independent implies uncorrelated, not conversely (jointly Gaussian pairs are the exception).",
"zh": "对称分布下 $\\mathrm{Cov}(X,X^2)=0$，但 $Y$ 是 $X$ 的函数：不相关不等于独立。"
},
{
"id": "A4-001",
"lec": "A4",
"type": "term",
"level": 1,
"q": "In $p(\\theta\\mid D)=\\dfrac{p(D\\mid\\theta)\\,p(\\theta)}{p(D)}$, which labelling is correct?",
"choices": [
"$p(D\\mid\\theta)$ prior, $p(\\theta)$ likelihood, $p(D)$ evidence",
"$p(D\\mid\\theta)$ likelihood, $p(\\theta)$ evidence, $p(D)$ prior",
"$p(D\\mid\\theta)$ posterior, $p(\\theta)$ prior, $p(D)$ likelihood",
"$p(D\\mid\\theta)$ likelihood, $p(\\theta)$ prior, $p(D)$ evidence"
],
"answer": 3,
"why": "The left side is the posterior. The numerator is likelihood times prior; the denominator is the evidence $p(D)=\\int p(D\\mid\\theta)p(\\theta)\\,d\\theta$, which only normalises.",
"zh": "后验=似然$\\times$先验/证据：$p(D|\\theta)$ 似然，$p(\\theta)$ 先验，$p(D)$ 证据（归一化）。"
},
{
"id": "A4-002",
"lec": "A4",
"type": "term",
"level": 2,
"q": "Which statement about the likelihood $\\mathcal L(\\theta)=p(D\\mid\\theta)$ is correct?",
"choices": [
"it is a probability density in $\\theta$ and always integrates to 1 over $\\theta$",
"it equals the posterior whenever the prior is Gaussian",
"it is a function of $\\theta$ for fixed data; $\\int\\mathcal L\\,d\\theta$ need not equal 1",
"it is the probability that $\\theta$ is the true value, given the data"
],
"answer": 2,
"why": "$p(D\\mid\\theta)$ is normalised over the data $D$, not over $\\theta$. Only after multiplying by a prior and dividing by the evidence do we get a density in $\\theta$. The last choice describes the posterior.",
"zh": "似然是 $\\theta$ 的函数（数据固定），对 $\\theta$ 积分不必为1；\"$\\theta$ 为真的概率\"是后验。"
},
{
"id": "A4-003",
"lec": "A4",
"type": "term",
"level": 2,
"q": "$\\hat w=\\arg\\min_w\\big[\\lVert y-X^Tw\\rVert^2+\\lambda\\lVert w\\rVert_2^2\\big]$ is the MAP estimate under which model?",
"choices": [
"Gaussian noise on $y$ and a Gaussian prior on $w$",
"Gaussian noise on $y$ and a Laplace prior on $w$",
"Laplace noise on $y$ and a Gaussian prior on $w$",
"Gaussian noise on $y$ and a flat prior on $w$"
],
"answer": 0,
"why": "$-\\log$ of a Gaussian likelihood gives the squared error; $-\\log$ of a Gaussian prior gives $\\lVert w\\rVert^2/(2\\tau^2)$, so $\\lambda=\\sigma^2/\\tau^2$. A Laplace prior gives $\\ell_1$ (lasso); a flat prior gives plain least squares (MLE).",
"zh": "平方损失＝高斯噪声；$\\ell_2$ 惩罚＝高斯先验（岭回归=MAP），$\\ell_1$ 对应Laplace先验。"
},
{
"id": "A4-004",
"lec": "A4",
"type": "term",
"level": 3,
"q": "Which expression is the posterior predictive $p(x_\\text{new}\\mid D)$?",
"choices": [
"$\\int p(x_\\text{new}\\mid\\theta)\\,p(\\theta)\\,d\\theta$",
"$\\int p(x_\\text{new}\\mid\\theta)\\,p(\\theta\\mid D)\\,d\\theta$",
"$p(x_\\text{new}\\mid\\hat\\theta_\\text{MAP})$",
"$\\int p(D\\mid\\theta)\\,p(\\theta)\\,d\\theta$"
],
"answer": 1,
"why": "Average the model's prediction over the *posterior* of $\\theta$. With the prior it would be the prior predictive; plugging in $\\hat\\theta_\\text{MAP}$ ignores parameter uncertainty; the last expression is the evidence $p(D)$.",
"zh": "后验预测＝对后验 $p(\\theta|D)$ 平均模型预测；用先验平均是先验预测，最后一项是证据。"
},
{
"id": "A4-005",
"lec": "A4",
"type": "term",
"level": 2,
"q": "Read aloud: $\\dfrac{p(1\\mid x)}{p(2\\mid x)}=\\dfrac{p(x\\mid1)}{p(x\\mid2)}\\cdot\\dfrac{p(1)}{p(2)}$. Which sentence is correct?",
"choices": [
"posterior odds = likelihood ratio + prior odds",
"posterior odds = prior odds / likelihood ratio",
"posterior odds = likelihood ratio × prior odds",
"posterior odds = likelihood ratio × evidence ratio"
],
"answer": 2,
"why": "Divide Bayes' rule for class 1 by that for class 2: the evidence $p(x)$ cancels, leaving the likelihood ratio multiplied by the prior odds.",
"zh": "后验比＝似然比$\\times$先验比；两类的证据 $p(x)$ 相消。"
},
{
"id": "A4-006",
"lec": "A4",
"type": "calc",
"level": 1,
"q": "A detector fires (\"+\") with $P(+\\mid S)=0.8$ for signal and $P(+\\mid B)=0.1$ for background. Prior $P(S)=0.2$. What is $P(S\\mid+)$?",
"choices": [
"$2/3$",
"$0.8$",
"$1/3$",
"$0.16$"
],
"answer": 0,
"why": "$P(S\\mid+)=\\dfrac{0.8\\cdot0.2}{0.8\\cdot0.2+0.1\\cdot0.8}=\\dfrac{0.16}{0.24}=\\dfrac23$. $0.8$ is the likelihood $P(+\\mid S)$ (prior ignored); $0.16$ is only the numerator.",
"zh": "$P(S|+)=0.16/(0.16+0.08)=2/3$；0.8是似然，别忽略先验和证据。"
},
{
"id": "A4-007",
"lec": "A4",
"type": "calc",
"level": 3,
"q": "Prior probability of signal $P=0.1$ (odds 1:9). An event has likelihood ratio $p(x\\mid S)/p(x\\mid B)=3$. What is the posterior probability of signal?",
"choices": [
"$0.30$",
"$1/3$",
"$0.75$",
"$0.25$"
],
"answer": 3,
"why": "Posterior odds $=3\\cdot\\tfrac19=\\tfrac13$, i.e. $1:3$, so $P=\\tfrac{1}{1+3}=0.25$. $0.30$ multiplies the *probability* by 3; $1/3$ mistakes the odds for a probability.",
"zh": "后验比$=3\\times(1:9)=1:3$，概率$=1/4$；不能把似然比直接乘到概率上。"
},
{
"id": "A4-008",
"lec": "A4",
"type": "calc",
"level": 2,
"q": "Coin bias $\\pi$ has prior Beta$(2,2)$. Data: 3 heads in 4 flips. What are the posterior and its mean?",
"choices": [
"Beta$(3,1)$, mean $3/4$",
"Beta$(5,3)$, mean $5/8$",
"Beta$(5,5)$, mean $1/2$",
"Beta$(5,6)$, mean $5/11$"
],
"answer": 1,
"why": "Update Beta$(a+s,\\,b+n-s)=$ Beta$(2+3,\\,2+1)=$ Beta$(5,3)$, mean $a/(a+b)=5/8$. Beta$(3,1)$ forgets the prior pseudo-counts (mean $3/4$ is the MLE); Beta$(5,6)$ adds $n$ instead of $n-s$.",
"zh": "Beta更新：$(a+\\text{成功},b+\\text{失败})=(5,3)$，均值 $5/8$；$3/4$ 是MLE。"
},
{
"id": "A4-009",
"lec": "A4",
"type": "calc",
"level": 3,
"q": "Prior $\\mu\\sim\\mathcal N(0,1)$, data noise $\\sigma^2=1$, $n=3$ observations with mean $\\bar x=2$. What are the posterior mean and variance of $\\mu$?",
"choices": [
"mean $2$, variance $1/3$",
"mean $1.5$, variance $1/4$",
"mean $1$, variance $1/2$",
"mean $1.5$, variance $1/2$"
],
"answer": 1,
"why": "Precisions add: $\\tau_n^{-2}=1+3=4$, so variance $\\tfrac14$; mean $=\\tfrac14(0\\cdot1+3\\cdot2)=1.5$. Mean 2 with variance $1/3$ is the MLE ($\\bar x$, $\\sigma^2/n$); equal weighting would give $1$.",
"zh": "精度相加 $1+3=4$，方差 $1/4$；均值是精度加权平均 $=1.5$（MLE是2）。"
},
{
"id": "A4-010",
"lec": "A4",
"type": "calc",
"level": 2,
"q": "A false positive costs $c_\\text{FP}=1$, a false negative $c_\\text{FN}=4$. Above which posterior $p(\\text{pos}\\mid x)$ should one decide \"positive\"?",
"choices": [
"$0.2$",
"$0.8$",
"$0.25$",
"$0.5$"
],
"answer": 0,
"why": "Expected cost of \"positive\" is $c_\\text{FP}(1-p)$, of \"negative\" $c_\\text{FN}\\,p$; positive wins iff $p>c_\\text{FP}/(c_\\text{FP}+c_\\text{FN})=1/5$. $0.25$ is $c_\\text{FP}/c_\\text{FN}$, $0.5$ ignores the costs.",
"zh": "阈值 $=c_{FP}/(c_{FP}+c_{FN})=1/5$：漏检代价大，所以门槛低于0.5。"
},
{
"id": "A4-011",
"lec": "A4",
"type": "pic",
"level": 1,
"q": "Prior $\\mu\\sim\\mathcal N(0,1)$, noise $\\sigma^2=1$, data mean $\\bar x=2$. How does the posterior of $\\mu$ look as $n$ grows from 1 to 100?",
"choices": [
"it stays centred at the prior mean 0 with fixed width",
"it narrows, but its centre stays at the midpoint $1$",
"it narrows, and its centre moves from $1$ towards $2$ (data take over)",
"it widens, since more data adds uncertainty"
],
"answer": 2,
"why": "Posterior precision $1+n$, mean $n\\bar x/(1+n)$: $1$ at $n=1$ and about $1.98$ at $n=100$. The prior's influence vanishes and the posterior concentrates on the MLE.",
"zh": "后验精度 $1+n$、均值 $n\\bar x/(1+n)$：$n$ 增大时变窄并向MLE($=2$)靠拢。"
},
{
"id": "A4-012",
"lec": "A4",
"type": "pic",
"level": 3,
"q": "Models A and B both fit the observed data well, but B is far more flexible. The evidence $p(D\\mid\\mathcal M)=\\int p(D\\mid\\theta)p(\\theta)\\,d\\theta$ is typically ...",
"choices": [
"higher for B: more parameters always fit better",
"equal, since both fit the observed data equally well",
"higher for B, because its posterior is broader",
"lower for B: its prior spreads probability over many possible datasets (Occam)"
],
"answer": 3,
"why": "$p(D\\mid\\mathcal M)$ is a distribution over *all* datasets and integrates to 1. A flexible model spreads its mass thin, so the one observed dataset gets less of it: Occam's razor.",
"zh": "证据是对所有可能数据集归一化的分布；灵活模型把概率摊薄，证据更低（奥卡姆剃刀）。"
},
{
"id": "A5-001",
"lec": "A5",
"type": "term",
"level": 1,
"q": "Which expression is the squared Mahalanobis distance of $x$ from $\\mu$ for a Gaussian with covariance $\\Sigma$?",
"choices": [
"$(x-\\mu)^T\\Sigma\\,(x-\\mu)$",
"$(x-\\mu)(x-\\mu)^T\\Sigma^{-1}$",
"$(x-\\mu)^T\\Sigma^{-1}(x-\\mu)$",
"$\\lVert x-\\mu\\rVert^2/\\det\\Sigma$"
],
"answer": 2,
"why": "Deviations are measured in units of the spread along each principal axis, so each direction is divided by its variance: $\\Sigma^{-1}$ sits in the middle and the result is a scalar. The third choice is a $p\\times p$ matrix.",
"zh": "马氏距离$^2$ $=(x-\\mu)^T\\Sigma^{-1}(x-\\mu)$：按各主轴方差归一化，结果是标量。"
},
{
"id": "A5-002",
"lec": "A5",
"type": "term",
"level": 2,
"q": "For $x\\in\\mathbb R^p$, $\\mathcal N(x\\mid\\mu,\\Sigma)=Z^{-1}\\exp\\big(-\\tfrac12\\Delta^2\\big)$ with $\\Delta^2$ the Mahalanobis term. What is $Z$?",
"choices": [
"$(2\\pi)^{p/2}\\,\\lvert\\Sigma\\rvert^{1/2}$",
"$(2\\pi)^{p/2}\\,\\lvert\\Sigma\\rvert$",
"$(2\\pi)^{p}\\,\\lvert\\Sigma\\rvert^{1/2}$",
"$2\\pi\\,\\lvert\\Sigma\\rvert^{p/2}$"
],
"answer": 0,
"why": "Check $p=1$: $Z=\\sqrt{2\\pi}\\,\\sigma=(2\\pi)^{1/2}(\\sigma^2)^{1/2}$. In the eigenbasis each of the $p$ axes contributes $\\sqrt{2\\pi\\lambda_k}$, and $\\prod_k\\sqrt{\\lambda_k}=\\lvert\\Sigma\\rvert^{1/2}$.",
"zh": "归一化常数 $Z=(2\\pi)^{p/2}|\\Sigma|^{1/2}$；用 $p=1$ 检验得 $\\sqrt{2\\pi}\\sigma$。"
},
{
"id": "A5-003",
"lec": "A5",
"type": "term",
"level": 2,
"q": "The exponent of a density is $-\\tfrac12x^TAx+x^Tb+c$ with $A\\succ0$. Which Gaussian is this?",
"choices": [
"mean $Ab$, covariance $A$",
"mean $A^{-1}b$, covariance $A$",
"mean $b$, covariance $A^{-1}$",
"mean $A^{-1}b$, covariance $A^{-1}$"
],
"answer": 3,
"why": "Completing the square gives $-\\tfrac12(x-A^{-1}b)^TA(x-A^{-1}b)+\\text{const}$. Comparing with $-\\tfrac12(x-\\mu)^T\\Sigma^{-1}(x-\\mu)$: $A$ is the precision $\\Sigma^{-1}$, and the mean is $A^{-1}b$.",
"zh": "配方：$A$ 是精度矩阵 $\\Sigma^{-1}$，协方差$=A^{-1}$，均值$=A^{-1}b$。"
},
{
"id": "A5-004",
"lec": "A5",
"type": "term",
"level": 1,
"q": "$x=(a,b)$ is jointly Gaussian with blocks $\\mu_a,\\mu_b$ and $\\Sigma_{aa},\\Sigma_{ab},\\Sigma_{bb}$. What is the marginal $p(a)$?",
"choices": [
"$\\mathcal N\\big(\\mu_a,(\\Sigma^{-1})_{aa}\\big)$",
"$\\mathcal N(\\mu_a,\\Sigma_{aa})$",
"$\\mathcal N\\big(\\mu_a,\\Sigma_{aa}-\\Sigma_{ab}\\Sigma_{bb}^{-1}\\Sigma_{ba}\\big)$",
"$\\mathcal N(\\mu_a+\\mu_b,\\Sigma_{aa}+\\Sigma_{bb})$"
],
"answer": 1,
"why": "Marginalising just drops the other block of the mean and of the covariance. The precision block $(\\Sigma^{-1})_{aa}$ and the Schur-complement form belong to other objects (the latter is the covariance of $a$ given $b$).",
"zh": "边缘分布：直接取均值和协方差对应的子块 $N(\\mu_a,\\Sigma_{aa})$。"
},
{
"id": "A5-005",
"lec": "A5",
"type": "term",
"level": 3,
"q": "Same joint Gaussian $x=(a,b)$. What is the mean of the conditional $p(b\\mid a)$?",
"choices": [
"$\\mu_b+\\Sigma_{ba}\\Sigma_{bb}^{-1}(a-\\mu_a)$",
"$\\mu_b-\\Sigma_{ba}\\Sigma_{aa}^{-1}(a-\\mu_a)$",
"$\\mu_a+\\Sigma_{ab}\\Sigma_{bb}^{-1}(a-\\mu_a)$",
"$\\mu_b+\\Sigma_{ba}\\Sigma_{aa}^{-1}(a-\\mu_a)$"
],
"answer": 3,
"why": "Shift $\\mu_b$ by regression coefficients $\\Sigma_{ba}\\Sigma_{aa}^{-1}$ (shape $\\dim b\\times\\dim a$) times the surprise $a-\\mu_a$. Only $\\Sigma_{aa}^{-1}$ makes the shapes fit, and the sign is plus (positive correlation pulls $b$ up).",
"zh": "条件均值$=\\mu_b+\\Sigma_{ba}\\Sigma_{aa}^{-1}(a-\\mu_a)$：线性、形状匹配、符号为正。"
},
{
"id": "A5-006",
"lec": "A5",
"type": "term",
"level": 2,
"q": "$x\\sim\\mathcal N(\\mu,\\Sigma)$ and $y=Ax+b$. What is the distribution of $y$?",
"choices": [
"$\\mathcal N(A\\mu+b,\\;A\\Sigma A^T)$",
"$\\mathcal N(A\\mu+b,\\;A\\Sigma)$",
"$\\mathcal N(A\\mu,\\;A\\Sigma A^T+b)$",
"$\\mathcal N(A\\mu+b,\\;A^T\\Sigma A)$"
],
"answer": 0,
"why": "The mean transforms like $x$; the covariance is sandwiched, $\\mathbb E[A(x-\\mu)(x-\\mu)^TA^T]=A\\Sigma A^T$. The shift $b$ moves only the mean. $A^T\\Sigma A$ does not fit the shapes unless $A$ is square.",
"zh": "线性变换：均值 $A\\mu+b$，协方差 $A\\Sigma A^T$（夹心）；$b$ 只平移均值。"
},
{
"id": "A5-007",
"lec": "A5",
"type": "calc",
"level": 1,
"q": "How many free parameters does a general Gaussian $\\mathcal N(\\mu,\\Sigma)$ in $p=3$ dimensions have?",
"choices": [
"$12$",
"$9$",
"$6$",
"$3$"
],
"answer": 1,
"why": "Mean: $p=3$. Symmetric covariance: $p(p+1)/2=6$. Total $9$. $12$ counts all $p^2=9$ entries of $\\Sigma$ as free; $6$ forgets the mean.",
"zh": "参数个数$=p+p(p+1)/2=3+6=9$；协方差对称，不是 $p^2$。"
},
{
"id": "A5-008",
"lec": "A5",
"type": "calc",
"level": 2,
"q": "$\\Sigma=\\operatorname{diag}(4,1)$, $\\mu=0$. What is the squared Mahalanobis distance of $x=(2,1)^T$?",
"choices": [
"$5$",
"$17$",
"$2$",
"$4.25$"
],
"answer": 2,
"why": "$\\Delta^2=x^T\\Sigma^{-1}x=\\tfrac{2^2}{4}+\\tfrac{1^2}{1}=2$. $5$ is the Euclidean $\\lVert x\\rVert^2$, $17=x^T\\Sigma x$ (wrong sign of the exponent), $4.25$ swaps the two variances.",
"zh": "$\\Delta^2=x_1^2/4+x_2^2/1=2$；5是欧氏距离$^2$，17是误用了 $\\Sigma$。"
},
{
"id": "A5-009",
"lec": "A5",
"type": "calc",
"level": 3,
"q": "Zero-mean 2-D Gaussian with $\\sigma_1=1$, $\\sigma_2=2$, $\\rho=0.8$. Given $x_1=1$, what are $\\mathbb E[x_2\\mid x_1]$ and $\\operatorname{Var}[x_2\\mid x_1]$?",
"choices": [
"$0.8$ and $1.44$",
"$1.6$ and $4$",
"$1.6$ and $2.56$",
"$1.6$ and $1.44$"
],
"answer": 3,
"why": "$\\mathbb E=\\rho\\frac{\\sigma_2}{\\sigma_1}x_1=0.8\\cdot2\\cdot1=1.6$ and $\\operatorname{Var}=\\sigma_2^2(1-\\rho^2)=4\\cdot0.36=1.44$. $0.8$ forgets $\\sigma_2/\\sigma_1$; $4$ is the marginal variance; $2.56=4\\rho^2$.",
"zh": "条件均值 $\\rho\\sigma_2/\\sigma_1\\cdot x_1=1.6$，条件方差 $\\sigma_2^2(1-\\rho^2)=1.44$，小于边缘方差4。"
},
{
"id": "A5-010",
"lec": "A5",
"type": "calc",
"level": 2,
"q": "Two Gaussian factors in $x$ with variances $1$ and $3$ are multiplied. What is the variance of the (renormalised) product?",
"choices": [
"$3/4$",
"$4$",
"$2$",
"$3/2$"
],
"answer": 0,
"why": "Precisions add: $1+\\tfrac13=\\tfrac43$, so the variance is $\\tfrac34$, smaller than both factors. $4$ adds the variances; $2$ averages them.",
"zh": "高斯相乘：精度相加 $1+1/3=4/3$，方差 $3/4$（比两个因子都小）。"
},
{
"id": "A5-011",
"lec": "A5",
"type": "calc",
"level": 2,
"q": "i.i.d. Gaussian data $x=(0,3,3)$. What is the maximum-likelihood estimate of $\\sigma^2$?",
"choices": [
"$3$",
"$2$",
"$6$",
"$4$"
],
"answer": 1,
"why": "$\\hat\\mu=2$; squared deviations $4+1+1=6$; the MLE divides by $n=3$: $\\hat\\sigma^2=2$. Dividing by $n-1$ gives the unbiased $3$; $6$ forgets to divide at all.",
"zh": "MLE方差除以 $n$：$6/3=2$；除以 $n-1$ 得3（无偏估计）。"
},
{
"id": "A5-012",
"lec": "A5",
"type": "pic",
"level": 2,
"q": "Contours of $\\mathcal N(0,\\Sigma)$ with $\\Sigma=\\begin{pmatrix}1&0.9\\\\0.9&1\\end{pmatrix}$ are drawn in the $(x_1,x_2)$ plane. What do they look like?",
"choices": [
"thin ellipses with the long axis along the anti-diagonal $(1,-1)$",
"circles, since both variances equal 1",
"thin ellipses with the long axis along the diagonal $(1,1)$",
"ellipses with the long axis along the $x_1$ axis"
],
"answer": 2,
"why": "Eigenvalues $1\\pm0.9=1.9,\\,0.1$. The large one belongs to $(1,1)/\\sqrt2$ (positive correlation), so that is the long axis, with semi-axes $\\propto\\sqrt{1.9}$ and $\\sqrt{0.1}$.",
"zh": "特征值1.9与0.1，大特征值对应(1,1)方向：正相关⇒沿对角线的细长椭圆。"
},
{
"id": "A5-013",
"lec": "A5",
"type": "pic",
"level": 3,
"q": "Positively correlated 2-D Gaussian. You observe $x_1=a\\ne\\mu_1$ (a vertical slice of the contours). How does $p(x_2\\mid x_1=a)$ compare with $p(x_2)$?",
"choices": [
"narrower, centred on the regression line rather than on $\\mu_2$",
"same width, merely shifted to the regression line",
"wider, because $x_1$ is now fixed",
"narrower, but still centred on $\\mu_2$"
],
"answer": 0,
"why": "$\\operatorname{Var}[x_2\\mid x_1]=\\sigma_2^2(1-\\rho^2)<\\sigma_2^2$, independent of $a$, and the mean $\\mu_2+\\rho\\frac{\\sigma_2}{\\sigma_1}(a-\\mu_1)$ lies on the regression line. Observing a correlated variable always sharpens.",
"zh": "条件分布更窄（方差 $\\sigma_2^2(1-\\rho^2)$），中心在回归线上而不是 $\\mu_2$。"
},
{
"id": "A5-014",
"lec": "A5",
"type": "pic",
"level": 1,
"q": "$\\Sigma=\\operatorname{diag}(9,1)$. In the contour $\\Delta^2=1$ of $\\mathcal N(0,\\Sigma)$, how do the semi-axes along $x_1$ and $x_2$ compare?",
"choices": [
"$9:1$, scaling with $\\lambda_k$",
"$3:1$, scaling with $\\sqrt{\\lambda_k}$",
"$1:3$, scaling with $1/\\sqrt{\\lambda_k}$",
"$1:9$, scaling with $1/\\lambda_k$"
],
"answer": 1,
"why": "$\\Delta^2=x_1^2/9+x_2^2=1$ gives semi-axes $3$ and $1$. Semi-axes scale with the standard deviations $\\sqrt{\\lambda_k}$; $1/\\sqrt{\\lambda}$ is the scaling for level sets of $x^TAx$ with $A=\\Sigma$ (a different object).",
"zh": "$\\Delta^2=1$ 的半轴$=\\sqrt{\\lambda_k}$，即3:1（是标准差之比，不是方差之比）。"
},
{
"id": "A6-001",
"lec": "A6",
"type": "term",
"level": 1,
"q": "Which inequality, required for all $a,b$ and all $\\theta\\in[0,1]$, defines a *convex* function $f$?",
"choices": [
"$f(\\theta a+(1-\\theta)b)\\ge\\theta f(a)+(1-\\theta)f(b)$",
"$f(\\theta a+(1-\\theta)b)=\\theta f(a)+(1-\\theta)f(b)$",
"$f(a+b)\\le f(a)+f(b)$",
"$f(\\theta a+(1-\\theta)b)\\le\\theta f(a)+(1-\\theta)f(b)$"
],
"answer": 3,
"why": "Chords lie above the graph. The reversed inequality defines concave functions, equality defines affine ones, and $f(a+b)\\le f(a)+f(b)$ is mere subadditivity (also true for non-convex $\\sqrt{\\lvert x\\rvert}$).",
"zh": "凸函数：弦在图像之上，$f(\\theta a+(1-\\theta)b)\\le\\theta f(a)+(1-\\theta)f(b)$。"
},
{
"id": "A6-002",
"lec": "A6",
"type": "term",
"level": 2,
"q": "For differentiable $f$, which inequality (for all $a,b$) says \"the tangent at $a$ lies below the graph\", i.e. convexity?",
"choices": [
"$f(b)\\le f(a)+\\nabla f(a)^T(b-a)$",
"$f(b)\\ge f(a)+\\nabla f(a)^T(b-a)$",
"$f(b)\\ge f(a)+\\nabla f(b)^T(b-a)$",
"$f(b)\\ge f(a)+\\nabla f(a)^T(a-b)$"
],
"answer": 1,
"why": "The right-hand side is the tangent (first-order Taylor) at $a$ evaluated at $b$; convexity puts the graph above it. The reversed sign describes concave functions; the last choice has the wrong step direction.",
"zh": "一阶条件：$f(b)\\ge f(a)+\\nabla f(a)^T(b-a)$，切线在图像之下 $\\Leftrightarrow$ 凸。"
},
{
"id": "A6-003",
"lec": "A6",
"type": "term",
"level": 1,
"q": "Minimise $f(w)$ s.t. $g_i(w)\\le0$ with Lagrangian $\\mathcal L=f+\\sum_i\\alpha_ig_i$. Which condition is *complementary slackness*?",
"choices": [
"$\\alpha_i\\,g_i(w)=0$ for every $i$",
"$\\alpha_i\\ge0$ for every $i$",
"$\\nabla_w\\mathcal L=0$",
"$g_i(w)\\le0$ for every $i$"
],
"answer": 0,
"why": "Each constraint is either active ($g_i=0$) or has zero multiplier. The others are dual feasibility, stationarity and primal feasibility, the remaining KKT conditions.",
"zh": "互补松弛：$\\alpha_ig_i(w)=0$，约束要么起作用要么乘子为0。"
},
{
"id": "A6-004",
"lec": "A6",
"type": "term",
"level": 1,
"q": "Which pair of updates is heavy-ball momentum, with gradient $g$, step size $\\eta$ and factor $\\beta\\in(0,1)$?",
"choices": [
"$v\\leftarrow\\beta g$, then $w\\leftarrow w-\\eta v$",
"$w\\leftarrow w-\\eta g$, then $v\\leftarrow\\beta w$",
"$v\\leftarrow\\beta v+g$, then $w\\leftarrow w-\\eta v$",
"$v\\leftarrow\\beta v+g$, then $w\\leftarrow w+\\eta v$"
],
"answer": 2,
"why": "$v$ is a decaying sum of past gradients (a velocity), and the step follows $-\\eta v$. Dropping $\\beta v$ gives plain GD (with step $\\eta\\beta$); $+\\eta v$ would climb uphill.",
"zh": "动量：$v\\leftarrow\\beta v+g$（过去梯度的衰减和），$w\\leftarrow w-\\eta v$。"
},
{
"id": "A6-005",
"lec": "A6",
"type": "term",
"level": 2,
"q": "$f$ is convex but not differentiable at $w^*$. Which condition holds exactly when $w^*$ is a global minimiser?",
"choices": [
"$\\partial f(w^*)=\\{0\\}$: zero is the only subgradient",
"$\\nabla f(w^*)=0$, which always exists for convex $f$",
"$0\\in\\partial f(w^*)$: zero is one of the subgradients",
"$f(w^*)=0$"
],
"answer": 2,
"why": "A subgradient $g$ satisfies $f(v)\\ge f(w)+g^T(v-w)$; $g=0$ means $f(v)\\ge f(w^*)$ for all $v$. At a kink the subdifferential is an interval, e.g. $\\partial\\lvert x\\rvert(0)=[-1,1]\\ni0$ for the minimiser $0$.",
"zh": "凸非光滑最优性：$0\\in\\partial f(w^*)$，不要求次梯度唯一为0。"
},
{
"id": "A6-006",
"lec": "A6",
"type": "calc",
"level": 2,
"q": "$f(w)=\\tfrac12w^TAw$ with $A=\\operatorname{diag}(1,4)$. One gradient step from $w=(2,1)^T$ with $\\eta=0.25$ gives?",
"choices": [
"$(2.5,\\,2)^T$",
"$(1.5,\\,0)^T$",
"$(1.5,\\,0.75)^T$",
"$(1,\\,-1)^T$"
],
"answer": 1,
"why": "$\\nabla f=Aw=(2,4)^T$, so $w-0.25\\cdot(2,4)=(1.5,0)^T$. $(2.5,2)$ has the wrong sign; $(1.5,0.75)$ uses $\\nabla f=w$ (forgets $A$); $(1,-1)$ uses $2Aw$.",
"zh": "$\\nabla f=Aw=(2,4)$，$w-\\eta g=(1.5,0)$；别忘了 $A$，也别加符号错误。"
},
{
"id": "A6-007",
"lec": "A6",
"type": "calc",
"level": 2,
"q": "Gradient descent on $f=\\tfrac12w^TAw$ with $A=\\operatorname{diag}(5,1)$. For which step sizes $\\eta$ does it converge?",
"choices": [
"$0<\\eta<0.2$",
"$0<\\eta<2$",
"$0<\\eta<1$",
"$0<\\eta<0.4$"
],
"answer": 3,
"why": "Each direction evolves as $(1-\\eta\\lambda_i)^k$, which decays iff $\\eta<2/\\lambda_i$. The stiffest direction $\\lambda_{\\max}=5$ binds: $\\eta<2/5=0.4$. At $\\eta=1$ the factor is $(1-5)=-4$ and the iteration blows up.",
"zh": "收敛条件 $\\eta<2/\\lambda_{\\max}=0.4$；最硬的方向决定步长上限。"
},
{
"id": "A6-008",
"lec": "A6",
"type": "calc",
"level": 2,
"q": "For $f=\\tfrac12w^TAw$ with $A=\\operatorname{diag}(1,4)$, one Newton step $w\\leftarrow w-H^{-1}\\nabla f$ from $w=(2,1)^T$ lands at?",
"choices": [
"$(0,0)^T$",
"$(0,-3)^T$",
"$(1,0.5)^T$",
"$(1.5,0)^T$"
],
"answer": 0,
"why": "$H=A$ and $\\nabla f=Aw$, so $w-A^{-1}Aw=0$: Newton is exact in one step on a quadratic. $(0,-3)$ is a plain GD step with $\\eta=1$; $(1.5,0)$ is GD with $\\eta=0.25$.",
"zh": "牛顿法：$w-H^{-1}\\nabla f=0$，二次函数一步到位；GD($\\eta=1$)会得到 $(0,-3)$。"
},
{
"id": "A6-009",
"lec": "A6",
"type": "calc",
"level": 3,
"q": "Minimise $(w-\\hat w)^2+\\lambda\\lvert w\\rvert$ with $\\hat w=1.5$ and $\\lambda=2$. What is the minimiser $w$?",
"choices": [
"$0$",
"$1$",
"$0.5$",
"$1.5$"
],
"answer": 2,
"why": "For $w>0$: $2(w-\\hat w)+\\lambda=0$ gives $w=\\hat w-\\lambda/2=0.5>0$, consistent. Soft threshold: $\\operatorname{sgn}(\\hat w)\\max(\\lvert\\hat w\\rvert-\\lambda/2,0)$. Using $\\lambda$ instead of $\\lambda/2$ would give 0.",
"zh": "软阈值 $w=\\mathrm{sgn}(\\hat w)\\max(|\\hat w|-\\lambda/2,0)=0.5$；注意是 $\\lambda/2$。"
},
{
"id": "A6-010",
"lec": "A6",
"type": "calc",
"level": 3,
"q": "Data $x=(1,2,5)$ and $f(\\mu)=\\sum_i\\lvert x_i-\\mu\\rvert$. What is the subdifferential $\\partial f(\\mu)$ at $\\mu=2$?",
"choices": [
"$\\{0\\}$",
"$\\{1\\}$",
"$[-2,\\,2]$",
"$[-1,\\,1]$"
],
"answer": 3,
"why": "Point 1 (below $\\mu$) contributes $+1$, point 5 contributes $-1$, and the point $x=2=\\mu$ contributes $[-1,1]$. The sum is $[-1,1]\\ni0$, so $\\mu=2$ (the median) is the minimiser. $\\{0\\}$ ignores the kink.",
"zh": "1贡献 $+1$，5贡献 $-1$，$x=\\mu$ 的点贡献 $[-1,1]$；总和 $[-1,1]\\ni0$，故中位数最优。"
},
{
"id": "A6-011",
"lec": "A6",
"type": "pic",
"level": 2,
"q": "SSQ contours are ellipses; the feasible set is the 2-D $\\ell_1$ ball $\\lVert w\\rVert_1\\le t$ (a diamond). Where does the constrained minimum typically lie, and what is $\\lambda$?",
"choices": [
"at a corner (one weight $=0$); $\\lambda$ is the KKT multiplier of the constraint",
"at the middle of an edge (both weights $\\ne0$); $\\lambda$ is the step size",
"at a corner (one weight $=0$); $\\lambda$ counts the non-zero weights",
"at the unconstrained minimum, always; $\\lambda=0$"
],
"answer": 0,
"why": "Growing ellipses first touch the diamond, whose pointed corners lie on the axes where a weight is exactly 0: sparsity. Penalty $\\lambda\\lVert w\\rVert_1$ and constraint $\\lVert w\\rVert_1\\le t$ are linked by $\\lambda$ as KKT multiplier.",
"zh": "椭圆等高线最先碰到菱形的尖角（某权重为0）；$\\lambda$ 是约束的KKT乘子。"
},
{
"id": "A6-012",
"lec": "A6",
"type": "pic",
"level": 3,
"q": "Gradient descent with fixed $\\eta$ on $f=\\tfrac12(\\lambda_1x_1^2+\\lambda_2x_2^2)$ with $\\lambda_1\\gg\\lambda_2$ (long narrow valley). What does the iterate path look like?",
"choices": [
"goes straight to the minimum in a few steps",
"zig-zags across the narrow direction while creeping slowly along the valley",
"circles around the minimum at constant radius",
"moves fast along the valley and slowly across it"
],
"answer": 1,
"why": "The gradient is perpendicular to contours, which in an elongated ellipse does not point at the minimum. $\\eta<2/\\lambda_1$ is set by the stiff direction, so the flat one decays only like $(1-\\eta\\lambda_2)^k$. Cure: momentum, preconditioning, Adam.",
"zh": "梯度垂直于等高线，细长山谷中呈之字形、沿谷底缓慢前进（条件数大）。"
},
{
"id": "A7-001",
"lec": "A7",
"type": "term",
"level": 1,
"q": "One-hot label $y$ (true class $c$) and softmax output $\\hat p$. Which expression is the cross-entropy loss $H(y,\\hat p)$?",
"choices": [
"$-\\sum_k\\hat p_k\\log y_k$",
"$-\\log(1-\\hat p_c)$",
"$-\\sum_ky_k\\log\\hat p_k=-\\log\\hat p_c$",
"$-\\sum_k\\hat p_k\\log\\hat p_k$"
],
"answer": 2,
"why": "$H(p,q)=-\\sum_kp_k\\log q_k$ with $p=y$: only the true class survives, giving $-\\log\\hat p_c$ (the NLL of a categorical model). The last choice is the entropy of $\\hat p$; the swapped form hits $\\log0$.",
"zh": "交叉熵 $H(y,\\hat p)=-\\sum y_k\\log\\hat p_k=-\\log\\hat p_c$（真实类别的负对数概率）。"
},
{
"id": "A7-002",
"lec": "A7",
"type": "term",
"level": 2,
"q": "Which identity relates KL divergence, cross-entropy and entropy?",
"choices": [
"$\\mathrm{KL}(p\\|q)=H(p)-H(p,q)$",
"$\\mathrm{KL}(p\\|q)=H(q,p)-H(q)$",
"$\\mathrm{KL}(p\\|q)=H(p,q)+H(p)$",
"$\\mathrm{KL}(p\\|q)=H(p,q)-H(p)$"
],
"answer": 3,
"why": "KL is the *extra* code length for coding data from $p$ with a code built for $q$: $H(p,q)-H(p)\\ge0$. The second choice would be $\\le0$; the third equals $\\mathrm{KL}(q\\|p)$, a different number.",
"zh": "$\\mathrm{KL}(p\\lVert q)=H(p,q)-H(p)$：用 $q$ 编码 $p$ 的额外码长，恒 $\\ge0$。"
},
{
"id": "A7-003",
"lec": "A7",
"type": "term",
"level": 2,
"q": "Which expression is the mutual information $I(X;Y)$?",
"choices": [
"$\\mathrm{KL}\\big(p(x,y)\\,\\|\\,p(x)p(y)\\big)$",
"$\\mathrm{KL}\\big(p(x)\\,\\|\\,p(y)\\big)$",
"$H(X)+H(Y)$",
"$\\operatorname{Cov}(X,Y)/(\\sigma_X\\sigma_Y)$"
],
"answer": 0,
"why": "$I$ measures how far the joint is from the product of marginals; it is $0$ iff $X,Y$ are independent and equals $H(X)-H(X\\mid Y)$. The correlation coefficient detects only linear dependence.",
"zh": "互信息=联合分布与边缘乘积之间的KL；独立 $\\Leftrightarrow I=0$，能检测任何依赖。"
},
{
"id": "A7-004",
"lec": "A7",
"type": "term",
"level": 1,
"q": "Which statement about the KL divergence is correct?",
"choices": [
"$\\mathrm{KL}$ is symmetric, so it is a distance (metric)",
"$\\mathrm{KL}(p\\|q)\\ne\\mathrm{KL}(q\\|p)$ in general; $\\mathrm{KL}\\ge0$, $=0$ iff $p=q$",
"$\\mathrm{KL}(p\\|q)$ can be negative if $q$ is broader than $p$",
"$\\mathrm{KL}(p\\|q)=0$ whenever $p$ and $q$ have the same mean"
],
"answer": 1,
"why": "Gibbs' inequality gives $\\mathrm{KL}\\ge0$ with equality iff $p=q$; the two directions differ (forward: mass-covering, reverse: mode-seeking), so it is not a metric.",
"zh": "KL $\\ge0$，仅 $p=q$ 时为0，且不对称（不是距离）。"
},
{
"id": "A7-005",
"lec": "A7",
"type": "calc",
"level": 1,
"q": "What is the entropy (in bits) of $p=(\\tfrac12,\\tfrac14,\\tfrac14)$?",
"choices": [
"$1.58$",
"$1$",
"$1.5$",
"$2$"
],
"answer": 2,
"why": "$H=\\tfrac12\\cdot1+\\tfrac14\\cdot2+\\tfrac14\\cdot2=1.5$ bits. $\\log_23\\approx1.58$ is the maximum for 3 outcomes (uniform), not this skewed distribution.",
"zh": "$H=\\frac12\\cdot1+\\frac14\\cdot2+\\frac14\\cdot2=1.5$ bit；均匀分布才是最大值 $\\log_2 3\\approx1.58$。"
},
{
"id": "A7-006",
"lec": "A7",
"type": "calc",
"level": 2,
"q": "$p=(\\tfrac12,\\tfrac14,\\tfrac14)$ and $q=(\\tfrac14,\\tfrac12,\\tfrac14)$. What is the cross-entropy $H(p,q)$ in bits?",
"choices": [
"$1.5$",
"$2$",
"$1.25$",
"$1.75$"
],
"answer": 3,
"why": "$H(p,q)=-\\sum p_k\\log_2q_k=\\tfrac12\\cdot2+\\tfrac14\\cdot1+\\tfrac14\\cdot2=1.75$. It exceeds $H(p)=1.5$ by $\\mathrm{KL}(p\\|q)=0.25$. The value $1.25$ would subtract the KL instead of adding.",
"zh": "$H(p,q)=-\\sum p\\log q=1+0.25+0.5=1.75$ bit，比 $H(p)=1.5$ 多出KL$=0.25$。"
},
{
"id": "A7-007",
"lec": "A7",
"type": "calc",
"level": 3,
"q": "Use $0\\log0=0$. For $p=(\\tfrac12,\\tfrac12,0)$ and $q=(\\tfrac14,\\tfrac14,\\tfrac12)$, what is $\\mathrm{KL}(p\\|q)$ in bits?",
"choices": [
"$\\infty$",
"$1$",
"$0.5$",
"$2$"
],
"answer": 1,
"why": "$\\mathrm{KL}(p\\|q)=\\sum_{p_k>0}p_k\\log_2\\tfrac{p_k}{q_k}=\\tfrac12\\cdot1+\\tfrac12\\cdot1=1$; the third outcome has $p=0$ and contributes nothing. $\\infty$ would be $\\mathrm{KL}(q\\|p)$, since $q>0$ where $p=0$.",
"zh": "只对 $p_k>0$ 求和：$\\frac12+\\frac12=1$ bit；反向 $\\mathrm{KL}(q\\lVert p)=\\infty$，体现不对称。"
},
{
"id": "A7-008",
"lec": "A7",
"type": "calc",
"level": 2,
"q": "A language model assigns probability $1/8$ to the true next token, on every token. What are its cross-entropy per token (bits) and perplexity?",
"choices": [
"$3$ bits, perplexity $8$",
"$3$ bits, perplexity $3$",
"$8$ bits, perplexity $256$",
"$1/8$ bit, perplexity $8$"
],
"answer": 0,
"why": "Loss $=-\\log_2\\tfrac18=3$ bits per token, and perplexity $=2^{\\text{(bits)}}=8$, the effective number of equally likely choices. $256=2^8$ would need 8 bits per token.",
"zh": "每token交叉熵 $-\\log_2(1/8)=3$ bit；困惑度$=2^3=8$（等效选择数）。"
},
{
"id": "A7-009",
"lec": "A7",
"type": "pic",
"level": 1,
"q": "Plot the binary entropy $H(\\pi)=-\\pi\\log_2\\pi-(1-\\pi)\\log_2(1-\\pi)$ for $\\pi\\in[0,1]$. What does it look like?",
"choices": [
"a symmetric dome: $0$ at $\\pi=0$ and $1$, maximal ($1$ bit) at $\\pi=\\tfrac12$",
"a straight line from $0$ at $\\pi=0$ up to $1$ bit at $\\pi=1$",
"a U shape: large at $\\pi=0,1$ and minimal at $\\pi=\\tfrac12$",
"a dome with maximum $2$ bits at $\\pi=\\tfrac12$"
],
"answer": 0,
"why": "A certain outcome has no surprise ($H=0$); a fair coin is maximally uncertain: $-2\\cdot\\tfrac12\\log_2\\tfrac12=1$ bit. This is the entropy impurity of a tree node.",
"zh": "二元熵是对称的圆顶曲线：$\\pi=0$ 或1时为0，$\\pi=1/2$ 时最大为1 bit。"
},
{
"id": "A7-010",
"lec": "A7",
"type": "pic",
"level": 3,
"q": "A single Gaussian $q$ is fitted to a bimodal $p$ with two well-separated peaks. Which pairing is right for the minimiser over $q$ of each KL?",
"choices": [
"$\\mathrm{KL}(p\\|q)$: $q$ on one peak; $\\mathrm{KL}(q\\|p)$: $q$ covers both peaks",
"both give a broad $q$ centred between the peaks",
"$\\mathrm{KL}(p\\|q)$: $q$ covers both peaks; $\\mathrm{KL}(q\\|p)$: $q$ on one peak",
"both give a narrow $q$ on the taller peak"
],
"answer": 2,
"why": "Forward KL punishes $q\\approx0$ where $p>0$, so $q$ must cover all mass (mass-covering, as in MLE). Reverse KL punishes $q>0$ where $p\\approx0$, so $q$ locks onto one mode (mode-seeking, as in variational inference).",
"zh": "正向 $\\mathrm{KL}(p\\lVert q)$ 覆盖所有峰（MLE）；反向 $\\mathrm{KL}(q\\lVert p)$ 只锁定一个峰（变分推断）。"
},
{
"id": "A8-001",
"lec": "A8",
"type": "term",
"level": 1,
"q": "In the SDE $dX_t=f(X_t,t)\\,dt+g(t)\\,dW_t$, which reading is correct?",
"choices": [
"$f$: noise amplitude; $g$: deterministic drift",
"$f$ is the density of $X_t$; $g$ is its variance",
"$f$: deterministic drift (force); $g$: noise amplitude multiplying $dW_t$",
"$f$ and $g$ are both drift terms; $dW_t$ is a deterministic step"
],
"answer": 2,
"why": "The $dt$ term is the average motion; $g\\,dW_t$ is random with variance $g^2dt$. For Langevin dynamics $f=-\\nabla E$ and $g=\\sqrt{2T}$.",
"zh": "$dX=f\\,dt+g\\,dW$：$f$ 是确定性漂移（力），$g$ 是噪声幅度，$dW$ 是维纳增量。"
},
{
"id": "A8-002",
"lec": "A8",
"type": "term",
"level": 3,
"q": "Which update is Langevin sampling from a density $p$ (step $\\epsilon$, $z\\sim\\mathcal N(0,I)$, score $=\\nabla_x\\log p$)?",
"choices": [
"$x\\leftarrow x+\\epsilon\\,\\nabla_x\\log p(x)+2\\epsilon\\,z$",
"$x\\leftarrow x+\\epsilon\\,\\nabla_x\\log p(x)+\\sqrt{2\\epsilon}\\,z$",
"$x\\leftarrow x-\\epsilon\\,\\nabla_x\\log p(x)+\\sqrt{2\\epsilon}\\,z$",
"$x\\leftarrow x+\\epsilon\\,p(x)+\\sqrt{2\\epsilon}\\,z$"
],
"answer": 1,
"why": "Euler–Maruyama of $dX=\\nabla\\log p\\,dt+\\sqrt2\\,dW$: drift times $\\epsilon$, noise times $\\sqrt{\\epsilon}$ (not $\\epsilon$). The sign is $+$: it climbs $\\log p$ (without noise: gradient ascent). It needs the score, not $p$ itself.",
"zh": "Langevin：$x\\leftarrow x+\\epsilon\\nabla\\log p+\\sqrt{2\\epsilon}\\,z$；噪声按 $\\sqrt\\epsilon$ 缩放，用的是得分而非 $p$。"
},
{
"id": "A8-003",
"lec": "A8",
"type": "term",
"level": 2,
"q": "$E(x)$ is the energy of a molecule, $F=-\\nabla_xE$ the forces, and $R$ a rotation of all coordinates. For a rotation-invariant energy, which identities hold?",
"choices": [
"$E(Rx)=R\\,E(x)$ and $F(Rx)=F(x)$",
"$E(Rx)=E(x)$ and $F(Rx)=F(x)$",
"$E(Rx)=R\\,E(x)$ and $F(Rx)=R\\,F(x)$",
"$E(Rx)=E(x)$ and $F(Rx)=R\\,F(x)$"
],
"answer": 3,
"why": "Energy is a scalar: invariant. Forces are vectors: they rotate with the molecule, $F(Rx)=RF(x)$, which is equivariance ($\\rho_\\text{out}=R$). A scalar cannot be multiplied by a rotation matrix.",
"zh": "能量是标量 $\\to$ 不变 $E(Rx)=E(x)$；力是向量 $\\to$ 等变 $F(Rx)=RF(x)$。"
},
{
"id": "A8-004",
"lec": "A8",
"type": "calc",
"level": 1,
"q": "Particles diffuse as $X_t=X_0+\\sqrt{2D}\\,W_t$ with $D=0.5$. What is the variance of the displacement $X_t-X_0$ at $t=4$?",
"choices": [
"$4$",
"$2$",
"$8$",
"$16$"
],
"answer": 0,
"why": "$\\operatorname{Var}(W_t)=t$, so the variance is $2Dt=2\\cdot0.5\\cdot4=4$ (standard deviation $2$, growing as $\\sqrt t$). $2$ is $Dt$; $16$ squares the variance.",
"zh": "$\\mathrm{Var}(W_t)=t$，位移方差$=2Dt=4$（标准差随 $\\sqrt t$ 增长，即Einstein扩散）。"
},
{
"id": "A8-005",
"lec": "A8",
"type": "calc",
"level": 2,
"q": "Euler–Maruyama for $dX=-X\\,dt+2\\,dW$ with $X_0=1$, $\\Delta t=0.01$ and noise draw $z=1$. What is $X_{\\Delta t}$?",
"choices": [
"$1.01$",
"$1.21$",
"$0.79$",
"$1.19$"
],
"answer": 3,
"why": "$X+f\\Delta t+g\\sqrt{\\Delta t}\\,z=1-0.01+2\\cdot0.1\\cdot1=1.19$. $1.01$ uses $g\\Delta t$ instead of $g\\sqrt{\\Delta t}$; $1.21$ flips the drift sign; $0.79$ flips the noise sign.",
"zh": "$X+f\\Delta t+g\\sqrt{\\Delta t}\\,z=1-0.01+0.2=1.19$；噪声项按 $\\sqrt{\\Delta t}$ 而不是 $\\Delta t$。"
},
{
"id": "A8-006",
"lec": "A8",
"type": "calc",
"level": 3,
"q": "$SO(3)$ irreps have dimension $2\\ell+1$. Which is the Clebsch–Gordan decomposition of $1\\otimes1$?",
"choices": [
"$0\\oplus1\\oplus2$",
"$1\\oplus2$",
"$0\\oplus1\\oplus2\\oplus3$",
"$1\\oplus1\\oplus1$"
],
"answer": 0,
"why": "Angular-momentum addition: $|1-1|,\\dots,1+1$, each once, so $0\\oplus1\\oplus2$ with dimensions $1+3+5=9=3\\cdot3$ (dot product, cross product, symmetric traceless part). $1\\oplus1\\oplus1$ also has dimension 9 but is not the CG result.",
"zh": "$1\\otimes1=0\\oplus1\\oplus2$（维数 $1+3+5=9$）：点积、叉积、对称无迹张量。"
},
{
"id": "A8-007",
"lec": "A8",
"type": "pic",
"level": 1,
"q": "Many independent Brownian particles start at $0$ and at time $t$ form a bell-shaped cloud. What does the cloud look like at time $4t$?",
"choices": [
"same centre, width quadrupled",
"same width, since the process is stationary",
"same centre, width (standard deviation) doubled; variance grows linearly in time",
"centre moved outwards, same width"
],
"answer": 2,
"why": "$\\operatorname{Var}(W_t)=t$, so $\\sigma=\\sqrt t$ and $4t$ gives $2\\sigma$ (Einstein: displacement $\\propto\\sqrt t$). This is the heat equation: Gaussian blur of variance $2Dt$.",
"zh": "方差 $\\propto t$，宽度 $\\propto\\sqrt t$：时间变4倍，云团宽度变2倍，中心不动。"
},
{
"id": "A8-008",
"lec": "A8",
"type": "pic",
"level": 2,
"q": "Overdamped Langevin $dX=-\\nabla E\\,dt+\\sqrt{2T}\\,dW$ runs in a double-well $E(x)$. What do long-time histograms of $X$ show at low versus high $T$?",
"choices": [
"low $T$: nearly flat; high $T$: sharp peaks in the wells",
"low $T$: sharp peaks in the wells ($\\propto e^{-E/T}$); high $T$: broad, nearly flat",
"peaks sit on the maxima of $E$, for any $T$",
"the same histogram for all $T$; $T$ only sets the speed"
],
"answer": 1,
"why": "The stationary density is the Boltzmann distribution $e^{-E/T}$. Small $T$ concentrates mass in the minima; large $T$ washes out the energy landscape.",
"zh": "平稳分布是Boltzmann分布 $e^{-E/T}$：低温集中在势阱，高温趋于平坦。"
},
{
"id": "A9-001",
"lec": "A9",
"type": "term",
"level": 1,
"q": "Which statement is the convolution theorem?",
"choices": [
"$\\widehat{f*g}=\\hat f\\cdot\\hat g$ (pointwise product of the transforms)",
"$\\widehat{f*g}=\\hat f*\\hat g$",
"$\\widehat{f\\cdot g}=\\hat f\\cdot\\hat g$",
"$\\widehat{f*g}=\\hat f+\\hat g$"
],
"answer": 0,
"why": "Convolution in $x$-space is multiplication in Fourier space, which is why circulant matrices are diagonalised by Fourier modes. Conversely, a product $f\\cdot g$ becomes a convolution of transforms.",
"zh": "卷积定理：卷积的傅里叶变换=各自变换的逐点乘积。"
},
{
"id": "A9-002",
"lec": "A9",
"type": "term",
"level": 1,
"q": "Adjacency $A$ and degree matrix $D=\\operatorname{diag}(\\sum_jA_{ij})$. Which pair gives the graph Laplacian and its quadratic form?",
"choices": [
"$L=A-D$ with $z^TLz=-\\tfrac12\\sum_{i,j}A_{ij}(z_i-z_j)^2\\le0$",
"$L=D+A$ with $z^TLz=\\tfrac12\\sum_{i,j}A_{ij}(z_i+z_j)^2$",
"$L=D^{-1}A$ with $z^TLz=\\sum_iz_i$",
"$L=D-A$ with $z^TLz=\\tfrac12\\sum_{i,j}A_{ij}(z_i-z_j)^2\\ge0$"
],
"answer": 3,
"why": "$z^T(D-A)z=\\sum_iD_{ii}z_i^2-\\sum_{ij}A_{ij}z_iz_j=\\tfrac12\\sum_{ij}A_{ij}(z_i-z_j)^2$: a sum of spring energies on the edges, hence PSD. $L=A-D$ has the wrong sign.",
"zh": "$L=D-A$，$z^TLz=\\frac12\\sum A_{ij}(z_i-z_j)^2\\ge0$：边上弹簧能量之和。"
},
{
"id": "A9-003",
"lec": "A9",
"type": "term",
"level": 3,
"q": "Relabelling nodes by a permutation matrix $P$ maps $A\\mapsto PAP^T$ and $H\\mapsto HP^T$ ($H\\in\\mathbb R^{d\\times N}$). What must a GNN satisfy for node-level outputs and for a graph-level output (e.g. total energy)?",
"choices": [
"node outputs unchanged (invariant); graph-level output permutes (equivariant)",
"both must be invariant",
"node outputs permute (equivariant); graph-level output unchanged (invariant)",
"both must be equivariant"
],
"answer": 2,
"why": "Relabelling only reorders node-level predictions, so they must follow the permutation. A graph-level quantity cannot depend on the arbitrary labelling, so it must stay fixed.",
"zh": "节点级输出随置换而置换（等变）；图级输出不变（不变性）。"
},
{
"id": "A9-004",
"lec": "A9",
"type": "calc",
"level": 2,
"q": "Path graph $1-2-3$ (edges $1\\!-\\!2$ and $2\\!-\\!3$, weight 1), $L=D-A$ and $z=(1,0,-1)^T$. What is $z^TLz$?",
"choices": [
"$4$",
"$2$",
"$0$",
"$1$"
],
"answer": 1,
"why": "Each edge counted once: $(z_1-z_2)^2+(z_2-z_3)^2=1+1=2$. The double sum over ordered pairs has the factor $\\tfrac12$, which compensates counting every edge twice; without it one gets 4. $0$ only holds for constant $z$.",
"zh": "$z^TLz=\\sum_{\\text{边}}(z_i-z_j)^2=1+1=2$；只有 $z$ 为常数向量时才为0。"
},
{
"id": "A9-005",
"lec": "A9",
"type": "calc",
"level": 2,
"q": "Circular convolution with $N=3$, $(a*b)_n=\\sum_ma_mb_{(n-m)\\bmod3}$, for $a=(1,2,0)$ and $b=(1,0,1)$. What is $a*b$?",
"choices": [
"$(1,2,1)$",
"$(1,0,0)$",
"$(1,2,3)$",
"$(3,2,1)$"
],
"answer": 3,
"why": "$n=0$: $a_0b_0+a_1b_2+a_2b_1=1+2+0=3$; $n=1$: $a_1b_0=2$; $n=2$: $a_0b_2=1$. $(1,2,1)$ is the linear convolution cut off without wrap-around; $(1,0,0)$ is the pointwise product.",
"zh": "循环卷积要取模回绕：(3,2,1)；逐点乘积和不回绕的线性卷积都不对。"
},
{
"id": "A9-006",
"lec": "A9",
"type": "calc",
"level": 3,
"q": "DFT with $N=4$: $\\hat x_k=\\sum_{n=0}^{3}x_ne^{-2\\pi ikn/4}$. What is $\\hat x$ for the alternating signal $x=(1,-1,1,-1)$?",
"choices": [
"$(0,4,0,0)$",
"$(0,0,4,0)$",
"$(4,0,0,0)$",
"$(0,0,0,4)$"
],
"answer": 1,
"why": "$x_n=(-1)^n=e^{2\\pi i\\cdot2n/4}$ is exactly the mode $k=2$ (the fastest oscillation), so only $\\hat x_2=N=4$ survives. $(4,0,0,0)$ would be a constant signal; $k=1$ is one cycle over the window.",
"zh": "$(-1)^n$ 恰为 $k=2$ 的傅里叶模，故 $\\hat x=(0,0,4,0)$；常数信号对应 $k=0$。"
},
{
"id": "A9-007",
"lec": "A9",
"type": "pic",
"level": 2,
"q": "Heat equation in Fourier space: $\\hat p_t(k)=\\hat p_0(k)\\,e^{-Dk^2t}$. A sharp rectangular pulse diffuses. What does the profile look like later?",
"choices": [
"unchanged shape, only shifted",
"even sharper edges, since high $k$ are amplified",
"smoothed edges: high-$k$ modes are damped fastest, giving a rounded Gaussian-like bump",
"still rectangular, but lower"
],
"answer": 2,
"why": "$e^{-Dk^2t}$ kills large $k$ (sharp features) first, which is Gaussian blurring with variance $2Dt$. The $k=0$ mode (total area) is unchanged, so the bump spreads while its area stays 1.",
"zh": "高频分量 $e^{-Dk^2t}$ 衰减最快：尖锐边缘被抹平成高斯状，面积($k=0$)不变。"
},
{
"id": "A9-008",
"lec": "A9",
"type": "pic",
"level": 2,
"q": "A graph with 6 nodes consists of two separate triangles with no edge between them. How many zero eigenvalues does $L=D-A$ have?",
"choices": [
"$2$",
"$1$",
"$6$",
"$0$"
],
"answer": 0,
"why": "The multiplicity of eigenvalue 0 equals the number of connected components; here the indicator vector of each triangle satisfies $Lz=0$. A single zero eigenvalue would mean a connected graph.",
"zh": "$L$ 的零特征值个数=连通分量数：两个三角形 $\\Rightarrow$ 2个。"
}
];
window.LECTURES = [{"id": "L01", "title": "PCA"}, {"id": "L02", "title": "Robust statistics, embeddings"}, {"id": "L03", "title": "Density estimation"}, {"id": "L04", "title": "Linear regression"}, {"id": "L05", "title": "Ridge, lasso, compressed sensing"}, {"id": "L06", "title": "Decision theory, QDA/LDA"}, {"id": "L07", "title": "Trees, forests, CV"}, {"id": "L08", "title": "Gaussian processes"}, {"id": "L09", "title": "Logistic regression, GLM"}, {"id": "L10", "title": "Multi-layer perceptrons"}, {"id": "L11", "title": "Training NNs I"}, {"id": "L12", "title": "SGD, Adam, backprop"}, {"id": "L13", "title": "Uncertainty, calibration"}, {"id": "L14", "title": "CNNs"}, {"id": "L15", "title": "PINNs, neural operators"}, {"id": "L16", "title": "Autoencoders, SSL"}, {"id": "L17", "title": "GNNs"}, {"id": "L18", "title": "Attention, transformers"}, {"id": "L19", "title": "LLMs"}, {"id": "L20", "title": "AI safety, interpretability"}, {"id": "L21", "title": "Diffusion, score models"}, {"id": "L22", "title": "Flows, flow matching"}, {"id": "L23", "title": "Simulation-based inference"}, {"id": "L24", "title": "Equivariant networks"}, {"id": "L25", "title": "Molecular ML"}, {"id": "A1", "title": "Linear algebra"}, {"id": "A2", "title": "Vector & matrix calculus"}, {"id": "A3", "title": "Probability"}, {"id": "A4", "title": "Bayesian inference"}, {"id": "A5", "title": "Gaussian distribution"}, {"id": "A6", "title": "Optimization, convexity"}, {"id": "A7", "title": "Information theory"}, {"id": "A8", "title": "SDEs, symmetry groups"}, {"id": "A9", "title": "Fourier, graphs"}];
