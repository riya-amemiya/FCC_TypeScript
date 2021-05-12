interface APPLYTO {
    (): number;
    set: (num: number) => number;
    add: (num: number) => number;
    this: number;
}
const applyTo = (() => ++applyTo.this) as APPLYTO;
applyTo.this = 0;
applyTo.set = (num: number) => (applyTo.this = num);
applyTo.add = (num?: number) => (num === undefined ? ++applyTo.this : applyTo.this + num);
export { applyTo };
