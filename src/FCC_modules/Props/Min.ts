export interface P_MIN {
    <T extends unknown>(num: T[]): T;
}
export const Min: P_MIN = <T extends any>(a: T[]) => a.reduce((a, b) => (a < b ? a : b));
