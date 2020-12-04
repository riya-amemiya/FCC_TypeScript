class calClass
{
    constructor(private _value: number) { }
    get value(): number
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
const Cal = new calClass(0);
export default Cal
