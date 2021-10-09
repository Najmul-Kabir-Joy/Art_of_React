import './App.css';
import initAuth from './Firebase/firebase.initialize';
import { getAuth, signOut, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { useState } from 'react';

initAuth();

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();
function App() {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then(result => {
        const user = result.user;
        const { displayName, email, photoURL } = user;
        const loggedInUser = {
          name: displayName,
          email: email,
          img: photoURL
        };
        setUser(loggedInUser);
      })
  }
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
  }
  const handleGoolgeSignIn = () => {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          img: photoURL
        };
        setUser(loggedInUser);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        const loggedInUser = {
          name: displayName,
          email: email,
          img: photoURL
        };
        setUser(loggedInUser);
      })
  }
  return (
    <div className="App">
      {
        !user.name ? <div>
          <button onClick={handleGoolgeSignIn}> Google Sign In</button>
          <button onClick={handleGitHubSignIn}> GitHub Sign In</button>
          <button onClick={handleFacebookSignIn}> Facebook Sign In</button>
        </div>
          :
          <button onClick={handleSignOut}>Sign Out</button>
      }
      <br />
      {
        user.name &&
        <div>
          <h2>Welcome {user.name}</h2>
          <p>I know your email address: {user.email}</p>
          <img src={user.img} alt="" />
        </div>
      }
    </div>
  );
}

export default App;
