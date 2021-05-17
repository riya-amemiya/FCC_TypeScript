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
    //[YY,YY]
    (yer: [string, string], mon: number, day: number): number;
    (yer: [string, string], mon: number): (day: number) => number;
    (yer: [string, string]): (mon: number, day: number) => number;
    //[YY] => number
    (yer: [string], mon: number, day: number): number;
    (yer: [string], mon: number): (day: number) => number;
    (yer: [string]): (mon: number, day: number) => number;
}
export const birthday = curry3(function (yer: number | [string, string] | [string], mon: number, day: number) {
    if (typeof yer === 'number') {
        const birthday = new Date(yer < 1000 ? yer + 2000 : yer, mon - 1, day);
        const now = new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000);
        const y = now.getFullYear() - birthday.getFullYear();
        return now < new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate()) ? y - 1 : y;
    } else if (typeof yer[0] === 'string' && yer.length == 2) {
        yer = Number(`${yer[0]}${yer[1]}`);
        const birthday = new Date(yer < 1000 ? yer + 2000 : yer, mon - 1, day);
        const now = new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000);
        const y = now.getFullYear() - birthday.getFullYear();
        return now < new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate()) ? y - 1 : y;
    } else if (typeof yer[0] === 'string' && yer.length == 1) {
        yer = Number(yer[0]);
        yer = Number(`20${yer < 10 ? '0' + yer : yer}`);
        const birthday = new Date(yer < 1000 ? yer + 2000 : yer, mon - 1, day);
        const now = new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000);
        const y = now.getFullYear() - birthday.getFullYear();
        return now < new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate()) ? y - 1 : y;
    }
}) as BIRTHDAY;
