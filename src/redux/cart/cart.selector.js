import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden 
)

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator, item)=> accumulator + item.quantity,0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator, item)=> accumulator + item.price * item.quantity,0)
)