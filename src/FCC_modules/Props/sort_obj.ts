const sort_obj = <T extends any, K extends keyof T>(
    array: T[],
    key: K,
    mode: 'up' | 'down',
) => {
    if (mode === 'up') {
        return array.sort(function (a, b) {
            if (a[key] > b[key]) return -1;
            if (a[key] < b[key]) return 1;
            return 0;
        });
    } else if (mode === 'down') {
        return array.sort(function (a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        });
    }
    return array;
};
export default sort_obj;
