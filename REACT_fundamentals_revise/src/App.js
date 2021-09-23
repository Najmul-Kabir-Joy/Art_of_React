import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <BlogContainer blog_title='This is blog one' blog_body='This is body for blog 1 zzzzz'></BlogContainer>
      <BlogContainer blog_title='This is blog two' blog_body='This is body for blog 2 zzzzzzzbbzzzzzz'></BlogContainer>
      <BlogContainer blog_title='This is blog three' blog_body='This is body for blog 3 zzzzziizzzmmzzzzzz'></BlogContainer>
      <Mobile></Mobile>
      <LoadToDo></LoadToDo>
    </div >
  );

}
//CODE FOR ARTICLE STARTS HERE
const article_title = {
  color: 'white',
  fontSize: '2em',
  fontStyle: 'italic',
  fontWeight: 'bolder',
  letterSpacing: '5px'
}
const BlogContainer = (props) => {
  return (
    <div>
      <article className='blog'>
        <div className="article_header" style={article_title}>
          <h3 className='article_title'>{props.blog_title}</h3>
        </div>
        <div className='article_body'>
          <p style={{ 'fontSize': '1.5em' }}>{props.blog_body}</p>
        </div>
      </article>
    </div >
  )
};

//CODE FOR ARTICLE ENDS HERE


//CODE FOR BATTERY PERCETAGE STARTS HERE
const Mobile = () => {
  const [charge, setCharge] = useState(100);
  const discharge = () => {
    if (charge == 0) {
      document.getElementById('discharge_button').setAttribute('disabled', true);
    } else {
      setCharge(charge - 10);
      document.getElementById('chargeup_button').removeAttribute('disabled');
    }
  };
  const chargeup = () => {
    if (charge == 100) {
      document.getElementById('chargeup_button').setAttribute('disabled', true);
    } else {
      setCharge(charge + 10);
      document.getElementById('discharge_button').removeAttribute('disabled');
    }
  };
  return (
    <div>
      <h1>Battery percentage</h1>
      <h3>{charge}</h3>
      <button id='chargeup_button' onClick={chargeup}>Chargeup</button>
      <button id='discharge_button' onClick={discharge}>Discharge</button>
    </div>
  )
}
//CODE FOR BATTERY PERCETAGE ENDS HERE


//FOR DISPLAYING TODO LIST STARTS

const LoadToDo = () => {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodo(data))
  }, [])
  return (
    <div>
      {
        todos.map(todo => <List title={todo.title} id={todo.id}></List>)
      }
    </div >
  )
}

const List = (props) => {
  return (
    <div>
      <h6>ID: {props.id}</h6>
      <h5>Title: {props.title}</h5>
    </div>
  )
}

//FOR DISPLAYING TODO LIST ENDS

export default App;
