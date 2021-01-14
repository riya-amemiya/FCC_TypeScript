export default function nPr(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.n, n = _c === void 0 ? 1 : _c, _d = _b.r, r = _d === void 0 ? 1 : _d;
    if (typeof (n) === typeof (r) && typeof (n) === "number" && typeof (r) === "number") {
        //nPr
        var y = void 0;
        var x = 0;
        y = n;
        while (x === 0) {
            if (r === 1) {
                y = y * r;
            }
            r--;
            if (r === 0)
                x++;
            else {
                n--;
                if (n === 0) {
                    x++;
                    break;
                }
                y = y * n;
            }
        }
        return y;
    }
    else {
        console.error('Number型を引数に指定してください');
        return 0;
    }
}
//# sourceMappingURL=nPr.js.map