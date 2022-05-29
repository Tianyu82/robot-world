import React, { Component } from 'react'
import '../css/CardCSS.css'

const Card = ({ id, username, email })=>{
    return(
        <div class="card">
            <img src={`https://robohash.org/${id}?set=set3`} />
            <div>
                <span>{username}</span>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;