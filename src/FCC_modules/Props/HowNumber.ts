import { curry1 } from '../Curry';
export interface HOWNUMBER {
    (any: unknown): boolean;
    (): (any: unknown) => boolean;
}
export const HowNumber = curry1(function <T>(num: T) {
    return Number.isNaN(Number(num));
}) as HOWNUMBER;
