declare type int = number;
interface joketype {
    Hello: 'Hello';
    World: 'World';
}
declare const joke: joketype;
interface error_language_type {
    text: 'ja' | 'ja_JP' | 'en' | 'en-US';
    get(): 'ja' | 'ja_JP' | 'en' | 'en-US';
    set(error_language: string): void;
    haslanguage(haslanguage: string): boolean;
}
export { int, joke, joketype, error_language_type };
