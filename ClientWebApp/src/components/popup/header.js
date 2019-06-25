import React from "react";

const Header = ({ close }) => {
  return (
    <div>
      Header komponentus<button onClick={close}>x</button>
    </div>
  );
};

export default Header;
