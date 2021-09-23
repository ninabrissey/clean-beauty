import logo from '../assets/clean-beauty-logo.png';
import './Nav.css';

import React from 'react';

const Nav = () => {
  return (
    <nav>
      <img src={logo} alt="clean beauty logo" />
      <ul>
        <li>eye</li>
        <li>face</li>
        <li>cheek</li>
        <li>lip</li>
        <li>nail</li>
      </ul>
    </nav>
  );
};

export default Nav;
