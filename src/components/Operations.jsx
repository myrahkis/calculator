import styles from "./operations.module.css";

function Operations() {
    return (
      <div className={styles['operations-btns']}>
        <button className={styles['negate']}>±</button>
        <button className={styles['divide']}>/</button>
        <button className={styles['multiply']}>*</button>
        <button className={styles['minus']}>−</button>
        <button className={styles['plus']}>+</button>
        <button className={styles['root']}>√</button>
        <button className={styles['remainder']}>%</button>
        <button className={styles['reciprocal']}>1/x</button>
        <button className={styles['result']}>=</button>
      </div>
    );
  }
  
  export default Operations;