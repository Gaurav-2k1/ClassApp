// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBTOU1SLJaHFrQSgiRblx0yYPi2jDFXpIg",
    authDomain: "classapp-bea16.firebaseapp.com",
    projectId: "classapp-bea16",
    storageBucket: "classapp-bea16.appspot.com",
    messagingSenderId: "1662330043",
    appId: "1:1662330043:web:d1b22cb6c4ea708008359e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export { firebase };
