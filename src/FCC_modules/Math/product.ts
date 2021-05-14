import { curry2 } from '../Curry';
export interface PRODUCT {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
}
export const product = curry2(function (a: number, b: number) {
    return a * b;
}) as PRODUCT;
