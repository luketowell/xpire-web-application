import React, { Component } from 'react';
import { connect } from 'react-redux'
import { authUser, getStores } from '../redux/actions/auth';
import { Redirect } from 'react-router-dom';
import Logo from '../assets/images/logo.png'

class Login extends Component {

    loginClicked = () => {
        console.log("clicked");
        this.props.authUser();
    }
    componentDidMount(){
        this.props.getStores()
    }
    
    render(){
        if (this.props.auth.userAuthed){
            return (
                <Redirect to="/home"/>
            )
        }
        return (
        <div className="LoginPage">
            <div className="Logo">
                <img src={Logo} height={200}/>
            </div>
            <div className="text">
                <button onClick={()=> this.loginClicked()}>Sign In</button>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
}


export default connect (mapStateToProps, { authUser, getStores })(Login);