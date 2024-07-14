import Buttons from "./Buttons";
import Screen from "./Screen";
import styles from "./appLayout.module.css";

function AppLayout() {
  return (
    <div className={styles["container"]}>
      <Screen />
      <Buttons />
    </div>
  );
}

export default AppLayout;
