import './App.css';
import initAuth from './Firebase/firebase.init';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react';

initAuth();
function App() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [users, setUsers] = useState({});
  const [error, setError] = useState('')
  const gooogleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const handleGooogleSignIn = () => {
    signInWithPopup(auth, gooogleProvider)
      .then(res => {
        const user = res.user;
        const { displayName, email, photoURL } = user;
        const loggedIn = {
          name: displayName,
          email: email,
          img: photoURL
        }
        setUsers(loggedIn);
      });

  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUsers({})
      })
  }
  const handleRegistration = (e) => {
    e.preventDefault();

    console.log(email, pass);
    if (pass.length < 6) {
      setError('password must be atleast 6 character long!')
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(pass)) {
      setError('password should contain atleast two uppercase values')
      return;
    }
    createUserWithEmailAndPassword(auth, email, pass)
      .then(result => {
        const user = result.user;
        console.log(user);
        setError('');
      })
      .catch(error => {
        setError(error.message)
      })
  }
  const emailInput = (e) => {
    setEmail(e.target.value)
  }
  const passInput = (e) => {
    setPass(e.target.value)
  }
  return (
    <div className="App">
      <form onSubmit={handleRegistration}>
        <h3 className='text-primary'>Please Register First</h3>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={emailInput} type="email" className="form-control" id="inputEmail3" required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input onBlur={passInput} type="password" className="form-control" id="inputPassword3" required />
          </div>
        </div>
        <small className='text-danger'>{error}</small><br />
        <button type="submit" className="btn btn-primary">REGISTER</button>
      </form>
      <br /><br /><br />

      {
        !users.name ?
          <div>
            <button onClick={handleGooogleSignIn}>Sign in with google</button>
          </div>
          :
          <div>
            <button onClick={handleSignOut}>Sign out</button>
          </div>
      }
      {
        users.name &&
        <div>
          <h2>Welcome {users.name}</h2>
          <small>Email: {users.email}</small>
          <br />
          <img src={users.img} alt="" />
        </div>
      }
    </div>
  );
}

export default App;