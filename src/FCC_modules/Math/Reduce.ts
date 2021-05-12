import { curry2 } from '../Curry';
import { Gcd } from './Gcd';
export const Reduce = curry2(function (a: number, b: number) {
    let n = Gcd(a, b);
    return { a: a / n, b: b / n };
});
