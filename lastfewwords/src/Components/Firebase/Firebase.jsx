import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyClSOPeQ8x9JyMvwpevlfDDP-oJNyaQzDA",
  authDomain: "portfolio-47cce.firebaseapp.com",
  projectId: "portfolio-47cce",
  storageBucket: "portfolio-47cce.appspot.com",
  messagingSenderId: "713224206371",
  appId: "1:713224206371:web:7d513b804f3f97bc2c9996"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)