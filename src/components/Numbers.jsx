import styles from "./numbers.module.css";
import { useCalculator } from "../context/CalculatorContext";

function Numbers() {
  const { numberClickHandle, deleteHandle, clearHandle, сlearEntryHandle } =
    useCalculator();

  return (
    <div className={styles["numbers-btns"]}>
      <button onClick={clearHandle} className={styles['clear-all']}><strong>C</strong></button>
      <button onClick={сlearEntryHandle}>CE</button>
      <button onClick={deleteHandle}>←</button>
      <button onClick={numberClickHandle}>7</button>
      <button onClick={numberClickHandle}>8</button>
      <button onClick={numberClickHandle}>9</button>
      <button onClick={numberClickHandle}>4</button>
      <button onClick={numberClickHandle}>5</button>
      <button onClick={numberClickHandle}>6</button>
      <button onClick={numberClickHandle}>1</button>
      <button onClick={numberClickHandle}>2</button>
      <button onClick={numberClickHandle}>3</button>
      <button className={styles["zero"]} onClick={numberClickHandle}>
        0
      </button>
      <button onClick={numberClickHandle}>.</button>
    </div>
  );
}

export default Numbers;
