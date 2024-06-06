// import * as firebase from "firebase";

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

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const db = firebase.getFirestore(app);

export { db, auth };
