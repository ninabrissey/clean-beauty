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
          <NavLink to="" className="nav-link">
            eye
          </NavLink>
        </li>
        <li>
          <NavLink to="" className="nav-link">
            face
          </NavLink>
        </li>
        <li>
          <NavLink to="" className="nav-link">
            cheek
          </NavLink>
        </li>
        <li>
          <NavLink to="" className="nav-link">
            lip
          </NavLink>
        </li>
        <li>
          <NavLink to="" className="nav-link">
            nail
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
