import React, { useState } from 'react';
import './Search.css';

const Search = ({ filterMakeup }) => {
  const [searchInput, setSearchInput] = useState('');

  // const clearSearchInput = () => {
  //   setSearchInput('');
  // };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    filterMakeup(e.target.value.toLowerCase());
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        className="search-bar"
        aria-label="search bar"
        placeholder="Search..."
        name="searchInput"
        value={searchInput}
        onChange={(e) => handleChange(e)}
        autoComplete="off"
      />
      {/* <button className="clear-btn" type="submit" onClick={clearSearchInput}>
        clear
      </button> */}
    </form>
  );
};

export default Search;
