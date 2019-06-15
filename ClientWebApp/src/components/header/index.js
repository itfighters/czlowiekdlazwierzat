import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render(){
    return (
        <header className="main-header">
            <NavLink className="logo-nav" to="/"><img src="/assets/logo-fundacja.svg"></img></NavLink>
          <nav className="main-nav">
            <ul>
              <li><NavLink to="/"><img className="icon-back" src="/assets/arrow-back.svg"/></NavLink></li>
              <li><NavLink to="/"><img className="icon-home" src="/assets/home.png"/></NavLink></li>
              <li><NavLink className="btn btn-primary" to="/tiles">Lista zbiórek</NavLink></li>
              <li><NavLink className="btn btn-primary" to="/">Zapisz się na powiadomienia</NavLink></li>
            </ul>
          </nav>
        </header>
    )
  }
}