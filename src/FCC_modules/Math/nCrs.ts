import nCr from './nCr';
import error_language from '../Props/error_language';
export default function nCrs({ n, r }: { n: number; r: number; }): number
{
    if (typeof (n) === typeof (r) && typeof (n) === "number" && typeof (r) === "number")
    {
        //重複を許して取り出す
        n = n + r - 1;
        n = nCr({ n, r });
        return n;
    }


    else if (/ja|ja_JP/.test(error_language.get()))
        console.error('Number型を引数に指定してください');
    else if (/en|en-US/.test(error_language.get()))
        console.error('Please specify Number type as an argument');


    else
        console.log('言語コードが不正な値です'); console.log('ja_JPでerrorステータスを出力します'); console.error('Number型を引数に指定してください');
}
