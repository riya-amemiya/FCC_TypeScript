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

function _HelloWorld() {
  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
    var React;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return import('react');

          case 2:
            React = _context.sent;
            return _context.abrupt("return", React.createElement("h1", null, "Hello World"));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}

export default function HelloWorld(callback) {
  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
    var text;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _HelloWorld();

          case 2:
            text = _context2.sent;
            return _context2.abrupt("return", callback(text));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
}