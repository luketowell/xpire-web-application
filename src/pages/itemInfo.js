import React, { Component } from 'react';
import Header from '../components/Header/Header';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar/SearchBar';
import ProductInformation from '../components/ProductInformation/ProductInformation';

class ItemInfo extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Header name="Product Information" />
                <div className="PageContent">
                    <SearchBar />
                    <ProductInformation />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.items,
    };
};

export default connect(mapStateToProps, {})(ItemInfo);
