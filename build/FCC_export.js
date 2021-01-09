function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//Modules
import { Maths } from './FCC_modules/Modules/Math';
import { Html } from './FCC_modules/Modules/HTML';
import * as Ajax from './FCC_modules/Modules/Ajax';
import HelloWorld from './FCC_modules/Modules/HelloWorld'; //Math

function Gcd(_x) {
  return _Gcd2.apply(this, arguments);
}

function _Gcd2() {
  _Gcd2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var x, y, _Gcd;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            x = _ref.x, y = _ref.y;
            _context.next = 3;
            return import(
            /* webpackChunkName: "_FCC_Gcd" */
            './FCC_modules/Math/Gcd');

          case 3:
            _Gcd = _context.sent;
            return _context.abrupt("return", _Gcd["default"]({
              x: x,
              y: y
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _Gcd2.apply(this, arguments);
}

function k(_x2) {
  return _k2.apply(this, arguments);
}

function _k2() {
  _k2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(num) {
    var _k;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return import(
            /* webpackChunkName: "_FCC_k" */
            './FCC_modules/Math/k');

          case 2:
            _k = _context2.sent;
            return _context2.abrupt("return", _k["default"](num));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _k2.apply(this, arguments);
}

function nCr() {
  return _nCr2.apply(this, arguments);
}

function _nCr2() {
  _nCr2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var _ref5,
        _ref5$n,
        n,
        _ref5$r,
        r,
        _nCr,
        _args3 = arguments;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref5 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, _ref5$n = _ref5.n, n = _ref5$n === void 0 ? 1 : _ref5$n, _ref5$r = _ref5.r, r = _ref5$r === void 0 ? 1 : _ref5$r;
            _context3.next = 3;
            return import(
            /* webpackChunkName: "_FCC_nCr" */
            './FCC_modules/Math/nCr');

          case 3:
            _nCr = _context3.sent;
            return _context3.abrupt("return", _nCr["default"]({
              n: n,
              r: r
            }));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _nCr2.apply(this, arguments);
}

function nCrs() {
  return _nCrs2.apply(this, arguments);
}

function _nCrs2() {
  _nCrs2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var _ref6,
        _ref6$n,
        n,
        _ref6$r,
        r,
        _nCrs,
        _args4 = arguments;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref6 = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {}, _ref6$n = _ref6.n, n = _ref6$n === void 0 ? 1 : _ref6$n, _ref6$r = _ref6.r, r = _ref6$r === void 0 ? 1 : _ref6$r;
            _context4.next = 3;
            return import(
            /* webpackChunkName: "_FCC_nCrs" */
            './FCC_modules/Math/nCrs');

          case 3:
            _nCrs = _context4.sent;
            return _context4.abrupt("return", _nCrs["default"]({
              n: n,
              r: r
            }));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _nCrs2.apply(this, arguments);
}

function nPr() {
  return _nPr2.apply(this, arguments);
}

function _nPr2() {
  _nPr2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var _ref7,
        _ref7$n,
        n,
        _ref7$r,
        r,
        _nPr,
        _args5 = arguments;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _ref7 = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {}, _ref7$n = _ref7.n, n = _ref7$n === void 0 ? 1 : _ref7$n, _ref7$r = _ref7.r, r = _ref7$r === void 0 ? 1 : _ref7$r;
            _context5.next = 3;
            return import(
            /* webpackChunkName: "_FCC_nPr" */
            './FCC_modules/Math/nPr');

          case 3:
            _nPr = _context5.sent;
            return _context5.abrupt("return", _nPr["default"]({
              n: n,
              r: r
            }));

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _nPr2.apply(this, arguments);
}

function Pow() {
  return _Pow2.apply(this, arguments);
}

function _Pow2() {
  _Pow2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var _ref8,
        _ref8$num,
        num,
        _ref8$n,
        n,
        _Pow,
        _args6 = arguments;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _ref8 = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {}, _ref8$num = _ref8.num, num = _ref8$num === void 0 ? 1 : _ref8$num, _ref8$n = _ref8.n, n = _ref8$n === void 0 ? 1 : _ref8$n;
            _context6.next = 3;
            return import(
            /* webpackChunkName: "_FCC_Pow" */
            './FCC_modules/Math/Pow');

          case 3:
            _Pow = _context6.sent;
            return _context6.abrupt("return", _Pow["default"]({
              num: num,
              n: n
            }));

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _Pow2.apply(this, arguments);
}

function Random() {
  return _Random2.apply(this, arguments);
} //Props


function _Random2() {
  _Random2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var num,
        _Random,
        _args7 = arguments;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            num = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : 1;
            _context7.next = 3;
            return import(
            /* webpackChunkName: "_FCC_Random" */
            './FCC_modules/Math/Random');

          case 3:
            _Random = _context7.sent;
            return _context7.abrupt("return", _Random["default"](num));

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _Random2.apply(this, arguments);
}

import error_language from './FCC_modules/Props/error_language';
import cal from './FCC_modules/Props/calClass';

function _sleep(_x3) {
  return _sleep2.apply(this, arguments);
}

function _sleep2() {
  _sleep2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(ms) {
    var _sleep;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return import(
            /* webpackChunkName: "_FCC_sleep" */
            './FCC_modules/Props/sleep');

          case 2:
            _sleep = _context8.sent;
            return _context8.abrupt("return", _sleep["default"](ms));

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _sleep2.apply(this, arguments);
}

function sleep(_x4) {
  return _sleep3.apply(this, arguments);
}

function _sleep3() {
  _sleep3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(_ref2) {
    var ms, callback;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            ms = _ref2.ms, callback = _ref2.callback;
            _context9.next = 3;
            return _sleep(ms);

          case 3:
            callback();

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _sleep3.apply(this, arguments);
}

function _Zeller() {
  return _Zeller2.apply(this, arguments);
}

function _Zeller2() {
  _Zeller2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
    var _ref9,
        _ref9$y,
        y,
        _ref9$m,
        m,
        _ref9$d,
        d,
        _Zeller,
        _args10 = arguments;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _ref9 = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {}, _ref9$y = _ref9.y, y = _ref9$y === void 0 ? 2000 : _ref9$y, _ref9$m = _ref9.m, m = _ref9$m === void 0 ? 1 : _ref9$m, _ref9$d = _ref9.d, d = _ref9$d === void 0 ? 1 : _ref9$d;
            _context10.next = 3;
            return import(
            /* webpackChunkName: "_FCC_Zeller" */
            './FCC_modules/Props/Zeller');

          case 3:
            _Zeller = _context10.sent;
            return _context10.abrupt("return", _Zeller["default"]({
              y: y,
              m: m,
              d: d
            }));

          case 5:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _Zeller2.apply(this, arguments);
}

function Zeller(_x5) {
  return _Zeller3.apply(this, arguments);
}

function _Zeller3() {
  _Zeller3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(_ref3) {
    var _ref3$y, y, _ref3$m, m, _ref3$d, d, callback, text;

    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 2000 : _ref3$y, _ref3$m = _ref3.m, m = _ref3$m === void 0 ? 1 : _ref3$m, _ref3$d = _ref3.d, d = _ref3$d === void 0 ? 1 : _ref3$d, callback = _ref3.callback;
            _context11.next = 3;
            return _Zeller({
              y: y,
              m: m,
              d: d
            });

          case 3:
            text = _context11.sent;
            return _context11.abrupt("return", callback(text));

          case 5:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _Zeller3.apply(this, arguments);
}

function zero(_x6) {
  return _zero2.apply(this, arguments);
}

function _zero2() {
  _zero2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(num) {
    var _zero;

    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return import(
            /* webpackChunkName: "_FCC_zero" */
            './FCC_modules/Props/Zero');

          case 2:
            _zero = _context12.sent;
            return _context12.abrupt("return", _zero["default"](num));

          case 4:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _zero2.apply(this, arguments);
}

function birthday(_x7, _x8, _x9) {
  return _birthday2.apply(this, arguments);
}

function _birthday2() {
  _birthday2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(yer, mon, day) {
    var _birthday;

    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            _context13.next = 2;
            return import(
            /* webpackChunkName: "_FCC_birthday" */
            './FCC_modules/Props/birthday');

          case 2:
            _birthday = _context13.sent;
            return _context13.abrupt("return", _birthday["default"]({
              yer: yer,
              mon: mon,
              day: day
            }));

          case 4:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _birthday2.apply(this, arguments);
}

function wait(_x10) {
  return _wait2.apply(this, arguments);
}

function _wait2() {
  _wait2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(callBack) {
    var _wait;

    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return import(
            /* webpackChunkName: "_FCC_wait" */
            './FCC_modules/Props/wait');

          case 2:
            _wait = _context14.sent;

            _wait["default"](callBack);

          case 4:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _wait2.apply(this, arguments);
}

function render(_x11) {
  return _render2.apply(this, arguments);
} //type


function _render2() {
  _render2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(_ref4) {
    var Dom, id, _render;

    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            Dom = _ref4.Dom, id = _ref4.id;
            _context15.next = 3;
            return import(
            /* webpackChunkName: "_FCC_render" */
            './FCC_modules/Props/render');

          case 3:
            _render = _context15.sent;

            _render["default"]({
              Dom: Dom,
              id: id
            });

          case 5:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15);
  }));
  return _render2.apply(this, arguments);
}

import * as type from './FCC_modules/type/type';
var version = '1.0';
export { version //Modules
, Maths, Html, Ajax, HelloWorld //Math
, Gcd, k, nCr, nCrs, nPr, Pow, Random //Props
, Zeller, zero, cal, error_language, birthday, wait, render, sleep //type
, type };