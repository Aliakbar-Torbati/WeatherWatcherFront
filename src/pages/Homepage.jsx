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
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import "../component/WeatherCardStyle.scss";


const Homepage = () => {
  const { token } = useToken();
  const { uuser } = useAuthen();
  console.log('homepage user', uuser);
  console.log('homepage token', token);






  return (
    <div className="homepage-container">
      <Navbar />
      <Intro />
      <div className="homepage">
      <WeatherCard />
      </div>
      <WeatherCardHourly />
      <Footer />
    </div>
  );
};

export default Homepage;
