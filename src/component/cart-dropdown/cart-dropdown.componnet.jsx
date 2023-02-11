import React from "react";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item.componnet";
import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.style.scss'

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(cartItems => <CartItem key={cartItems.id} item={cartItems}/>)}
        </div>
        <CustomButton>Go To Checkout</CustomButton>
    </div>
)

const mapStateToProps = ({cart:{cartItems}}) =>({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);