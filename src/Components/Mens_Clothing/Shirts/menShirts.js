import React from 'react';
import Nav from '../../Nav/nav';
import Header from '../../Header/header';
import './menShirts.css';
import axios from 'axios';


class MenShirts extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            shirts: []
        }
    }


    componentDidMount(){
        axios.get('api/clothing/Male/Shirts').then(results => {
            console.log(results)
            this.setState({shirts: results.data})
        })
    }

    render(){
        const shirts = this.state.shirts.map((shirt, i) => {
            return(
                <div key={i}>
                    <h3>{shirt.category}</h3>
                    <img className="images" src={shirt.image} alt=""/>
                </div>
            )
        })

        return(
            <div>
                <Header />
                <Nav />
                {shirts}
            </div>
        )
    }
}

export default MenShirts