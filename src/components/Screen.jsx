import styles from "./screen.module.css";
import timeSvg from "../assets/time-svgrepo.svg";
import { useButtons } from "../context/ButtonsContext";

function Screen() {
  const { result, history, selectedNum } = useButtons();

  return (
    <div className={styles["container"]}>
      <div className={styles["screen-wrapper"]}>
        <p className={styles["calculations"]}>{history}</p>
        <div className={styles["info-wrapper"]}>
          <p>{selectedNum ? selectedNum : result}</p>
          <button>
            <img src={timeSvg} alt="history" />
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Screen;
