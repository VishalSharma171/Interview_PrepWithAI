// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdFZf_cRq39be0EZez0dEya_eXUQ7guFk",
  authDomain: "prepwise-4e3ac.firebaseapp.com",
  projectId: "prepwise-4e3ac",
  storageBucket: "prepwise-4e3ac.firebasestorage.app",
  messagingSenderId: "91220677587",
  appId: "1:91220677587:web:d2fcb90804aa59cf271526",
  measurementId: "G-ZPKTW5Z0FS"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);