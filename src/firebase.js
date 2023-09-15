/* eslint-disable no-undef */
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_API_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMEMT_ID
  apiKey: "AIzaSyDQ8tXfSCD1yB0gzAm37OECm8mJGWBj2Es",
  authDomain: "auth-efef1.firebaseapp.com",
  projectId: "auth-efef1",
  storageBucket: "auth-efef1.appspot.com",
  messagingSenderId: "151258097124",
  appId: "1:151258097124:web:4dcdf5c81d020b0e0ad3f1",
  measurementId: "G-PJY71PYFWL"
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);