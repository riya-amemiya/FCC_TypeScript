import { curry1 } from '../Curry/';
export interface M_MAX {
    (a: number[]): number;
    (): (a: number[]) => number;
}
export const Max = curry1(function (num: number[]) {
    return Math.max.apply(null, [...new Set(num)]);
}) as M_MAX;
