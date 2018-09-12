import React from 'react';
import Header from '../Header/header';
import Nav from '../Nav/nav';
import './cart.css'
import {removeFromCart, storeCartData} from '../../ducks/reducer';
import {connect} from 'react-redux';
import axios from 'axios';
import {withRouter} from 'react-router';



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

    deleteFromCart(cart_id){
        axios.delete(`/api/product/${cart_id}`).then(results => {
            // this.props.storeCartData(results.data)
            this.getCart()
            this.setState({total: 0})
            // this.calculateTotal()
        })
    }

    getCart(){
        axios.get('/api/display-all').then(results => {
            console.log(results.data)
            this.props.storeCartData(results.data)
            // this.calculateTotal()
        }
        )
    }

    handleQuantity(val){
        this.setState({quantity: val})
    }

    // calculateTotal(){
    //     let total = this.props.shoppingCart.map((e) => {
            
    //         var updateTotal = this.state.total + e.price * e.quantity;
    //         console.log('update', updateTotal)
    //         this.setState({total: updateTotal })
    //     })
    // }
    render(){
        let shoppingCartDisplay = this.props.shoppingCart.map((e,i) => {
            console.log(e)
            return(
                <div className='mapDivCart' key={i}>
                <img className="cart_images" src={e.image} alt=""/>
                        <h3>{e.title}</h3>
                        <h4>${e.price}</h4>
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
                    <div>
                        {shoppingCartDisplay[0] ?
                        <div className='displayDiv' >
                            {shoppingCartDisplay}
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