import React from 'react';
import PropTypes from 'prop-types';
import Load from './Load';

export default function Quote({ quote, characterName, characterImage, fetch, loading }) {
  return (
    <div>
      {loading && <h2>LOADING...</h2>}
      <q>{quote}</q>
      <p>{characterName}</p>
      <img src={characterImage} />
      <Load fetch={fetch}/>
    </div>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};
