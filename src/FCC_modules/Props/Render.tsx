import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default function render({ Dom, id }: { Dom: () => JSX.Element; id: string; }): void
{
    ReactDOM.render(<Dom />, document.getElementById(id));
}
