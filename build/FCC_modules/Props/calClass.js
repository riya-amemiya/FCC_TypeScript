function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var calClass = function () {
  function calClass(_value) {
    _classCallCheck(this, calClass);

    this._value = _value;
  }

  _createClass(calClass, [{
    key: "_get",
    value: function _get() {
      return this._value;
    }
  }, {
    key: "sum",
    value: function sum() {
      for (var _len = arguments.length, Nums = new Array(_len), _key = 0; _key < _len; _key++) {
        Nums[_key] = arguments[_key];
      }

      for (var _i = 0, _Nums = Nums; _i < _Nums.length; _i++) {
        var nums = _Nums[_i];
        this._value += nums;
      }

      return this;
    }
  }, {
    key: "sub",
    value: function sub() {
      for (var _len2 = arguments.length, Nums = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        Nums[_key2] = arguments[_key2];
      }

      for (var _i2 = 0, _Nums2 = Nums; _i2 < _Nums2.length; _i2++) {
        var nums = _Nums2[_i2];
        this._value -= nums;
      }

      return this;
    }
  }]);

  return calClass;
}();

var calLocal = new calClass(0);
var cal = calLocal;
export default cal;