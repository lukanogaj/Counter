import styles from './index.module.scss';

const StepSet = () => {
  return (
    <div className={styles.buttons}>
      {' '}
      <button className={styles.btn}>+</button>
      <p>Step:</p>
      <button className={styles.btn}>-</button>
    </div>
  );
};

export default StepSet;
