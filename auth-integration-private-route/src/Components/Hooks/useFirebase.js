import { useEffect, useState } from "react";
import authInit from "../../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

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
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user);
                setUser(user);
            } else {

            }
        })
    }, [])
    return {
        user,
        error,
        signInGoogle
    }
}
export default useFirebase;