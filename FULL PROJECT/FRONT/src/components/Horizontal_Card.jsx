// HorizontalCard.js
import React, { useState } from 'react';

const HorizontalCard = ({ themeTitle, imageUrl, description, onClick }) => {
  const [isHovered, setHovered] = useState(false);

  const cardStyles = {
    width: '200px',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
  };

  const imageStyles = {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
  };

  const contentStyles = {
    padding: '10px',
  };

  return (
    <div
      className="horizontal-card"
      style={cardStyles}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <img src={imageUrl} alt={themeTitle} style={imageStyles} />
      <div style={contentStyles}>
        <h3>{themeTitle}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HorizontalCard;
