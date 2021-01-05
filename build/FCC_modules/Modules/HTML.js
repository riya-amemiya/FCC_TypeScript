function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HTML = /*#__PURE__*/function () {
  function HTML(_dom) {
    _classCallCheck(this, HTML);

    return this._dom;
  }

  _createClass(HTML, [{
    key: "getid",
    value: function getid(id) {
      if (id.indexOf('.') != -1) {
        id = id.replace('.', '');
        this._dom = document.getElementsByClassName(id)[0];
        return this;
      } else if (id.indexOf('#') != -1) {
        id = id.replace('#', '');
        this._dom = document.getElementById(id);
        return this;
      } else {
        this._dom = document.getElementsByTagName(id)[0];
        return this;
      }
    }
  }, {
    key: "hasclass",
    value: function hasclass() {
      var get = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      this._dom = this._dom.className === get;
      return this;
    }
  }, {
    key: "addClass",
    value: function addClass() {
      var Class = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      this._dom.classList.add(Class);

      return this;
    }
  }, {
    key: "removeClass",
    value: function removeClass() {
      var Class = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      this._dom.classList.remove(Class);

      return this;
    }
  }, {
    key: "html",
    value: function html() {
      var _html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

      _html ? this._dom.innerHTML = _html : this._dom = this._dom.innerHTML;
      return this;
    }
  }]);

  return HTML;
}();

var Html = new HTML(null);
export { Html };