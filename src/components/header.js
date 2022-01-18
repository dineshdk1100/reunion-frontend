import React from 'react';
import '../css/header.css';
import {FiSearch} from 'react-icons/fi';



function header(){

    

    return (
        <div className='header-div'>
            <h1 className='title'>Shoe</h1>
            <div className='search-div'>
            <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" className='icon'/>
                <input className='search'></input>
            </div>
            
            
        </div>
        

    );
}


export default header