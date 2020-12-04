import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default function Render({ Dom, id }) {
    ReactDOM.render(React.createElement(Dom, null), document.getElementById(id));
}
