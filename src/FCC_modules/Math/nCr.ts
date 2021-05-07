import { curry2 } from '../Curry/';
const nCr = curry2(function (n: number, r: number) {
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
});
export { nCr };
