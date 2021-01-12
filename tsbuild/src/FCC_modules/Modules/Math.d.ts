declare class maths {
    private _num;
    constructor(_num: number);
    get num(): number;
    nPr({ n, r }: {
        n: number | maths;
        r: number | maths;
    }): this;
    Pow({ num, n }: {
        num: any;
        n: any;
    }): this;
    Gcd({ f, x }?: {
        f?: number | maths;
        x?: number | maths;
    }): this;
    Random(num: number): this;
    nCr({ n, r }: {
        n: number;
        r: number;
    }): this;
    nCrs({ n, r }: {
        n: any;
        r: number;
    }): this;
}
declare const Maths: maths;
export { Maths };
//# sourceMappingURL=Math.d.ts.map