var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

function Gcd(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
    var _Gcd;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return import('./Math/Gcd');

          case 2:
            _Gcd = _context.sent;
            return _context.abrupt("return", _Gcd["default"]({
              x: x,
              y: y
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}

function k(num) {
  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
    var _k;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return import('./Math/k');

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
}

function nCr() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$n = _ref2.n,
      n = _ref2$n === void 0 ? 1 : _ref2$n,
      _ref2$r = _ref2.r,
      r = _ref2$r === void 0 ? 1 : _ref2$r;

  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
    var _nCr;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return import('./Math/nCr');

          case 2:
            _nCr = _context3.sent;
            return _context3.abrupt("return", _nCr["default"]({
              n: n,
              r: r
            }));

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
}

function nCrs() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref3$n = _ref3.n,
      n = _ref3$n === void 0 ? 1 : _ref3$n,
      _ref3$r = _ref3.r,
      r = _ref3$r === void 0 ? 1 : _ref3$r;

  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee4() {
    var _nCrs;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return import('./Math/nCrs');

          case 2:
            _nCrs = _context4.sent;
            return _context4.abrupt("return", _nCrs["default"]({
              n: n,
              r: r
            }));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
}

function nPr() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref4$n = _ref4.n,
      n = _ref4$n === void 0 ? 1 : _ref4$n,
      _ref4$r = _ref4.r,
      r = _ref4$r === void 0 ? 1 : _ref4$r;

  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee5() {
    var _nPr;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return import('./Math/nPr');

          case 2:
            _nPr = _context5.sent;
            return _context5.abrupt("return", _nPr["default"]({
              n: n,
              r: r
            }));

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
}

function Pow() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref5$num = _ref5.num,
      num = _ref5$num === void 0 ? 1 : _ref5$num,
      _ref5$n = _ref5.n,
      n = _ref5$n === void 0 ? 1 : _ref5$n;

  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee6() {
    var _Pow;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return import('./Math/Pow');

          case 2:
            _Pow = _context6.sent;
            return _context6.abrupt("return", _Pow["default"]({
              num: num,
              n: n
            }));

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
}

function Random() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee7() {
    var _Random;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return import('./Math/Random');

          case 2:
            _Random = _context7.sent;
            return _context7.abrupt("return", _Random["default"](num));

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
}

export { Gcd, nCr, nCrs, nPr, Pow, Random, k };