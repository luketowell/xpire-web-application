import React, { Component } from 'react';
import { connect } from 'react-redux'
import { authUser } from '../redux/actions/auth';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header/header'

class Login extends Component {

    loginClicked = () => {
        console.log("clicked");
        this.props.authUser();
    }
    
    render(){
        if (this.props.auth.userAuthed){
            return (
                <Redirect to="/home"/>
            )
        }
        return (
        <div>
            <Header name="Login"/>
            <div>
                <button onClick={()=> this.loginClicked()}>Log In</button>
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


export default connect (mapStateToProps, { authUser })(Login);