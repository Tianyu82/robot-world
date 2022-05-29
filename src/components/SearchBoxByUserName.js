import React, {Component} from 'react';

const SearchBoxByUserName=({onSearchChangeByUsername})=>{
    return(
        <div>
            <input 
            class='bar1'
            type='search' 
            placeholder='search by username'
            onChange={onSearchChangeByUsername}>
            </input>
        </div>
    )
}

export default SearchBoxByUserName;