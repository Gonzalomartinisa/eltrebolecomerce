// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3arvxu_8atUND-kkScVSg9hNlXjCQY6g",
  authDomain: "proyecto-ecomerce.firebaseapp.com",
  projectId: "proyecto-ecomerce",
  storageBucket: "proyecto-ecomerce.appspot.com",
  messagingSenderId: "1058259191970",
  appId: "1:1058259191970:web:c1841ee0ede4fa1b252ffb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;