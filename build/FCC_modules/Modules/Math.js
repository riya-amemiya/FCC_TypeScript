function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var maths = /*#__PURE__*/function () {
  function maths(_num) {
    _classCallCheck(this, maths);
  }

  _createClass(maths, [{
    key: "nPr",
    value: function nPr(_ref) {
      var n = _ref.n,
          r = _ref.r;

      if (_typeof(n) === _typeof(r) && typeof n === "number" && typeof r === "number") {
        //nPr
        var y;
        var x = 0;
        y = n;

        while (x === 0) {
          if (r === 1) {
            y = y * r;
          }

          r--;
          if (r === 0) x++;else {
            n--;

            if (n === 0) {
              x++;
              break;
            }

            y = y * n;
          }
        }

        this._num += y;
        return this;
      } else console.error('Number型を引数に指定してください');
    }
  }, {
    key: "Pow",
    value: function Pow(_ref2) {
      var num = _ref2.num,
          n = _ref2.n;
      //xのy乗
      var nums = num;
      nums = Math.pow(nums, num);
      this._num += nums;
      return this;
    }
  }, {
    key: "Gcd",
    value: function Gcd() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$f = _ref3.f,
          f = _ref3$f === void 0 ? 1 : _ref3$f,
          _ref3$x = _ref3.x,
          x = _ref3$x === void 0 ? 1 : _ref3$x;

      if (_typeof(f) === _typeof(x) && typeof f === "number" && typeof x === "number") {
        //最大公約数
        var r, tmp;

        if (f < x) {
          tmp = f;
          f = x;
          x = tmp;
        }
        /* ユークリッドの互除法 */


        r = f % x;

        while (r !== 0) {
          f = x;
          x = r;
          r = f % x;
        }

        this._num += x;
        return this;
      } else console.error('Number型を引数に指定してください');
    }
  }, {
    key: "Random",
    value: function Random(num) {
      this._num += Math.floor(Math.random() * num);
      return this;
    }
  }, {
    key: "nCr",
    value: function nCr(_ref4) {
      var n = _ref4.n,
          r = _ref4.r;
      //nCr
      var x;
      var z;
      var y;
      var age = 1;
      y = n;
      z = r;
      x = 0;

      while (x == 0) {
        if (r == 1) {
          y = y * r;
        }

        r--;

        if (r == 0) {
          x++;
        } else {
          n--;

          if (n == 0) {
            x++;
            break;
          }

          y = y * n;
        }
      }

      for (var i = 2; i <= z; i++) {
        age *= i;
      }

      y = y / age;
      this._num += y;
      return this;
    }
  }, {
    key: "nCrs",
    value: function nCrs(_ref5) {
      var n = _ref5.n,
          r = _ref5.r;
      //重複を許して取り出す
      n = n + r - 1;
      n = this.nCr({
        n: n,
        r: r
      });
      this._num += n;
      return this;
    }
  }, {
    key: "num",
    get: function get() {
      return this._num;
    }
  }]);

  return maths;
}();

var Maths = new maths(0);
export { Maths };