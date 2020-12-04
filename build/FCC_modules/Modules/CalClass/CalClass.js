class calClass {
  constructor(_value) {
    this._value = _value;
  }

  get value() {
    return this._value;
  }

  sum(...Nums) {
    for (let nums of Nums) {
      this._value += nums;
    }

    return this;
  }

  sub(...Nums) {
    for (let nums of Nums) this._value -= nums;

    return this;
  }

}

const Cal = new calClass(0);
export default Cal;