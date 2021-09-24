import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/clean-beauty-logo.png';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <img className="nav-logo" src={logo} alt="clean beauty logo" />
      <ul className="nav-links">
        <li>
          <NavLink to="/eye" className="nav-link" id="eye">
            eye
          </NavLink>
        </li>
        <li>
          <NavLink to="/face" className="nav-link" id="face">
            face
          </NavLink>
        </li>
        <li>
          <NavLink to="/cheek" className="nav-link" id="cheek">
            cheek
          </NavLink>
        </li>
        <li>
          <NavLink to="/lip" className="nav-link" id="lip">
            lip
          </NavLink>
        </li>
        <li>
          <NavLink to="/nail" className="nav-link" id="nail">
            nail
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
