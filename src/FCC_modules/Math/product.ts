import { curry2 } from '../Curry';
export const product = curry2(function (a: number, b: number) {
    return a * b;
});
