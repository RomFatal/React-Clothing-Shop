import React from "react";

import SHOP_DATA from './shop.data.js'
import CollectionPreview from "../../component/preview-collection/preview-collection.component.jsx";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = SHOP_DATA
    }

    render() {
        const collections = this.state.SHOP_DATA;
        return (<div className="shop-page">
            <h1>Shop Page</h1>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>)
    }
}

export default ShopPage;