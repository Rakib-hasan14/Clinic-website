import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from "react/cjs/react.development";
import firebaseAthentication from "../../Firebase/firebase.init";


firebaseAthentication();
    

const useFirebase = () =>{
    const [user ,setUser] = useState({});
    const [userName , setUserName] = useState('');
    const [error , setError] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    

    const googleProvide = new GoogleAuthProvider();
    const auth = getAuth()

    // Google

    const googleSignIn = () =>{
       return signInWithPopup(auth , googleProvide);  
    }

    const logOut = () => {
      signOut(auth).then(() => {
        setUser({})
        
      }).catch((error) => {
        setError(error.message)
      });
    }

    

    const getEmail = e => {
      setEmail(e.target.value)
    }
    const getPassword = e => {
      setPassword(e.target.value)
    }
   const getName = e => {
     const userName = e.target.value;
     setUserName(userName)
   }
   onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    } else {
      
    }
  });
   const signUpEmailAndPassword = e => {
    
     createUserWithEmailAndPassword(auth , email , password)
     .then((result) => {
       const user = result.user
       setUser(user)
       setName();
       setError('')
     })
     .catch(error => {
       setError(error.message)
     })
     e.preventDefault();
     
   }

   const setName = () => {
     updateProfile(auth.currentUser , {
       displayName: userName
     })
     .then(result => {})
   }

   const logInWithEmailAndPassword = (e) => {
     e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result.user;
      setUser(user)
      setError('')
    })
    .catch((error) => {
      setError(error.message);
    });
  
   }


   



    return {
        googleSignIn,
        logOut,
        getEmail,
        getPassword,
        getName,
        signUpEmailAndPassword,
        logInWithEmailAndPassword,
        setUser,
        setError,
        user,
        error
    }
}

export default useFirebase;
