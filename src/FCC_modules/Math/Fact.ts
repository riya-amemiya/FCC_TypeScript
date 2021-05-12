export const Fact = (n: number, x: number = 1): number => (n === 0 || n < x ? 1 : n * Fact(n - 1, x));
