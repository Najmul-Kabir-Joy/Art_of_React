import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import User from './Components/User/User';
import Grandfather from './Components/GrandFather/Grandfather';

function App() {
  let [house, setHouse] = useState(5);
  const ornaments = 'diamond necklace';
  const buyHandle = () => {
    setHouse(house += 1);
  }
  const [familiar, setFamiliar] = useState(false);
  return (
    <div className="App">
      {/* <h2>Is Familiar: {familiar.toString()}</h2>
      <button onClick={() => setFamiliar(!familiar)}
      >Toggle Friend</button>
      <User familiar={familiar}></User> */}
      <button onClick={buyHandle}>new house</button>
      <Grandfather house={house} ornaments={ornaments}>

      </Grandfather>
    </div>
  );
}

export default App;
