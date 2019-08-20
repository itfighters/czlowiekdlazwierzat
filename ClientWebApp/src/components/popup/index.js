import React, { Component } from "react";

import Header from "./header";
import Footer from "./footer";

export default class Popup extends Component {
  render() {
    var { visible } = this.props;
    if (!visible) {
      return null;
    }

    return (
      <>
        <div
          onClick={this.props.close}
          className="fade modal-backdrop show"
        ></div>
        <div className="popup-container">
          <div className="popup">
            <Header close={this.props.close} />
            <div className="body">{this.props.children}</div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
