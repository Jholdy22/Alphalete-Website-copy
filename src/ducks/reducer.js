const initialState = {
    users: {},
    products: [],
    shoppingCart: []
}

const UPDATE_USER = 'UPDATE_USER';
const ALL_PRODUCTS = 'ALL_PRODUCTS';


export function updateUser(userObj) {
    return {
        type: UPDATE_USER,
        payload: userObj
    }
}

export function storeProducts(products){
    return {
        type: ALL_PRODUCTS,
        payload: products
    }
}

export default function reducer(state = initialState, action)
{
    switch (action.type) {
        case UPDATE_USER:
        return Object.assign({}, state, { user: action.payload})
        case ALL_PRODUCTS:
        return Object.assign({}, state, {products: action.payload})
        default:
        return state;
    } 
}