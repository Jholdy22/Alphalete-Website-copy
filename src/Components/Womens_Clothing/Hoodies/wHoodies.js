import React from 'react';
import Nav from '../../Nav/nav';
import Header from '../../Header/header';
import './wHoodies.css'
import axios from 'axios'


class wHoodies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hoodies: [],
            quantity: ''
        }
    }

    componentDidMount() {
        axios.get('api/clothing/Female/Hoodies').then(results => {
            console.log(results)
            this.setState({ hoodies: results.data })
        })
    }

    addToCart(productId) {
        axios.post(`/api/add-to-cart/${productId}`).then(results => {
            console.log(results)
            this.setState({ quantity: '' })
        })
    }

    render() {
        const mappedHoodies = this.state.hoodies.map((hood, i) => {
            return (
                <div key={i}>
                    <div className="outer_wHoodies">
                        <img className="wHoodies_images" src={hood.image} alt='' />
                        <div className="wHoodies_title">{hood.title}</div>
                        <div className="wHoodies_price">${hood.price}</div>
                        <button className="wHoodies_to_cart" onClick={() => this.addToCart(hood.id)}>ADD TO CART</button>
                    </div>
                </div>
            )
        })


        return (
            <div>
                <Header />
                <Nav />
                <div className="wHoodies_box">
                    {mappedHoodies}
                </div>
            </div>
        )
    }
}

export default wHoodies