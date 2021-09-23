import { useEffect, useState } from 'react';
import './App.css';
import Books from './Component/Books/Books';
import Device from './Component/Device/Device';

function App() {
  const [click, setClick] = useState(0);
  const clickFunc = () => setClick(click + 1);
  let [time, setTime] = useState(0);
  setTimeout(function () {
    setTime(time + 1);
  }, 1000);
  useEffect(() => {
  }, [time])
  const books = [
    { bookName: 'abc', writter: 'Md' },
    { bookName: 'def', writter: 'naj' },
    { bookName: 'ghi', writter: 'mul' },
    { bookName: 'jkl', writter: 'kab' },
    { bookName: 'mno', writter: 'ir' },
    { bookName: 'pqr', writter: 'joy' },
  ]
  return (
    <div className="App">
      <p>NPM = Node Package Manager</p>
      <p>CLI = Command Line Interface</p>
      <p>Timer = {time}</p>
      <p>Click = {click}</p>
      <button onClick={clickFunc}>Click me</button>
      <Device name='Xiaomi'></Device>
      <Books books={books}></Books>
    </div>
  );
}




export default App;
