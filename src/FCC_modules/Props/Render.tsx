import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default function Render({ Dom, id }: { Dom: () => JSX.Element; id: string; }): void
{
    ReactDOM.render(<Dom />, document.getElementById(id));
}
