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
    console.log(rnd);
  };

  return (
    <div className="App">
      <div className="container">
        <Random rnd={rnd} />
        <Input setMin={setMin} setMax={setMax} />
        <button onClick={createRnd}>Get random number</button>
      </div>
    </div>
  );
}

export default App;
