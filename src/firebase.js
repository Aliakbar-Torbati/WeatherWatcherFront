// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/app';
import 'firebase/messaging';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFRoLTkEguwdp9tACHsgEyYjDJg-1ttXo",
  authDomain: "weatherwatcher-f527b.firebaseapp.com",
  projectId: "weatherwatcher-f527b",
  storageBucket: "weatherwatcher-f527b.appspot.com",
  messagingSenderId: "248775799591",
  appId: "1:248775799591:web:755adbf43369324afcef02",
  measurementId: "G-H840WQGEK1"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

export { messaging };