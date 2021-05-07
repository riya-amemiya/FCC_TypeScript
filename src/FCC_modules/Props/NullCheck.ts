function NullCheck<T, J>(a: T, b?: J) {
    return b === undefined ? a ?? true : a ?? b;
}

export { NullCheck };
