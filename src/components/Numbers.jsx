import styles from './numbers.module.css';

function Numbers() {
    return (
      <div className={styles['numbers-btns']}>
        <button>←</button>
        <button>CE</button>
        <button>C</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className={styles['zero']}>0</button>
        <button>.</button>
      </div>
    );
  }
  
  export default Numbers;