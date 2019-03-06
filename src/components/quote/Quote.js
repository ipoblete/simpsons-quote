import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote, characterName, characterImage }) {
  console.log('quote', characterName);
  return (
    <>
      {quote}
      <h1>{characterName}</h1>
      <img src={characterImage} />
    </>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired
};

export default Quote;
