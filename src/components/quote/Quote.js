import React from 'react';
import PropTypes from 'prop-types';
import Load from './Load';


const Quote = ({ quote, characterName, characterImage, fetch }) => {
  return (
    <div>
      <Load fetch={fetch}/>
      <h1>{quote}</h1>
      <h2>{characterName}</h2>
      <img src={characterImage}/>
    </div>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired
};

export default Quote;
