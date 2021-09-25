import React from 'react';
import { useState, useEffect } from 'react';
import MakeupCard from '../MakeupCard/MakeupCard';
import './MakeupContainer.css';

const MakeupContainer = ({ id }) => {
  const [eyes, setEyes] = useState([]);
  const [face, setFace] = useState([]);
  const [lipstick, setLips] = useState([]);
  const [cheeks, setCheeks] = useState([]);
  const [nails, setNails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const getData = async (path) => {
    try {
      const res = await fetch(
        `http://makeup-api.herokuapp.com/api/v1/products.json?${path}`
      );
      const lipsticks = await res.json();
      setLips(lipsticks);
      console.log(lipsticks);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getData('product_type=lipstick');
  }, []);

  return <section></section>;
};

export default MakeupContainer;
