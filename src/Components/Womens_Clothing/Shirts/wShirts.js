import React from 'react';
import Nav from '../../Nav/nav';
import Header from '../../Header/header';
import './wShirts.css';
import axios from 'axios';


class wShirts extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            shirts: [],
            quantity: ''
        }
    }


    componentDidMount(){
        axios.get('api/clothing/Female/Shirts').then(results => {
            console.log(results)
            this.setState({shirts: results.data})
        })
    }
    addToCart(productId) {
        axios.post(`/api/add-to-cart/${productId}`).then(results => {
            console.log(results)
            this.setState({ quantity: '' })
        })
    }

    render(){
        const shirts = this.state.shirts.map((shirt, i) => {
            return(
                <div key={i}>
                    <div className="wShirts_outer_div">
                    <img className="wShirts_images" src={shirt.image} alt=""/>
                    <div className="wShirts_title">{shirt.title}</div>
                    <div className="wShirts_price">${shirt.price}</div>
                    <button className="wShirts_to_cart" onClick={() => this.addToCart(shirt.id)}>ADD TO CART</button>
                    </div>
                </div>
            )
        })

        return(
            <div>
                <Header />
                <Nav />
                <div className="wShirts_whitebox">
                    {shirts}
                </div>
            </div>
        )
    }
}

export default wShirts