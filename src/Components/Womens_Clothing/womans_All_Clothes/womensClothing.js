import React from 'react';
import Nav from '../../Nav/nav.js';
import Header from '../../Header/header.js';
import axios from 'axios'
import './womensClothing.css';


class WomensClothing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clothes: [],
            quantity: ''
        }
    }

    componentDidMount() {
        axios.get('/api/all-clothing/Female').then(results => {
            this.setState({ clothes: results.data })
        })
    }

    addToCart(productId) {
        axios.post(`/api/add-to-cart/${productId}`).then(results => {
            console.log(results)
            this.setState({ quantity: '' })
        })
    }
    render() {
        const mappedClothing = this.state.clothes.map((clothe, i) => {
            return (
                <div key={i}>
                    <div className="outer_woman_clothing">
                        <img className="woman_images" src={clothe.image} alt="" />
                        <div className="woman_title">{clothe.title}</div>
                        <div className="woman_price">${clothe.price}</div>
                        <button className="woman_to_cart" onClick={() => this.addToCart(clothe.id)}>ADD TO CART</button>
                    </div>
                </div>
            )
        })


        return (
            <div>
                <Header />
                <Nav />
                <div className="womanBody">
                    {mappedClothing}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

export default (mapStateToProps, (WomensClothing))
