import "./FooterStyle.scss";
import { FaHome, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="contact-footer">
        <div className="location">
          <FaHome size={22} style={{ color: "#fff" }} />
          <p>Duisburg, Germany</p>
        </div>
        <div className="location">
          <FaPhone size={18} style={{ color: "#fff" }} />
          <p>+4915732273024</p>
        </div>
      </div>
      <div className="gmail-footer">
        <div className="location">
          <MdEmail size={20} style={{ color: "#fff" }} />
          <p>alitorbati1368@gmail.com</p>
        </div>
        <div className="contact-icons">
        <a href="https://www.linkedin.com/in/aliakbar-torbati-juniordeveloper" target="_blank"><FaLinkedin size={35} style={{ color: "#fff" }} /></a>   
        <a href="https://github.com/Aliakbar-Torbati?tab=repositories" target="_blank"><FaGithub size={35} style={{ color: "#fff" }} /></a>          
       
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
