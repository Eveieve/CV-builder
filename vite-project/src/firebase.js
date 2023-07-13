// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqjy491JmmoRXlTCTfdTZoOhAezkE23Es",
  authDomain: "cv-builder-c20ab.firebaseapp.com",
  projectId: "cv-builder-c20ab",
  storageBucket: "cv-builder-c20ab.appspot.com",
  messagingSenderId: "8840073428",
  appId: "1:8840073428:web:6f609ca95572f53f1bab41",
  measurementId: "G-L421CJ0DWT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const CVCollection = collection(db, "CV");
