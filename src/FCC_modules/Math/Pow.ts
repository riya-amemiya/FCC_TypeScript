import { curry2 } from '../Curry';
export interface POW {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
}
export const Pow = curry2(function (num: number, n: number) {
    if (num === 0 && n === 0) {
        return NaN;
    }
    return num ** n;
}) as POW;
