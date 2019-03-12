import { hot } from 'react-hot-loader/root';

import React from 'react';

import './kayak-bootstrap/bootstrap.css';

import styles from './app.css';

const App = () => (
  <div className={styles.container}>
    <h4 className={styles.title}>Kayak UI Academy</h4>
  </div>
);

export default hot(App);
