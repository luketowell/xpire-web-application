import React, { Component } from 'react';
import { connect } from 'react-redux'
import { authUser } from '../redux/actions/auth';

class Login extends Component {

    loginClicked = () => {
        console.log("clicked");
        this.props.authUser();
    }
    
    render(){
        console.log(this.props.auth)
        return (
        <div>
            <h2>Login</h2>
            <div>
                <button onClick={()=> this.loginClicked()}>Click Me </button>
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