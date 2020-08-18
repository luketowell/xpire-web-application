import React, { Component} from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../redux/actions/item';

class CategoryContainer extends Component{
    componentDidMount(){
        this.props.getCategories();
    }

    render(){

        console.log(this.props.items)

        let { items } = this.props

        return(
            <div className="Row">
                <p>Container to go here</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        items: state.items
    })
}

export default connect (mapStateToProps, { getCategories })(CategoryContainer)