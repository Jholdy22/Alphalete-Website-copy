import React from 'react';
import Header from '../Header/header';
import Nav from '../Nav/nav';
import './cart.css'
import {removeFromCart, storeCartData} from '../../ducks/reducer';
import {connect} from 'react-redux';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import {withRouter} from 'react-router';
import stripe from './../../stripeKey';



class Cart extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            quantity: '',
            total: 0
        }
    }

    componentDidMount(){
      this.getCart()
    }

    onToken = (token) => {
        token.card = void 0
        axios.post('/api/payment', {token, amount: this.state.amount}).then(res => {
            console.log(res)
        })
    }


    deleteFromCart(cart_id){
        axios.delete(`/api/product/${cart_id}`).then(results => {
            // this.props.storeCartData(results.data)
            this.getCart()
            this.setState({total: 0})

        })
    }

    getCart(){
        axios.get('/api/display-all').then(results => {
            console.log(results.data)
            this.props.storeCartData(results.data)

        }
        )
    }

    updateQuantity(input){
        const {quantity, p_id} = input;
        axios.put(`/api/quantity/${quantity}/${p_id}`).then(results =>{
            this.props.storeCartData(results.data);
            this.setState({total:0})
            
        })
    }

    handleQuantity(val){
        this.setState({quantity: val})
    }
    render(){
        let shoppingCartDisplay = this.props.shoppingCart.map((e,i) => {
            console.log(e)
            return(
                <div className='mapDivCart' key={i}>
                <img className="cart_images" src={e.image} alt=""/>
                        <h3>{e.title}</h3>
                        <h4>${e.price}</h4>


                        <button onClick={() => this.updateQuantity({quantity: this.state.quantity,
                            p_id: e.id})}>save</button>  
                        
                        <div>
                        <button type='button' className='close' aria-label='Close' onClick={() => this.deleteFromCart(e.cart_id)}>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                        </div>
                </div>
            )
            })
        return(
            <div>
                <Header />
                <Nav />
                <div className='displayDivContainer'>
                    <h2 className="Cart_tag">CART</h2>
                        <button>CHECK OUT</button>
                    <div>
                        {shoppingCartDisplay[0] ?
                        <div className='displayDiv' >
                            {shoppingCartDisplay}
                            <div className='checkout'>
                                <h3>Total: ${this.state.total}</h3>
                                <StripeCheckout 
                                name="Stripe Demo inc."
                                description="Dolla Dolla Bills"
                                image="http://via.placeholder.com/100x100"
                                token={this.onToken}
                                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                                amount={this.state.amount} //total*100 //link this to total once you have set it up
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


        function mapStateToProps(state){
            return {
                shoppingCart: state.shoppingCart
            }
        }
        
        export default connect(mapStateToProps, {removeFromCart, storeCartData})(withRouter(Cart))