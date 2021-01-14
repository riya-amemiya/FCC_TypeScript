class calClass
{
    constructor(private _value: number) { }
    _get(): number
    {
        return this._value;
    }
    sum(...Nums: number[]): this
    {
        for (let nums of Nums)
        {
            this._value += nums;
        }
        return this;
    }
    sub(...Nums: number[]): this
    {
        for (let nums of Nums)
            this._value -= nums;
        return this;
    }
}
const calLocal = new calClass(0);
const cal = calLocal;
export default cal
