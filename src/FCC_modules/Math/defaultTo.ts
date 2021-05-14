export type UNDE<T, J> = J extends undefined | null ? T : J;
export interface DEFAULTtO {
    <A, B>(a: A, b: B): UNDE<A, B>;
    <A, B>(a: A): (b: B) => UNDE<A, B>;
}
export const defaultTo = function <A, B>(a: A, b?: B) {
    switch (arguments.length) {
        case 1:
            return (b: B) => defaultTo(a, b);
        case 2:
            return a == null || a !== a ? b : a;
    }
} as DEFAULTtO;
