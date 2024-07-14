import styles from "./operations.module.css";
import { useCalculator } from "../context/CalculatorContext";

function Operations() {
  const { operationClickHandle, calculate } = useCalculator();

  return (
    <div className={styles["operations-btns"]}>
      <button onClick={operationClickHandle} className={styles["negate"]}>
        ±
      </button>
      <button onClick={operationClickHandle} className={styles["divide"]}>
        /
      </button>
      <button onClick={operationClickHandle} className={styles["multiply"]}>
        *
      </button>
      <button onClick={operationClickHandle} className={styles["minus"]}>
        −
      </button>
      <button onClick={operationClickHandle} className={styles["plus"]}>
        +
      </button>
      <button onClick={operationClickHandle} className={styles["root"]}>
        √
      </button>
      <button onClick={operationClickHandle} className={styles["remainder"]}>
        %
      </button>
      <button onClick={operationClickHandle} className={styles["reciprocal"]}>
        (1/x)
      </button>
      <button onClick={calculate} className={styles["result"]}>
        =
      </button>
    </div>
  );
}

export default Operations;
