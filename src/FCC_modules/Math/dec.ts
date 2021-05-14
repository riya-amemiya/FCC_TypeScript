import { curry2 } from '../Curry';
export interface DEC {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
}
export const dec = curry2(function (a: number, b: number) {
    return a - b;
}) as DEC;
