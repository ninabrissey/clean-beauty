import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/clean-beauty-logo.png';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <img className="nav-logo" src={logo} alt="clean beauty logo" />
      </Link>
      <ul className="nav-links">
        <NavLink to="/categories/blush" className="nav-link" id="blush">
          <li>blush</li>
        </NavLink>
        <NavLink to="/categories/bronzer" className="nav-link" id="bronzer">
          <li>bronzer</li>
        </NavLink>
        <NavLink to="/categories/eyebrow" className="nav-link" id="eyebrow">
          <li>eyebrow</li>
        </NavLink>
        <NavLink to="/categories/eyeliner" className="nav-link" id="eyeliner">
          <li>eyeliner</li>
        </NavLink>
        <NavLink to="/categories/eyeshadow" className="nav-link" id="eyeshadow">
          <li>eyeshadow</li>
        </NavLink>
        <NavLink
          to="/categories/foundation"
          className="nav-link"
          id="foundation"
        >
          <li>foundation</li>
        </NavLink>
        <NavLink to="/categories/lip_liner" className="nav-link" id="lip_liner">
          <li>lip liner</li>
        </NavLink>
        <NavLink to="/categories/lipstick" className="nav-link" id="lipstick">
          <li>lipstick</li>
        </NavLink>
        <NavLink to="/categories/mascara" className="nav-link" id="mascara">
          <li>mascara</li>
        </NavLink>
        <NavLink
          to="/categories/nail_polish"
          className="nav-link"
          id="nail_polish"
        >
          <li>nail polish</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
