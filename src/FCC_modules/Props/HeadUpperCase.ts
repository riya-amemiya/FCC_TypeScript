import { curry1 } from '../Curry';
export interface HEADUPPERCASE {
    (str: string): string;
    (): (str: string) => string;
}
export const HeadUpperCase = curry1(function (str: string) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}) as HEADUPPERCASE;
