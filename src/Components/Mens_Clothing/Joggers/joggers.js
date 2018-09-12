import React from 'react';
import Nav from '../../Nav/nav';
import Header from '../../Header/header';
import axios from 'axios';
import './joggers.css';

class Joggers extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            joggers: [],
            quantity: ''
        }
    }

    componentDidMount(){
        axios.get('api/clothing/Male/Joggers').then(results => {
            console.log(results)
            this.setState({joggers: results.data})
        })
    }

    addToCart(productId){
        axios.post(`/api/add-to-cart/${productId}`).then(results => {
            console.log(results)
            this.setState({quantity: ''})
        })
    }

    render(){
        const mappedJoggers = this.state.joggers.map((jogger, i) => {
            return(
                <div key={i}>
                <div className="outer_jogger_div">
                    <img className="jogger_images" src={jogger.image} alt=""/>
                    <div className="joggerTitle">{jogger.title}</div>
                    <div className="joggerPriceTag"> ${jogger.price}</div>
                    <button type="button" className="jogger_to_cart" onClick={() =>
                    this.addToCart(jogger.id)}>ADD TO CART</button>
                    </div>
                </div>
            )
        })
        return(
            <div>
                <Header />
                <Nav />
                <div className="hoodie_body_white">
                {mappedJoggers}
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

export default (mapStateToProps, (Joggers))