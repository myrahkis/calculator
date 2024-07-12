import styles from "./operations.module.css";

function Operations() {
    return (
      <div className={styles['operations-btns']}>
        <p className={styles['negate']}>+_</p>
        <p className={styles['divide']}>/</p>
        <p className={styles['multiply']}>*</p>
        <p className={styles['minus']}>-</p>
        <p className={styles['plus']}>+</p>
        <p className={styles['root']}>корень</p>
        <p className={styles['remainder']}>%</p>
        <p className={styles['reciprocal']}>1/x</p>
        <p className={styles['result']}>=</p>
      </div>
    );
  }
  
  export default Operations;