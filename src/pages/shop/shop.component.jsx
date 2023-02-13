import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selector.js";
import CollectionPreview from "../../component/preview-collection/preview-collection.component.jsx";

const ShopPage = ({ collections }) => (
    <div className="shop-page">
        <h1>Shop Page</h1>
        {collections.map(({ id, ...otherCollectionProps }) => (<CollectionPreview key={id} {...otherCollectionProps} />))}
    </div>
)


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);