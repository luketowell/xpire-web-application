import React, { Component } from 'react';
import Header from '../components/Header/Header';
import { connect } from 'react-redux';

class ItemInfo extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Header name="Product Information" />
                <div className="PageContent">
                    <h1>Search Bar</h1>
                    <h1>Item information goes here</h1>
                    <h1>Action Information</h1>
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
