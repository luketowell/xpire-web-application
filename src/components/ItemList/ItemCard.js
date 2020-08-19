import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemCard extends Component {
    render(){
        return (
            <div className="ItemCard">
                <p>this.props.itemDetails.name</p>
                <p>this.props.itemDetails.item_upc</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({

    })
}

export default connect(mapStateToProps)(ItemCard)