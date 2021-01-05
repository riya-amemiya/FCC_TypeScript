async function react({ Dom, id }) {
    const DOM = Dom;
    const ReactDOM = await import('react-dom');
    ReactDOM.render(DOM, document.getElementById(id));
}
export default function _render({ Dom, id }) {
    react({ Dom, id });
}
//# sourceMappingURL=render.js.map