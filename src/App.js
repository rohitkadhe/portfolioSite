import React, { Component } from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import Search from "./Components/Search/Search";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchfield: ""
    };
  }

  //Updates searchfield state each time searchbox input changes
  onInputChange = event => {
    const input = event.target.value;
    this.setState({ searchfield: input });
  };

  render() {
    const { searchfield } = this.state;
    return (
      <div className="App">
        <Navigation />
        {/*Renders items based on what the route is set to.*/}
        <Router>
          <div>
             {/*exact ensures to render home only if the route is exactly /
                Routes are defined in that way to work with github pages. /reponame/*/}
            <Route path="/portfoliosite/" exact component={Home} />
            <Route
              path="/portfoliosite/projects/"
              render={() => {
                return (
                  <div>
                    <Search onInputChange={this.onInputChange} />
                    <Projects searchfield={searchfield} />
                  </div>
                );
              }}
            />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
