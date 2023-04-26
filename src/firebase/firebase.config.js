// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDENvjZSVlk0NUMoEqNyw7v3B5QfVKsxqI",
  authDomain: "the-news-dragon-a0121.firebaseapp.com",
  projectId: "the-news-dragon-a0121",
  storageBucket: "the-news-dragon-a0121.appspot.com",
  messagingSenderId: "648186581464",
  appId: "1:648186581464:web:b1cd6d1ab4d381d049e2ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;