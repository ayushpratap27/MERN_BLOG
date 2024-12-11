// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-634ac.firebaseapp.com",
  projectId: "mern-blog-634ac",
  storageBucket: "mern-blog-634ac.firebasestorage.app",
  messagingSenderId: "640798512280",
  appId: "1:640798512280:web:83bec40cd48c3264466ced"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);