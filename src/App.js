import logo from './assets/weed.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Frozen Smoke Dispensary
        </h3>
        <h4>
          Are you over the age of 21?
        </h4>
        
        <container>
          <button>Yes</button>
          <button>No</button>
        </container>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
