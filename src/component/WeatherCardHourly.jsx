import { useEffect, useState } from "react";
import axios from "axios";
import t03d from "../assets/t03d.png";
import { BsDroplet } from "react-icons/bs";
import "./WeatherCardStyle.scss";
function WeatherCardHourly() {
  const [hourlyWeather, setHourlyWeather] = useState([]);
  useEffect(() => {
    const getHourlyWeather = async () => {
      const apiKey = "75d1c38f05454e209edbb4511ed3dd99";
      const url = `https://api.weatherbit.io/v2.0/forecast/hourly?city=Berlin&key=${apiKey}&hours=24`;
      try {
        const response = await axios.get(url);
        console.log("Hourly Weather Forecast", response.data.data);
        setHourlyWeather(response.data.data);
      } catch (error) {
        console.error("Error fetching hourly weather data:", error);
      }
    };
    getHourlyWeather();
  }, []);

  if (!hourlyWeather) {
    return <div>Loading...</div>;
  }

  return (
    <>
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
