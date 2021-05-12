import { curry1 } from '../Curry';
export const remove = curry1(function (a: number[]) {
    let n = 0;
    for (const k of a) n -= k;
    return n;
});
