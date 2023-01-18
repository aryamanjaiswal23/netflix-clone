import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuifQE2BEqfcRmQvG2rvh4zKKxzFUruEY",
    authDomain: "netflix-build-479a1.firebaseapp.com",
    projectId: "netflix-build-479a1",
    storageBucket: "netflix-build-479a1.appspot.com",
    messagingSenderId: "893446679679",
    appId: "1:893446679679:web:f70f2db89b39ff41ffa34a",
    measurementId: "G-1CPZ3P68VL"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
export { auth }
export default db