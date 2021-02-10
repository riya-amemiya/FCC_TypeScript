function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

export default function Gcd() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$x = _ref.x,
      x = _ref$x === void 0 ? 1 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === void 0 ? 1 : _ref$y;

  if (_typeof(y) === _typeof(x) && typeof y === "number" && typeof x === "number") {
    var r, tmp;

    if (y < x) {
      tmp = y;
      y = x;
      x = tmp;
    }

    r = y % x;

    while (r !== 0) {
      y = x;
      x = r;
      r = y % x;
    }

    return x;
  } else {
    console.error('Number型を引数に指定してください');
    return 0;
  }
}