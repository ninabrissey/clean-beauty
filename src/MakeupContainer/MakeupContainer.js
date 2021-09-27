import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import MakeupCard from '../MakeupCard/MakeupCard';
import './MakeupContainer.css';

const MakeupContainer = ({ id }) => {
  const [blush, setBlush] = useState([]);
  const [bronzer, setBronzer] = useState([]);
  const [eyesbrows, setEyebrows] = useState([]);
  const [eyeliner, setEyeliner] = useState([]);
  const [eyeshadow, setEyeshadow] = useState([]);
  const [foundation, setFoundation] = useState([]);
  const [lipLiner, setLip_liner] = useState([]);
  const [lipstick, setLipstick] = useState([]);
  const [nailPolish, setNail_polish] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const getMakeupByType = useCallback(
    async (id) => {
      try {
        const res = await fetch(
          `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${id}`
        );
        const makeupByType = await res.json();
        const cleanMakeupByType = makeupByType.filter(
          (makeup) => makeup.tag_list.length > 0
        );
        console.log('cleanMakeupByType:', cleanMakeupByType);

        // const set = 'set' + id.charAt(0).toUpperCase() + id.slice(1);

        setBlush(cleanMakeupByType);
        console.log('blush', blush);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      }
    },
    [blush, id]
  );

  useEffect(() => {
    getMakeupByType(id);
  }, [getMakeupByType, id]);

  return <section></section>;
};

export default MakeupContainer;
