const error_language = {
  text: 'ja',

  get() {
    return this.text;
  },

  set(error_language) {
    if (/^ja$|^ja_JP$/.test(error_language) || /^en$|^en-US$/.test(error_language)) {
      this.text = error_language;
    } else {
      console.error("サポートされていない文字コードです\nIt is an unsupported character code");
    }
  },

  haslanguage(haslanguage) {
    if (~this.text.indexOf(haslanguage)) return true;else return false;
  }

};
export default error_language;