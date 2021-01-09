import * as React from 'react';
export default (props) => (React.createElement("div", { className: `modal-simple` },
    React.createElement("div", { className: "modal-inner" },
        React.createElement("div", { className: "modal-header" }),
        React.createElement("div", { className: "modal-introduction" },
            React.createElement("h2", { className: "modal-h2" }, props.h2),
            React.createElement("p", null, props.text),
            React.createElement("p", null, props.text2)),
        React.createElement("button", { className: "modal-close-btn blake", onClick: () => { props.blake(); } }, "\u3068\u3058\u308B"))));
//# sourceMappingURL=Modal_simple.js.map