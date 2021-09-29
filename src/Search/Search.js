import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const Search = ({ filterMakeup, category }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    filterMakeup(e.target.value.toLowerCase());
  };

  return (
    <form className="search-bar-form">
      <input
        className="search-bar"
        aria-label="search bar"
        placeholder={`Search ${category.split('_').join(' ')}...`}
        name="searchInput"
        value={searchInput}
        onChange={(e) => handleChange(e)}
        autoComplete="off"
      />
    </form>
  );
};

export default Search;

Search.propTypes = {
  searchInput: PropTypes.string,
};
