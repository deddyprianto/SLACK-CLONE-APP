// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBY7mmmOUvTzN4qtxtJIUzPwdXqUDAB3Y",
  authDomain: "aplikasi-demo-clone.firebaseapp.com",
  projectId: "aplikasi-demo-clone",
  storageBucket: "aplikasi-demo-clone.appspot.com",
  messagingSenderId: "602746713314",
  appId: "1:602746713314:web:25823bee1ad2778ab49abb",
  measurementId: "G-VZLY90GNB5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
