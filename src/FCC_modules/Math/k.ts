import { curry1 } from '../Curry';
export interface K {
    (a: number): number;
    (): (a: number) => number;
}
export const k = curry1(function (num: number) {
    return (num += 273);
}) as K;
