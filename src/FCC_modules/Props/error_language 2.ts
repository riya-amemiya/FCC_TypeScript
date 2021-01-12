const error_language = {
    text: 'ja',
    get()
    {
        return this.text;
    },
    set(error_language: string)
    {
        this.text = error_language;
    },
    haslanguage(haslanguage: string)
    {
        if (~this.text.indexOf(haslanguage))
            return true;
        else
            return false;
    }
};
export default error_language
