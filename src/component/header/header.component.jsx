import React from "react";
import { Link } from 'react-router-dom'
import { Connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from '../../assets/084 crown.svg';

import './header.style.scss'
import { connect } from "react-redux";

const Header = ({ currentUser }) => (
    <div className="header">
        <Link to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="options" to='/shop'>SHOP</Link>
            <Link className="options" to='/contact'>CONTACT</Link>
            {
                currentUser ? <div className="options" onClick={() => auth.signOut()}>SIGN OUT</div>
                    : <Link className="options" to='/sign-in'>SIGN IN</Link>
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);