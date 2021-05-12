import { curry2 } from '../Curry';
export const add = curry2(function (a: number, b: number) {
    return a + b;
});
