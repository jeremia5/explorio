
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKSnYcnkt0WFHJxpqVfS-42_DhhNUqndo",
  authDomain: "explorioverfour.firebaseapp.com",
  projectId: "explorioverfour",
  storageBucket: "explorioverfour.appspot.com",
  messagingSenderId: "558859548034",
  appId: "1:558859548034:web:9fea629303c7da3ae20b9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();