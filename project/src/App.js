import logo from './logo.svg';
import './App.css';
import SayHello from "./SayHello"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SayHello names={['Ralph', 'Josh', 'Eric']}></SayHello>
      </header>
    </div>
  );
}

export default App;
