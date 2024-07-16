import "./IntroStyle.scss";
import CitySearch from "./CitySearch";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

const Intro = () => {
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
        <p>Weather Website. Inspirational designs</p>
        <p> illustrations, and graphic elements</p>
        <p>Weather Website. Inspirational designs,</p>
        <p> illustrations, and graphic elements</p>

        <CitySearch />
      </div>
    </div>
  );
};

export default Intro;
