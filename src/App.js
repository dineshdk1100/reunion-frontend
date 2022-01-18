import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Filterbar from './components/filter-bar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Filterbar></Filterbar>
    </div>
  );
}

export default App;
