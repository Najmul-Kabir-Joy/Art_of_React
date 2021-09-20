import './App.css';
import Device from './Component/Device/Device';

function App() {
  return (
    <div className="App">
      <p>NPM = Node Package Manager</p>
      <p>CLI = Command Line Interface</p>
      <button onClick={clickFunc}>Click me</button>
      <Device name='Xiaomi'></Device>
    </div>
  );
}
const clickFunc = () => console.log('clicked');

export default App;
