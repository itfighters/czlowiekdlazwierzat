import React, { Component } from "react";
import '../../styles/comps/checkbox.scss';
export default class Checkbox extends Component
{
    render()
    {
        var { text, checked, onChange, id } = this.props;

        return (
            <label class="checkbox-container">
                {text}
                <input
                    type="checkbox"
                    value={id}
                    checked={checked}
                    onChange={onChange} ></input>
                <span class="checkmark"></span>
            </label>
        );
    }
}