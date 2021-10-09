import { useEffect, useState } from "react";
import authInit from "../../Firebase/firebase.init";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

authInit();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                setUser(res.user);
                console.log(res.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(res => setUser({}))
            .catch(error => setError(error))
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user);
                setUser(user);
            } else {

            }
        })
    }, [auth])
    return {
        user,
        error,
        signInGoogle,
        logOut
    }
}
export default useFirebase;