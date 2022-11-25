import React from "react";
import {Link} from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/084 crown.svg';

import './header.style.scss'

const Header = () => (
<div className="header">
    <Link to="/">
           <Logo className="logo"/>
    </Link>
    <div className="options">
        <Link className="options" to='/shop'>SHOP</Link>
        <Link className="options" to='/contact'>CONTACT</Link>
    </div>
</div>
)

export default Header;