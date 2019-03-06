import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote, characterName, characterImage }) {
  return (
    <div>
      <p>{quote}</p>
      <p>{characterName}</p>
      <p><img src={characterImage} /></p>
    </div>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired
};

export default Quote;
