import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote, characterName, characterImage }) {
  return (
    <>
    <h1>{characterName}</h1>
    <h2>{quote}</h2>
    <img src={characterImage} alt={characterName}></img>
    </>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired
};

export default Quote;
