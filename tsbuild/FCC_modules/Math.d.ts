declare function Gcd({ x, y }: {
    x: number;
    y: number;
}): Promise<number>;
declare function k(num: number): Promise<number>;
declare function nCr({ n, r }?: {
    n?: number;
    r?: number;
}): Promise<number>;
declare function nCrs({ n, r }?: {
    n?: number;
    r?: number;
}): Promise<number>;
declare function nPr({ n, r }?: {
    n?: number;
    r?: number;
}): Promise<number>;
declare function Pow({ num, n }?: {
    num?: number;
    n?: number;
}): Promise<number>;
declare function Random(num?: number): Promise<number>;
export { Gcd, nCr, nCrs, nPr, Pow, Random, k };
//# sourceMappingURL=Math.d.ts.map