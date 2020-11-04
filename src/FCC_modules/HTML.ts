class HTML
{
    constructor(private _dom: any){}
    public getid(id: string): this
    {
        if (id.indexOf('.') != -1)
        {
            id = id.replace('.', '')
            this._dom = document.getElementsByClassName(id)
            return this
        } else if (id.indexOf('#') != -1)
        {
            id = id.replace('#', '')
            this._dom = document.getElementById(id)
            return this
        } else
        {
            this._dom = document.getElementsByTagName(id)
            return this
        }
    }
    public hasclass(id :string="", get :string=""):this
    {
        this._dom.className === get
        return this
    }
    public addClass(Class:string = ""):this
    {
        this._dom.classList.add(Class)
        return this
    }
    public removeClass(Class:string = ""):this
    {
        this._dom.classList.remove(Class)
        return this
    }
    public html(html = "")
    {
        this._dom.innrHTML = html ? this._dom.innerHTML = html : this._dom.innerHTML
        return this
    }
}
const html = new HTML(null)
export default html