// create firebase config here and export the db object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFp_G8A41O8iWomWYXyevdMet12a6lvms",
  authDomain: "blogging-app-8a26e.firebaseapp.com",
  projectId: "blogging-app-8a26e",
  storageBucket: "blogging-app-8a26e.appspot.com",
  messagingSenderId: "143259708016",
  appId: "1:143259708016:web:d885853eb2dadfee0f62b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);