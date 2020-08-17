import React, { Component } from 'react';
import { connect } from 'react-redux';

class Category extends Component{
    
    render(){
        console.log(this.props.name)
        return (
            <div>
        <img src="https://foodboxes.asda.com/images/thumbnails/978/675/detailed/3/FoodBoxes_products_fruit-and-veg-box__1_.jpg" width={200} />
        <p>{this.props.name}</p>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        items: state.items
    })
}

export default connect (mapStateToProps)(Category)