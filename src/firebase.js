// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyBTOU1SLJaHFrQSgiRblx0yYPi2jDFXpIg",
//     authDomain: "classapp-bea16.firebaseapp.com",
//     projectId: "classapp-bea16",
//     storageBucket: "classapp-bea16.appspot.com",
//     messagingSenderId: "1662330043",
//     appId: "1:1662330043:web:0d188e2e6ad6db1c08359e"
// };
const firebaseConfig = {
    apiKey: "AIzaSyCCVVMiYquxAkLM8-D96k23pIttOMqgctU",
    authDomain: "class-cf20a.firebaseapp.com",
    projectId: "class-cf20a",
    storageBucket: "class-cf20a.appspot.com",
    messagingSenderId: "734656316960",
    appId: "1:734656316960:web:8747a859eee1c21ef61e45",
    measurementId: "G-N5HR0S5YZH"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app)
export { firebase, db };
