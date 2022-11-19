// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import firestore from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7SF9DnCkuZgk0ObVtm5o3R5Bm8I22360",
  authDomain: "wasini-30843.firebaseapp.com",
  projectId: "wasini-30843",
  storageBucket: "wasini-30843.appspot.com",
  messagingSenderId: "243047681229",
  appId: "1:243047681229:web:319904e85b815b51b82d84"
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