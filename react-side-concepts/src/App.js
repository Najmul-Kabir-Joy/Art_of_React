import './App.css';
import Cosmetics from './Components/Cosmetics/Cosmetics';
import Persons from './Components/Persons/Persons';

function App() {
  const num1 = 120;
  const num2 = 22;
  return (
    <div className="App">
      <Cosmetics num1={num1} num2={num2}></Cosmetics>
      <Persons></Persons>
    </div>
  );
}

export default App;
