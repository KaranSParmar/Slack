// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDRprndw6tOS3PaEUT7ZYhOofScL-NWy_A",
    authDomain: "slack-8ca2a.firebaseapp.com",
    projectId: "slack-8ca2a",
    storageBucket: "slack-8ca2a.appspot.com",
    messagingSenderId: "49787462913",
    appId: "1:49787462913:web:1919570996b295e69da700",
    measurementId: "G-X0PTBSXTMG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider, db };