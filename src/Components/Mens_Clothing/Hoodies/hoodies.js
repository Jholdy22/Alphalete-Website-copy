import React from 'react';
import Nav from '../../Nav/nav';
import Header from '../../Header/header';
import './hoodies.css'
import axios from 'axios'


class Hoodies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hoodies: [],
            quantity: ''
        }
    }

    componentDidMount() {
        axios.get('api/clothing/Male/Hoodies').then(results => {
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
                    <div className="outer_Hoodie_Image_Div">
                        <img className="hoodie_images" src={hood.image} alt='' />
                        <div className="hoodieTitle">{hood.title}</div>
                        <div className="mensHoodiePrice"> ${hood.price}</div>
                        <button className="hoodie_to_cart" onClick={() => this.addToCart(hood.id)}>ADD TO CART</button>
                    </div>
                </div>
            )
        })


        return (
            <div>
                <Header />
                <Nav />
                <div className="hoodies_white_box">
                    {mappedHoodies}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        product: state.product
    }
}

export default (mapStateToProps, (Hoodies))