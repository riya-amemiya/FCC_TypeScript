const error_language_Local = {
  text: 'ja',

  get() {
    return this.text;
  },

  set(error_language) {
    this.text = error_language;
  },

  haslanguage(haslanguage) {
    if (~this.text.indexOf(haslanguage)) return true;else return false;
  }

};
const error_language = error_language_Local;
export default error_language;