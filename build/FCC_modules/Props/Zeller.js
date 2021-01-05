import error_language from "./error_language";
export default function Zeller() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$y = _ref.y,
      y = _ref$y === void 0 ? 2000 : _ref$y,
      _ref$m = _ref.m,
      m = _ref$m === void 0 ? 1 : _ref$m,
      _ref$d = _ref.d,
      d = _ref$d === void 0 ? 1 : _ref$d;

  if (m < 3) {
    y--;
    m += 12;
  }

  var w = (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((13 * m + 8) / 5) + d) % 7;
  var a;

  if (w == 0) {
    if (error_language.haslanguage('en')) {
      a = "Sunday";
    } else if (error_language.haslanguage('ja')) {
      a = "日曜日";
    }
  } else if (w == 1) {
    if (error_language.haslanguage('en')) {
      a = "Manday";
    } else if (error_language.haslanguage('ja')) {
      a = "月曜日";
    }
  } else if (w == 2) {
    if (error_language.haslanguage('en')) {
      a = "Tuesday";
    } else if (error_language.haslanguage('ja')) {
      a = "火曜日";
    }
  } else if (w == 3) {
    if (error_language.haslanguage('en')) {
      a = "Wedneday";
    } else if (error_language.haslanguage('ja')) {
      a = "水曜日";
    }
  } else if (w == 4) {
    if (error_language.haslanguage('en')) {
      a = "Thursday";
    } else if (error_language.haslanguage('ja')) {
      a = "木曜日";
    }
  } else if (w == 5) {
    if (error_language.haslanguage('en')) {
      a = "Friday";
    } else if (error_language.haslanguage('ja')) {
      a = "金曜日";
    }
  } else {
    if (error_language.haslanguage('en')) {
      a = "Saturday";
    } else if (error_language.haslanguage('ja')) {
      a = "土曜日";
    }
  }

  return a;
}