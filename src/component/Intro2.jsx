import "./IntroStyle.scss";

const Intro2 = ({profile , imgSource}) => {
  return (
    <div className="introContainer">
      <div className="introClass">
        <img
          className="introImg"
          src={imgSource}
          alt="intro Image"
        />
      </div>
      <div className="introContent">
        {profile}
      </div>
    </div>
  );
};

export default Intro2
