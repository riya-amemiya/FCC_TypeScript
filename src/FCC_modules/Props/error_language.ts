const error_language_Local = {
    text: 'ja',
    get(): any
    {
        return this.text;
    },
    set(error_language: string): void
    {
        this.text = error_language;
    },
    haslanguage(haslanguage: string): boolean
    {
        if (~this.text.indexOf(haslanguage))
            return true;


        else
            return false;
    }
};
const error_language = error_language_Local;
export default error_language