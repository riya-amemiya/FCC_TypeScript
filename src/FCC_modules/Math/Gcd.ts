import { curry2 } from '../Curry';
export const Gcd = curry2(function (x: number, y: number) {
    x ||= 1;
    y ||= 1;
    //最大公約数
    let r: number, tmp: number;
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
});
