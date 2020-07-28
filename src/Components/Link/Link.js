import React from "react";
import "../../App.css";
const Link = ({ imageSrc, link }) => {
  return (
    <div className="col">
      <a href={link} target="__blank">
        <img src={imageSrc} alt="logo"></img>
      </a>
    </div>
  );
};

export default Link;
