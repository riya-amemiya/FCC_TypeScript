const sort = <T extends any>(array: T[], mode: 'up' | 'down' = 'up') => {
    if (mode === 'up') {
        return array.sort(function (a, b) {
            if (a > b) return -1;
            if (a < b) return 1;
            return 0;
        });
    } else if (mode === 'down') {
        return array.sort(function (a, b) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });
    }
    return array;
};
export default sort;
