function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import error_language from './Props/error_language';
import cal from './Props/calClass';

function _sleep(_x) {
  return _sleep2.apply(this, arguments);
}

function _sleep2() {
  _sleep2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ms) {
    var _sleep;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return import(
            /* webpackChunkName: "_FCC_sleep" */
            './Props/sleep');

          case 2:
            _sleep = _context.sent;
            return _context.abrupt("return", _sleep["default"](ms));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _sleep2.apply(this, arguments);
}

function sleep(_x2) {
  return _sleep3.apply(this, arguments);
}

function _sleep3() {
  _sleep3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref) {
    var ms, callback;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ms = _ref.ms, callback = _ref.callback;
            _context2.next = 3;
            return _sleep(ms);

          case 3:
            callback();

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _sleep3.apply(this, arguments);
}

function _Zeller() {
  return _Zeller2.apply(this, arguments);
}

function _Zeller2() {
  _Zeller2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var _ref4,
        _ref4$y,
        y,
        _ref4$m,
        m,
        _ref4$d,
        d,
        _Zeller,
        _args3 = arguments;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref4 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, _ref4$y = _ref4.y, y = _ref4$y === void 0 ? 2000 : _ref4$y, _ref4$m = _ref4.m, m = _ref4$m === void 0 ? 1 : _ref4$m, _ref4$d = _ref4.d, d = _ref4$d === void 0 ? 1 : _ref4$d;
            _context3.next = 3;
            return import(
            /* webpackChunkName: "_FCC_Zeller" */
            './Props/Zeller');

          case 3:
            _Zeller = _context3.sent;
            return _context3.abrupt("return", _Zeller["default"]({
              y: y,
              m: m,
              d: d
            }));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _Zeller2.apply(this, arguments);
}

function Zeller(_x3) {
  return _Zeller3.apply(this, arguments);
}

function _Zeller3() {
  _Zeller3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref2) {
    var _ref2$y, y, _ref2$m, m, _ref2$d, d, callback, text;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref2$y = _ref2.y, y = _ref2$y === void 0 ? 2000 : _ref2$y, _ref2$m = _ref2.m, m = _ref2$m === void 0 ? 1 : _ref2$m, _ref2$d = _ref2.d, d = _ref2$d === void 0 ? 1 : _ref2$d, callback = _ref2.callback;
            _context4.next = 3;
            return _Zeller({
              y: y,
              m: m,
              d: d
            });

          case 3:
            text = _context4.sent;
            return _context4.abrupt("return", callback(text));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _Zeller3.apply(this, arguments);
}

function zero(_x4) {
  return _zero2.apply(this, arguments);
}

function _zero2() {
  _zero2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(num) {
    var _zero;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return import(
            /* webpackChunkName: "_FCC_Zero" */
            './Props/Zero');

          case 2:
            _zero = _context5.sent;
            return _context5.abrupt("return", _zero["default"](num));

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _zero2.apply(this, arguments);
}

function birthday(_x5, _x6, _x7) {
  return _birthday2.apply(this, arguments);
}

function _birthday2() {
  _birthday2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(yer, mon, day) {
    var _birthday;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return import(
            /* webpackChunkName: "_FCC_birthday" */
            './Props/birthday');

          case 2:
            _birthday = _context6.sent;
            return _context6.abrupt("return", _birthday["default"]({
              yer: yer,
              mon: mon,
              day: day
            }));

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _birthday2.apply(this, arguments);
}

function wait(_x8) {
  return _wait2.apply(this, arguments);
}

function _wait2() {
  _wait2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(callBack) {
    var _wait;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return import(
            /* webpackChunkName: "_FCC_wait" */
            './Props/wait');

          case 2:
            _wait = _context7.sent;

            _wait["default"](callBack);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _wait2.apply(this, arguments);
}

function render(_x9) {
  return _render2.apply(this, arguments);
}

function _render2() {
  _render2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(_ref3) {
    var Dom, id, _render;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            Dom = _ref3.Dom, id = _ref3.id;
            _context8.next = 3;
            return import(
            /* webpackChunkName: "_FCC_render" */
            './Props/render');

          case 3:
            _render = _context8.sent;

            _render["default"]({
              Dom: Dom,
              id: id
            });

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _render2.apply(this, arguments);
}

export { error_language, cal, sleep, Zeller, zero, birthday, wait, render };