import styles from "./screen.module.css";
import timeSvg from "../assets/time-svgrepo.svg";
import { useCalculator } from "../context/CalculatorContext";

function Screen() {
  const { history, isOperatorSelected, nextNum, selectedNum } = useCalculator();

  return (
    <div className={styles["container"]}>
      <div className={styles["screen-wrapper"]}>
        <p className={styles["calculations"]}>{history}</p>
        <div className={styles["info-wrapper"]}>
          <p>{isOperatorSelected ? nextNum : selectedNum}</p>
          {/* <button>
            <img src={timeSvg} alt="history" />
          </button> */}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Screen;
