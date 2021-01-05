
export default function Gcd({ x = 1, y = 1 }: { x?: number; y?: number; } = {}): number
{
    if (typeof (y) === typeof (x) && typeof (y) === "number" && typeof (x) === "number")
    {
        //最大公約数
        let r: number, tmp: number;
        if (y < x)
        {
            tmp = y;
            y = x;
            x = tmp;
        }
        /* ユークリッドの互除法 */
        r = y % x;
        while (r !== 0)
        {
            y = x;
            x = r;
            r = y % x;
        }
        return x;
    }

    else
        console.error('Number型を引数に指定してください');
}

