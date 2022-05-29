import React, { Component } from 'react'

const SearchBoxByID = ({ onSearchChangeByID }) => {
    return (
        <div>
            <input
                class='bar1'
                type='search'
                placeholder='ID less than'
                onChange={onSearchChangeByID}>
            </input>
        </div>
    )
}

export default SearchBoxByID;