import "./AboutMeStyle.scss";
import React, { useEffect, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

function AboutMe() {
  const [isVisible, setIsVisible] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(1);
    }, 1000);

    return () => clearTimeout(timer);
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
    </div>
  );
}

export default AboutMe;
