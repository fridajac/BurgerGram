import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPBTmZTUrjj3cPzlqRNW1jnlbIb9f3dbM",
  authDomain: "burgergram-a86e2.firebaseapp.com",
  projectId: "burgergram-a86e2",
  storageBucket: "burgergram-a86e2.appspot.com",
  messagingSenderId: "202635197325",
  appId: "1:202635197325:web:62c7656354ba2f83211bc4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
