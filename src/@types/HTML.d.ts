declare class HTML {
    private _dom;
    constructor(_dom: any);
    getid(id: string): this;
    hasclass(id?: string, get?: string): this;
    addClass(Class?: string): this;
    removeClass(Class?: string): this;
    html(html?: string): this;
}
declare const html: HTML;
export default html;
