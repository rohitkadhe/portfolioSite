import React from "react";
const Link = ({ imageSrc, link }) => {
  return (
    <div className="ui three wide column">
      <a href={link} target="__blank">
        <img src={imageSrc} alt="logo"></img>
      </a>
    </div>
  );
};

export default Link;
