import { useState } from "react";
import "./App.css";
import { OperationEnum } from "./enum/OperationEnum";

function App() {
  const [firstValue, setFirstValue] = useState<number>(0);
  const [secondValue, setSecondValue] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [operation, setOperation] = useState<OperationEnum | "">("");

  const calculateResult = async () => {
    // Отправка запроса на сервер для выполнения вычислений
    try {
      setResult(null);
      setLoading(true);

      const response = await fetch("http://localhost:3000/calc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstValue: firstValue,
          secondValue: secondValue,
          operation: operation,
        }),
      });

      setLoading(false);

      if (!response.ok) {
        throw new Error("Ошибка вычислений");
      }

      const data = await response.json();
      setResult(data.result); // Установка результата
    } catch (error) {
      console.error("Ошибка при запросе на сервер:", error);
      alert("Произошла ошибка при вычислении.");
    }
  };

  return (
    <div className="main-div">
      <h1>Blockchain Calculator</h1>
      <div className="input-panel">
        <input
          type="number"
          value={firstValue}
          onChange={(e) => setFirstValue(Number.parseInt(e.target.value))}
          placeholder="First number"
        />
        <span>{operation}</span>
        <input
          type="number"
          value={secondValue}
          onChange={(e) => {
            setSecondValue(Number.parseInt(e.target.value));
          }}
          placeholder="Second number"
        />
      </div>
      <div className="button-panel">
        <div>
          {Object.values(OperationEnum).map((oper) => (
            <button key={`button ${oper}`} onClick={() => setOperation(oper)}>
              {oper}
            </button>
          ))}
        </div>

        <button className="calc-button" onClick={calculateResult}>
          Вычислить
        </button>
      </div>
      {loading && (
        <div>
          <h2>Результат: загрузка...</h2>
        </div>
      )}
      {result !== null && (
        <div>
          <h2>Результат: {result}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
