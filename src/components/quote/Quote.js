import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/quote.css';

function Quote({ quote, characterName, characterImage }) {
  return (
    <div className={styles.quotes}>
      <h1>{quote}</h1>
      <h2>{characterName}</h2>
      <img src={characterImage} alt={characterName}></img>
    </div>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired
};

export default Quote;
