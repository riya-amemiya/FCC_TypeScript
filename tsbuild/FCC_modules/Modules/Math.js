class maths {
    constructor(_num) {
        this._num = _num;
    }
    get num() {
        return this._num;
    }
    nPr({ n, r }) {
        if (typeof (n) === typeof (r) && typeof (n) === "number" && typeof (r) === "number") {
            let y;
            let x = 0;
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
            this._num += y;
            return this;
        }
        else
            console.error('Number型を引数に指定してください');
    }
    Pow({ num, n }) {
        let nums = num;
        nums = Math.pow(nums, num);
        this._num += nums;
        return this;
    }
    Gcd({ f = 1, x = 1 } = {}) {
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
            this._num += x;
            return this;
        }
        else
            console.error('Number型を引数に指定してください');
    }
    Random(num) {
        this._num += Math.floor(Math.random() * num);
        return this;
    }
    nCr({ n, r }) {
        let x;
        let z;
        let y;
        let age = 1;
        y = n;
        z = r;
        x = 0;
        while (x == 0) {
            if (r == 1) {
                y = y * r;
            }
            r--;
            if (r == 0) {
                x++;
            }
            else {
                n--;
                if (n == 0) {
                    x++;
                    break;
                }
                y = y * n;
            }
        }
        for (let i = 2; i <= z; i++) {
            age *= i;
        }
        y = y / age;
        this._num += y;
        return this;
    }
    nCrs({ n, r }) {
        n = n + r - 1;
        n = this.nCr({ n, r });
        this._num += n;
        return this;
    }
}
const Maths = new maths(0);
export { Maths };
