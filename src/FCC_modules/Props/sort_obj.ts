export interface SORT_OBJ {
    <T extends any, K extends keyof T>(array: T[], key: K, mode: 'up' | 'down'): T[];
    <T extends any, K extends keyof T>(array: T[], key: K): (mode: 'up' | 'down') => T[];
    <T extends any, K extends keyof T>(array: T[]): (key: K, mode: 'up' | 'down') => T[];
}
export const sort_obj = function <T extends any, K extends keyof T>(array: T[], key?: K, mode?: 'up' | 'down') {
    if (key !== undefined && mode !== undefined) {
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
    } else if (key !== undefined && mode === undefined) {
        return (mode: 'up' | 'down') => sort_obj(array, key, mode);
    } else if (key === undefined && mode === undefined) {
        return <K extends keyof T>(key: K, mode: 'up' | 'down') => sort_obj(array, key, mode);
    }
} as SORT_OBJ;
