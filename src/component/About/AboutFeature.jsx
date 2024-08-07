import React, { useEffect, useState } from 'react';
import './AboutMeStyle.scss';

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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const hiddenStyle = {
    opacity: 0,
    transform: 'translateY(50px)',
    transition: 'opacity 1s ease-out, transform 1s ease-out',
  };
  const visibleStyle1 = {
    opacity: 0.5,
    transform: 'translateY(0)',
    transition: 'opacity 1s ease-out, transform 1s ease-out',
  };
  const visibleStyle2 = {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'opacity 1s ease-out, transform 1s ease-out',
  };

  return (
    <div className="aboutFeature-container">
      <div className="scroll-div" style={isVisible === 2 ? visibleStyle2 : isVisible === 1 ? visibleStyle1 : hiddenStyle}>
        <p>
          Welcome to Weather Watcher – the ultimate weather companion designed to
          keep you informed and prepared for any weather condition. With our app,
          you can: Search Your City: Quickly find and select your city to get
          localized weather updates. Current Weather Conditions: Stay up-to-date
          with real-time weather data for your chosen location. Hourly Weather
          Forecasting: Plan your day with detailed hourly weather forecasts. Set
          Temperature Thresholds: Customize your weather alerts by setting
          specific temperature thresholds. Schedule Notifications: Choose the
          exact time you want to receive daily weather notifications. Severe
          Weather Alerts: Get timely alerts to ensure you’re never caught off
          guard by severe weather. Our app is designed with user-friendliness,
          simplicity, and responsiveness in mind. It ensures a seamless experience
          on any device.
        </p>
      </div>
    </div>
  );
}

export default AboutFeature;
