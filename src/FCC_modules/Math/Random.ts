import { curry1 } from '../Curry';
export interface RANDOM {
    (a: number): number;
    (): (a: number) => number;
}
export const Random = curry1(function (num: number) {
    num ||= 1;
    return Math.floor(Math.random() * num);
}) as RANDOM;
