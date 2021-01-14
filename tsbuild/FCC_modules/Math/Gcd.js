export default function Gcd(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.x, x = _c === void 0 ? 1 : _c, _d = _b.y, y = _d === void 0 ? 1 : _d;
    if (typeof (y) === typeof (x) && typeof (y) === "number" && typeof (x) === "number") {
        //最大公約数
        var r = void 0, tmp = void 0;
        if (y < x) {
            tmp = y;
            y = x;
            x = tmp;
        }
        /* ユークリッドの互除法 */
        r = y % x;
        while (r !== 0) {
            y = x;
            x = r;
            r = y % x;
        }
        return x;
    }
    else {
        console.error('Number型を引数に指定してください');
        return 0;
    }
}
//# sourceMappingURL=Gcd.js.map