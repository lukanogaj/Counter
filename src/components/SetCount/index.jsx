import { useState } from 'react';
import styles from './index.module.scss';
import SetDate from '../SetDate';
// import SetWeek from '../SetWeek';

const SetCount = () => {
  const [count, setCount] = useState(0);
  const [week, setWeek] = useState(0);

  // Two functions for adding at removing weeks amount

  // Two functions to add and minus days

  const decrease = () => {
    setCount((count) => count - 1);
    count >= 0 && count % 7 === 1 && setWeek((week) => week - 1);
  };

  console.log(count % 7);
  const increase = () => {
    setCount((count) => count + 1);
    count >= 0 && count % 7 === 0 && setWeek((week) => week + 1);
  };

  console.log(count % 7);
  // console.log(step);
  return (
    <div className={styles.container}>
      <div className={styles.weeks}>
        <p>Week: {week}</p>
      </div>
      <div className={styles.buttons}>
        <button
          onClick={() => {
            decrease();
          }}
          className={styles.btn}
        >
          -
        </button>
        <p>Day: {count}</p>
        <button
          className={styles.btn}
          onClick={() => {
            increase();
          }}
        >
          +
        </button>
      </div>
      <SetDate />
    </div>
  );
};

export default SetCount;
