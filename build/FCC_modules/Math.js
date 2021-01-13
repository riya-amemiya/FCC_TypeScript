function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
            './Math/Gcd');

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
            './Math/k');

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
    var _ref2,
        _ref2$n,
        n,
        _ref2$r,
        r,
        _nCr,
        _args3 = arguments;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref2 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, _ref2$n = _ref2.n, n = _ref2$n === void 0 ? 1 : _ref2$n, _ref2$r = _ref2.r, r = _ref2$r === void 0 ? 1 : _ref2$r;
            _context3.next = 3;
            return import(
            /* webpackChunkName: "_FCC_nCr" */
            './Math/nCr');

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
    var _ref3,
        _ref3$n,
        n,
        _ref3$r,
        r,
        _nCrs,
        _args4 = arguments;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ref3 = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : {}, _ref3$n = _ref3.n, n = _ref3$n === void 0 ? 1 : _ref3$n, _ref3$r = _ref3.r, r = _ref3$r === void 0 ? 1 : _ref3$r;
            _context4.next = 3;
            return import(
            /* webpackChunkName: "_FCC_nCrs" */
            './Math/nCrs');

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
    var _ref4,
        _ref4$n,
        n,
        _ref4$r,
        r,
        _nPr,
        _args5 = arguments;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _ref4 = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {}, _ref4$n = _ref4.n, n = _ref4$n === void 0 ? 1 : _ref4$n, _ref4$r = _ref4.r, r = _ref4$r === void 0 ? 1 : _ref4$r;
            _context5.next = 3;
            return import(
            /* webpackChunkName: "_FCC_nPr" */
            './Math/nPr');

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
    var _ref5,
        _ref5$num,
        num,
        _ref5$n,
        n,
        _Pow,
        _args6 = arguments;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _ref5 = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {}, _ref5$num = _ref5.num, num = _ref5$num === void 0 ? 1 : _ref5$num, _ref5$n = _ref5.n, n = _ref5$n === void 0 ? 1 : _ref5$n;
            _context6.next = 3;
            return import(
            /* webpackChunkName: "_FCC_Pow" */
            './Math/Pow');

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
}

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
            './Math/Random');

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

export { Gcd, nCr, nCrs, nPr, Pow, Random, k };