import React from "react";
import Home from "./Components/Home/Home";
import Params from "./particlesjs-config.json";
import Particles from "react-particles-js";

const App = () => {
  return (
    <div id="App">
      <Particles params={Params} />
      <Home />
    </div>
  );
};
export default App;
