import { curry2 } from '../Curry';
export const quotient = curry2(function (a: number, b: number) {
    return {
        answer: (a - (a % b)) / b,
        surplus: (a % b) + 0,
    };
});
