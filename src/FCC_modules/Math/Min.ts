import { curry1 } from '../Curry';
export const Min = curry1(function (num: number[]) {
    return Math.min.apply(null, [...new Set(num)]);
});
