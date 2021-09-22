import { useEffect, useState } from 'react';
import './App.css';
import Device from './Component/Device/Device';

function App() {
  const [click, setClick] = useState(0);
  const clickFunc = () => setClick(click + 1);
  let [time, setTime] = useState(0);
  setTimeout(function () {
    setTime(time + 1);
  }, 1000);
  useEffect(() => {
    console.log(time)
  }, [time])
  return (
    <div className="App">
      <p>NPM = Node Package Manager</p>
      <p>CLI = Command Line Interface</p>
      <p>Timer = {time}</p>
      <p>Click = {click}</p>
      <button onClick={clickFunc}>Click me</button>
      <Device name='Xiaomi'></Device>
    </div>
  );
}




export default App;
