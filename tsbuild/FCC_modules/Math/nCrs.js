import nCr from './nCr';
export default function nCrs({ n, r }) {
    if (typeof (n) === typeof (r) && typeof (n) === "number" && typeof (r) === "number") {
        n = n + r - 1;
        n = nCr({ n, r });
        return n;
    }
    else
        console.error('Number型を引数に指定してください');
}
