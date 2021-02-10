function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

export default function nPr() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$n = _ref.n,
      n = _ref$n === void 0 ? 1 : _ref$n,
      _ref$r = _ref.r,
      r = _ref$r === void 0 ? 1 : _ref$r;

  if (_typeof(n) === _typeof(r) && typeof n === "number" && typeof r === "number") {
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

    return y;
  } else {
    console.error('Number型を引数に指定してください');
    return 0;
  }
}