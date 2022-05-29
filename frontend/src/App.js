import logo from './logo.svg';
import './App.css';
import {ContactPage} from './Pages/ContactPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Random Acts of Education!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ContactPage />
      </header>
    </div>
  );
}

export default App;
