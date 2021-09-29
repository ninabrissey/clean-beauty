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
      <a
        href="https://www.usda.gov/topics/organic"
        target="_blank"
        rel="noreferrer"
      >
        <img src={organic} alt="organic logo" />
      </a>
      <a href="https://vegan.org/" target="_blank" rel="noreferrer">
        <img src={vegan} alt="vegan logo" />
      </a>
      <a
        href="https://www.aad.org/public/everyday-care/skin-care-basics/dry/oily-skin"
        target="_blank"
        rel="noreferrer"
      >
        <img src={oilFree} alt="oil free logo" />
      </a>
      <a href="https://www.ewg.org/skindeep/" target="_blank" rel="noreferrer">
        <img src={ewg} alt="ewg logo" />
      </a>
      <a
        href="https://www.crueltyfreeinternational.org/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={crueltyFree} alt="cruelty free logo" />
      </a>
      <a
        href="https://www.fda.gov/cosmetics/cosmetics-labeling-claims/alcohol-free"
        target="_blank"
        rel="noreferrer"
      >
        <img src={alcoholFree} alt="alcohol free logo" />
      </a>
    </div>
  );
};

export default Footer;
