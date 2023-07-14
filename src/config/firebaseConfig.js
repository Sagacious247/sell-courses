import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAFmYer8u2H8fHkCqbYqyLKaflEPRI0D7A",
  authDomain: "sagacious-courses.firebaseapp.com",
  projectId: "sagacious-courses",
  storageBucket: "sagacious-courses.appspot.com",
  messagingSenderId: "78361083815",
  appId: "1:78361083815:web:4d3c51c72eac1fb4290082"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
export const auth = getAuth()