import { Gcd } from './Gcd';
import { curry2 } from '../Curry/';
export interface LCM {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
}
export const Lcm = curry2(function (n: number, r: number) {
    if (n === 0 || r === 0) {
        return 0;
    }
    return (n / Gcd(n, r)) * r;
}) as LCM;
