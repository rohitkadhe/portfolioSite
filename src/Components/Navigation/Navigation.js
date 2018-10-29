import React from 'react';
import './NavigationStyles.css';
import resume from '../Resume/Resume'
const Navigation=()=>{
	return(
			<header className="navBar">
			    <nav className="navBarContainer">
					 <div className='home'><a href='/portfoliosite'>Home</a></div>
					 <div className='spaceRight'></div>
			        <div className="navBarContainerItems">
						   <ul>
			                <li><a href='/portfoliosite/projects'>Projects</a></li>
								 <li><a  target='__blank' href={resume}>Resume</a></li>
								 <li><a  target='__blank'  href="https://www.linkedin.com/in/rohitkadhe">LinkedIn</a></li>
			            </ul>
			        </div>
			    </nav>
			  </header>
	);
}

export default Navigation;
