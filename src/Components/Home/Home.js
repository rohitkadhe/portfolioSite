import React from "react";
import "./HomeStyles.css";
const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <h1 className="header">Welcome to my website!</h1>
        <p className="innerText">
          My name is Rohit Kadhe and I am a Electrical Engineering student at
          the University of Calgary pursuing a minor in Computer Engineering
        </p>
        <img
          alt=""
          className="image"
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a20bc6324f6ef2969d9a7cae56b8d4d1&auto=format&fit=crop&w=1650&q=80"
        />
      </div>
    </div>
  );
};

export default Home;
