import React from 'react';
import GitHubLogo from './GitHubLogo.png'
import './styles.css'
const Card=({name, image, link, language})=>{
	return(
	    <div className='card align'>
			<h2>{name}</h2>
			<img className='formatImage' alt = 'Projects' src={image}/>
			<a className='link' href={link}>
			<p><img alt='' src={GitHubLogo}/></p>
			</a>
			<p className='textStyle'>Language:</p>
			<h2>{language}</h2>
	    </div>
	);
}

export default Card;