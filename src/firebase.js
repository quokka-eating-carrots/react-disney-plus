// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
import "firebase/database"
import "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxDS-eCqnRFYPBpJP8bjuKZoJL15wJBzo",
  authDomain: "react-disney-plus-app-837bc.firebaseapp.com",
  projectId: "react-disney-plus-app-837bc",
  storageBucket: "react-disney-plus-app-837bc.appspot.com",
  messagingSenderId: "32485171154",
  appId: "1:32485171154:web:8030d7630f49823cd3720b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app