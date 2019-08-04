import React from "react";
import "./NavigationStyles.css";
import pdf from "../Resume/Resume";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav>
      <ul className="navBarItems">
        <li className="posLeft">
          <Link className="navItem" to="/portfoliosite">
            Home
          </Link>
        </li>
        <li>
          <Link className="navItem" to="/portfoliosite/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="navItem" to={pdf} target="__blank">
            Resume
          </Link>
        </li>
        <li>
          <a
            className="navItem"
            target="__blank"
            href="https://www.linkedin.com/in/rohitkadhe"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
