// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmh0xekFrIKH9MdNsSiV7J-GFXhyUb2nw",
  authDomain: "kirayedaar-a4417.firebaseapp.com",
  projectId: "kirayedaar-a4417",
  storageBucket: "kirayedaar-a4417.appspot.com",
  messagingSenderId: "885934625479",
  appId: "1:885934625479:web:a92705f7d271d8b881a4e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)