import React from 'react';
import { useState, useEffect } from 'react';
import MakeupCard from '../MakeupCard/MakeupCard';
import './MakeupContainer.css';

const MakeupContainer = ({ id }) => {
  const [makeupByType, setMakeupByType] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMakeupByType = async (id) => {
      try {
        const res = await fetch(
          `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${id}`
        );
        const makeupData = await res.json();
        const cleanMakeup = makeupData.filter(
          (makeup) => makeup.tag_list.length > 0
        );
        setMakeupByType(cleanMakeup);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    getMakeupByType(id);
  }, [id]);

  const makeupCards = makeupByType.map((makeup) => {
    return <MakeupCard key={makeup.category + makeup.id} makeup={makeup} />;
  });
  return <section className="makeup-container">{makeupCards}</section>;
};

export default MakeupContainer;
