import { useRef, useState } from "react";
import AppLayout from "./components/AppLayout";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles["container"]}>
      <AppLayout />
    </div>
  );
}

export default App;
