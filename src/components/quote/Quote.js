import React from 'react';
import PropTypes from 'prop-types';

function Quote ({ characterName, quote, characterImage }) {
  return (
    <>
    <p>{characterName}</p>
    <p>{quote}</p>
    <p>{characterImage}</p>
    </>
  )
}

Quote.propTypes = {
  characterName: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired
}

export default Quote;

