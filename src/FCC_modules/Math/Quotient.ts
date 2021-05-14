import { curry2 } from '../Curry';
export interface QUOTIENT {
    (a: number, b: number): {
        answer: number;
        surplus: number;
    };
    (a: number): (b: number) => {
        answer: number;
        surplus: number;
    };
}
export const quotient = curry2(function (a: number, b: number) {
    return {
        answer: (a - (a % b)) / b,
        surplus: (a % b) + 0,
    };
}) as QUOTIENT;
