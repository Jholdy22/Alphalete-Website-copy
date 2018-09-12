import React from 'react';
import Nav from '../../Nav/nav';
import Header from '../../Header/header';
import axios from 'axios';
import './wJoggers.css';

class Joggers extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            joggers: [],
            quantity: ''
        }
    }

    componentDidMount(){
        axios.get('api/clothing/Female/Joggers').then(results => {
            console.log(results)
            this.setState({joggers: results.data})
        })
    }
    addToCart(productId) {
        axios.post(`/api/add-to-cart/${productId}`).then(results => {
            console.log(results)
            this.setState({ quantity: '' })
        })
    }

    render(){
        const mappedJoggers = this.state.joggers.map((jogger, i) => {
            return(
                <div key={i}>
                    <div className="wJoggers_outer_div">
                    <img className="wJoggers_images" src={jogger.image} alt=""/>
                    <div className="wJoggers_title">{jogger.title}</div>
                    <div className="wJoggers_price">${jogger.price}</div>
                    <button className="wJoggers_to_cart"onClick={() => this.addToCart(jogger.id)}>ADD TO CART</button>
                    </div>
                </div>
            )
        })
        return(
            <div>
                <Header />
                <Nav />
                <div className="wJoggers_whitebox">
                    {mappedJoggers}
                </div>
            </div>
        )
    }
}

export default Joggers