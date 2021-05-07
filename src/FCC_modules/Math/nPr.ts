import { curry2 } from '../Curry';

const nPr = curry2(function (n: number, r: number) {
    //nPr
    let y = n,
        x = 0;
    while (x === 0) {
        if (r === 1) {
            y = y * r;
        }
        r--;
        if (r === 0) x++;
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
});
export { nPr };
