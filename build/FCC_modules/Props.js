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

import error_language from './Props/error_language';
import cal from './Props/calClass';

function _min(num) {
  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
    var _min;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return import('./Math/Min');

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
}

function min(_ref) {
  var num = _ref.num,
      callback = _ref.callback;
  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
    var num_2;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _min(num);

          case 2:
            num_2 = _context2.sent;
            callback(num_2);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
}

function _max(num) {
  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee3() {
    var _min;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return import('./Math/Max');

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
}

function max(_ref2) {
  var num = _ref2.num,
      callback = _ref2.callback;
  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee4() {
    var num_2;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _max(num);

          case 2:
            num_2 = _context4.sent;
            callback(num_2);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
}

function _sleep(ms) {
  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee5() {
    var _sleep;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return import('./Props/sleep');

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
}

function sleep(_ref3) {
  var ms = _ref3.ms,
      callback = _ref3.callback;
  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee6() {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _sleep(ms);

          case 2:
            callback();

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
}

function _Zeller() {
  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref4$y = _ref4.y,
      y = _ref4$y === void 0 ? 2000 : _ref4$y,
      _ref4$m = _ref4.m,
      m = _ref4$m === void 0 ? 1 : _ref4$m,
      _ref4$d = _ref4.d,
      d = _ref4$d === void 0 ? 1 : _ref4$d;

  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee7() {
    var _Zeller;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return import('./Props/Zeller');

          case 2:
            _Zeller = _context7.sent;
            return _context7.abrupt("return", _Zeller["default"]({
              y: y,
              m: m,
              d: d
            }));

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
}

function Zeller(_ref5) {
  var _ref5$y = _ref5.y,
      y = _ref5$y === void 0 ? 2000 : _ref5$y,
      _ref5$m = _ref5.m,
      m = _ref5$m === void 0 ? 1 : _ref5$m,
      _ref5$d = _ref5.d,
      d = _ref5$d === void 0 ? 1 : _ref5$d,
      callback = _ref5.callback;
  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee8() {
    var text;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _Zeller({
              y: y,
              m: m,
              d: d
            });

          case 2:
            text = _context8.sent;
            return _context8.abrupt("return", callback(text));

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
}

function zero(num) {
  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee9() {
    var _zero;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return import('./Props/Zero');

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
}

function birthday(yer, mon, day) {
  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee10() {
    var _birthday;

    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return import('./Props/birthday');

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
}

function wait(callBack) {
  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee11() {
    var _wait;

    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return import('./Props/wait');

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
}

function render(_ref6) {
  var Dom = _ref6.Dom,
      id = _ref6.id;
  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee12() {
    var _render;

    return regeneratorRuntime.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return import('./Props/render');

          case 2:
            _render = _context12.sent;

            _render["default"]({
              Dom: Dom,
              id: id
            });

          case 4:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));
}

export { error_language, cal, sleep, Zeller, zero, birthday, wait, render, min, max };