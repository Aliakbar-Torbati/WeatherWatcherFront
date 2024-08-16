import "./FooterStyle.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      {/* <div className="contact-footer"> */}
        <div className="location">
          <p>
            Weather data provided by{" "}
            <a href="https://www.weatherapi.com/">WeatherAPI</a>.
          </p>
          <br />
          <p>
            Contact me:{" "}
            <a href="mailto:alitorbati1368@gmail.com">
            alitorbati1368@gmail.com
            </a>
          </p>
          <p>
            Developed by Aliakbar Torbati. Version 1.0.0
          </p>
        </div>
      {/* </div> */}
      <div className="gmail-footer">
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/aliakbar-torbati-juniordeveloper"
            target="_blank"
          >
            <FaLinkedin size={35} style={{ color: "#fff" }} />
          </a>
          <a
            href="https://github.com/Aliakbar-Torbati?tab=repositories"
            target="_blank"
          >
            <FaGithub size={35} style={{ color: "#fff" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
