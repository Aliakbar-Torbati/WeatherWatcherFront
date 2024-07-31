import { useEffect, useState } from "react";
import axios from "axios";
import t03d from "../assets/t03d.png";
import { BsDroplet } from "react-icons/bs";
import "./WeatherCardStyle.scss";
import CitySearch from "./CitySearch";
import { IoIosArrowDropdown, IoIosArrowDropup  } from "react-icons/io";


function WeatherCard() {
  const [currWeather, setCurrWeather] = useState(null);
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Berlin");
  const [isHourlyVisible, setIsHourlyVisible] = useState(true);
  const weatherAPIKey = import.meta.env.VITE_FIREBASE_weather_API_Key;

  const toggleHourlyVisibility = () => {
    setIsHourlyVisible(!isHourlyVisible);
  };

  useEffect(() => {
    const getCurrWeather = async () => {
      const url = `http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${selectedCity}&aqi=no`;

      try {
        const response = await axios.get(url);
        console.log("current weather", response.data);
        setCurrWeather(response.data);
      } catch (error) {
        console.error("Error fetching current weather data:", error);
      }
    };
    const getHourlyWeather = async () => {
      const url = `http://api.weatherapi.com/v1/forecast.json?key=${weatherAPIKey}&q=${selectedCity}&aqi=no`;
      try {
        const response = await axios.get(url);
        console.log(
          "Hourly Weather Forecast",
          response.data.forecast.forecastday[0].hour
        );
        setHourlyWeather(response.data.forecast.forecastday[0].hour);
      } catch (error) {
        console.error("Error fetching hourly weather data:", error);
      }
    };
    getHourlyWeather();
    getCurrWeather();
  }, [selectedCity]);

  if (!currWeather) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <CitySearch setSelectedCity={setSelectedCity} />
      <div className="hour-card-container">
        <div className="card-container">
          <div className="time-container">
            <div>
              <p>CURRENT WEATHER</p>
              <p>
                {currWeather.location.name}, {currWeather.location.country}
              </p>
            </div>
            <div>
              <p>{currWeather.current.last_updated}</p>
            </div>
          </div>
          <hr />
          <div className="details-container">
            <div className="left-container">
              <div className="temp-icon-container">
                <div>
                  <img
                    src={currWeather.current.condition.icon}
                    alt={currWeather.current.condition.text}
                  />
                </div>
                <div className="temp">
                  <p>
                    <b>{currWeather.current.temp_c}ºC</b>
                  </p>
                  <p>RealFeel: {currWeather.current.feelslike_c}ºC</p>
                </div>
              </div>
              <div>
                <p>{currWeather.current.condition.text}</p>
              </div>
            </div>
            <div className="details">
              <br />
              <p>
                Wind: {currWeather.current.wind_dir}{" "}
                {currWeather.current.wind_mph} mph
              </p>
              <hr />
              <br />
              <p>UV: Index {currWeather.current.uv}</p>
              <hr />
              <br />
              <p>Humidity: {currWeather.current.humidity}%</p>
              <hr />
              <br />
              <p>Pressure: {currWeather.current.pressure_mb} mbar</p>
              <hr />
              <br />
              <p>Cloud Cover: {currWeather.current.cloud} %</p>
            </div>
          </div>
        </div>
      </div>

      <div className="toggle-button" onClick={toggleHourlyVisibility}>
      <h2>Hourly Weather for {selectedCity}</h2>
      {isHourlyVisible ? <IoIosArrowDropup size={25} color="white"/> : <IoIosArrowDropdown size={25} color="white"/>}
      </div>
   

      <div
        className={`hour-card-container ${
          isHourlyVisible ? "visible" : "hidden"
        }`}
      >
        {hourlyWeather.map((hourWeather, i) => {
          return (
            <div key={i}>
              <div>
                <div className="hour-card">
                  <div className="time-box">
                    <p>{hourWeather.time}</p>
                  </div>
                  <div className="icon-box">
                    <img
                      src={hourWeather.condition.icon}
                      alt={hourWeather.condition.text}
                    />
                  </div>
                  <div className="temp-box">
                    <p>{hourWeather.temp_c}ºC</p>
                    <p>RealFeel {hourWeather.feelslike_c}ºC</p>
                  </div>
                  <div className="pop-box">
                    <BsDroplet size={20} style={{ color: "#fff" }} />
                    <p>{hourWeather.chance_of_rain}%</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </>
  );
}

export default WeatherCard;
