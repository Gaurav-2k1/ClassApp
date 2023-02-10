// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBTOU1SLJaHFrQSgiRblx0yYPi2jDFXpIg",
    authDomain: "classapp-bea16.firebaseapp.com",
    projectId: "classapp-bea16",
    storageBucket: "classapp-bea16.appspot.com",
    messagingSenderId: "1662330043",
    appId: "1:1662330043:web:0d188e2e6ad6db1c08359e"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app)
export { firebase, db };
