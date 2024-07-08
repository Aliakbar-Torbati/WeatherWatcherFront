import { useEffect, useState } from "react";
import axios from "axios";
import t03d from "../assets/t03d.png";
import { BsDroplet } from "react-icons/bs";
import "./WeatherCardStyle.scss";
import CitySearch from "./CitySearch";
import UserPreference from "./UserPreference";

function WeatherCardHourly() {
   const [hourlyWeather, setHourlyWeather] = useState([]);
   const [selectedCity, setSelectedCity] = useState('Berlin');
  useEffect(() => {
    const getHourlyWeather = async () => {
      const weatherAPIKey =import.meta.env.VITE_FIREBASE_weather_API_Key;
      const url = `https://api.weatherbit.io/v2.0/forecast/hourly?city=${selectedCity}&key=${weatherAPIKey}&hours=24`;
      try {
        const response = await axios.get(url);
        console.log("Hourly Weather Forecast", response.data.data);
        setHourlyWeather(response.data.data);
      } catch (error) {
        console.error("Error fetching hourly weather data:", error);
      }
    };
    getHourlyWeather();
  }, [selectedCity]);

  const handleSavePreferences = (preferences) => {
    console.log('Saving preferences:', preferences);
  };
  
  if (!hourlyWeather) {
    return <div>Loading...</div>;
  }

  return (
    <>

<CitySearch setSelectedCity={setSelectedCity} />
<UserPreference onSave={handleSavePreferences} />
<h1>Hourly Weather for {selectedCity}</h1>

      <div className="hour-card-container">
        {hourlyWeather.map((hourWeather, i) => {
          return (
            <div key={i}>
              <div className="hour-card">
                <div className="time-box">
                  <p>{hourWeather.timestamp_local.slice(11, 16)}</p>
                </div>
                <div className="icon-box">
                  <img src={t03d} alt={hourWeather.weather.description} />
                </div>
                <div className="temp-box">
                  <p>{hourWeather.temp}ºC</p>
                  <p>RealFeel {hourWeather.app_temp}ºC</p>
                </div>
                <div className="pop-box">
                  <BsDroplet size={20} style={{ color: "#fff" }}/>
                  <p>{hourWeather.pop}%</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default WeatherCardHourly;
