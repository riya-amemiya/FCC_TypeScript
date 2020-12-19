class HTML {
    constructor(_dom) {
        this._dom = _dom;
        return this._dom;
    }
    getid(id, num = 0) {
        if (id.indexOf('.') != -1) {
            id = id.replace('.', '');
            this._dom = document.getElementsByClassName(id)[num];
            return this;
        }
        else if (id.indexOf('#') != -1) {
            id = id.replace('#', '');
            this._dom = document.getElementById(id);
            return this;
        }
        else {
            this._dom = document.getElementsByTagName(id)[num];
            return this;
        }
    }
    hasclass(get = "") {
        this._dom = this._dom.className === get;
        return this;
    }
    addClass(Class = "") {
        this._dom.classList.add(Class);
        return this;
    }
    removeClass(Class = "") {
        this._dom.classList.remove(Class);
        return this;
    }
    html(html = "") {
        if (html) {
            this._dom = this._dom.innerHTML;
        }
        else {
            this._dom.innerHTML = html;
        }
        return this;
    }
    title(title) {
        this._dom.innerHTML = title;
        return this;
    }
}
const Html = new HTML(null);
export { Html };
