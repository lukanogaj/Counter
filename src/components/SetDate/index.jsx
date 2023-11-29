// import { useState } from 'react';
import styles from './index.module.scss';

const SetDate = () => {
  const date = new Date();
  date.getDate();
  return (
    <div className={styles.setDate}>
      <p className={styles.dateParagraph}>{date.toDateString()}</p>
    </div>
  );
};

export default SetDate;
