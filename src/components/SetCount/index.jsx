import styles from './index.module.scss';

const SetCount = () => {
  return (
    <div className={styles.buttons}>
      {' '}
      <button className={styles.btn}>+</button>
      <p>Count:</p>
      <button className={styles.btn}>-</button>
    </div>
  );
};

export default SetCount;
