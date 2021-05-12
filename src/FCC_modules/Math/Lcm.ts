import { Gcd } from './Gcd';
import { curry2 } from '../Curry/';
export const Lcm = curry2(function (n: number, r: number) {
    n ||= 1;
    r ||= 1;
    return (n / Gcd(n, r)) * r;
});
