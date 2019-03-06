import React from 'react';
import PropTypes from 'prop-types';

function Quote({ image, name, quote }) {
  return (
    <>
      <p>{image}</p>
      <p>Name: {name}</p>
      <p>Quote: {quote}</p>
    </>
  );
}

Quote.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
};

export default Quote;
