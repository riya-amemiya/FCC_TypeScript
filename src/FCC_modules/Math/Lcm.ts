import { Gcd } from './Gcd';
export const Lcm = (n: number, r: number) => (n / Gcd(n, r)) * r;
