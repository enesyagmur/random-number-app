import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Random from "./components/Random";
import Input from "./components/Input";
import { useState } from "react";

function App() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [rnd, setRnd] = useState(0);

  const createRnd = () => {
    setRnd(Math.floor(Math.random() * (max - min + 1) + min));
  };

  return (
    <div className="App pt-5">
      <div className="container mt-5 bg-warning p-5 border rounded-5 d-flex flex-column align-items-center">
        <Random rnd={rnd} />
        <Input setMin={setMin} setMax={setMax} />
        <button
          onClick={createRnd}
          className="bg-success border border-success p-2 text-light rounded-1 mt-2 pointer-cursor"
        >
          Get random number
        </button>
      </div>
    </div>
  );
}

export default App;
