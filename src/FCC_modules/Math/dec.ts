import { curry2 } from '../Curry';
export const dec = curry2(function (a: number, b: number) {
    return a - b;
});
