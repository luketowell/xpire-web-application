import React, { Component} from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../redux/actions/item';
import Category from './Category';

class CategoryContainer extends Component{
    componentDidMount(){
        this.props.getCategories();
    }
    renderContainers = () => {
        let { items } = this.props

        if (items.categoryStatus === "pending"){
            return (
                <h2>Loading...</h2>
            )
        }
        else if ( items.categories === "failed"){
            return (
                <h2>There has been an issue retrieving your containers from the DB.</h2>
            )
        }
        else {
            return(
                <div className="row">
                    {items.categories.map((category, index) => (
                        <div className = "col-1-of-3">
                            <Category categoryData={category}/>
                        </div>
                    ))}  
                </div>
            )
        }
    } 

    render(){

        console.log("categoryContainer" + JSON.stringify(this.props.items))

        

        return( 
            this.renderContainers()
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        items: state.items
    })
}

export default connect (mapStateToProps, { getCategories })(CategoryContainer)