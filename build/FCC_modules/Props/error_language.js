var error_language_Local = {
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
var error_language = error_language_Local;
export default error_language;