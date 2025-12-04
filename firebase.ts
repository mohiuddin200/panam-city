import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBK8srOs6hS4juSpErjHaKbXcI1CUERkpc",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "panam-tour-2025.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "panam-tour-2025",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "panam-tour-2025.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "1023828155722",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:1023828155722:web:790694a0f14a52edc0f5b3"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);