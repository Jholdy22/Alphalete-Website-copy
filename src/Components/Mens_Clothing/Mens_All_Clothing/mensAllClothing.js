import React from 'react';
import Nav from '../../Nav/nav.js';
import Header from '../../Header/header.js';
import axios from 'axios';
import './mensAllClothing.css';


class MensClothing extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            clothes: [],
            quantity: ''
        }
        this.updateQuantity = this.updateQuantity.bind(this)
    }

    componentDidMount(){
        axios.get('/api/all-clothing/Male').then(results => {
            this.setState({clothes: results.data})
        })
    }

    addToCart(productId){
        axios.post(`/api/add-to-cart/${productId}`).then(results => {
            console.log(results)
            this.setState({quantity: ''})
        })
        // console.log(productId)
    }

    updateQuantity(val){
        this.setState({quantity: val})
    }

    render(){
        const mappedClothing = this.state.clothes.map((clothe, i) => {
            return(
                <div className="outerDiv" key={i}>
                    <div className="imageDiv">
                    <img className="images" src={clothe.image} alt=""/>
                    <div className="mensTitle"> {clothe.title} </div>
                    <button className="add_to_cart" onClick={() => this.addToCart(clothe.id)}>Add to Cart</button>
                    <div className="mensPriceTag"> ${clothe.price}</div>
                    </div>
                </div>
            )
        })
        
        return(
            <div>
                <Header />
                <Nav />
                <div className="body-white">
                {mappedClothing}
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
export default (mapStateToProps, (MensClothing))
