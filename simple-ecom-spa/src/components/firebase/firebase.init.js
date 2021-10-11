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
setup component
1. Create login component
2. Create register component
3. Create route for register and login

---------------------

STEP - 3
set auth system
1. setup login method
2. setup signout method
3. use state
4. speacial observer (firebase google statechange)
5. return necessary things from useFirebase;
--------------------
STEP - 4
create auth context (useAuth)
1. create a auth context
2. create context provider / auth provider
3. set context value allcontexts from firebase
4. use auth provider
5. create useAuth hook

--------------------
STEP - 5
create private route
1. Create private route
2. set private route

--------------------------
STEP - 6
redirect after login
1. after login redirect user to their desired destination

*/