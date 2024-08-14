import "./AddNotifStyle.scss";
import { useState, useEffect } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { FirebaseDb, auth } from "../../firebaseConfig";
import { useAuthen } from "../../context/AuthenContex";
import Alert from '../alertMessage/Alert';

const AddNotif = ({ onSave }) => {
  const { uuser } = useAuthen();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [coldThreshold, setColdThreshold] = useState("");
  const [hotThreshold, setHotThreshold] = useState("");
  const [notifyRain, setNotifyRain] = useState(false);
  const [time, setTime] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const { isPrefernceFormVisible } = useAuthen();
  const { setIsPrefrenceFormVisible } = useAuthen();
  console.log("isPrefernceFormVisible", isPrefernceFormVisible);

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
    // close the form after saving data
    setIsPrefrenceFormVisible(!isPrefernceFormVisible);

    // Validate inputs (e.g., ensure city is not empty)
    if (city.trim() === "") {
      alert("Please enter a city name.");
      return;
    }

    // Save the updated preferences to the database
    try {
      if (uuser) {
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
      if (onSave) onSave(); // Call onSave if provided
    }else{
      console.log("User is not loggedin");
        setAlertMessage("You should login first to set notification!");
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error while updating user preferences:", error);
    }
  };

  useEffect(() => {
    if (showAlert) {
	  console.log('showAlert',showAlert);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);

    }
  }, [showAlert]);
  return (
    <div className="user-preference-container">
      {showAlert && <Alert message={alertMessage} />}
      <h2>Set Notification here</h2>
      <form onSubmit={handleUpdate}>
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
            <span className="tooltip-text">Check this box if you want to be notified about the weather condition every day in this deviceg.</span>
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
            <span className="tooltip-text">Set the time you want to receive notifications.</span>
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

export default AddNotif;
