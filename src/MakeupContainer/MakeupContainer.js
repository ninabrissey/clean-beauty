import React from 'react';
import { useState, useEffect } from 'react';
import MakeupCard from '../MakeupCard/MakeupCard';
import './MakeupContainer.css';

const MakeupContainer = ({ id }) => {
  const [blush, setBlush] = useState([]);
  const [bronzer, setBronzer] = useState([]);
  const [eyesbrows, setEyebrows] = useState([]);
  const [eyeliner, setEyeliner] = useState([]);
  const [eyeshadow, setEyeshadow] = useState([]);
  const [foundation, setFoundation] = useState([]);
  const [lipLiner, setLipLiner] = useState([]);
  const [lipstick, setLipstick] = useState([]);
  const [nailPolish, setNailPolish] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const getMakeupByType = async (path, id) => {
    try {
      const res = await fetch(
        `http://makeup-api.herokuapp.com/api/v1/products.json?${path}`
      );
      const makeupByType = await res.json();
      console.log(lipsticks);
      [`set${id}`](makeupByType);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getMakeupByType(`product_type=${id}`);
  }, [getMakeupByType]);

  // [blush, bronzer, eyesbrows, eyeliner, eyeshadow, foundation, lipLiner, lipstick, nailPolish]

  return <section></section>;
};

export default MakeupContainer;
