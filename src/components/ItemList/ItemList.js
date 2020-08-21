import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemCard from './ItemCard';

class ItemList extends Component {
    renderItemList = () => {
        let { categories } = this.props;
        if (
            categories.categoryItems.length === 0 &&
            categories.categoryItemsStatus === 'completed'
        ) {
            return <p>There are no items listed for this category</p>;
        } else if (categories.categoryItemsStatus === 'failed') {
            return (
                <p>
                    We have been unable to retrieve your items from the Database
                </p>
            );
        } else if (categories.categoryItemsStatus === 'Pending') {
            return <p>Loading item information...</p>;
        } else if (categories.categoryItemsStatus === '') {
            return (
                <p>
                    Please select a category to view item details for your
                    store.
                </p>
            );
        } else {
            return (
                <div>
                    {categories.categoryItems.map((item) => (
                        <ItemCard itemDetails={item} key={item.id} />
                    ))}
                </div>
            );
        }
    };

    render() {
        return <div className="ItemList">{this.renderItemList()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    };
};

export default connect(mapStateToProps, {})(ItemList);
