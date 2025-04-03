
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCyo_C5-hHmSmvfqbfdp5gA0NhxFAW5p7U",
  authDomain: "amusmentpark-d93c8.firebaseapp.com",
  projectId: "amusmentpark-d93c8",
  storageBucket: "amusmentpark-d93c8.firebasestorage.app",
  messagingSenderId: "462613440664",
  appId: "1:462613440664:web:ebd0f80842cb32ca0f08ed",
  measurementId: "G-QSX4M8RLYF"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };