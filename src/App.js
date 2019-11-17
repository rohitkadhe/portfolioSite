import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Particles from "react-particles-js";
import Params from "./particlesjs-config.json";

function App() {
  return (
    <div className="app">
      <Particles className="particles" params={Params} />
      <Home />
    </div>
  );
}

export default App;
