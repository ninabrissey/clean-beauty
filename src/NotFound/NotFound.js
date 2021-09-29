import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <section className="not-found-container">
      <h3>Whoops something went wrong...</h3>
      <h4>
        Please click{' '}
        <Link to="/" className="return-home-404">
          here
        </Link>{' '}
        to go back to the home page.
      </h4>
      <h4>Or select a makeup category above.</h4>
    </section>
  );
};

export default NotFound;
