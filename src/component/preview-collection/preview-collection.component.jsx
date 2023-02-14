import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

import './preview-collection.style.scss'
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
    let location = useLocation();
    const navigate = useNavigate();    

    return(
    <div className="collection-preview">
        <h1 className="title" onClick={() => navigate(`${location.pathname}/${title.toLowerCase()}`)}>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item,idx) => idx < 4).map((item) => (<CollectionItem key={item.id} item={item} />))
            }
        </div>

    </div>
)}

export default CollectionPreview;