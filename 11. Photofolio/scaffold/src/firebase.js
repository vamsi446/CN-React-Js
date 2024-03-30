// create and initialize your own firebase here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1gX6Zl-xI4Ug6XNYKcEqfpdtm82ne82A",
  authDomain: "photofolio-dd348.firebaseapp.com",
  projectId: "photofolio-dd348",
  storageBucket: "photofolio-dd348.appspot.com",
  messagingSenderId: "1078882232898",
  appId: "1:1078882232898:web:5902f4d950678da5439bdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);