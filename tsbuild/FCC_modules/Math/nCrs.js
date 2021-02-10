import nCr from './nCr';
export default function nCrs({ n, r }) {
    if (typeof (n) === typeof (r) && typeof (n) === "number" && typeof (r) === "number") {
        //重複を許して取り出す
        n = n + r - 1;
        n = nCr({ n, r });
        return n;
    }
    else {
        console.error('Number型を引数に指定してください');
        return 0;
    }
}
//# sourceMappingURL=nCrs.js.map