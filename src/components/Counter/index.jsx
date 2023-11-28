import React from 'react';
import styles from './index.module.scss';
import SetDate from '../SetDate';
// import SetWeek from '../SetWeek';
import SetCount from '../SetCount';

const Counter = () => {
  return (
    <div className={styles.counterDays}>
      <h1>Days and Weeks Counter</h1>
      {/* <SetWeek /> */}
      <SetCount />
      <SetDate />
    </div>
  );
};

export default Counter;
