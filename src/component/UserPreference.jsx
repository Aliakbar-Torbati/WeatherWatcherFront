import { useState } from 'react';
import "./UserPreferenceStyle.scss";
import { API_URL } from "../App";
import axios from 'axios';

const UserPreference = ({ onSave }) => {
  const [city, setCity] = useState('');
  const [coldThreshold, setColdThreshold] = useState('');
  const [hotThreshold, setHotThreshold] = useState('');
  const [notifyRain, setNotifyRain] = useState(false);
  


  const handleSave =  async (e) => {
    e.preventDefault();

    // Validate inputs (e.g., ensure city is not empty)
    if (city.trim() === '') {
      alert('Please enter a city name.');
      return;
    }

    const preferences = {
      city,
      coldThreshold: parseFloat(coldThreshold),
      hotThreshold: parseFloat(hotThreshold),
      notifyRain
    };
    try {
      const response = await axios.post(`${API_URL}/location`, preferences)
      console.log("Prefence Location added successfully:", response.data);
    } catch (error) {
      console.error("There was a problem adding the preference location:", error);
    }

    onSave(preferences); // Pass preferences back to parent component
  };

  return (
    <div className="user-preference-container">
      <h2>User Preferences</h2>
      <div>
        <label htmlFor="cityInput">City Name:</label>
        <input
          type="text"
          id="cityInput"
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
        <label htmlFor="rainCheckbox">Notify about possibility of rain ?</label>
      </div>
      <button onClick={handleSave}>Save your Preferences to Alert</button>
    </div>
  );
};

export default UserPreference;
