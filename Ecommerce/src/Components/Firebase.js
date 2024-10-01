// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp0Lsgfr2YMNR4ooQRpgimfihNaMc-gGc",
  authDomain: "eshop-3a44a.firebaseapp.com",
  projectId: "eshop-3a44a",
  storageBucket: "eshop-3a44a.appspot.com",
  messagingSenderId: "384081640608",
  appId: "1:384081640608:web:1ea094bff0bfbac5879dc5",
  measurementId: "G-DY3V90DTDM"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebaseApp.fireStore();
const auth = firebase.auth();

export { db, auth };