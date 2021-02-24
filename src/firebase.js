import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCjgriNHGVv7xlSiRrbgoEaad94BQSqt4U",
  authDomain: "challenge-4b2b2.firebaseapp.com",
  databaseURL: "https://challenge-4b2b2.firebaseio.com",
  projectId: "clone-3ebc2",
  storageBucket: "challenge-4b2b2.appspot.com",
  messagingSenderId: "962418448875",
  appId: "1:550105198940:web:7743c82f0ae99d51ac9199",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
