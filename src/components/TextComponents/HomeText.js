import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

class HomeText extends Component{

    displayCurrentStore = () => {
        if (this.props.auth.chosenStore){
            return (
                this.props.auth.chosenStore
            )
        }
        return (
            this.props.auth.user.storeId
        )
    }

    render(){
        let { user,  stores } = this.props.auth;
        console.log(stores)

        return (
            <div>
                <p>Hello {user.name}, welcome to Xpire!</p>
                <p>Your one stop shop for in store food wastage.</p>
                <p>Your current store is {this.displayCurrentStore()}</p>
                <Select options={stores} defaultValue="4128"/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return ({
        auth: state.auth,
        items: state.items
    })
}

export default connect (mapStateToProps, {})(HomeText)