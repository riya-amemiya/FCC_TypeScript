var HTML = /** @class */ (function () {
    function HTML(_dom) {
        this._dom = _dom;
        return this._dom;
    }
    HTML.prototype.getid = function (id) {
        if (id.indexOf('.') != -1) {
            id = id.replace('.', '');
            this._dom = document.getElementsByClassName(id)[0];
            return this;
        }
        else if (id.indexOf('#') != -1) {
            id = id.replace('#', '');
            this._dom = document.getElementById(id);
            return this;
        }
        else {
            this._dom = document.getElementsByTagName(id)[0];
            return this;
        }
    };
    HTML.prototype.hasclass = function (get) {
        if (get === void 0) { get = ""; }
        this._dom = this._dom.className === get;
        return this;
    };
    HTML.prototype.addClass = function (Class) {
        if (Class === void 0) { Class = ""; }
        this._dom.classList.add(Class);
        return this;
    };
    HTML.prototype.removeClass = function (Class) {
        if (Class === void 0) { Class = ""; }
        this._dom.classList.remove(Class);
        return this;
    };
    HTML.prototype.html = function (html) {
        if (html === void 0) { html = ""; }
        html ? this._dom.innerHTML = html : this._dom = this._dom.innerHTML;
        return this;
    };
    return HTML;
}());
var Html = new HTML(null);
export { Html };
//# sourceMappingURL=HTML.js.map