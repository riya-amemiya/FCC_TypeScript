class maths
{
    constructor(private _num: { n: number; p: number; a: number; }) { }
    get num()
    {
        return this._num
    }
    public npr({ n, r }: { n: number | maths; r: number | maths; }): this
    {
        if (typeof (n) === typeof (r) && typeof (n) === "number" && typeof (r) === "number")
        {
            //nPr
            let y: number;
            let x = 0;
            y = n;
            while (x === 0)
            {
                if (r === 1)
                {
                    y = y * r;
                }
                r--;
                if (r === 0) x++;
                else
                {
                    n--;
                    if (n === 0)
                    {
                        x++;
                        break;
                    }
                    y = y * n;
                }
            }
            this._num.a = y
            return this;
        } else console.error('Number型を引数に指定してください')
    }
    public pow({ num, n }: { num: number; n: number; }): this
    {
        //xのy乗
        let nums: number = num;
        for (let i = 2; i <= n; i++)
        {
            nums *= num;
        }
        this._num.a = nums
        return this;
    }
    public gcd({ f = 1, x = 1 }: { f?: number | maths; x?: number | maths; } = {}): this
    {
        if (typeof (f) === typeof (x) && typeof (f) === "number" && typeof (x) === "number")
        {
            //最大公約数
            let r: number, tmp: number;
            if (f < x)
            {
                tmp = f;
                f = x;
                x = tmp;
            }
            /* ユークリッドの互除法 */
            r = f % x;
            while (r !== 0)
            {
                f = x;
                x = r;
                r = f % x;
            }
            this._num.a = x;
            return this;
        } else console.error('Number型を引数に指定してください')
    }
    public random(num: number): this
    {
        this._num.a = Math.floor(Math.random() * num);
        return this
    }
    public ncr({ n, r }: { n: number; r: number; }): this
    {
        //nCr
        let x: number;
        let z: number;
        let y: number;
        let age = 1;
        y = n;
        z = r;
        x = 0;
        while (x == 0)
        {
            if (r == 1)
            {
                y = y * r;
            }
            r--;
            if (r == 0)
            {
                x++;
            } else
            {
                n--;
                if (n == 0)
                {
                    x++;
                    break;
                }
                y = y * n;
            }
        }
        for (let i = 2; i <= z; i++)
        {
            age *= i;
        }
        y = y / age;
        this._num.a = y
        return this;
    }
    public ncrs({ n = this._num.n, r = this._num.p }: { n?: number; r?: number; } = {}): this
    {
        //重複を許して取り出す
        n = n + r - 1;
        this.ncr({ n, r });
        return this;
    }
    public repetition(x: number): this
    {
        //階乗
        let age = 1;
        for (let i = 2; i <= x; i++)
        {
            age *= i;
        }
        this._num.a = age
        return this;
    }
}
const Maths_Local = new maths({ n: 0, p: 0, a: 0 });
const Maths = Maths_Local
export default Maths