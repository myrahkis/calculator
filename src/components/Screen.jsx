import styles from "./screen.module.css";

function Screen() {
  return (
    <div className={styles["container"]}>
      <div className={styles["screen-wrapper"]}>
        <p>Отображение вычислений</p>
        <p>Отображение предварительного результата</p>
      </div>
      <div className={styles["btns-wrapper"]}>
        <p>Кнопка с историей</p>
        <p>Кнопка очистить</p>
      </div>
      <hr />
    </div>
  );
}

export default Screen;
