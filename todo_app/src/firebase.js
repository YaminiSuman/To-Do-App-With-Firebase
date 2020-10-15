import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCg02vSNBfstGIF9XTGPXfBGtlpIx_crPg",
  authDomain: "todo-app-cp-5f9e9.firebaseapp.com",
  databaseURL: "https://todo-app-cp-5f9e9.firebaseio.com",
  projectId: "todo-app-cp-5f9e9",
  storageBucket: "todo-app-cp-5f9e9.appspot.com",
  messagingSenderId: "889544037055",
  appId: "1:889544037055:web:49fef80572ae54f2142c0a",
  measurementId: "G-LYRCG20TMQ"
});

const db = firebaseApp.firestore();

export { db };
// const auth = firebase.auth();
// const storage = firebase.storage();
//export { db, auth, storage };
