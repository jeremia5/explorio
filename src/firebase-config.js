
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1J6qAIekt7c7WFwn_9LBOecVDS_LJx9g",
  authDomain: "explorioverto-b8b6b.firebaseapp.com",
  projectId: "explorioverto-b8b6b",
  storageBucket: "explorioverto-b8b6b.appspot.com",
  messagingSenderId: "310704537257",
  appId: "1:310704537257:web:df7702b1ebf7134f3473b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();