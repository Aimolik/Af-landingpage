import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBzgdLL55R1xyCz3jVdWEgDFd3JkvxD0HY",
  authDomain: "af-landingpage.firebaseapp.com",
  projectId: "af-landingpage",
  storageBucket: "af-landingpage.firebasestorage.app",
  messagingSenderId: "645729592283",
  appId: "1:645729592283:web:296e484baaba874e457dfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);