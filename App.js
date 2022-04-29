import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard id={'1'} age={25}/>
      </header>
    </div>
  );
}

export default App;
