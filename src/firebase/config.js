import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCReHbvHCKryfDLK5iOqI9IkxbvBuip65Q",
  authDomain: "monkeyrock-23.firebaseapp.com",
  projectId: "monkeyrock-23",
  storageBucket: "monkeyrock-23.appspot.com",
  messagingSenderId: "264305075354",
  appId: "1:264305075354:web:dc53577174210c7ffb6b23",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
