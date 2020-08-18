import React, { Component } from 'react';
import Header from '../components/Header/Header';
import { connect } from 'react-redux';
import HomeText from '../components/TextComponents/HomeText'
import { getStores } from '../redux/actions/auth'
import Category from '../components/Category/Category';
import CategoryContainer from '../components/Category/CategoryContainer';

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
                <CategoryContainer/>
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