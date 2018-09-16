import React from 'react';
import Nav from '../../Nav/nav';
import Header from '../../Header/header';
import './menShirts.css';
import axios from 'axios';


class MenShirts extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            shirts: [],
            quantity: ''
        }
    }


    componentDidMount(){
        axios.get('api/clothing/Male/Shirts').then(results => {
            console.log(results)
            this.setState({shirts: results.data})
        })
    }

    addToCart(productId){
        axios.post(`/api/add-to-cart/${productId}`).then(results => {
            console.log(results)
            this.setState({quantity: ''})
        })
    }

    render(){
        const shirts = this.state.shirts.map((shirt, i) => {
            return(
                <div key={i}>
                    <div className="outer_shirt_div">
                    <img className="shirt_images" src={shirt.image} alt=""/>
                    <div className="shirt_title">{shirt.title}</div>
                    <div className="shirt_price_tag">${shirt.price}</div>
                    <button className="shirt_to_cart"onclick={() => this.addToCart(shirt.id)}>ADD TO CART</button>
                    </div>
                </div>
            )
        })

        return(
            <div>
                <Header />
                <Nav />
                <div className="shirt_body_white">
                {shirts}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        products: state.products
    }
}

export default (mapStateToProps, (MenShirts))