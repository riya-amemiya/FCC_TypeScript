export interface P_MAX {
    <T extends unknown>(num: T[]): T;
}
export const Max: P_MAX = <T extends any>(a: T[]) => a.reduce((a, b) => (a > b ? a : b));
