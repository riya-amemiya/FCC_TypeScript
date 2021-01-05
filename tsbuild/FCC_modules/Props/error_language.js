const error_language = {
    text: 'ja',
    get() {
        return this.text;
    },
    set(error_language) {
        this.text = error_language;
    },
    haslanguage(haslanguage) {
        if (~this.text.indexOf(haslanguage))
            return true;
        else
            return false;
    }
};
export default error_language;
//# sourceMappingURL=error_language.js.map