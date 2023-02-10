import React from "react";
import { Link } from 'react-router-dom'
import { auth } from "../../firebase/firebase.utils";
import CartIcon from '../cart-icon/cart-icon.componnet'
import CartDropdown from "../cart-dropdown/cart-dropdown.componnet";
import { ReactComponent as Logo } from '../../assets/084 crown.svg';

import './header.style.scss'
import { connect } from "react-redux";

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>SHOP</Link>
            <Link className="option" to='/contact'>CONTACT</Link>
            {
                currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                    : <Link className="option" to='/sign-in'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null :
                <CartDropdown />
        }
    </div>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser, hidden
})

export default connect(mapStateToProps)(Header);