import { initializeApp } from "firebase/app";
import firebaseConfig from '../Firebase/firebase.config'

const firebaseAthentication =() => {
   return initializeApp(firebaseConfig)
}

export default firebaseAthentication;