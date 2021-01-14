import error_language from "../Props/error_language";

export default function nCr({ n, r }: { n: number; r: number; }): number
{
    if (typeof (n) === typeof (r) && typeof (n) === "number" && typeof (r) === "number")
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
            }


            else
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
        return y;
    }
    else if (/ja|ja_JP/.test(error_language.get()))
    {
        console.error('Number型を引数に指定してください');
        return 0;
    }
    else if (/en|en-US/.test(error_language.get()))
    {
        console.error('Please specify Number type as an argument');
        return 0;
    }


    else
    {
        console.log('言語コードが不正な値です');
        console.log('ja_JPでerrorステータスを出力します');
        console.error('Number型を引数に指定してください');
        return 0;
    }
}
