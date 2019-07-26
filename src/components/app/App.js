import React from 'react';
import SimpsonsQuote from '../../containers/facts/SimpsonsQuote';
import styles from '../css/app.css';
import 'normalize.css';

export default function App() {
  return (
    <div className={styles.app}>
      <h1>SIMPSONS QUOTES</h1>
      <SimpsonsQuote />
    </div>
  );
}
