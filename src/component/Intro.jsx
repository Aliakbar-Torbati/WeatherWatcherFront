import "./IntroStyle.scss";
import IntroImg from "../assets/intro.jpg";
import { Link } from "react-router-dom";


const Intro = () => {


  return (
    <div className="introContainer">
      <div className="introClass">
        <img className="introImg" src={IntroImg} alt="intro Image" />
      </div>
      <div className="introContent">

      </div>
    </div>
  );
};

export default Intro;
