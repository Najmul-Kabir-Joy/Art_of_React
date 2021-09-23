import logo from './logo.svg';
import './App.css';
import Cosmetics from './Components/Cosmetics/Cosmetics';

function App() {
  const num1 = 120;
  const num2 = 22;
  return (
    <div className="App">
      <Cosmetics num1={num1} num2={num2}></Cosmetics>
    </div>
  );
}

export default App;
