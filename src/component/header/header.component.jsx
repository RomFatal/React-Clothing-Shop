import React from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from '../cart-icon/cart-icon.componnet'
import CartDropdown from "../cart-dropdown/cart-dropdown.componnet";
import { ReactComponent as Logo } from '../../assets/084 crown.svg';
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import './header.style.scss'


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

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);