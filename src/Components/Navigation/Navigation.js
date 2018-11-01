import React from 'react';
import './NavigationStyles.css';
import resume from '../Resume/Resume';
import {NavLink} from 'react-router-dom';
const Navigation=()=>{
	return(
			<nav>
				<ul className="navBarItems">
					<li className='posLeft'><NavLink activeClassName='active' className='navItem' exact to='/portfoliosite'>Home</NavLink></li>
					<li><NavLink className='navItem' to='/portfoliosite/projects'>Projects</NavLink></li>
					<li><a className='navItem'  target='__blank' to={resume}>Resume</a></li>
					<li><a className='navItem'  target='__blank' href="https://www.linkedin.com/in/rohitkadhe">LinkedIn</a></li>
				</ul>
			</nav>
	);
}

export default Navigation;
