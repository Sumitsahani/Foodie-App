import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAmxwrnKvzKuRXuFVhO6RLPiwmXYzsbp3I",
    authDomain: "hungry-hero-311a4.firebaseapp.com",
    projectId: "hungry-hero-311a4",
    storageBucket: "hungry-hero-311a4.appspot.com",
    messagingSenderId: "491343357801",
    appId: "1:491343357801:web:78e968c6bda8a1a3ee7ff8",
  };
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }