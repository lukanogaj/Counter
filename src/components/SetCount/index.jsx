import { useState } from 'react';
import styles from './index.module.scss';
import SetDate from '../SetDate';

const SetCount = () => {
  const [count, setCount] = useState(0);
  const [week, setWeek] = useState(0);

  // Two functions to add and minus days

  const decrease = () => {
    count > 0 && setCount((count) => count - 1);
    count >= 0 && count % 7 === 1 && setWeek((week) => week - 1);
  };

  console.log(count % 7);
  const increase = () => {
    setCount((count) => count + 1);
    count >= 0 && count % 7 === 0 && setWeek((week) => week + 1);
  };

  console.log(count % 7);
  return (
    <div className={styles.container}>
      <div className={styles.weeks}>
        <p>Week: {week}</p>
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.btn}
          onClick={() => {
            decrease();
          }}
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
