import AppLayout from "./components/AppLayout";
import { CalculatorProvider } from "./context/CalculatorContext";

function App() {
  return (
    <CalculatorProvider>
        <AppLayout />
    </CalculatorProvider>
  );
}

export default App;
