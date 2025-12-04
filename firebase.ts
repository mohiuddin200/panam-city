import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBK8srOs6hS4juSpErjHaKbXcI1CUERkpc",
  authDomain: "panam-tour-2025.firebaseapp.com",
  projectId: "panam-tour-2025",
  storageBucket: "panam-tour-2025.firebasestorage.app",
  messagingSenderId: "1023828155722",
  appId: "1:1023828155722:web:790694a0f14a52edc0f5b3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);