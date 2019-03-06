import React from 'react';
import PropTypes from 'prop-types';
import Load from './Load';

function Quote({ quote, characterName, characterImage, fetch, loading }) {
  return (
    <>
      {loading ? <h1>LOADING...</h1> :
        <div>
          <q>{quote}</q>
          <p>- {characterName}</p>
          <p><img src={characterImage} /></p>
          <Load fetch={fetch}/>
        </div>
      }
    </>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Quote;
