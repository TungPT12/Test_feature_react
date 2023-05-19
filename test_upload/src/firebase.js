// Import the functions you need from the SDKs you need
import { initializeApp, fire } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import {getStor}
const firebaseConfig = {
  apiKey: "AIzaSyCJQBPouskwaI1h0oUJZztCeVChyfW3sLs",
  authDomain: "tiki-tungpt12.firebaseapp.com",
  projectId: "tiki-tungpt12",
  storageBucket: "tiki-tungpt12.appspot.com",
  messagingSenderId: "28625235327",
  appId: "1:28625235327:web:60f7d395ef8b9efd06be4a",
  measurementId: "G-8ENWZ8PH73",
  databaseURL: "https://tiki-tungpt12-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
export { database , provider, auth, storage} ;