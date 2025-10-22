// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
