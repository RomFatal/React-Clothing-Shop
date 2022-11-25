import React from "react";
import { useNavigate, useParams,Link, useLocation } from "react-router-dom";

import "./menu-item.style.scss"
const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    let location = useLocation();
    const { id } = useParams();
    const navigate = useNavigate();  
    console.log("*2location2*:",location)
  
    //console.log("*location2*:",location,"\n *navigate*:",navigate,"\n *params*:",params)
    return(
    <div className={`${size} menu-item`} onClick={() => navigate(`${location.pathname}shop`)}>
        <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle"> SHOP NOW </span>
        </div>
    </div>
)}

export default MenuItem;