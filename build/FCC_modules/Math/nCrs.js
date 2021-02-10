function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import nCr from './nCr';
export default function nCrs(_ref) {
  var n = _ref.n,
      r = _ref.r;

  if (_typeof(n) === _typeof(r) && typeof n === "number" && typeof r === "number") {
    n = n + r - 1;
    n = nCr({
      n: n,
      r: r
    });
    return n;
  } else {
    console.error('Number型を引数に指定してください');
    return 0;
  }
}