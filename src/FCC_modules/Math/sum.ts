import { curry1 } from '../Curry';
export interface SUM {
    (a: number[]): number;
    (): (a: number[]) => number;
}
export const sum = curry1(function (a: number[]) {
    return a.reduce((a: number, b: number) => {
        return a + b;
    });
}) as SUM;
