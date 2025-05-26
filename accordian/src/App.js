import './App.css';
import Accordion from './accordian';
import items from './data.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the Accordian App!
        </p>
        <p>This is a simple accordian component built with React.</p>
        <Accordion itemsList={items} />
      </header>

    </div>
  );
}

export default App;
