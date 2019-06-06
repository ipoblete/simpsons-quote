import React from 'react';
import PropTypes from 'prop-types';
import Load from './Load';
import styles from '../css/quote.css';

export default function Quote({ quote, characterName, characterImage, fetch }) {
  return (
    <div className={styles.quotes}>
      <h1>{quote}</h1>
      <h2>{characterName}</h2>
      <img src={characterImage} />
      <Load fetch={fetch} />
    </div>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired
};
