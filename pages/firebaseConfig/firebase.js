import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZzNAQvNVoUcx9ugJa31wSQ-bquEOr398",
  authDomain: "restaurantapp-150fd.firebaseapp.com",
  projectId: "restaurantapp-150fd",
  storageBucket: "restaurantapp-150fd.appspot.com",
  messagingSenderId: "206430205550",
  appId: "1:206430205550:web:4b5d3a9c4670d1194d187f",
  measurementId: "G-KZKPGH8FZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth, firestore, analytics};