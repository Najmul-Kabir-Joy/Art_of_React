import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Friends from './Components/Friends/Friends';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Header from './Components/Header/Header';
import FriendDetail from './Components/FriendDetail/FriendDetail';
import Culture from './Components/Culture/Culture';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/friends'>
            <Friends></Friends>
          </Route>
          <Route path='/friend/:friendId'>
            <FriendDetail></FriendDetail>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/about/culture'>
            <Culture></Culture>
          </Route>
          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
