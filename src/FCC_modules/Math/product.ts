export interface PRODUCT {
    (a: number, b: number): number;
    (a: number): (b: number) => number;
}
export const product = function (a: number, b?: number) {
    return b !== undefined ? a * b : (b: number) => a * b;
} as PRODUCT;
