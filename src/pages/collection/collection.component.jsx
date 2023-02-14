import React from "react";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import { useParams } from "react-router-dom";
import CollectionItemComponent from "../../component/collection-item/collection-item.component";
import './collection.style.scss'

const CollectionPage = () => {
    const params = useParams();
    const collection = useSelector((state) => {
        return selectCollection(params.collectionId)(state)
    })
    const { title, items } = collection
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map(item => (<CollectionItemComponent key={item.id} item={item} />))}
            </div>
        </div>
    )
}



export default (CollectionPage);