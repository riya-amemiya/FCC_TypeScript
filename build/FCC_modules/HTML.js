class HTML {
  constructor(_dom) {
    this._dom = _dom;
  }

  getid(id) {
    if (id.indexOf('.') != -1) {
      id = id.replace('.', '');
      this._dom = document.getElementsByClassName(id);
      return this;
    } else if (id.indexOf('#') != -1) {
      id = id.replace('#', '');
      this._dom = document.getElementById(id);
      return this;
    } else {
      this._dom = document.getElementsByTagName(id);
      return this;
    }
  }

  hasclass(id = "", get = "") {
    this._dom.className === get;
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
    this._dom.innrHTML = html ? this._dom.innerHTML = html : this._dom.innerHTML;
    return this;
  }

}

const html = new HTML(null);
export default html;