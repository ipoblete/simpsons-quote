import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ fetch }) => {
  return (
    <div>
      <button onClick={fetch}>Refresh</button>
    </div>
  );
};

Load.propTypes = {
  fetch: PropTypes.func.isRequired
};

export default Load;
