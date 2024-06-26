// src/requestPermission.js
import { messaging } from './firebase';

const requestPermission = async () => {
  try {
    await Notification.requestPermission();
    if (Notification.permission === 'granted') {
      const token = await messaging.getToken();
      console.log('FCM Token:', token);
      // Send the token to your server to save it for later use
    }
  } catch (error) {
    console.error('Permission denied', error);
  }
};

export default requestPermission;
