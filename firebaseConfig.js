import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
