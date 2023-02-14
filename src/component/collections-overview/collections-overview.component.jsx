import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../component/preview-collection/preview-collection.component.jsx";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector.js";

import './collections-overview.style.scss';

const CollectionsOverview = ({collections}) => {
  return(
    <div className="collection-overview">
              {
              collections.map(({ id, ...otherCollectionProps }) => (<CollectionPreview key={id} {...otherCollectionProps} />))
              }
    </div>
)}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview);