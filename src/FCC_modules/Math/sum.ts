export const sum = (...a: number[]) => {
    let n = 0;
    for (const k of a) n += k;
    return n;
};
