import React, {Component} from 'react';
import { connect } from 'react-redux';
import ItemCard from './ItemCard';

class ItemList extends Component {
    
    renderItemList = () => {
        let { items } = this.props
        if (items.categoryItems.length === 0 && items.categoryItemsStatus === "completed"){
            return(
                <p>There are no items listed for this category</p>
            )
        }
        else if (items.categoryItemsStatus === "failed"){
            return(
                <p>We have been unable to retrieve your items from the Database</p>
            )
        }
        else if (items.categoryItemsStatus === "Pending"){
            return(
                <p>Loading item information...</p>
            )
        }
        else if (items.categoryItemsStatus === ""){
            return(
                <p>Please select a category to view item details for your store.</p>
            )
        }
        else {
            return (
                <div>
                {items.categoryItems.map((item) => (
                    <ItemCard itemDetails={item}/>
                ))}
                </div>
            )
        }
    }

    render(){
        let { items } = this.props 
        return (
            <div className="ItemList">
                
                {this.renderItemList()}
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