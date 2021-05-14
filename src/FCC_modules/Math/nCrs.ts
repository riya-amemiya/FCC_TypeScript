import { nCr } from './nCr';
import { curry2 } from '../Curry';
export interface NCRS {
    (n: number, r: number): number;
    (n: number): (r: number) => number;
}
export const nCrs = curry2(function (n: number, r: number) {
    if (n === 0 || r === 0) {
        return NaN;
    }
    return nCr(n + r - 1, r);
}) as NCRS;
