export const Repetition = (n: number): number =>
    n === 0 ? 1 : n * Repetition(n - 1);
