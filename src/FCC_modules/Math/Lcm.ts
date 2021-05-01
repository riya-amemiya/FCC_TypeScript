import Gcd from './Gcd';
const Lcm = (n: number, r: number) => (n / Gcd(n, r)) * r;
export default Lcm;
