import { curry1 } from '../Curry';
export interface REMOVE {
    (num: number[]): number;
    (): (num: number[]) => number;
}
export const remove = curry1(function (num: number[]) {
    return num.reduce((a: number, b: number) => a + b, 0);
}) as REMOVE;
