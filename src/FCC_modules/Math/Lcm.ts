import { Gcd } from './Gcd';
import { curry2 } from '../Curry/';
export const Lcm = curry2(function (n: number, r: number) {
    return (n / Gcd(n, r)) * r;
});
