import React from 'react';
import Card from '../Card/Card';
import './ProjectStyles.css';
import Database from './Database'
const Projects=({searchfield})=>{
		const db = Database;
		//Filters projects based on searchBox input
		const filteredProject = db.projects.filter(project=>{
			return project.name.toLowerCase().includes(searchfield.toLowerCase())
		});
		return(
			<div>
				<div className="cardsContainer">
					{
					  filteredProject.length===0?<h1 className='messages'>Project not found!</h1>
					  :
					  db.projects.length>0
					? filteredProject.map(project=>{

					return <Card name={project.name}
			            image={project.image}
			            link={project.link}
			            key={project.id}
			            language={project.language}/>
			           	})
		        	:
		        	<h1 className='messages'>LOADING....</h1>
		        	}
				</div>
				{
					filteredProject.length>0?
				<div className='icons'>Icons made by
					<a className='icons' href="http://www.freepik.com" title="Freepik">Freepik</a>  from
					<a className='icons' href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> is licensed by
					<a className='icons' href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" rel="noopener noreferrer" target="_blank"> CC 3.0 BY</a>
				</div>:
				<div></div>
				}
  			</div>
    	);
	}
export default Projects;
