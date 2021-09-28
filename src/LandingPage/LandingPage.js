import React from 'react';
import './LandingPage.css';
import landingPageStatement from '.././assets/clean-beauty-statement.png';

const LandingPage = () => {
  return (
    <section className="statement-img-container">
      <img
        className="statement-img"
        src={landingPageStatement}
        alt="We have nothing to seel and so we have nothing to hide. Your source of truth for clean, vegan, eco-friendly, enviromentally responsible products. - Clean Beauty Team"
      ></img>
    </section>
  );
};

export default LandingPage;
