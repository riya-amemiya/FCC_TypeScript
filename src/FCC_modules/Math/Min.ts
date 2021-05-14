import { curry1 } from '../Curry';
export interface M_MIN {
    (a: number[]): number;
    (): (a: number[]) => number;
}
export const Min = curry1(function (num: number[]) {
    return Math.min.apply(null, [...new Set(num)]);
}) as M_MIN;
