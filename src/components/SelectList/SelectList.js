import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectList extends Component {
    render() {
        const statuses = [{ id: 1, value: 'Item 1' }];
        return statuses.map((status) => <h1>{status.id}</h1>);
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
    };
};

export default connect(mapStateToProps, {})(SelectList);
