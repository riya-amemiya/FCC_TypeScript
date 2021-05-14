export interface COUNTER {
    (num: number): (num?: number, mode?: 'add' | 'remove') => number;
    (num: number, mode: 'add'): (num?: number) => number;
    (num: number, mode: 'remove'): (num?: number) => number;
}
export const counter = ((num: number, mode?: 'add' | 'remove') => {
    if (mode == 'add') {
        return (a?: number) => (a ? (num += a) : a === 0 ? num : ++num);
    } else if (mode == 'remove') {
        return (a?: number) => (a ? (num -= a) : a === 0 ? num : --num);
    }
    return (a?: number, b: 'add' | 'remove' = 'add') =>
        b == 'add' ? (a ? (num += a) : a === 0 ? num : ++num) : a ? (num -= a) : a === 0 ? num : --num;
}) as COUNTER;
