export interface FACT {
    (n: number, x?: number): number;
}
export const Fact = ((n: number, x: number = 1): number => {
    if (n === 0 || n < x) {
        if (x === 0) {
            return NaN;
        }
        return 1;
    } else {
        return n * Fact(n - 1, x);
    }
}) as FACT;
