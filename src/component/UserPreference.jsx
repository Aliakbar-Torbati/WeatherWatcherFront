import "./UserPreferenceStyle.scss";
import { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { FirebaseDb, auth } from "../firebaseConfig";
import { useAuthen } from "../context/AuthenContex";
import { useNavigate } from "react-router-dom";

const UserPreference = ({ onSave }) => {
  const { uuser } = useAuthen();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [coldThreshold, setColdThreshold] = useState("");
  const [hotThreshold, setHotThreshold] = useState("");
  const [notifyRain, setNotifyRain] = useState(false);
  const [time, setTime] = useState("");
  const nav = useNavigate();


  // Set form fields with the values from uuser when the component mounts or uuser changes
  useEffect(() => {
    if (uuser) {
      setEmail(uuser.email || "");
      setUsername(uuser.userName || "");
      setCity(uuser.city || "");
      setColdThreshold(uuser.coldThreshold || "");
      setHotThreshold(uuser.hotThreshold || "");
      setNotifyRain(uuser.notifyRain || false);
      setTime(uuser.time || "");
    }
  }, [uuser]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Validate inputs (e.g., ensure city is not empty)
    if (city.trim() === "") {
      alert("Please enter a city name.");
      return;
    }

    // Save the updated preferences to the database
    try {
      const userId = auth.currentUser.uid;
      await setDoc(
        doc(FirebaseDb, "users", userId),
        {
          city,
          coldThreshold,
          hotThreshold,
          notifyRain,
          time,
        },
        { merge: true }
      );
      console.log("User preferences updated successfully!");
      nav('/')
      if (onSave) onSave(); // Call onSave if provided
    } catch (error) {
      console.error("Error while updating user preferences:", error);
    }
  };

  return (
    <div className="user-preference-container">
      <h2>Your Profile</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="emailInput">Email:</label>
          <input
            type="email"
            id="emailInput"
            value={email}
            readOnly
            className="read-only-input"
          />
        </div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          type="text"
          id="usernameInput"
          value={username}
          readOnly
          className="read-only-input"
        />
        <div>
          <label htmlFor="cityInput">City Name:
          <span className="label-with-tooltip">
            ?<span className="tooltip-text">Enter the name of your city.</span>
          </span>
          </label>
          <input
            type="text"
            id="cityInput"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="coldThresholdInput">
            Your Cold Threshold Temp(°C):
          <span className="label-with-tooltip">?
            <span className="tooltip-text">Enter the temperature below which you consider it to be cold.</span>
          </span>
          </label>
          <input
            type="number"
            id="coldThresholdInput"
            value={coldThreshold}
            onChange={(e) => setColdThreshold(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="hotThresholdInput">
            Your Hot Threshold Temp(°C):
                    <span className="label-with-tooltip">?
            <span className="tooltip-text">Enter the temperature above which you consider it to be hot.</span>
          </span>
          </label>
          <input
            type="number"
            id="hotThresholdInput"
            value={hotThreshold}
            onChange={(e) => setHotThreshold(e.target.value)}
          />
        </div>
        <div className="notification-container">
          <div className="notification-checkbox">
            <label htmlFor="rainCheckbox">Get notification every day ?
                      <span className="label-with-tooltip">?
            <span className="tooltip-text">Check this box if you want to be notified about the weather condition every day in this device.</span>
          </span>
            </label>
            <input
              type="checkbox"
              id="rainCheckbox"
              checked={notifyRain}
              onChange={(e) => setNotifyRain(e.target.checked)}
              className="large-checkbox"
            />
          </div>
          <div>
            <label>
              Set Notification Time:
            <span className="label-with-tooltip">?
            <span className="tooltip-text">Set the time you want to receive notification.</span>
          </span>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                readOnly={!notifyRain} // Conditional readOnly based on notifyRain state
                className={!notifyRain ? "read-only-input" : ""}
              />
            </label>
          </div>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserPreference;
