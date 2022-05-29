import React, {Component} from 'react';
import SearchBoxByUserName from '../components/SearchBoxByUserName';
import SearchBoxByID from '../components/SearchBoxByID';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import appCss from '../css/appCss.css';


class App extends Component{
    constructor(){
        super();
        this.state={
            robot: [],
            searchFieldOfUsername: '',
            searchFieldOfID: 4
        }
    }
    
    searchChangeOfUserName=(event)=>{
        this.setState({searchFieldOfUsername:event.target.value});
    }

    searchChangeOfID = (event) => {
        this.setState({ searchFieldOfID: event.target.value });
    }
    
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(results=>results.json())
        .then(users=>this.setState({robot:users}));
        
    }
    render(){
        const filteredRobots=this.state.robot.filter(robot=>{
            return robot.username.toLowerCase().includes(this.state.searchFieldOfUsername.toLowerCase()) 
            && robot.id<this.state.searchFieldOfID;
        })
        return(
            <div class='body'>
                    <br />
                    <h1>Welcome to the world of robot</h1>
                    <SearchBoxByUserName onSearchChangeByUsername={this.searchChangeOfUserName} />
                    <br />
                    <br />
                    <SearchBoxByID onSearchChangeByID={this.searchChangeOfID} />
                    <br />
                    <br />
                    <CardList robots={filteredRobots} /> 
            </div>
        )
    }
}

export default App