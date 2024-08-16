import { useEffect, useState } from "react";
import "./IntroStyle.scss";
import { IoIosArrowDropdown } from "react-icons/io";

const Intro = () => {
  const [isVisible, setIsVisible] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(1);
    }, 2000);

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

  useEffect(() => {
    const paragraphs = document.querySelectorAll(".introContent p");
    paragraphs.forEach((paragraph, index) => {
      setTimeout(() => {
        // Force a reflow to ensure the transition happens
        paragraph.classList.remove("hhidden");
        // Trigger reflow
        paragraph.offsetWidth;
        paragraph.classList.add("vvisible");
      }, index * 2000);
    });
  }, []);

  return (
    <div className="introContainer">
      <div className="introClass">
        <img
          className="introImg"
          src="https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?q=80&w=1791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="intro Image"
        />
      </div>
      <div className="introContent">
        <h1>Weather Watcher Application</h1>
        <p className="hhidden">
          Stay informed with current weather conditions and hourly updates
        </p>
        <p className="hhidden">
          never surprised by severe weather conditions by getting notification.
        </p>

        <div>
          <div style={isVisible === 1 ? visibleStyle : hiddenStyle}>
            <IoIosArrowDropdown
              size={20}
              style={{ margin: 20, color: "#fff" }}
            />
          </div>
          <br />
          <div style={isVisible === 1 ? visibleStyle : hiddenStyle}>
            <IoIosArrowDropdown
              size={25}
              style={{ margin: 20, color: "#fff" }}
            />
          </div>
          <br />
          <div style={isVisible === 1 ? visibleStyle : hiddenStyle}>
            <IoIosArrowDropdown
              size={30}
              style={{ margin: 20, color: "#fff" }}
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Intro;
