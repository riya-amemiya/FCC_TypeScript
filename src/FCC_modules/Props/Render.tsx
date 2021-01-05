
async function react({ Dom, id }: { Dom: JSX.Element; id: string; }): Promise<void>
{
    const DOM = Dom
    const ReactDOM = await import(/* webpackChunkName: "_FCC_react-dom" */'react-dom');
    ReactDOM.render(DOM, document.getElementById(id));
}
export default function _render({ Dom, id }: { Dom: JSX.Element; id: string; }): void
{
    react({ Dom, id })
}
