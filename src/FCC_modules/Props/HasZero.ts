export interface HASZERO {
    <T extends unknown>(num: T): boolean;
}
export const HasZero: HASZERO = <T extends unknown>(num: T): boolean => (num === 0 ? true : false);
