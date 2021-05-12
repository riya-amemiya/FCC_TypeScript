import { curry2 } from '../Curry';
interface NPR {
    (n: number, r: number): number;
    (n: number): (r: number) => number;
}
export const nPr = curry2(function (n: number, r: number) {
    //nPr
    n ||= 1;
    r ||= 1;
    let y = n,
        x = 0;
    while (x === 0) {
        if (r === 1) {
            y *= r;
        }
        r--;
        if (r === 0) x++;
        else {
            n--;
            if (n === 0) {
                x++;
                break;
            }
            y *= n;
        }
    }
    return y;
}) as NPR;
