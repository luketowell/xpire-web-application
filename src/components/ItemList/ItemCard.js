import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findProductInformation } from '../../redux/actions/item';
import { withRouter } from 'react-router-dom';

class ItemCard extends Component {
    render() {
        const { history } = this.props;
        return (
            <div
                className="ItemCard"
                onClick={() => {
                    this.props.findProductInformation(
                        this.props.itemDetails.id
                    );
                    history.push('/product-information');
                }}
            >
                <div className="ItemImage">
                    <img
                        src={this.props.itemDetails.img_url}
                        alt="item thumbnail"
                    />
                </div>
                <div className="ItemText">
                    <p>Item Name: {this.props.itemDetails.name}</p>
                    <h2>Item UPC: {this.props.itemDetails.item_upc}</h2>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default withRouter(
    connect(mapStateToProps, { findProductInformation })(ItemCard)
);
