function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import error_language from "../Props/error_language";
export default function nCr(_ref) {
  var n = _ref.n,
      r = _ref.r;

  if (_typeof(n) === _typeof(r) && typeof n === "number" && typeof r === "number") {
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
    return y;
  } else if (/ja|ja_JP/.test(error_language.get())) console.error('Number型を引数に指定してください');else if (/en|en-US/.test(error_language.get())) console.error('Please specify Number type as an argument');else console.log('言語コードが不正な値です');

  console.log('ja_JPでerrorステータスを出力します');
  console.error('Number型を引数に指定してください');
}