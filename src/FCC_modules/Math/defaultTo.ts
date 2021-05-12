type UNDE<T, J> = J extends undefined | null ? T : J;
function defaultTo<A, B>(a: A, b: B): UNDE<A, B>;
function defaultTo<A, B>(a: A): (b: B) => UNDE<A, B>;
function defaultTo<A, B>(a: A, b?: B) {
    switch (arguments.length) {
        case 1:
            return (b: B) => defaultTo(a, b);
        case 2:
            return a == null || a !== a ? b : a;
    }
}
export { defaultTo };
