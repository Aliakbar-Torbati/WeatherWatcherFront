import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken } from "firebase/messaging";

// import firebase from 'firebase/app';
// import 'firebase/messaging';

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
  appId: "1:248775799591:web:26ac4685872c003ffcef02",
  measurementId: "G-Y2B6ZV0M6R"
};
 
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

// export default { messaging, getToken };

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const auth= getAuth();
const FirebaseDb=getFirestore(app)

export { messaging, auth, getToken, FirebaseDb, onMessage };
export default app;