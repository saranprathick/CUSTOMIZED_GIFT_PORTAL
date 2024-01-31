/*CardNews.js*/
import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  card: {
    maxWidth: 304,
    width: 400,
    margin: "auto",
    borderRadius: 15, // Adjusted the border radius
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
  },
  media: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    borderRadius: "15px 15px 0 0", // Adjusted the border radius
  },
  content: {
    padding: 24,
  },
  button: {
    marginTop: 24,
    width: "100%",
    backgroundColor: "#4CAF50", // Adjusted the button color
    color: "black",
    borderRadius: 15, // Adjusted the border radius
    padding: "12px 24px",
    textTransform: "uppercase", // Changed to uppercase
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  },
  chevronIcon: {
    marginLeft: 8,
  },
};

const GiftCard = ({ imageUrl, rating, quote, delivery }) => {
  const n = rating;

  return (
    <div style={styles.card}>
      <img
        src={imageUrl}
        alt="Gift Card"
        style={styles.media}
      />
      <div style={styles.content}>
        {/* {[...Array(n)].map((_, i) => (
          <span key={i}>🌟</span> // Changed the star emoji
        ))} */}
        <div>
          <h2>{quote}</h2>
          {delivery && <p>{delivery}</p>}
        </div>
        <Link to={`/${quote}`} style={{ textDecoration: 'none' }}>
          <button style={styles.button}>
            View Themes
            <span style={styles.chevronIcon}>&rarr;</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GiftCard;
