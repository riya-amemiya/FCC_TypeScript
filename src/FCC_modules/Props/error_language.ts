class error_language {
    static text = 'ja';
    static get() {
        return error_language.text;
    }
    static set(language: string): void {
        error_language.text = language;
    }
    static haslanguage(haslanguage: string): boolean {
        if (~error_language.text.indexOf(haslanguage)) return true;
        else return false;
    }
}
export default error_language;
