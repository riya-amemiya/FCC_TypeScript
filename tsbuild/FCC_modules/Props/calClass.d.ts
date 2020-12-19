declare class calClass {
    private _value;
    constructor(_value: number);
    get value(): number;
    sum(...Nums: number[]): this;
    sub(...Nums: number[]): this;
}
declare const cal: calClass;
export default cal;
