import React from 'react';
import { useState, useEffect } from 'react';
import LoadingDisplay from '../LoadingDisplay/LoadingDisplay';
import MakeupCard from '../MakeupCard/MakeupCard';
import Search from '../Search/Search';
import './MakeupContainer.css';

const MakeupContainer = ({ id }) => {
  const [makeupByType, setMakeupByType] = useState([]);
  const [filteredMakeup, setFilteredMakeup] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMakeupByType = async (id) => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${id}`
        );
        const makeupData = await res.json();
        const cleanMakeup = makeupData.filter(
          (makeup) => makeup.tag_list.length > 0
        );
        setMakeupByType(cleanMakeup);
        setFilteredMakeup(cleanMakeup);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    getMakeupByType(id);
  }, [id]);

  const filterMakeup = (searchInput) => {
    const matchedMakeup = makeupByType.filter((makeup) => {
      if (makeup.brand !== null) {
        if (makeup.brand.toLowerCase().includes(searchInput)) {
          return makeup;
        }
      }
      if (makeup.product_type !== null) {
        if (makeup.product_type.toLowerCase().includes(searchInput)) {
          return makeup;
        }
      }
      if (makeup.name !== null) {
        if (makeup.name.toLowerCase().includes(searchInput)) {
          return makeup;
        }
      }
      if (makeup.description !== null) {
        if (makeup.description.toLowerCase().includes(searchInput)) {
          return makeup;
        }
      }
    });
    setFilteredMakeup(matchedMakeup);
  };

  const makeupCards = filteredMakeup.map((makeup) => {
    return <MakeupCard key={makeup.category + makeup.id} makeup={makeup} />;
  });
  return (
    <section className="makeup-container-wrapper">
      {isLoading && <LoadingDisplay />}
      {!isLoading && <Search filterMakeup={filterMakeup} category={id} />}
      {!isLoading && (
        <section className="makeup-container">{makeupCards}</section>
      )}
    </section>
  );
};

export default MakeupContainer;
