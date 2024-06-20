import React, { useState } from "react";
import "./NavbarStyle.scss";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  // make a responsive and collapsible navbar
  const [clickNav, setClickNav] = useState(false);
  const handleNavbar = () => {
    setClickNav(!clickNav);
  };
  // changing the color of navbar with scrolling
  const [navbarColor, setNavbarColor] = useState(false);
  const changeNavbarColor = () => {
    {
      window.scrollY >= 1 ? setNavbarColor(true) : setNavbarColor(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className={navbarColor ? " header header-bg" : "header"}>
      <Link to={"/"}>
        <h2>Portfolio</h2>
      </Link>
      <ul className={clickNav ? "nav-menue active" : "nav-menue"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburgerIcon">
        {!clickNav ? (
          <FaBars onClick={handleNavbar} size={20} style={{ color: "#fff" }} />
        ) : (
          <FaTimes onClick={handleNavbar} size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
