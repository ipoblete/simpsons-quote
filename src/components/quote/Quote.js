import React from 'react';
import PropTypes from 'prop-types';

export default function Quote({ quote, characterName, characterImage }) {
  return (
    <div>
      <h2>{quote}</h2>
      <p>{characterName}</p>
      <img src={characterImage} />
    </div>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired
};
