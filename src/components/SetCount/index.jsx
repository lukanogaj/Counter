import { useState } from 'react';
import styles from './index.module.scss';
// import SetWeek from '../SetWeek';

const SetCount = () => {
  const [step, setStep] = useState(0);
  const [week, setWeek] = useState(0);

  // Function to check if days is seven

  const weekSet = () => {
    if (step >= 8) {
      setWeek(week + 1);
    }
  };

  // Increase days
  const increase = () => {
    setStep(step + 1);
  };
  // Decrease Days
  const decrease = () => {
    setStep(step - 1);
  };
  console.log(step);

  // console.log(step);
  return (
    <div className={styles.container}>
      <div className={styles.week}>Week: {week} </div>
      <div className={styles.buttons}>
        <button onClick={decrease} className={styles.btn}>
          -
        </button>
        <p step={step}>Day: {step}</p>
        <button className={styles.btn} onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
};

export default SetCount;
