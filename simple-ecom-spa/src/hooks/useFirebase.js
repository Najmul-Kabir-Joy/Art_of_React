import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider)
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
        logOut
    }

}

export default useFirebase;