import "./AboutMeStyle.scss";
import React, { useEffect, useState } from "react";
import { RiArrowDownCircleFill2 } from "react-icons/ri";
import { IoIosArrowDropdown } from "react-icons/io";

function AboutMe() {
  const [isVisible, setIsVisible] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= 0) {
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
  const visibleStyle = {
    opacity: 1,
    transform: "translateY(0)",
    transition: "opacity 1s ease-out, transform 1s ease-out",
  };

  return (
    <div className="about-container">
      <h2>Weather Watcher</h2>
      <h2>Your Ultimate Weather Companion</h2>
      <div>
        <div style={isVisible === 1 ? visibleStyle : hiddenStyle}>
          <IoIosArrowDropdown size={20} style={{ margin: 20, color: "#fff" }} />
        </div>
        <br />
        <div style={isVisible === 1 ? visibleStyle : hiddenStyle}>
          <IoIosArrowDropdown size={25} style={{ margin: 20, color: "#fff" }} />
        </div>
        <br />
        <div style={isVisible === 1 ? visibleStyle : hiddenStyle}>
          <IoIosArrowDropdown size={30} style={{ margin: 20, color: "#fff" }} />
        </div>
        <br />
        <div style={isVisible === 1 ? visibleStyle : hiddenStyle}>
          <IoIosArrowDropdown size={35} style={{ margin: 20, color: "#fff" }} />
        </div>
      </div>

      {/* <p className={`${isVisible ? 'visible' : 'hidden'}`}>
        Key Features: User Registration & Authentication: Securely register,
        sign in, and sign out using Firebase Authentication. Personalized
        Weather Alerts: Set your preferred conditions and get notified every day
        at your chosen time. Technologies Used: HTML & SCSS: For structuring and
        styling the app. React & Vite: For building a fast and interactive user
        interface. Firebase: Leveraging Firebase Authentication, Firestore
        Database, and Firebase Messaging for seamless data management and
        real-time notifications. Stay prepared and never be surprised by the
        weather again with Weather Watcher!
      </p> */}
    </div>
  );
}

export default AboutMe;
