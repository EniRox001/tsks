import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBqTvkD3sBEIVjO13nqLlNzCftWzd74U-A",
  authDomain: "tsks-e4689.firebaseapp.com",
  projectId: "tsks-e4689",
  storageBucket: "tsks-e4689.appspot.com",
  messagingSenderId: "820788646896",
  appId: "1:820788646896:web:8329d112ab7621b2ab4335",
  measurementId: "G-32C42P8DJ9"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);