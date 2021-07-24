import firebase from "firebase";
import "firebase/storage";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA4bFMfonMukx2l2TCYEJ6chp4CYfnqUPQ",
  authDomain: "devom-portfolio.firebaseapp.com",
  projectId: "devom-portfolio",
  storageBucket: "devom-portfolio.appspot.com",
  messagingSenderId: "64934655716",
  appId: "1:64934655716:web:3e224327e8d7b80f5fdef1",
  measurementId: "G-K6C3CP1T6P",
};

var firebaseApp;
if (!firebase.apps.length) {
  firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore(firebaseApp);
const storage = firebase.app().storage();
const auth = firebase.auth();

export { db, storage, auth, firebase };
