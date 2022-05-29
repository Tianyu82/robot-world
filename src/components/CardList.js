import React, {Component} from 'react'
import Card from './Card'
import '../css/CardListCSS.css'


const CardList = ({ robots })=>{
    const arrayOfRobots = robots.map((aRobot) => {
        return <Card id={aRobot.id} username={aRobot.username} email={aRobot.email} />
    })
    
    return(       
        <div>
            {arrayOfRobots}
        </div>
    )
}

export default CardList;