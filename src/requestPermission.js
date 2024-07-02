// src/requestPermission.js
import { messaging, getToken } from './firebaseConfig.js';

// const sendTokenToServer = async (token) => {
//   try {
//     await fetch('http://localhost:5005/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ token }),
//     });
//   } catch (error) {
//     console.error('An error occurred while sending token to server. ', error);
//   }
// };

const VAPID_KEY = 'BOkM-C7kycoEB3L4ieJMyA_Qr9XZ7xDvYbmTSZ7atgL4sDO2NFk-KGMHxU1hdjhA1cklUZkKd9R5ShdytauZSXA';
const requestPermission = async () => {
  try {
    const token = await getToken(messaging, { vapidKey: VAPID_KEY });
    if (token) {
      console.log('FCM Token:', token);
      // await sendTokenToServer(token);
    } else {
      console.log('No registration token available. Request permission to generate one.');
    }
  } catch (error) {
    console.error('An error occurred while retrieving token. ', error);
  }
};

export default requestPermission;



// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('./firebase-messaging-sw.js')
//     .then((registration) => {
//       console.log('Service Worker registered with scope:', registration.scope);

//       // Use the registration for FCM
//       getToken(messaging, { vapidKey: 'BOkM-C7kycoEB3L4ieJMyA_Qr9XZ7xDvYbmTSZ7atgL4sDO2NFk-KGMHxU1hdjhA1cklUZkKd9R5ShdytauZSXA'
//         , serviceWorkerRegistration: registration })
//         .then((currentToken) => {
//           if (currentToken) {
//             console.log('FCM Token:', currentToken);
//             saveTokenToServer(currentToken);
//           } else {
//             console.log('No registration token available. Request permission to generate one.');
//           }
//         })
//         .catch((err) => {
//           console.error('Error getting FCM token', err);
//         });
//     }).catch((err) => {
//       console.error('Service Worker registration failed:', err);
//     });
// }

// // Request permission to send notifications
// const requestPermission = async () => {
//   const permission = Notification.permission;

//   if (permission === "granted") {
//     console.log("Notification permission granted.");
//     await getFCMToken();
//   } else if (permission === "denied") {
//     alert("You have blocked notifications. Please enable them in your browser settings.");
//   } else if (permission === "default") {
//     try {
//       const userPermission = await Notification.requestPermission();
//       if (userPermission === "granted") {
//         console.log("Notification permission granted.");
//         await getFCMToken();
//       } else {
//         alert("You need to allow notifications to receive weather alerts.");
//       }
//     } catch (error) {
//       console.error("Error requesting notification permission", error);
//     }
//   }
// };

// // Function to get FCM token
// const getFCMToken = async () => {
//   try {
//     const token = await getToken(messaging, { vapidKey: 'BOkM-C7kycoEB3L4ieJMyA_Qr9XZ7xDvYbmTSZ7atgL4sDO2NFk-KGMHxU1hdjhA1cklUZkKd9R5ShdytauZSXA' });
//     if (token) {
//       console.log("FCM Token:", token);
//       await saveTokenToServer(token);
//     } else {
//       console.log("No registration token available. Request permission to generate one.");
//     }
//   } catch (error) {
//     console.error("Error getting FCM token", error);
//   }
// };

// export default requestPermission;
