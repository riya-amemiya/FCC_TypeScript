var calClass = /** @class */ (function () {
    function calClass(_value) {
        this._value = _value;
    }
    calClass.prototype._get = function () {
        return this._value;
    };
    calClass.prototype.sum = function () {
        var Nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            Nums[_i] = arguments[_i];
        }
        for (var _a = 0, Nums_1 = Nums; _a < Nums_1.length; _a++) {
            var nums = Nums_1[_a];
            this._value += nums;
        }
        return this;
    };
    calClass.prototype.sub = function () {
        var Nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            Nums[_i] = arguments[_i];
        }
        for (var _a = 0, Nums_2 = Nums; _a < Nums_2.length; _a++) {
            var nums = Nums_2[_a];
            this._value -= nums;
        }
        return this;
    };
    return calClass;
}());
var calLocal = new calClass(0);
var cal = calLocal;
export default cal;
//# sourceMappingURL=calClass.js.map