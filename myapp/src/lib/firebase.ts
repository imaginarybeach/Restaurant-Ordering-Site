import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA08i0t0KVqKUcnZ4evU2u7IomoZLrd944",
    authDomain: "code-cafe-33d19.firebaseapp.com",
    projectId: "code-cafe-33d19",
    storageBucket: "code-cafe-33d19.appspot.com",
    messagingSenderId: "459709745279",
    appId: "1:459709745279:web:4d7a96835b847f34e5174a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

