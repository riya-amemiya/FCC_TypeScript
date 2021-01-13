function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _HelloWorld() {
  return _HelloWorld2.apply(this, arguments);
}

function _HelloWorld2() {
  _HelloWorld2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var React;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return import(
            /* webpackChunkName: "_FCC_react" */
            'react');

          case 2:
            React = _context.sent;
            return _context.abrupt("return", /*#__PURE__*/React.createElement("h1", null, "Hello World"));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _HelloWorld2.apply(this, arguments);
}

export default function HelloWorld(_x) {
  return _HelloWorld3.apply(this, arguments);
}

function _HelloWorld3() {
  _HelloWorld3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(callback) {
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
  return _HelloWorld3.apply(this, arguments);
}