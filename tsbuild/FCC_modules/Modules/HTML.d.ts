declare class HTML {
    private _dom;
    constructor(_dom: any);
    getid(id: string, num?: number): this;
    hasclass(get?: string): this;
    addClass(Class?: string): this;
    removeClass(Class?: string): this;
    html(html?: string): this;
    title(title: string): this;
}
declare const Html: HTML;
export { Html };
