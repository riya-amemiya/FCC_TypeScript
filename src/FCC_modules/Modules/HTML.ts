class HTML
{
    constructor(private _dom: any) { return this._dom }
    public getid(id: string, num: number = 0): this
    {
        if (id.indexOf('.') != -1)
        {
            id = id.replace('.', '')
            this._dom = document.getElementsByClassName(id)[num]
            return this
        } else if (id.indexOf('#') != -1)
        {
            id = id.replace('#', '')
            this._dom = document.getElementById(id)
            return this
        } else
        {
            this._dom = document.getElementsByTagName(id)[num]
            return this
        }
    }
    public hasclass(get: string = ""): this
    {
        this._dom = this._dom.className === get
        return this
    }
    public addClass(Class: string = ""): this
    {
        this._dom.classList.add(Class)
        return this
    }
    public removeClass(Class: string = ""): this
    {
        this._dom.classList.remove(Class)
        return this
    }
    public html(html = ""): this
    {
        if (html)
        {
            this._dom = this._dom.innerHTML
        } else
        {
            this._dom.innerHTML = html
        }
        return this
    }
    public title(title: string): this
    {
        this._dom.innerHTML = title
        return this
    }
}
const Html = new HTML(null)
export { Html }