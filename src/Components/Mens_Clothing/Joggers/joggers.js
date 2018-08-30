import React from 'react';
import Nav from '../../Nav/nav';
import Header from '../../Header/header';
import axios from 'axios';
import './joggers.css';

class Joggers extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            joggers: []
        }
    }

    componentDidMount(){
        axios.get('api/clothing/Male/Joggers').then(results => {
            console.log(results)
            this.setState({joggers: results.data})
        })
    }

    render(){
        const mappedJoggers = this.state.joggers.map((jogger, i) => {
            return(
                <div key={i}>
                    <h3>{jogger.category}</h3>
                    <img className="images" src={jogger.image} alt=""/>
                </div>
            )
        })
        return(
            <div>
                <Header />
                <Nav />
                {mappedJoggers}
            </div>
        )
    }
}

export default Joggers