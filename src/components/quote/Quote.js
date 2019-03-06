import React from 'react';
import PropTypes from 'prop-types';
import Load from './Load';

function Quote({ quote, characterName, characterImage, fetch }) {
  return (
    <div>
      <q>{quote}</q>
      <p>- {characterName}</p>
      <p><img src={characterImage} /></p>
      <Load fetch={fetch}/>
    </div>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired
};

export default Quote;
