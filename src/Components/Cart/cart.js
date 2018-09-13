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
            this.calculateTotal()
        })
    }

    getCart(){
        axios.get('/api/display-all').then(results => {
            console.log(results.data)
            this.props.storeCartData(results.data)
            this.calculateTotal()
        }
        )
    }

    updateQuantity(input){
        const {quantity, p_id} = input;
        axios.put(`/api/quantity/${quantity}/${p_id}`).then(results =>{
            this.props.storeCartData(results.data);
            this.setState({total:0})
            this.calculateTotal()
        })
    }

    handleQuantity(val){
        this.setState({quantity: val})
    }

    calculateTotal(){
        let total = this.props.shoppingCart.map((e) => {
            
            var updateTotal = this.state.total + e.price * e.quantity;
            console.log('update', updateTotal)
            this.setState({total: updateTotal })
        })
    }
    render(){
        let shoppingCartDisplay = this.props.shoppingCart.map((e,i) => {
            console.log(e)
            return(
                <div className='mapDivCart' key={i}>
                <img className="cart_images" src={e.image} alt=""/>
                        <h3>{e.title}</h3>
                        <h4>${e.price}</h4>

                        <form class="form-inline">
                            <select class="custom-select my-sm-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={e => this.handleQuantity(e.target.value)}>
                                <option value="0" selected>{e.quantity}</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        <button onClick={() => this.updateQuantity({quantity: this.state.quantity,
                            p_id: e.id})}>save</button>  
                        </form>  
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