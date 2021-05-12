export const Min = <T extends any>(a: T[]) => a.reduce((a, b) => (a < b ? a : b));
