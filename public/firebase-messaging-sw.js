self.addEventListener('push', function(event) {
  const data = event.data.json();
  console.log('Push event!! ', data);
  const title = data.notification.title;
  const options = {
    body: data.notification.body,
  };
  event.waitUntil(self.registration.showNotification(title, options));
});





// importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js');

// const firebaseConfig = {
//   apiKey: "AIzaSyBFRoLTkEguwdp9tACHsgEyYjDJg-1ttXo",
//   authDomain: "weatherwatcher-f527b.firebaseapp.com",
//   projectId: "weatherwatcher-f527b",
//   storageBucket: "weatherwatcher-f527b.appspot.com",
//   messagingSenderId: "248775799591",
//   appId: "1:248775799591:web:755adbf43369324afcef02",
//   measurementId: "G-H840WQGEK1"
// };

// // messaging.onBackgroundMessage((payload) => {
// //   console.log('[firebase-messaging-sw.js] Received background message ', payload);
// //   const notificationTitle = payload.notification.title;
// //   const notificationOptions = {
// //     body: payload.notification.body,
// //   };

// //   self.registration.showNotification(notificationTitle, notificationOptions);
// // });
// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });