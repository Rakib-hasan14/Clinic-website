import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react/cjs/react.development";
import firebaseAthentication from "../../Firebase/firebase.init";


firebaseAthentication();
    

const useFirebase = () =>{
    const [user ,setUser] = useState({});
    const [error , setError] = useState('');

    const googleProvide = new GoogleAuthProvider();
    const auth = getAuth()

    // Google

    const googleSignIn = () =>{
        signInWithPopup(auth , googleProvide)
        .then(result => {
            const user = result.user;
            console.log(user)
            setUser(user)
        })
        .catch(error => {
            setError(error.message)
        })
    }

    const logOut = () => {
      signOut(auth).then(() => {
        setUser({})
      }).catch((error) => {
        setError(error.message)
      });
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
          
        } else {
          
        }
      });

    return {
        googleSignIn,
        logOut,
        user,
        error
    }
}

export default useFirebase;
