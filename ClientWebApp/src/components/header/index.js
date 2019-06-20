import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <NavLink className="logo-nav" to="/">
          <img alt="ikona nagłówka" src="/assets/logo-fundacja.svg"></img>
        </NavLink>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to="/">
                <img
                  alt="ikona nagłówka"
                  className="icon-back"
                  src="/assets/arrow-back.svg"
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img
                  alt="ikona nagłówka"
                  className="icon-home"
                  src="/assets/home.png"
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/tiles">Lista zbiórek</NavLink>
            </li>
            <li>
              <NavLink className="btn btn-primary" to="/signup">
                Zapisz się na powiadomienia
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
