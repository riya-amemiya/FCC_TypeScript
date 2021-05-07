function nCr(n: number, r: number): number;
function nCr(n: number): (r: number) => number;
function nCr(n: number, r?: number) {
    if (typeof r !== 'undefined') {
        //nCr
        let x = 0,
            z = r,
            y = n,
            age = 1;
        while (x == 0) {
            if (r == 1) {
                y = y * r;
            }
            r--;
            if (r == 0) {
                x++;
            } else {
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
        return y;
    } else {
        return (r: number) => nCr(n, r);
    }
}
export { nCr };
