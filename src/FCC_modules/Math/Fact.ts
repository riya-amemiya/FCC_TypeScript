export const Fact = (n: number): number => (n === 0 ? 1 : n * Fact(n - 1));
