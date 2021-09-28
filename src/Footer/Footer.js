import alcoholFree from '.././assets/alcohol-free-logo.png';
import crueltyFree from '.././assets/cruelty-free.png';
import ewg from '.././assets/ewg-logo.png';
import oilFree from '.././assets/oil-free-logo.png';
import organic from '.././assets/organic-logo.png';
import vegan from '.././assets/vegan-logo.png';
import './Footer.css';

import React from 'react';

const Footer = () => {
  return (
    <div className="tag-links">
      <a href="https://www.usda.gov/topics/organic" target="_blank">
        <img src={organic} />
      </a>
      <a href="https://vegan.org/" target="_blank">
        <img src={vegan} />
      </a>
      <a
        href="https://www.aad.org/public/everyday-care/skin-care-basics/dry/oily-skin"
        target="_blank"
      >
        <img src={oilFree} />
      </a>
      <a href="https://www.ewg.org/skindeep/" target="_blank">
        <img src={ewg} />
      </a>
      <a href="https://www.crueltyfreeinternational.org/" target="_blank">
        <img src={crueltyFree} />
      </a>
      <a
        href="https://www.fda.gov/cosmetics/cosmetics-labeling-claims/alcohol-free"
        target="_blank"
      >
        <img src={alcoholFree} />
      </a>
    </div>
  );
};

export default Footer;
