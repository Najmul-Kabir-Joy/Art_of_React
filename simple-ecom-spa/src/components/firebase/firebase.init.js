import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const authInit = () => {
    initializeApp(firebaseConfig);
}

export default authInit;

/*

steps for authentication
-------------------
STEP-1
Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. enable authmethod


-------------------
STEP-2
1. Create login component
2. Create register component
3. Create route for register and login

---------------------

STEP - 3
1. setup login method
2. setup signout method
3. use state
4. speacial observer (firebase google statechange)

*/