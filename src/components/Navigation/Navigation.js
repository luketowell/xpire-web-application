import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import {Login, Home, StoreInfo, Metrics} from '../../pages';

class Navigation extends Component{
    render(){
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
                      <Route path="/home">
                          <Home/>
                      </Route>
                      <Route path="/metrics">
                          <Metrics />
                      </Route>
                      <Route path="/storeinfo">
                          <StoreInfo />
                      </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

function PrivateRoute({ children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100); // fake async
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };

export default Navigation