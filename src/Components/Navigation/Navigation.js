import React from 'react';
import './NavigationStyles.css';
import resume from '../Resume/Resume'
const Navigation=()=>{
	return(
			    <nav>
					   <ul className="navBarItems">
							 <li className='posLeft'><a className='navItem' href='/portfoliosite'>Home</a></li>
						    <li><a className='navItem' href='/portfoliosite/projects'>Projects</a></li>
							 <li><a className='navItem'  target='__blank' href={resume}>Resume</a></li>
							 <li><a className='navItem'  target='__blank'  href="https://www.linkedin.com/in/rohitkadhe">LinkedIn</a></li>
		            </ul>
			    </nav>
	);
}

export default Navigation;
