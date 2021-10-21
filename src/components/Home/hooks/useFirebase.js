import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react/cjs/react.development";
import firebaseAthentication from "../../Firebase/firebase.init";


firebaseAthentication();
    

const useFirebase = () =>{
    const [user ,setUser] = useState({});
    const [error , setError] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

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

    const getEmail = e => {
      setEmail(e.target.value)
    }
    const getPassword = e => {
      setPassword(e.target.value)
    }
   const getName = e => {
     user.displayName = e.target.value;
   }
   const signUpEmailAndPassword = () => {
     createUserWithEmailAndPassword(auth , email , password)
     .then(result => {
       console.log(user.displayName)
       setUser(result.user)
     })
     .catch(error => {
       setError(error.message)
     })
     
   }

    return {
        googleSignIn,
        logOut,
        getEmail,
        getPassword,
        getName,
        signUpEmailAndPassword,
        user,
        error
    }
}

export default useFirebase;
