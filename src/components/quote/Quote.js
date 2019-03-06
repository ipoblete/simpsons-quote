import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, characterName, characterImage }) => {
  return (
    <div>
      <h1>{quote}</h1>
      <h2>{characterName}</h2>
      <img src={characterImage}/>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired
};

export default Quote;
