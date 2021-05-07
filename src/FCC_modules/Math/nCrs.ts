import { nCr } from './nCr';
import { curry2 } from '../Curry';
export const nCrs = curry2(function (n: number, r: number) {
    return nCr(n + r - 1, r);
});
