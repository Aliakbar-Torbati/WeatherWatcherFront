import { useEffect, useState } from "react";
import axios from "axios";
import t03d from "../assets/t03d.png";
import "./WeatherCardStyle.scss";
function WeatherCard() {
  const [currWeather, setCurrWeather] = useState();
  useEffect(() => {
    const getCurrWeather = async () => {
      const apiKey = "75d1c38f05454e209edbb4511ed3dd99";
      // const url = `https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=${apiKey}&include=minutely`;
      const url = `https://api.weatherbit.io/v2.0/current?city=Berlin&key=${apiKey}&include=minutely`;

      try {
        const response = await axios.get(url);
        console.log("current weather", response.data.data);
        setCurrWeather(response.data.data[0]);
      } catch (error) {
        console.error("Error fetching current weather data:", error);
      }
    };
    getCurrWeather();
  }, []);

  if (!currWeather) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="card-container">
        <div className="time-container">
          <div><p>CURRENT WEATHER</p></div>
          <div><p>4:21 PM</p></div>
        </div>
        <hr />
        <div className="details-container">
          <div className="left-container">
            <div className="temp-icon-container">
              <div><img src={t03d} alt={currWeather.weather.description} /></div>
              <div className="temp">
                <p><b>{currWeather.temp}ºC</b></p>
                <p>RealFeel  {currWeather.app_temp}ºC</p>
                
                
                </div>
            </div>
            <div><p>{currWeather.weather.description}</p></div>
          </div>
          <div className="details">
            <br />
            <p>Wind    {currWeather.wind_spd * 3.6} km/h</p>
            <hr /><br />
            <p>UV Index {currWeather.uv}</p>
            <hr /><br />
            <p>Humidity {currWeather.rh}%</p>
            <hr /><br />
            <p>Pressure {currWeather.pres} mb</p>
            <hr /><br />
            <p>Cloud Cover {currWeather.clouds} %</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
