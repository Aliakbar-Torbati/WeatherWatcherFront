import React, { useEffect, useState } from "react";
import "./AboutMeStyle.scss";

function AboutFeature() {
  const [isVisible, setIsVisible] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 250) {
        setIsVisible(2);
      } else if (scrollTop > 150) {
        setIsVisible(1);
      } else {
        setIsVisible(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hiddenStyle = {
    opacity: 0,
    transform: "translateY(-50px)",
    transition: "opacity 1s ease-out, transform 1s ease-out",
  };
  const visibleStyle1 = {
    opacity: 0.5,
    transform: "translateY(0)",
    transition: "opacity 1s ease-out, transform 1s ease-out",
  };
  const visibleStyle2 = {
    opacity: 1,
    transform: "translateY(0)",
    transition: "opacity 1s ease-out, transform 1s ease-out",
  };

  return (
    <div className="aboutFeature-container">
      <div
        className="scroll-div"
        style={
          isVisible === 2
            ? visibleStyle2
            : isVisible === 1
            ? visibleStyle1
            : hiddenStyle
        }
      >
        <p>
          <b>Welcome to Weather Watcher</b>
          <br />
          <br />
          The ultimate weather companion designed to keep you informed and
          prepared for any weather condition. With our app, you can:{" "}
          <ul>
            <li>Search Your City</li>
            <li>Get Current Weather Conditions</li>
            <li>
              Hourly Weather Forecasting: Plan your day with detailed hourly
              weather forecasts.
            </li>
            <li>
              Customize your weather alerts by setting specific temperature
              thresholds.
            </li>
            <li>
              Schedule Notifications: Choose the exact time you want to receive
              daily weather notifications.
            </li>
            <li>
              Get timely alerts to ensure you’re never caught off guard by
              severe weather.
            </li>
          </ul>
        </p>
        <br /><br />
        <p>
          <b>Tech for developing:</b><br />
          
          <ul>
            <li>HTML & SCSS: For
            structuring and styling the app</li>
            <li>React & Vite: For building a fast and
            interactive user interface</li>
            <li>Firebase: Leveraging Firebase
          Authentication, Firestore Database, and Firebase Messaging for
          seamless data management and real-time notifications</li>
            <li>API: Weather data sourced from WeatherAPI</li>
          </ul>
        </p>
      </div>

      <form className="form">
        <h2>Write to me</h2>
            <label>Your Name</label>
            <input type="text" placeholder="Type your name here"/>
            <label>Email</label>
            <input type="email" placeholder="Type your email here"/>
            <label>Subject</label>
            <input type="text" placeholder="Type your message subject here"/>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here" />
            <button className="btn">Submit</button>
        </form>

    </div>
  );
}

export default AboutFeature;
