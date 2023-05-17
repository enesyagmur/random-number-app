import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          Random Number:<span>x</span>
        </div>
        <div>
          <input type="text" placeholder="Min değer giriniz" />
          <input type="text" placeholder="Max değer giriniz" />
        </div>
        <button>Get random number</button>
      </div>
    </div>
  );
}

export default App;
