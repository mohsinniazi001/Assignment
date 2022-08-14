import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDdh9P8aXzFMxdQ32GBCsKnLb65ZBHrRpE",
  authDomain: "fire-auth-fb407.firebaseapp.com",
  projectId: "fire-auth-fb407",
  storageBucket: "fire-auth-fb407.appspot.com",
  messagingSenderId: "396072411121",
  appId: "1:396072411121:web:5cfc35e9e44a85f3baae50",
  measurementId: "G-DYFK72JT9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);