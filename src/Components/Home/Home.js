import React from "react";
import Data from "../../Data";
import Link from "../../Components/Link/Link";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <h2>Rohit Kadhe</h2>
        <div>Electrical Engineering | Computer Engineering Minor</div>
        <div className="divider" />
        <div className="flex-grid">
          {Data.map(data => {
            return <Link imageSrc={data.logo} key={data.id} link={data.link} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
