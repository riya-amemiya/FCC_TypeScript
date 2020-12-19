interface error_language_type
{
    text: 'ja' | 'ja_JP' | 'en' | 'en-US';
    get(): 'ja' | 'ja_JP' | 'en' | 'en-US';
    set(error_language: string): void;
    haslanguage(haslanguage: string): boolean;
}
const error_language: error_language_type = {
    text: 'ja',
    get(): 'ja' | 'ja_JP' | 'en' | 'en-US'
    {
        return this.text;
    },
    set(error_language: string): void
    {
        if (/^ja$|^ja_JP$/.test(error_language) || /^en$|^en-US$/.test(error_language))
        {
            this.text = error_language;
        } else
        {
            console.error("サポートされていない文字コードです\nIt is an unsupported character code")
        }
    },
    haslanguage(haslanguage: string): boolean
    {
        if (~this.text.indexOf(haslanguage))
            return true;
        else
            return false;
    }
};
export default error_language
