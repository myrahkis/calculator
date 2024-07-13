import AppLayout from "./components/AppLayout";
import styles from "./app.module.css";
import { CalculatorProvider } from "./context/CalculatorContext";

function App() {
  return (
    <CalculatorProvider>
      <div className={styles["container"]}>
        <AppLayout />
      </div>
    </CalculatorProvider>
  );
}

export default App;
