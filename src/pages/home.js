import React, { Component } from 'react';
import Header from '../components/Header/Header';
import { connect } from 'react-redux';
import HomeText from '../components/TextComponents/HomeText'
import { getStores } from '../redux/actions/auth'
import Category from '../components/Category/Category';

class Home extends Component {

    componentDidMount(){
        this.props.getStores()
    }

    
    render(){
        console.log(this.props)
        
        return (
        <div>
            <Header name="Home"/>
            <div className="PageContent">
                <HomeText/>
                <Category name="Luke"/>
            </div>
        </div>
        )
    }
}
const mapStateToProps = (state) => {
    return ({
    })
}

export default connect(mapStateToProps, {getStores})(Home);