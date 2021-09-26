import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/clean-beauty-logo.png';
import './Nav.css';

const Nav = ({ handleChange }) => {
  return (
    <nav className="nav">
      <img className="nav-logo" src={logo} alt="clean beauty logo" />
      <ul className="nav-links">
        <li>
          <NavLink to="/categories/eyebrow" className="nav-link" id="eyebrow">
            eyebrow
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories/eyeliner" className="nav-link" id="eyeliner">
            eyeliner
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories/eyeshadow"
            className="nav-link"
            id="eyeshadow"
          >
            eyeshadow
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories/foundation"
            className="nav-link"
            id="foundation"
          >
            foundation
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories/blush" className="nav-link" id="blush">
            blush
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories/bronzer" className="nav-link" id="bronzer">
            bronzer
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories/lipstick" className="nav-link" id="lipstick">
            lipstick
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories/lipliner" className="nav-link" id="lipliner">
            lip liner
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories/mascara" className="nav-link" id="mascara">
            mascara
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories/nailpolish"
            className="nav-link"
            id="nailpolish"
          >
            nail polish
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
