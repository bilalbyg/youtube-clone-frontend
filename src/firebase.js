// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClQPws_MTtAcu98ETWpJ0OzaD5J8YI09M",
  authDomain: "yt-clone-a595a.firebaseapp.com",
  projectId: "yt-clone-a595a",
  storageBucket: "yt-clone-a595a.appspot.com",
  messagingSenderId: "629481958832",
  appId: "1:629481958832:web:7727f5fa10a7a6e8c0ba75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export { app, db, auth, timestamp, provider };