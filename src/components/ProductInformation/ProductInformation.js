import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductInformation extends Component {
    renderProductInformation = () => {};

    render() {
        return <h1>Product Information</h1>;
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
    };
};

export default connect(mapStateToProps, {})(ProductInformation);
