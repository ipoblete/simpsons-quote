import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/reload.css';

function Load({ fetch }) {
  return (
    <div  className={styles.load}>
      <button onClick={fetch}>Get Another Quote</button>
    </div>
  );
}

Load.propTypes = {
  fetch: PropTypes.func.isRequired
};

export default Load;
