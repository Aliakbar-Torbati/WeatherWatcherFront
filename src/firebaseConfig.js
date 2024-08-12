import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {

  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_FIREBASE_APP_ID,
  // measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyBFRoLTkEguwdp9tACHsgEyYjDJg-1ttXo",
  authDomain: "weatherwatcher-f527b.firebaseapp.com",
  projectId: "weatherwatcher-f527b",
  storageBucket: "weatherwatcher-f527b.appspot.com",
  messagingSenderId: "248775799591",
  appId: "1:248775799591:web:26ac4685872c003ffcef02",
  measurementId: "G-Y2B6ZV0M6R"
};
 
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const auth= getAuth();
const FirebaseDb=getFirestore(app)

export { messaging, auth, getToken, FirebaseDb, onMessage };
export default app;