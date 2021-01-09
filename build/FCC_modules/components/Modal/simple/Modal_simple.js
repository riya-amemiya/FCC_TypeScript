import * as React from 'react';
export default (function (props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-simple"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-header"
  }), /*#__PURE__*/React.createElement("div", {
    className: "modal-introduction"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "modal-h2"
  }, props.h2), /*#__PURE__*/React.createElement("p", null, props.text), /*#__PURE__*/React.createElement("p", null, props.text2)), /*#__PURE__*/React.createElement("button", {
    className: "modal-close-btn blake",
    onClick: function onClick() {
      props.blake();
    }
  }, "\u3068\u3058\u308B")));
});