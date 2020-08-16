import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { Login, Home, StoreInfo, Metrics } from '../../pages';
import { connect } from 'react-redux';

class Navigation extends Component{
    render(){
      console.log(this.props.auth)
        return (
            <Router>
                <div>
                    <ul>
                      <li>
                          <Link to="/home">Home</Link>
                      </li>
                      <li>
                          <Link to="/metrics">Metrics</Link>
                      </li>
                      <li>
                          <Link to="/storeinfo">Store Info</Link>
                      </li>
                    </ul>
                    <Switch>
                      <Route exact path="/">
                          <Login />
                      </Route>
                      <PrivateRoute path="/home" authed={this.props.auth.userAuthed}>
                          <Home/>
                      </PrivateRoute>
                      <PrivateRoute path="/metrics" authed={this.props.auth.userAuthed}>
                          <Metrics />
                      </PrivateRoute>
                      <PrivateRoute path="/storeinfo" authed={this.props.auth.userAuthed}>
                          <StoreInfo />
                      </PrivateRoute>
                    </Switch>
                </div>
            </Router>
        )
    }
}

function PrivateRoute({ authed, children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          authed ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  }

export default connect(mapStateToProps, {})(Navigation)