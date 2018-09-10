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

    addToCart(e){
        axios.post('/api/add-to-cart',{id: e.id, quantity: this.state.quantity}).then(results => {
            console.log(results)
            this.setState({quantity: ''})
        })
    }

    updateQuantity(val){
        this.setState({quantity: val})
    }

    render(){
        const mappedClothing = this.state.clothes.map((clothe, i) => {
            return(
                <div className="outerDiv" key={i}>
                    <div className="Clothes"> {clothe.category} </div>
                    <div className="imageDiv">
                    <img className="images" src={clothe.image} alt=""/>
                    <div className=""> ${clothe.price}</div>
                    </div>
                   <button  type="button"> onClick={() => this.addToCart(clothe)}>Add to Cart</button>
                      
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
export default MensClothing(mapStateToProps)
