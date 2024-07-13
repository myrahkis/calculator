/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const ButtonsContext = createContext();

function ButtonsProvider({ children }) {
  const [result, setResult] = useState("0");
  const [history, setHistory] = useState("");
  const [selectedNum, setSelectedNum] = useState("");
  const [nextNum, setNextNum] = useState("");
  const [selectedOperator, setSelectedOperator] = useState(""); // сделать стиль для выделения выбранного
  const [isOperatorSelected, setIsOperatorSelected] = useState(false);

  //   const numsLength = selectedNums.length;

  function сlearEntryHandle() {
    setSelectedNum("");
    setNextNum("");
  }

  function clearHandle() {
    setResult("0");
    setSelectedNum("");
    setNextNum("");
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
    const val = +e.target.innerHTML;

    if (selectedOperator !== "") {
      setNextNum((num) => num + val);
      setHistory((his) => his + val);
    } else {
      setSelectedNum((num) => num + val);
      setHistory((his) => his + val);
    }
  }

  function operationClickHandle(e) {
    const oper = e.target.innerHTML;
    // console.log(num);
    setSelectedOperator(oper);
    setIsOperatorSelected(true);

    setHistory((his) => his + oper);
  }

  function newOperation() {
    setSelectedOperator("");
    setIsOperatorSelected(false);
    setSelectedNum("");
    setNextNum("");
    setHistory("");
  }

  function calculate() {
    switch (selectedOperator) {
      case "+":
        setResult(+selectedNum + +nextNum);
        newOperation();
        break;
      case "−":
        setResult(+selectedNum - +nextNum);
        newOperation();
        break;
      case "*":
        setResult(+selectedNum * +nextNum);
        newOperation();
        break;
      case "/":
        setResult(+selectedNum / +nextNum);
        newOperation();
        break;
      case "%":
        setResult(+selectedNum % +nextNum);
        newOperation();
        break;
      case "√":
        setResult(Math.sqrt(+selectedNum));
        newOperation();
        break;
      case "±":
        setResult(Math.abs(+selectedNum) * -1);
        newOperation();
        break;
      case "1/x":
        setResult(1 / +selectedNum);
        newOperation();
        break;
    }
  }

  return (
    <ButtonsContext.Provider
      value={{
        result,
        history,
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
    </ButtonsContext.Provider>
  );
}

function useButtons() {
  const context = useContext(ButtonsContext);

  if (context === undefined)
    throw new Error("ButtonsContext был исп за пределами ButtonsProvider!");

  return context;
}

export { ButtonsProvider, useButtons };
