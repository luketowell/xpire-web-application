import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductInformationDisplay from './ProductInformationDisplay';

class ProductInformation extends Component {
    renderProductInformation = () => {
        const { itemInfo } = this.props;
        console.log(itemInfo);
        if (itemInfo.storeItemStatus === '') {
            return (
                <p>Please enter a product number in the search box above.</p>
            );
        } else if (itemInfo.storeItemStatus === 'failed') {
            return (
                <p>
                    Sorry there has been an issue retrieving the product
                    information you requested. Please contact technical support
                </p>
            );
        } else if (itemInfo.storeItemStatus === 'pending') {
            return <p>Loading product information ...</p>;
        } else {
            return (
                <ProductInformationDisplay
                    itemDetails={itemInfo.storeItemDetails}
                />
            );
        }
    };

    render() {
        return this.renderProductInformation();
    }
}

const mapStateToProps = (state) => {
    return {
        itemInfo: state.items,
    };
};

export default connect(mapStateToProps, {})(ProductInformation);
