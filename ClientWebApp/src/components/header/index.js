import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render(){
    return (
        <header>
          <nav>
            <li><NavLink to="/"><img src="/assets/logo.png"></img></NavLink></li>
            <li><NavLink to="/">Back to Home</NavLink></li>
            <li><NavLink to="/"><img src="/assets/home.png"></img></NavLink></li>
            <li><NavLink to="/">Lista zbiórek</NavLink></li>
            <li><NavLink to="/">Zapisz się na powiadomienia</NavLink></li>
          </nav>
        </header>
    )
  }
}