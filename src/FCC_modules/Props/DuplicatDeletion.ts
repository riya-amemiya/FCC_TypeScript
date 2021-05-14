export interface DUPLICATEDELETION {
    <T>(array: T): T;
    <T>(): (array: T) => T;
}
export const DuplicateDeletion = function _<T>(array?: T[]) {
    switch (arguments.length) {
        case 0:
            return (a: T[]) => _(a);
        case 1:
            return [...new Set(array)];
    }
} as DUPLICATEDELETION;
