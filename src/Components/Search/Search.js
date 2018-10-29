import React from 'react';
import './styles.css'
const Search=({onInputChange})=>{
	return(
	<div className='searchboxContainer'>
		 <input className='searchBox'type="text" placeholder="Search" onChange={onInputChange}/>
    </div> 
		);
}

export default Search;