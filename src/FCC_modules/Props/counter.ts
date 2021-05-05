const counter = (num = 0, mode: 'add' | 'remove' | 'and') => {
    return mode == 'add'
        ? (a?: number) => (a ? (num += a) : ++num)
        : mode == 'remove'
        ? (a?: number) => (a ? (num -= a) : --num)
        : (a?: number, b: 'add' | 'remove' = 'add') => (b == 'add' ? (a ? (num += a) : ++num) : a ? (num -= a) : --num);
};

export default counter;
