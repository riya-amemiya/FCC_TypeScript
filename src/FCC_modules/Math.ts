async function Gcd({ x, y }: { x: number; y: number }): Promise<number>
{
    const _Gcd = await import(/* webpackChunkName: "_FCC_Gcd" */'./Math/Gcd')
    return _Gcd.default({ x, y })
}
async function k(num: number): Promise<number>
{
    const _k = await import(/* webpackChunkName: "_FCC_k" */'./Math/k')
    return _k.default(num)
}
async function nCr({ n = 1, r = 1 }: { n?: number; r?: number } = {}): Promise<number>
{
    const _nCr = await import(/* webpackChunkName: "_FCC_nCr" */'./Math/nCr')
    return _nCr.default({ n, r })
}
async function nCrs({ n = 1, r = 1 }: { n?: number; r?: number } = {}): Promise<number>
{
    const _nCrs = await import(/* webpackChunkName: "_FCC_nCrs" */ './Math/nCrs')
    return _nCrs.default({ n, r })
}
async function nPr({ n = 1, r = 1 }: { n?: number; r?: number } = {}): Promise<number>
{
    const _nPr = await import(/* webpackChunkName: "_FCC_nPr" */'./Math/nPr')
    return _nPr.default({ n, r })
}
async function Pow({ num = 1, n = 1 }: { num?: number; n?: number } = {}): Promise<number>
{
    const _Pow = await import(/* webpackChunkName: "_FCC_Pow" */'./Math/Pow')
    return _Pow.default({ num, n })
}
async function Random(num: number = 1): Promise<number>
{
    const _Random = await import(/* webpackChunkName: "_FCC_Random" */'./Math/Random')
    return _Random.default(num)
}
export { Gcd, nCr, nCrs, nPr, Pow, Random, k }