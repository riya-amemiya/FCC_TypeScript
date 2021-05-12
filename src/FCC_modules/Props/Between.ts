import { curry3 } from '../Curry';
/**
 * Returns x if the value is between the maximum and minimum values, otherwise returns the nearest number.
 * @param  {number} min
 * @param  {number} max
 * @param  {number} x
 */
interface BETWEEN {
    (min: number, max: number, x: number): number;
    (min: number, max: number): (x: number) => number;
    (min: number): (max: number, x: number) => number;
}
export const Between = curry3(function (min: number, max: number, x: number) {
    return x < min ? min : max < x ? max : x;
}) as BETWEEN;
