export default function Gcd({ f = 1, x = 1 } = {}) {
    if (typeof (f) === typeof (x) && typeof (f) === "number" && typeof (x) === "number") {
        let r, tmp;
        if (f < x) {
            tmp = f;
            f = x;
            x = tmp;
        }
        r = f % x;
        while (r !== 0) {
            f = x;
            x = r;
            r = f % x;
        }
        return x;
    }
    else
        console.error('Number型を引数に指定してください');
}
