import { useReducer } from 'react';
import './App.css';
import Count from './Components/Count';
import Portal from './Components/Portal';

function App() {
  const [state, dispatch] = useReducer();
  return (
    <div className="App">
      <Count />
      <Portal />
    </div>
  );
}

export default App;
