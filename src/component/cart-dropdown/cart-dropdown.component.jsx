import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import './cart-dropdown.style.scss'

const CartDropdown = ({ cartItems, dispatch }) => {
    let navigate = useNavigate();
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
            cartItems.map(cartItems => <CartItem key={cartItems.id} item={cartItems} />) :
            <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {navigate("/checkout"); dispatch(toggleCartHidden())}}>Go To Checkout</CustomButton>
    </div>
)}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);