function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import error_language from './Props/error_language';
import cal from './Props/calClass';

function _min(_x) {
  return _min2.apply(this, arguments);
}

function _min2() {
  _min2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(num) {
    var _min;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return import(
            /* webpackChunkName: "_FCC_Min" */
            './Math/Min');

          case 2:
            _min = _context.sent;
            return _context.abrupt("return", _min["default"](num));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _min2.apply(this, arguments);
}

function min(_x2) {
  return _min3.apply(this, arguments);
}

function _min3() {
  _min3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref) {
    var num, callback, num_2;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            num = _ref.num, callback = _ref.callback;
            _context2.next = 3;
            return _min(num);

          case 3:
            num_2 = _context2.sent;
            callback(num_2);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _min3.apply(this, arguments);
}

function _max(_x3) {
  return _max2.apply(this, arguments);
}

function _max2() {
  _max2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(num) {
    var _min;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return import(
            /* webpackChunkName: "_FCC_Max" */
            './Math/Max');

          case 2:
            _min = _context3.sent;
            return _context3.abrupt("return", _min["default"](num));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _max2.apply(this, arguments);
}

function max(_x4) {
  return _max3.apply(this, arguments);
}

function _max3() {
  _max3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref2) {
    var num, callback, num_2;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            num = _ref2.num, callback = _ref2.callback;
            _context4.next = 3;
            return _max(num);

          case 3:
            num_2 = _context4.sent;
            callback(num_2);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _max3.apply(this, arguments);
}

function _sleep(_x5) {
  return _sleep2.apply(this, arguments);
}

function _sleep2() {
  _sleep2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(ms) {
    var _sleep;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return import(
            /* webpackChunkName: "_FCC_sleep" */
            './Props/sleep');

          case 2:
            _sleep = _context5.sent;
            return _context5.abrupt("return", _sleep["default"](ms));

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _sleep2.apply(this, arguments);
}

function sleep(_x6) {
  return _sleep3.apply(this, arguments);
}

function _sleep3() {
  _sleep3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref3) {
    var ms, callback;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            ms = _ref3.ms, callback = _ref3.callback;
            _context6.next = 3;
            return _sleep(ms);

          case 3:
            callback();

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _sleep3.apply(this, arguments);
}

function _Zeller() {
  return _Zeller2.apply(this, arguments);
}

function _Zeller2() {
  _Zeller2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var _ref6,
        _ref6$y,
        y,
        _ref6$m,
        m,
        _ref6$d,
        d,
        _Zeller,
        _args7 = arguments;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _ref6 = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {}, _ref6$y = _ref6.y, y = _ref6$y === void 0 ? 2000 : _ref6$y, _ref6$m = _ref6.m, m = _ref6$m === void 0 ? 1 : _ref6$m, _ref6$d = _ref6.d, d = _ref6$d === void 0 ? 1 : _ref6$d;
            _context7.next = 3;
            return import(
            /* webpackChunkName: "_FCC_Zeller" */
            './Props/Zeller');

          case 3:
            _Zeller = _context7.sent;
            return _context7.abrupt("return", _Zeller["default"]({
              y: y,
              m: m,
              d: d
            }));

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _Zeller2.apply(this, arguments);
}

function Zeller(_x7) {
  return _Zeller3.apply(this, arguments);
}

function _Zeller3() {
  _Zeller3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(_ref4) {
    var _ref4$y, y, _ref4$m, m, _ref4$d, d, callback, text;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _ref4$y = _ref4.y, y = _ref4$y === void 0 ? 2000 : _ref4$y, _ref4$m = _ref4.m, m = _ref4$m === void 0 ? 1 : _ref4$m, _ref4$d = _ref4.d, d = _ref4$d === void 0 ? 1 : _ref4$d, callback = _ref4.callback;
            _context8.next = 3;
            return _Zeller({
              y: y,
              m: m,
              d: d
            });

          case 3:
            text = _context8.sent;
            return _context8.abrupt("return", callback(text));

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _Zeller3.apply(this, arguments);
}

function zero(_x8) {
  return _zero2.apply(this, arguments);
}

function _zero2() {
  _zero2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(num) {
    var _zero;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return import(
            /* webpackChunkName: "_FCC_Zero" */
            './Props/Zero');

          case 2:
            _zero = _context9.sent;
            return _context9.abrupt("return", _zero["default"](num));

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _zero2.apply(this, arguments);
}

function birthday(_x9, _x10, _x11) {
  return _birthday2.apply(this, arguments);
}

function _birthday2() {
  _birthday2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(yer, mon, day) {
    var _birthday;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return import(
            /* webpackChunkName: "_FCC_birthday" */
            './Props/birthday');

          case 2:
            _birthday = _context10.sent;
            return _context10.abrupt("return", _birthday["default"]({
              yer: yer,
              mon: mon,
              day: day
            }));

          case 4:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));
  return _birthday2.apply(this, arguments);
}

function wait(_x12) {
  return _wait2.apply(this, arguments);
}

function _wait2() {
  _wait2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(callBack) {
    var _wait;

    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return import(
            /* webpackChunkName: "_FCC_wait" */
            './Props/wait');

          case 2:
            _wait = _context11.sent;

            _wait["default"](callBack);

          case 4:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));
  return _wait2.apply(this, arguments);
}

function render(_x13) {
  return _render2.apply(this, arguments);
}

function _render2() {
  _render2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(_ref5) {
    var Dom, id, _render;

    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            Dom = _ref5.Dom, id = _ref5.id;
            _context12.next = 3;
            return import(
            /* webpackChunkName: "_FCC_render" */
            './Props/render');

          case 3:
            _render = _context12.sent;

            _render["default"]({
              Dom: Dom,
              id: id
            });

          case 5:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
  return _render2.apply(this, arguments);
}

export { error_language, cal, sleep, Zeller, zero, birthday, wait, render, min, max };