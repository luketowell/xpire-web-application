import React, { Component } from 'react';
import Header from '../components/Header/Header';

class ItemInfo extends Component {
    render() {
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

export default ItemInfo;
