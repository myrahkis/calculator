import AppLayout from "./components/AppLayout";
import styles from "./app.module.css";
import { ButtonsProvider } from "./context/ButtonsContext";

function App() {
  return (
    <ButtonsProvider>
      <div className={styles["container"]}>
        <AppLayout />
      </div>
    </ButtonsProvider>
  );
}

export default App;
