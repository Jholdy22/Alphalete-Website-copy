import React from 'react';
import Header from '../Header/header';
import Nav from '../Nav/nav';
import './cart.css'
import { removeFromCart, storeCartData } from '../../ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { withRouter } from 'react-router';




class Cart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            quantity: '',
            total: 0,
            amount: 54365
        }
    }

    componentDidMount() {
        this.getCart()
        this.calculateTotal()
    }

    onToken = (token) => {
        token.card = void 0
        axios.post(`/api/payment`, { token, amount: this.state.amount })
            .then(axios.put('/api/clear-cart'));
    }


    deleteFromCart(cart_id) {
        axios.delete(`/api/product/${cart_id}`).then(results => {
            this.props.storeCartData(results.data)
            this.getCart()
            this.setState({ total: 0 })
            this.calculateTotal()
        })
    }

    getCart() {
        axios.get('/api/display-all').then(results => {
            console.log(results.data)
            this.props.storeCartData(results.data)
        }
        )
    }

    updateQuantity(input) {
        const { quantity, p_id } = input;
        axios.put(`/api/quantity/${quantity}/${p_id}`).then(results => {
            this.props.storeCartData(results.data);
            this.setState({ total: 0 })
            this.calculateTotal()

        })
    }

    handleQuantity(val) {
        this.setState({ quantity: val })
    }

    calculateTotal() {
        let total = this.props.shoppingCart.map((e) => {

            var updateTotal = this.state.total + e.price * e.quantity;
            console.log('update', updateTotal)
            this.setState({ total: updateTotal })
        })
    }
    render() {
        console.log(this.state.total)
        let shoppingCartDisplay = this.props.shoppingCart.map((e, i) => {
            console.log(e)
            return (
                <div className='mapDivCart' key={i}>
                    <img className="cart_images" src={e.image} alt="" />
                    <h3 className="title_cart" >{e.title}</h3>
                    <h4>{`$${e.price}.00`}</h4>
                    <form class="form-inline">
                        <select class="custom-select my-sm-1 mr-sm-2 quantity_update" id="inlineFormCustomSelectPref" onChange={e => this.handleQuantity(e.target.value)}>
                            <option value={e.quantity} selected>{e.quantity}</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>

                        <button className="cart_update" onClick={() => this.updateQuantity({
                            quantity: this.state.quantity,
                            p_id: e.id
                        })}>UPDATE</button>
                    </form>
                    <div>
                        <button type='button' className='delete_cart' aria-label='Close' onClick={() => this.deleteFromCart(e.cart_id)}>
                            {/* <span aria-hidden='true'>&times;</span> */} DELETE
                            </button>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <Header />
                <Nav />
                <div className='displayDivContainer'>
                    <h2 className="Cart_tag">CART</h2>
                    {/* <button>CHECK OUT</button> */}
                    <div>
                        {shoppingCartDisplay[0] ?
                            <div className='displayDiv' >
                                {shoppingCartDisplay}
                                <div className='checkout'>
                                    <h3>Total: {`$${this.state.total}.00`}</h3>
                                    <StripeCheckout
                                        name="Stripe Demo inc."
                                        description="Dolla Dolla Bills"
                                        image=""
                                        token={this.onToken}
                                        stripeKey={process.env.REACT_APP_STRIPE_KEY}
                                        amount={this.state.total*100}
                                    />
                                </div>
                            </div>
                            : <div>
                                <h1>Your cart is empty!</h1>
                            </div>}
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        shoppingCart: state.shoppingCart
    }
}

export default connect(mapStateToProps, { removeFromCart, storeCartData })(withRouter(Cart))