import { nCr } from './nCr';
import { curry2 } from '../Curry';
interface NCRS {
    (n: number, r: number): number;
    (n: number): (r: number) => number;
}
export const nCrs = curry2(function (n: number, r: number) {
    n ||= 1;
    r ||= 1;
    return nCr(n + r - 1, r);
}) as NCRS;
