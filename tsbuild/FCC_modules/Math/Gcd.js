export default function Gcd({ x = 1, y = 1 } = {}) {
    if (typeof (y) === typeof (x) && typeof (y) === "number" && typeof (x) === "number") {
        let r, tmp;
        if (y < x) {
            tmp = y;
            y = x;
            x = tmp;
        }
        r = y % x;
        while (r !== 0) {
            y = x;
            x = r;
            r = y % x;
        }
        return x;
    }
    else
        console.error('Number型を引数に指定してください');
}
//# sourceMappingURL=Gcd.js.map