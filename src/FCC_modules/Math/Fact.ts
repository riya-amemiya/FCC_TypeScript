import { curry1 } from '../Curry/';
export const Fact = curry1(function Fact(n: number): number {
    return n === 0 ? 1 : n * Fact(n - 1);
});
