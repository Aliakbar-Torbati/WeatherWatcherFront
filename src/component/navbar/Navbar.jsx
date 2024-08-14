import React, { useEffect, useState, useRef } from "react";
import "./NavbarStyle.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuthen } from "../../context/AuthenContex";
import { TbRuler } from "react-icons/tb";
import { auth } from "../../firebaseConfig";
import logo from "../../assets/weather-watcher-logo-transparent.png"
import Alert from '../alertMessage/Alert';

const Navbar = () => {
  const { uuser, setUuser } = useAuthen();
  const dropdownRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const nav = useNavigate();


  // make a responsive and collapsible navbar
  const [clickNav, setClickNav] = useState(false);
  const handleNavbar = () => {
    setClickNav(!clickNav);
  };
  // State to manage the dropdown visibility
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = (event) => {
    event.stopPropagation();
    setShowDropdown(!showDropdown);
  };

  // changing the color of navbar with scrolling
  const [navbarColor, setNavbarColor] = useState(false);
  const changeNavbarColor = () => {
    {
      window.scrollY >= 1 ? setNavbarColor(true) : setNavbarColor(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  // Handle click outside to close the dropdown window
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //log out function
  const handleLogOut = async () => {
    try {
      await auth.signOut();
      console.log("user logged out successfully");
      setAlertMessage("You Logged out successfully!");
      setShowAlert(true);
	    console.log('showAlert',showAlert);

      setTimeout(() => {
        nav('/');
      }, 2000);

      
    } catch (error) {
      console.log("error while logging out");
    }
  };

  useEffect(() => {
    if (showAlert) {
	  console.log('showAlert',showAlert);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 2000);
      return () => clearTimeout(timer);

    }
  }, [showAlert]);

  useEffect(() => {
    console.log('showAlert changed:', showAlert);
  }, [showAlert]);

  return (
    <div className={navbarColor ? " header header-bg" : "header"}>
      {showAlert && <Alert message={alertMessage} />}
      <Link to={"/"}>
      <img src={logo} alt="" />
      </Link>
      <ul className={clickNav ? "nav-menue active" : "nav-menue"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          {/* <Link to={uuser ? "/profile" : "/login"}>
              <FaRegUserCircle size={25} style={{ color: "#fff" }}/>
          </Link> */}
           <div className="user-icon-wrapper" ref={dropdownRef}> 
             <FaRegUserCircle size={25} style={{ color: "#fff" }} onClick={toggleDropdown} />
             {showDropdown && (
              <div className="dropdown-menu1">
                {uuser? 
                <div>
                  <Link to="/profile"><li>My Account</li></Link>
                  <button onClick={handleLogOut}>Log Out</button>
                </div>
                :
                <div>
                  <Link to="/login"><li>Log In</li></Link>
                  <Link to="/signup"><li>Sign Up</li></Link>
                </div>
              }
              </div>
            )} 
           </div>
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
