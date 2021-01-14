var error_language_Local = {
    text: 'ja',
    get: function () {
        return this.text;
    },
    set: function (error_language) {
        this.text = error_language;
    },
    haslanguage: function (haslanguage) {
        if (~this.text.indexOf(haslanguage))
            return true;
        else
            return false;
    }
};
var error_language = error_language_Local;
export default error_language;
//# sourceMappingURL=error_language.js.map