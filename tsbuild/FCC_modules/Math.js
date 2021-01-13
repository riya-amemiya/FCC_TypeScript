async function Gcd({ x, y }) {
    const _Gcd = await import('./Math/Gcd');
    return _Gcd.default({ x, y });
}
async function k(num) {
    const _k = await import('./Math/k');
    return _k.default(num);
}
async function nCr({ n = 1, r = 1 } = {}) {
    const _nCr = await import('./Math/nCr');
    return _nCr.default({ n, r });
}
async function nCrs({ n = 1, r = 1 } = {}) {
    const _nCrs = await import('./Math/nCrs');
    return _nCrs.default({ n, r });
}
async function nPr({ n = 1, r = 1 } = {}) {
    const _nPr = await import('./Math/nPr');
    return _nPr.default({ n, r });
}
async function Pow({ num = 1, n = 1 } = {}) {
    const _Pow = await import('./Math/Pow');
    return _Pow.default({ num, n });
}
async function Random(num = 1) {
    const _Random = await import('./Math/Random');
    return _Random.default(num);
}
export { Gcd, nCr, nCrs, nPr, Pow, Random, k };
//# sourceMappingURL=Math.js.map