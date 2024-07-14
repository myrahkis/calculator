/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CalculatorContext = createContext();

function CalculatorProvider({ children }) {
  const [result, setResult] = useState("");
  const [history, setHistory] = useState("");
  const [selectedNum, setSelectedNum] = useState("0");
  const [nextNum, setNextNum] = useState("0");
  const [selectedOperator, setSelectedOperator] = useState(""); // сделать стиль для выделения выбранного
  const [isOperatorSelected, setIsOperatorSelected] = useState(false);

  function сlearEntryHandle() {
    setSelectedNum("0");
    setNextNum("0");
  }

  function clearHandle() {
    setResult("0");
    // setResult("0");
    setSelectedNum("0");
    setNextNum("0");
    setHistory("");
    setSelectedOperator("");
    setIsOperatorSelected(false);
  }

  function deleteHandle() {
    if (selectedNum > 0) {
      setSelectedNum((num) => num.slice(0, -1));
      setHistory((his) => his.slice(0, -1));
    }
  }

  function numberClickHandle(e) {
    const val = e.target.innerHTML;

    if (selectedOperator !== "") {
      setNextNum((num) => (num === "0" ? val : num + val));
      setHistory((his) => his + val);
    } else {
      setSelectedNum((num) => (num === "0" ? val : num + val));
      setHistory((his) => his + val);
    }
  }

  function operationClickHandle(e) {
    const oper = e.target.innerHTML;
    // console.log(num);
    setSelectedOperator(oper);
    setIsOperatorSelected(true);

    setHistory((his) =>
      !isOperatorSelected ? his + oper : his.slice(0, -1) + oper
    );
  }

  function newOperation(val) {
    setResult(val);
    setSelectedNum(val);
    setHistory(val);
    setSelectedOperator("");
    setIsOperatorSelected(false);
    setNextNum("0");
  }

  function calculate() {
    switch (selectedOperator) {
      case "+": {
        const val = +selectedNum + +nextNum;
        newOperation(val);
        break;
      }
      case "−": {
        const val = +selectedNum - +nextNum;
        newOperation(val);
        break;
      }
      case "*": {
        const val = +selectedNum * +nextNum;
        newOperation(val);
        break;
      }
      case "/": {
        const val = +selectedNum / +nextNum;
        newOperation(val);
        break;
      }
      case "%": {
        const val = +selectedNum % +nextNum;
        newOperation(val);
        break;
      }
      case "√": {
        const val = Math.sqrt(+selectedNum);
        newOperation(val);
        break;
      }
      case "±": {
        const val = Math.abs(+selectedNum) * -1;
        newOperation(val);
        break;
      }
      case "(1/x)": {
        const val = 1 / +selectedNum;
        newOperation(val);
        break;
      }
    }
  }

  return (
    <CalculatorContext.Provider
      value={{
        history,
        nextNum,
        selectedNum,
        isOperatorSelected,
        сlearEntryHandle,
        clearHandle,
        deleteHandle,
        numberClickHandle,
        operationClickHandle,
        calculate,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

function useCalculator() {
  const context = useContext(CalculatorContext);

  if (context === undefined)
    throw new Error(
      "CalculatorContext был исп за пределами CalculatorProvider!"
    );

  return context;
}

export { CalculatorProvider, useCalculator };
