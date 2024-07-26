import { useEffect, useState } from "react";
import axios from "axios";
import t03d from "../assets/t03d.png";
import { BsDroplet } from "react-icons/bs";
import "./WeatherCardStyle.scss";
import CitySearch from "./CitySearch";

function WeatherCard() {
  const [currWeather, setCurrWeather] = useState();
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Berlin");
  const [isHourlyVisible, setIsHourlyVisible] = useState(true);

  const toggleHourlyVisibility = () => {
    setIsHourlyVisible(!isHourlyVisible);
  };

  useEffect(() => {
    const getCurrWeather = async () => {
      const weatherAPIKey = import.meta.env.VITE_FIREBASE_weather_API_Key;
      // const url = `https://api.weatherbit.io/v2.0/current?city=Berlin&key=${weatherAPIKey}&include=minutely`;
      const url = `http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=Berlin&aqi=no`;

      try {
        const response = await axios.get(url);
        console.log("current weather", response.data);
        setCurrWeather(response.data);
      } catch (error) {
        console.error("Error fetching current weather data:", error);
      }
    };
    const getHourlyWeather = async () => {
      const weatherAPIKey = import.meta.env.VITE_FIREBASE_weather_API_Key;
      const url = `http://api.weatherapi.com/v1/forecast.json?key=${weatherAPIKey}&q=Berlin&aqi=no`;
      try {
        const response = await axios.get(url);
        console.log("Hourly Weather Forecast", response.data.forecast.forecastday[0].hour);
        setHourlyWeather(response.data.forecast.forecastday[0].hour);
      } catch (error) {
        console.error("Error fetching hourly weather data:", error);
      }
    };
    getHourlyWeather();
    getCurrWeather();
  }, [selectedCity]);

  // if (!currWeather) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <CitySearch setSelectedCity={setSelectedCity} />


      <div
        className={`hour-card-container ${isHourlyVisible ? "visible" : "hidden"}`}>
        <h1>Hourly Weather for {selectedCity}</h1>
        {hourlyWeather.map((hourWeather, i) => {
          return (
            <div key={i}>
            <div>
              <div className="hour-card">
                <div className="time-box">
                  <p>{hourWeather.time}</p>

                </div>
                {/* <div className="icon-box">
                  <img src={t03d} alt={hourWeather.weather.description} />
                </div> 
                <div className="temp-box">
                  {/* <p>{hourWeather.temp}ºC</p>
                  <p>RealFeel {hourWeather.app_temp}ºC</p> */}
                                    <p>24ºC</p>
                                    <p>RealFeel 23ºC</p>
                </div>
                <div className="pop-box">
                  <BsDroplet size={20} style={{ color: "#fff" }} />
                  {/* <p>{hourWeather.pop}%</p> */}
                  <p>40%</p>

                </div>
              </div>
            </div>
          );
        })}

      </div>
      <button className="toggle-button" onClick={toggleHourlyVisibility}>
        &#9660; {/* Downward triangle symbol */}
      </button>
    </>
  );
}

export default WeatherCard;
