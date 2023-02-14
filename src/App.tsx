import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [cells, setCells] = useState(["a", "b", "c"]);

  function changeCellContent(newCellValue: string, i: number) {
    setCells((prevCells) => {
      return prevCells.map((cell, idx) => (idx === i ? newCellValue : cell));
    });
  }

  function handlePlusClicked(i: number) {
    setCells((prevCells) => [
      ...prevCells.slice(0, i + 1),
      "_",
      ...prevCells.slice(i + 1),
    ]);
  }

  return (
    <main className="App">
      <section className="cells">
        {cells.map((cell, i) => (
          <div className="cell" key={i}>
            <input
              value={cell}
              onChange={(e) => changeCellContent(e.currentTarget.value, i)}
            ></input>
            {i < cells.length - 1 && (
              <span className="plus" onClick={() => handlePlusClicked(i)}>
                {" "}
              </span>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
