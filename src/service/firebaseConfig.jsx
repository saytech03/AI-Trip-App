// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA2YOgAo1ObYN77B0MFE6t1YcD9mgieSE",
  authDomain: "ai-trip-planner-app-115ad.firebaseapp.com",
  projectId: "ai-trip-planner-app-115ad",
  storageBucket: "ai-trip-planner-app-115ad.appspot.com",
  messagingSenderId: "575992187844",
  appId: "1:575992187844:web:3e8ed07631b68428dd3291",
  measurementId: "G-JEMJMWLK67"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);