import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote, characterName, characterImage }) {

  return (
    <>
    <p>{quote}</p>
    <p>{characterName}</p>
    <image>{characterImage}</image>
    </>
  )
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired
};