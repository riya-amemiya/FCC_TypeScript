export default class Immutable<T> {
    private value: T;
    constructor(value: T) {
        this.value = value;
    }
    set set(value: T) {
        this.value = value;
    }
    get get() {
        return this.value;
    }
    get type() {
        return typeof this.value;
    }
}
