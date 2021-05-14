import { curry2 } from '../Curry';
import { Gcd } from './Gcd';
export interface REDUCE {
    (a: number, b: number): {
        a: number;
        b: number;
    };
    (a: number): (b: number) => {
        a: number;
        b: number;
    };
}
export const Reduce = curry2(function (a: number, b: number) {
    if (a === 0 || b === 0) {
        return { a: NaN, b: NaN };
    }
    let n = Gcd(a, b);
    return { a: a / n, b: b / n };
}) as REDUCE;
