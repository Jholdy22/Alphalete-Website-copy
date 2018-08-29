import React from 'react';
import './home.css'
import Header from '../Header/header';
import Nav from '../Nav/nav.js';





class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount(){
        setTimeout(() => this.setState({loading: false}), 100)
    }

    render(){
        const { loading } = this.state;

        if(loading){
            return null;
        }
        return(
        <div className="homePage">
         <Header />
         <Nav />
         <img src="Left_Picture_Main.jpeg" Alt="Shalley"></img>
        </div>
        )
    }
}

export default Home