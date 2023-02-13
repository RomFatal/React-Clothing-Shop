import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../component/preview-collection/preview-collection.component.jsx";
import { selectCollections } from "../../redux/shop/shop.selector.js";

import './collections-overview.style.scss';

const CollectionsOverview = ({collections}) => (
    <div className="collection-overview">
              {collections.map(({ id, ...otherCollectionProps }) => (<CollectionPreview key={id} {...otherCollectionProps} />))}
    </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})
export default connect(mapStateToProps)(CollectionsOverview);