import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Header = ({ history }) => {
  var [showButtons, updateVisibilityButtons] = useState(
    window.location.href.indexOf("details") !== -1
  );

  history.listen(location => {
    updateVisibilityButtons(location.pathname.indexOf("details") !== -1);
  });

  return (
    <header className="main-header">
      <NavLink className="logo-nav" to="/">
        <img alt="ikona nagłówka" src="/assets/logo-fundacja.svg" />
      </NavLink>
      <nav className="main-nav">
        <ul>
          {showButtons && (
            <>
              <li>
                <NavLink to="/tiles">
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
            </>
          )}
          <li>
            <NavLink to="/tiles">Lista zbiórek</NavLink>
          </li>
          <li>
            <NavLink className="btn btn-primary" to="/singup">
              Zapisz się na powiadomienia
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
