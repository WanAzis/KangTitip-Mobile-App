import { initializeApp } from "firebase/app";
import { 
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where, } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCs5KX8ieDVWVNLaVPhNMDmrCXn8_EeaXk",
  authDomain: "kangtitip-mobile-app.firebaseapp.com",
  projectId: "kangtitip-mobile-app",
  storageBucket: "kangtitip-mobile-app.appspot.com",
  messagingSenderId: "202325828774",
  appId: "1:202325828774:web:b77816b2d28e0dfacc8067",
  measurementId: "G-76B7Q0S7R9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore(app);

// const product = doc(firestore, 'Product')

export { 
  firestore, 
  collection,
  getDocs,
  getDoc,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where, };
