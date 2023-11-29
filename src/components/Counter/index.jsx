import React from 'react';
import styles from './index.module.scss';
import SetCount from '../SetCount';

const Counter = () => {
  return (
    <div className={styles.counterDays}>
      <h1>Days and Weeks Counter</h1>
      <SetCount />
    </div>
  );
};

export default Counter;
