import React from "react";

const Header = ({ close }) => {
  return (
    <div className="popup-header">
      <span className="btn-close" onClick={close}>
        x
      </span>
    </div>
  );
};

export default Header;
