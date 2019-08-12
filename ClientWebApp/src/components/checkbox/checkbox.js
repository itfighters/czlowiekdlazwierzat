import React, { Component } from "react";
import "../../styles/comps/checkbox.scss";
export default class Checkbox extends Component {
  render() {
    var { text, checked, onChange, id, ...rest } = this.props;

    return (
      <label className="checkbox-container">
        <input
          type="checkbox"
          value={id}
          checked={checked}
          onChange={onChange}
          {...rest}
        ></input>
        <label>{text}</label>
        <span className="checkmark"></span>
      </label>
    );
  }
}
