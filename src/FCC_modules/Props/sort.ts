export interface SORT {
    <T>(array: T[], mode: 'up' | 'down'): T[];
    <T>(array: T[]): (mode: 'up' | 'down') => T[];
}
export const sort = function <T>(array: T[], mode?: 'up' | 'down') {
    if (mode !== undefined) {
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
    } else {
        return (mode: 'up' | 'down') => sort(array, mode);
    }
} as SORT;
