import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => { })
    }


    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })

    }
    //observer for user auth state change basically takes care of 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [auth])

    return {
        user,
        signInGoogle,
        useFirebase,
        logOut
    }

}