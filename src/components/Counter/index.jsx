import React from 'react';
import styles from './index.module.scss';
import SetDate from '../SetDate';
import StepSet from '../StepSet';
import SetCount from '../SetCount';

const DaysCounter = () => {
  return (
    <div className={styles.counterDays}>
      <h1>Days step Counter</h1>
      <StepSet />
      <SetCount />
      <SetDate />
    </div>
  );
};

export default DaysCounter;
