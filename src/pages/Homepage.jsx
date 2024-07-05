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


const Homepage = () => {
  //getting the token of devise
  requestPermission();
  const { token } = useToken();
  // check if the user is logged in
  // const { isThereUser } = useAuthen();
  // console.log("is there user", isThereUser);




  // checking user is logged in or not. If he is logged in, passing the user id to updating fourm.
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const auth = getAuth();
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       setUser(currentUser);
  //       console.log("current user", user);
  //     } else {
  //       setUser(null);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  return (
    <div>
      <Navbar />
      <Intro />
      <WeatherCard />
      <WeatherCardHourly />
      <Footer />
    </div>
  );
};

export default Homepage;
