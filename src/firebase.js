// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, query, where, doc, updateDoc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0W1UyP5YelFoqzHQjugKqPBTKmzjl4dQ",
  authDomain: "aec21-25cse.firebaseapp.com",
  projectId: "aec21-25cse",
  storageBucket: "aec21-25cse.appspot.com",
  messagingSenderId: "85521771475",
  appId: "1:85521771475:web:7c906614a6c0cf3dea1d26"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export {
  db,
  auth,
  provider,
  signInWithPopup,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  doc,
  updateDoc
};
