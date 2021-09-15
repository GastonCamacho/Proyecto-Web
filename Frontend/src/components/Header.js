import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/*LOGO*/}
          <div id="logo">
            <img
              src={logo}
              className="app-logo"
              alt="logo"
            />
            <span id="brand">
              {" "}
              <strong>BLOG</strong>NSLP{" "}
            </span>
          </div>
          {/*MENU*/}
          <nav id="menu">
            <ul>
              <li>
                <NavLink to="/home" activeClassName="active" >Inicio</NavLink>
              </li>
              <li>
                <NavLink to="/blog" activeClassName="active">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/formulario" activeClassName="active">Formulario</NavLink>
              </li>
              <li>
                <NavLink to="/peliculas" activeClassName="active">Películas</NavLink>
              </li>
            </ul>
          </nav>
          {/*LIMPIAR FLOTADOS*/}
          <div className="clearfix"></div>
        </div>
      </header>
    );
  }
}

export default Header;
