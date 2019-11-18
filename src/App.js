import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Particles from "react-particles-js";
import Config from "./particlesjs-config.json";

function App() {
  return (
    <div className="App">
      <Particles className="particles" params={Config} />
      <div id="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
