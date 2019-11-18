import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Particles from "react-particles-js";
import Config from "./particlesjs-config.json";
import BackgroundImage from "./Images/backgroundImagePrimary.jpg";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundRepeat: "no repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      }}
    >
      <Particles className="particles" params={Config} />
      <div id="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
