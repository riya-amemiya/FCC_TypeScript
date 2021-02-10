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

function react(_ref) {
  var Dom = _ref.Dom,
      id = _ref.id;
  return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
    var DOM, ReactDOM;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            DOM = Dom;
            _context.next = 3;
            return import('react-dom');

          case 3:
            ReactDOM = _context.sent;
            ReactDOM.render(DOM, document.getElementById(id));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}

export default function _render(_ref2) {
  var Dom = _ref2.Dom,
      id = _ref2.id;
  react({
    Dom: Dom,
    id: id
  });
}