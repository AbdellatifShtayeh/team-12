// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw6qkXgj810XOQFte6TfCsSsO8V50gw0Q",
  authDomain: "team-12-a8257.firebaseapp.com",
  projectId: "team-12-a8257",
  storageBucket: "team-12-a8257.appspot.com",
  messagingSenderId: "297606495318",
  appId: "1:297606495318:web:b23274b1b071b717994ff7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();