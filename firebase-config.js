// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsRQkWC6-Apwt4_ynoeds8tHIdOgMTRpg",
  authDomain: "rakshakai.firebaseapp.com",
  projectId: "rakshakai",
  storageBucket: "rakshakai.firebasestorage.app",
  messagingSenderId: "203848268853",
  appId: "1:203848268853:web:efd2175c48b95f4ea8c57c",
  measurementId: "G-T75RSVLH9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore, Auth, and Storage
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
