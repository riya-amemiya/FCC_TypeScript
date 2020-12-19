declare class maths {
    private _num;
    constructor(_num: {
        n: number;
        p: number;
        a: number;
    });
    get num(): {
        n: number;
        p: number;
        a: number;
    };
    npr({ n, r }: {
        n: number | maths;
        r: number | maths;
    }): this;
    pow({ num, n }: {
        num: number;
        n: number;
    }): this;
    gcd({ f, x }?: {
        f?: number | maths;
        x?: number | maths;
    }): this;
    random(num: number): this;
    ncr({ n, r }: {
        n: number;
        r: number;
    }): this;
    ncrs({ n, r }?: {
        n?: number;
        r?: number;
    }): this;
    repetition(x: number): this;
}
declare const Maths: maths;
export default Maths;
