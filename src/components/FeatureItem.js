import React from 'react';
import './FeatureItem.css';

const FeatureItem = ({ title, description }) => {
  return (
    <div className="feature-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="/" className="learn-more">Learn more →</a>
    </div>
  );
};

export default FeatureItem;
