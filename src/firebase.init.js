// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_G5dy4M_G5lBCIqRxSrDPsVMJbFH8O18",
  authDomain: "grocery-store-fullstack.firebaseapp.com",
  projectId: "grocery-store-fullstack",
  storageBucket: "grocery-store-fullstack.appspot.com",
  messagingSenderId: "803973453721",
  appId: "1:803973453721:web:619b322c262509702c6508"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)

export default auth;
