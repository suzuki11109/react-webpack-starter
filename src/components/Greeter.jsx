import React from 'react';
import styles from './Greeter.css';

//stateless component in functional style
export default function({ hello }) {
  return <div className={styles.root}>{hello}</div>;
}
