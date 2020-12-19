import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default function render({ Dom, id }) {
    ReactDOM.render(React.createElement(Dom, null), document.getElementById(id));
}