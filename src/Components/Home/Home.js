import React from "react";
import Link from "../Link/Link";
import Data from "../Home/Data";
import "./HomeStyles.css";
import backgroundImage from "../../Images/backgroundImagePrimary.jpg";

const Home = () => {
  return (
    <div
      className="centerMain"
      style={{ backgroundImage: `url(${backgroundImage}` }}
    >
      <div>
        <h1 className="large text">Rohit kadhe</h1>
        <div className="small text content">
          Electrical Engineering | Computer Engineering Minor
        </div>
        <div className="divider">
          <div className="ui divider"></div>
        </div>
        <div className="ui grid ">
          {Data.map(d => {
            return <Link imageSrc={d.logo} link={d.link} key={d.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
