import { curry2 } from '../Curry';
export interface ADD {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
}
export const add = curry2(function (a: number, b: number) {
    return a + b;
}) as ADD;
