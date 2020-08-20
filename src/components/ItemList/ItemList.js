import React, {Component} from 'react';
import { connect } from 'react-redux';
import ItemCard from './ItemCard';

class ItemList extends Component {
    render(){
        let { items } = this.props 
        return (
            <div className="ItemList">
                {items.categoryItems.map((item) => (
                    <ItemCard itemDetails={item}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        items: state.items
    })
}

export default connect(mapStateToProps, {})(ItemList)