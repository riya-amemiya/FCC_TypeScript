import { curry3 } from '../Curry';
/**
 * @param  {number} yer
 * @param  {number} mon
 * @param  {number} day
 */
export interface BIRTHDAY {
    //number
    (yer: number, mon: number, day: number): number;
    (yer: number, mon: number): (day: number) => number;
    (yer: number): (mon: number, day: number) => number;

    //string1
    (yer: string, mon: number, day: number): number;
    (yer: string, mon: number): (day: number) => number;
    (yer: string): (mon: number, day: number) => number;

    (yer: number, mon: string, day: number): number;
    (yer: number, mon: string): (day: number) => number;
    (yer: number): (mon: string, day: number) => number;

    (yer: number, mon: number, day: string): number;
    (yer: number, mon: number): (day: string) => number;
    (yer: number): (mon: number, day: string) => number;
    //string2
    (yer: string, mon: string, day: number): number;
    (yer: string, mon: string): (day: number) => number;
    (yer: string): (mon: string, day: number) => number;

    (yer: string, mon: number, day: string): number;
    (yer: string, mon: number): (day: string) => number;
    (yer: string): (mon: number, day: string) => number;

    (yer: number, mon: string, day: string): number;
    (yer: number, mon: string): (day: string) => number;
    (yer: number): (mon: string, day: string) => number;
    //string3
    (yer: string, mon: string, day: string): number;
    (yer: string, mon: string): (day: string) => number;
    (yer: string): (mon: string, day: string) => number;
}
export const birthday = curry3(function (yer: number | string, mon: number | string, day: number | string) {
    if (typeof yer === 'string') {
        yer = Number(yer);
    }
    if (typeof mon === 'string') {
        mon = Number(mon);
    }
    if (typeof day === 'string') {
        day = Number(day);
    }

    const birthday = new Date(yer < 0 ? -yer : yer, mon < 0 ? -mon - 1 : mon - 1, day < 0 ? -day : day);
    const now = new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000);
    const y = now.getFullYear() - birthday.getFullYear();
    const r = now < new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate()) ? y - 1 : y;
    return yer < 100 ? 1900 + y : r;
}) as BIRTHDAY;
