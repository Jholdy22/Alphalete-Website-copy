import React from 'react';
import Nav from '../Nav/nav.js';
import Header from '../Header/header.js';
import axios from 'axios'


class MensClothing extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            clothes: []
        }
    }

    componentDidMount(){
        axios.get('/api/mens-clothing').then(results => {
            this.setState({clothes: results.data})
        })
    }
    render(){
        const mappedClothing = this.state.clothes.map((clothe, i) => {
            return(
                <div key={i}>
                    <div>{clothe.category}</div>
                    <img className="images" src={clothe.image} alt=""/>
                   
                </div>
            )
        })
        
        
        return(
            <div>
                <Header />
                <Nav />
                {mappedClothing}
            </div>
        )
    }
}

export default MensClothing