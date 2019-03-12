import React from 'react';
import PropTypes from 'prop-types';

export default function Quote({ quote, characterName, characterImage }) {
  return (
    <div>
      <p>{quote}</p>
      <p>{characterName}</p>
      <img src={characterImage} />
    </div>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired
};
