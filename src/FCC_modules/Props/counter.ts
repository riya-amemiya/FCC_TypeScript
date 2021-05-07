const counter = (
    num = 0,
    mode?: 'add' | 'remove',
): ((a?: number | undefined, b?: 'add' | 'remove') => number) | ((a?: number | undefined) => number) => {
    if (mode == 'add') {
        return (a?: number) => (a ? (num += a) : a === 0 ? num : ++num);
    } else if (mode == 'remove') {
        return (a?: number) => (a ? (num -= a) : a === 0 ? num : --num);
    }
    return (a?: number, b: 'add' | 'remove' = 'add') =>
        b == 'add' ? (a ? (num += a) : a === 0 ? num : ++num) : a ? (num -= a) : a === 0 ? num : --num;
};
export default counter;
