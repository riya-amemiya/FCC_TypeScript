import { curry1 } from '../Curry/';
export const Max = curry1(function (num: number[]) {
    return Math.max.apply(null, [...new Set(num)]);
});
