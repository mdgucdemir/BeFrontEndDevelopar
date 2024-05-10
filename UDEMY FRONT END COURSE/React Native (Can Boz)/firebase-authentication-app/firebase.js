// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVI62zgN61doNsEnlr0dMlfWNyIKwNc7s",
  authDomain: "login-24ee5.firebaseapp.com",
  projectId: "login-24ee5",
  storageBucket: "login-24ee5.appspot.com",
  messagingSenderId: "462882562031",
  appId: "1:462882562031:web:5ec5451b5282047547601a",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

export { auth };
