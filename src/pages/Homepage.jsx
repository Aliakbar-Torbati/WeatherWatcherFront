import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Intro from "../component/Intro";
import Footer from "../component/Footer";
import WeatherCard from "../component/WeatherCard";
import WeatherCardHourly from "../component/WeatherCardHourly";
import CitySearch from "../component/CitySearch";
import UserPreference from "../component/UserPreference";
import { useToken } from "../context/TokenContext";
import { useAuthen } from "../context/AuthenContex";
import requestPermission from "../requestPermission";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { TbEyePlus } from "react-icons/tb";

import "../component/WeatherCardStyle.scss";
import AddNotif from "../component/fourms/AddNotif";

const Homepage = () => {
  const { token } = useToken();
  const { uuser } = useAuthen();
  console.log("homepage user", uuser);
  console.log("homepage token", token);
  const [isPrefernceFormVisible, setIsPrefrenceFormVisible] = useState(false);
  const toggleFormVisibility = () => {
    setIsPrefrenceFormVisible(!isPrefernceFormVisible);
  };

  return (
    <div className="homepage-container">
      <Navbar />
      <Intro />
      <div className="icon" onClick={toggleFormVisibility}>
        <TbEyePlus size={70} style={{ color: "#fff" }} />
      </div>
      {isPrefernceFormVisible && (
        <div className="form-window">
          <div className="form-header">
            <button className="close-button" onClick={toggleFormVisibility}>
              X
            </button>
          </div>
          <AddNotif />
        </div>
      )}

      <div className="homepage">
        <WeatherCard />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
