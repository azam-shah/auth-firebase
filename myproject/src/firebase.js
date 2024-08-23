// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX6E0oZPS-OzpkTMmQbFiUoO-QUJfzdU0",
  authDomain: "auth-email-password-a9c50.firebaseapp.com",
  projectId: "auth-email-password-a9c50",
  storageBucket: "auth-email-password-a9c50.appspot.com",
  messagingSenderId: "750236378143",
  appId: "1:750236378143:web:7f7c170b5c2b67cdcee12a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 
export const auth = getAuth();

export default app;