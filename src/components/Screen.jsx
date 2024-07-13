import styles from "./screen.module.css";
import timeSvg from "../assets/time-svgrepo.svg";

function Screen() {
  return (
    <div className={styles["container"]}>
      <div className={styles["screen-wrapper"]}>
        <p className={styles['calculations']}>N + N</p>
        <div className={styles["info-wrapper"]}>
          <p>2N</p>
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
