var error_language = {
  text: 'ja',
  get: function get() {
    return this.text;
  },
  set: function set(error_language) {
    this.text = error_language;
  },
  haslanguage: function haslanguage(_haslanguage) {
    if (~this.text.indexOf(_haslanguage)) return true;else return false;
  }
};
export default error_language;