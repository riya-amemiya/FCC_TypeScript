declare class maths {
    private _num;
    constructor(_num: number);
    get num(): number;
    nPr(n: number | maths, r: number | maths): this;
    Pow(num: any, n: any): this;
    Gcd(f?: number | maths, x?: number | maths): this;
    Random(num?: number): this;
    nCr(n?: number, r?: number): this;
    nCrs(n: any, r?: number): this;
}
declare const Maths: maths;
export { Maths };
