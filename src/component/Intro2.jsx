import "./IntroStyle.scss";

const Intro2 = ({profile}) => {
  return (
    <div className="introContainer">
      <div className="introClass">
        <img
          className="introImg"
          src="https://images.unsplash.com/photo-1561553543-e4c7b608b98d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
