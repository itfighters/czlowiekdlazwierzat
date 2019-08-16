import React from "react";
import Checkbox from "../../components/checkbox/checkbox";

function AcceptComponent({ checked, onChange, onClick }) {
  return (
    <div className="accept-line">
      <Checkbox
        text={"Akceptuj "}
        checked={checked}
        onChange={onChange}
        required
      />
      <span className="terms" onClick={onClick}>
        regulamin
      </span>
    </div>
  );
}

export default AcceptComponent;
