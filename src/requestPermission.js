import { useEffect } from "react";
import { useToken } from "./context/TokenContext.jsx";
import { messaging, getToken } from "./firebaseConfig.js";

const VAPID_KEY = import.meta.env.VITE_FIREBASE_VAPID_KEY;

const requestPermission = () => {
  const { setToken } = useToken();
  useEffect(() => {
    const catchToken = async () => {
      try {
        const token = await getToken(messaging, { vapidKey: VAPID_KEY });
        if (token) {
          console.log("FCM Token:", token);
          setToken(token);
        } else {
          console.log(
            "No registration token available. Request permission to generate one."
          );
        }
      } catch (error) {
        console.error("An error occurred while retrieving token. ", error);
      }
    };
    catchToken();
  }, [setToken]);
};

export default requestPermission;
