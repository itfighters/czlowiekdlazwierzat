import React from "react";

const Toast = ({ visible, state, text, onClose, visibleTime }) => {
  if (!visible) {
    return null;
  }

  window.setTimeout(() => {
    if (onClose) {
      onClose();
    }
  }, visibleTime || 3000);

  return <div className={"toast " + state}>{text}</div>;
};

export default Toast;
