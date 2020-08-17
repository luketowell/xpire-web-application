import React, { Component} from 'react';
import { connect } from 'react-redux';

class CategoryContainer extends Component{

    render(){
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

export default connect (mapStateToProps, {})(CategoryContainer)