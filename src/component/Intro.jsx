import { useEffect } from "react";
import "./IntroStyle.scss";

const Intro = () => {
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

        {/* <p className="hhidden">
          Weather Watcher is your go-to app for real-time weather updates and
          forecasts.
        </p>
        <p className="hhidden">
          Stay informed with current weather conditions, hourly updates, and
          severe weather alerts.
        </p>
        <p className="hhidden">
          Set your custom weather condition thresholds and receive daily
          notifications at your preferred time.
        </p>
        <p className="hhidden">
          Experience a user-friendly interface designed to ensure you are never
          surprised by severe weather conditions.
        </p>
        */}
      </div>
    </div>
  );
};

export default Intro;
