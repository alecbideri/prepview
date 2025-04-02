// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtt5cDnqwXLf-1VjmIdyTTPO0b70uUOOU",
  authDomain: "prepview-34a43.firebaseapp.com",
  projectId: "prepview-34a43",
  storageBucket: "prepview-34a43.firebasestorage.app",
  messagingSenderId: "756906261282",
  appId: "1:756906261282:web:327057b6575f7af529037b",
  measurementId: "G-QTTEE6TXPC",
};

// Initialize Firebase

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
