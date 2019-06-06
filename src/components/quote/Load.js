import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/load.css';

export default function Load({ fetch }) {
  return (
    <div className={styles.load}>
      <button onClick={fetch}>Next Quote</button>
    </div>
  );
}

Load.propTypes = {
  fetch: PropTypes.func.isRequired
};
