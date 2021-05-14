import { curry1 } from '../Curry';
export interface SUM {
    (a: number[]): number;
    (): (a: number[]) => number;
}
export const sum = curry1(function (a: number[]) {
    let n = 0;
    for (const k of a) n += k;
    return n;
}) as SUM;
