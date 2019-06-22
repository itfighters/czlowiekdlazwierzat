import React, { useState } from "react";

const Confirm = ({ submit }) => {
  var [number, updateNumber] = useState("");
  return (
    <form
      onSubmit={e => {
        submitForm(e);
      }}
    >
      <div>
        Na podany numer telefonu zostanie wysłany 6 cyfrowy kod weryfikacyjny.
      </div>
      <label>Podaj kod z sms</label>
      <input
        type="tel"
        pattern="[0-9]{6}"
        placeholder="6 cyfrowy kod"
        value={number}
        onChange={e => updateNumber(e.target.value)}
        title="6 cyfrowy kod"
        required
      />
      <input type="submit" />
    </form>
  );

  function submitForm(e) {
    e.preventDefault();
    submit();
  }
};

export default Confirm;
