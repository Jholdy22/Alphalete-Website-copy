const initialState = {
    users: {},
    products: [],
    shoppingCart: []
}

const UPDATE_USER = 'UPDATE_USER';
const ALL_PRODUCTS = 'ALL_PRODUCTS';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const ACTIVE_CART = 'ACTIVE_CART';
const STORE_CART_DATA = 'STORE_CART_DATA';

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user
});

export const storeProducts = (products) => ({
  type: ALL_PRODUCTS,
  payload: products
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = (productIndex) => ({
  type: REMOVE_FROM_CART,
  payload: productIndex
})

export const activeCart = (cart) => ({
  type: ACTIVE_CART,
  payload: cart
})

export const storeCartData = (cartData) => ({
  type: STORE_CART_DATA,
  payload: cartData
})

export default function reducer(state = initialState, action){
    switch (action.type) {
      case UPDATE_USER:
          return Object.assign({}, state, {user: action.payload})
      case ALL_PRODUCTS:
          return Object.assign({}, state, {products: action.payload})
      case ADD_TO_CART:
          return Object.assign({}, state, {shoppingCart: [...state.shoppingCart, action.payload]})
      case REMOVE_FROM_CART:
          let newArray = state.shoppingCart.slice();
          newArray.splice(action.index, 1);
          return Object.assign({}, state, {shoppingCart: newArray})
      case ACTIVE_CART:
          return Object.assign({}, state, {shoppingCart: action.payload})
      case STORE_CART_DATA:
      console.log(action.payload)
          return Object.assign({}, state, {shoppingCart: action.payload})
  
      default: return state
    } 
}