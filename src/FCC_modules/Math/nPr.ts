import error_language from '../Props/error_language';
export default function nPr({ n = 1, r = 1 }: { n?: number; r?: number; } = {}): number
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
            if (r === 0)
                x++;
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
        return y;
    }
    else if (/ja|ja_JP/.test(error_language.get()))
        console.error('Number型を引数に指定してください');
    else if (/en|en-US/.test(error_language.get()))
        console.error('Please specify Number type as an argument');
    else
        console.log('言語コードが不正な値です'); console.log('ja_JPでerrorステータスを出力します'); console.error('Number型を引数に指定してください');
}
