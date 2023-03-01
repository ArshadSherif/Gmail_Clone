import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSqfuIJXh7N8qDQz7TjmV_BrQiLBuXr4M",
  authDomain: "clone-2b64f.firebaseapp.com",
  projectId: "clone-2b64f",
  storageBucket: "clone-2b64f.appspot.com",
  messagingSenderId: "697865251249",
  appId: "1:697865251249:web:21af8bccb58fae5d39b590",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
