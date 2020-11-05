class maths {
    constructor(private _num: number){}
    get num ():number{
        return this._num
    }
    public nPr(n: number | maths,r: number | maths):this{
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
            this._num += y
            return this;
        }else console.error('Number型を引数に指定してください')
    }
    public Pow(num:any, n:any):this
    {
        //xのy乗
        let nums:number = num;
        for (let i = 2; i <= n; i++)
        {
            nums *= num;
        }
        this._num += nums
        return this;
    }
    public Gcd(f: number | maths = 1, x: number | maths = 1):this
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
            this._num += x;
            return this;
        } else console.error('Number型を引数に指定してください')
    }
    public Random(num?: number):this
    {
        this._num += Math.floor(Math.random() * num);
        return this
    }
    public nCr(n?: number, r?: number):this
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
        this._num += y
        return this;
    }
    public nCrs(n: any, r?:number):this
    {
        //重複を許して取り出す
        n = n + r - 1;
        n = this.nCr(n, r);
        this._num += n
        return this;
    }
}
const Maths = new maths(0)
export {Maths}