import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJ29tafJjKveGBAuXVpa9HnelpOXrK564",
  authDomain: "tableau-responsive-grid.firebaseapp.com",
  projectId: "tableau-responsive-grid",
  storageBucket: "tableau-responsive-grid.appspot.com",
  messagingSenderId: "556762727589",
  appId: "1:556762727589:web:9b3adcff77568892de794c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
