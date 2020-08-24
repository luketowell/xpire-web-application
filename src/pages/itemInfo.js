import React, { Component } from 'react';
import Header from '../components/Header/Header';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar/SearchBar';
import ProductInformation from '../components/ProductInformation/ProductInformation';
import { getStoreItemById } from '../redux/actions/item';

class ItemInfo extends Component {
    componentDidMount() {
        if (this.props.item.selectedStoreItem) {
            this.props.getStoreItemById(this.props.item.selectedStoreItem);
        }
    }
    render() {
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

export default connect(mapStateToProps, { getStoreItemById })(ItemInfo);
