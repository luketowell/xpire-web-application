import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemCard extends Component {
    render() {
        return (
            <div className="ItemCard" onClick={() => console.log('clicked')}>
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

export default connect(mapStateToProps)(ItemCard);
