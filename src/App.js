import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo"></img>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer"> Coded by SheCodes</footer>
      </div>
    </div>
  );
}

export default App;
