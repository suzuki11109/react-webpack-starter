import React from 'react';
import styles from './Greeter.css';

export default function({ hello }) {
  return <div className={styles.root}>{hello + 5555}</div>;
}
