import { CartActionTypes } from "./cart.types";
import { addItemToCart, removeItemToCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
            break;
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
            break;
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemToCart(state.cartItems, action.payload)
            }
            break;
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
            break;
        default:
            return state;
    }
}

export default cartReducer;