import React from 'react';
import './LoadingDisplay.css';

const LoadingDisplay = () => {
  return (
    <div className="pulse-wrapper">
      <div className="pulse-container">
        <div className="pulse-bubble pulse-bubble-1"></div>
        <div className="pulse-bubble pulse-bubble-2"></div>
        <div className="pulse-bubble pulse-bubble-3"></div>
      </div>
    </div>
  );
};

export default LoadingDisplay;
