import { curry3 } from '../Curry';
/**
 * @param  {number} yer
 * @param  {number} mon
 * @param  {number} day
 */
export interface BIRTHDAY {
    (yer: number, mon: number, day: number): number;
    (yer: number, mon: number): (day: number) => number;
    (yer: number): (mon: number, day: number) => number;
}
export const birthday = curry3(function (yer: number, mon: number, day: number) {
    const birthday = new Date(yer, mon - 1, day);
    const now = new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000);
    const y = now.getFullYear() - birthday.getFullYear();
    return now < new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate()) ? y - 1 : y;
}) as BIRTHDAY;
