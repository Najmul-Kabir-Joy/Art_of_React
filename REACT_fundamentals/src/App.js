import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
      <Counter2></Counter2>
      <ExternalUser></ExternalUser>
      <h5>LOADING COMMENTS</h5>
      <LoadComments></LoadComments>
    </div>
  );
}

function ExternalUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  })
  return (
    <div>
      <h3>External User</h3>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h2>Email: {props.email}</h2>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const increaser = () => setCount(count + 1);
  const decreaser = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaser}>Increase</button>
      <button onClick={decreaser}>Decrease</button>
    </div>
  )
}

function Counter2() {
  const [count, setCount] = useState(0);
  const increaser = () => setCount(count + 1);
  const decreaser = () => setCount(count - 1);
  return (
    <div>
      <h1>Count2: {count}</h1>
      <button onClick={increaser}>Inc</button>
      <button onClick={decreaser}>Dec</button>
    </div>
  )
}

function LoadComments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments/')
      .then(res => res.json())
      .then(data => setComments(data))
  })
  return (
    <div>
      <h3>Comments</h3>
      {
        comments.map(comment => <Comments name={comment.name} body={comment.body}></Comments>)
      }
    </div>
  )
}

function Comments(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <h4>{props.body}</h4>
    </div>
  )
}

function Food(props) {
  return (
    <div className="food_container">
      <h3>Food Name: {props.fname}</h3>
      <small>Quantiy: {props.quantity}</small>
    </div>
  )
}

export default App;

/*

   ====----<h1>Similar In Look Different In Data</h1>----=====
    const foodArr = [['dal', 1], ['dim', 3], ['vat', 4]];
  const foodObj = [
    { item: 'dal', unit: '1' },
    { item: 'dim', unit: '2' },
    { item: 'vat', unit: '3' }
  ]


      {
        foodArr.map(
          foods => <Food fname={foods[0]} quantity={foods[1]}></Food>
        )}

      <h1>FROM ARRAY OF OBJECT</h1>
      {
        foodObj.map(food => <Food fname={food.item} quantity={food.unit}></Food>)
      }

*/
