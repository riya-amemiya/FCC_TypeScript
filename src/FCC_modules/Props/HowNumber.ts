import { curry1 } from '../Curry';
export const HowNumber = curry1(function <T>(num: T) {
    return Number.isNaN(Number(num));
});
