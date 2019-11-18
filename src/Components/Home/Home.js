import React from "react";
import Data from "../../Data";
import Link from "../../Components/Link/Link";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h2 className="header"> Rohit Kadhe</h2>
      <div className="mainContent">
        Electrical Engineering | Computer Engineering Minor
      </div>
      <div className="divider" />
      <div className="flex-grid">
        {Data.map(data => {
          return <Link imageSrc={data.logo} key={data.id} link={data.link} />;
        })}
      </div>
    </div>
  );
};
export default Home;
