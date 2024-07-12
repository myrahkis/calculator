import Numbers from "./Numbers";
import Operations from "./Operations";
import styles from "./buttons.module.css";

function Buttons() {
    return (
      <div className={styles['container']}>
        <Operations />
        <Numbers />
      </div>
    );
  }
  
  export default Buttons;