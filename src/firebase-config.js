
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDf7guAq7ennt0jCNjklA-7lNsASWD8o0",
  authDomain: "explorioverthree.firebaseapp.com",
  projectId: "explorioverthree",
  storageBucket: "explorioverthree.appspot.com",
  messagingSenderId: "168321753262",
  appId: "1:168321753262:web:247a2909f4c881d7764d3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();