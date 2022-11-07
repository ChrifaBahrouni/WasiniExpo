// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import firestore from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMHoGlEx11b3cqMSTkmR7vHs-VTB-eOfo",
  authDomain: "instagram-55c1b.firebaseapp.com",
  databaseURL: "https://instagram-55c1b-default-rtdb.firebaseio.com",
  projectId: "instagram-55c1b",
  storageBucket: "instagram-55c1b.appspot.com",
  messagingSenderId: "103859569331",
  appId: "1:103859569331:web:f6ed36c41ce71a54d226c6"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const FireDB = firebase.firestore();
const auth = firebase.auth()
//const firestore = firebase.firestore();



export { auth, FireDB };