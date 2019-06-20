import React, { Component } from "react";
import About from "./about";
import Partners from "./partners";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Partners />
        <About />
      </footer>
    );
  }
}
