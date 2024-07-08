import "./UserPreferenceStyle.scss";
import requestPermission from '../requestPermission';
import { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { FirebaseDb, auth } from "../firebaseConfig";
import { useAuthen } from "../context/AuthenContex";

const UserPreference = ({ onSave }) => {
  const { uuser } = useAuthen();
  const [city, setCity] = useState('');
  const [coldThreshold, setColdThreshold] = useState('');
  const [hotThreshold, setHotThreshold] = useState('');
  const [notifyRain, setNotifyRain] = useState(false);
  const [time, setTime] = useState('');

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUserData = async (userId) => {
      try {
        const docRef = doc(FirebaseDb, "users", userId);
        const fetchedUser = await getDoc(docRef);
        if (fetchedUser.exists()) {
          const data = fetchedUser.data();
          setCity(data.city || '');
          setColdThreshold(data.coldThreshold || '');
          setHotThreshold(data.hotThreshold || '');
          setNotifyRain(data.notifyRain || false);
          setTime(data.time || '');
          console.log("fetchedUser.data()", data);
        } else {
          console.log("User data not found!");
        }
      } catch (error) {
        console.error("Error while fetching user data:", error);
      }
    };

    if (auth.currentUser) {
      fetchUserData(auth.currentUser.uid);
    }
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Validate inputs (e.g., ensure city is not empty)
    if (city.trim() === '') {
      alert('Please enter a city name.');
      return;
    }

    // Save the updated preferences to the database
    try {
      const userId = auth.currentUser.uid;
      await setDoc(doc(FirebaseDb, "users", userId), {
        city,
        coldThreshold,
        hotThreshold,
        notifyRain,
        time,
      }, { merge: true });
      console.log("User preferences updated successfully!");
      if (onSave) onSave(); // Call onSave if provided
    } catch (error) {
      console.error("Error while updating user preferences:", error);
    }
  };

  return (
    <div className="user-preference-container">
      <h2>User Preferences</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="cityInput">City Name:</label>
          <input
            type="text"
            id="cityInput"
             placeholder='ioio'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="coldThresholdInput">Cold Threshold Temp(°C):</label>
          <input
            type="number"
            id="coldThresholdInput"
            value={coldThreshold}
            onChange={(e) => setColdThreshold(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="hotThresholdInput">Hot Threshold Temp(°C):</label>
          <input
            type="number"
            id="hotThresholdInput"
            value={hotThreshold}
            onChange={(e) => setHotThreshold(e.target.value)}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="rainCheckbox"
            checked={notifyRain}
            onChange={(e) => setNotifyRain(e.target.checked)}
          />
          <label htmlFor="rainCheckbox">Notify about possibility of rain?</label>
        </div>
        <div>
          <label>
            Set Notification Time:
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Save your Preferences to Alert</button>
      </form>
    </div>
  );
};

export default UserPreference;

