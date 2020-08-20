import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { Login, Home, StoreInfo, Metrics, ItemInfo } from '../../pages';
import { connect } from 'react-redux';

class Navigation extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Login />
                        </Route>
                        <PrivateRoute
                            path="/product-information"
                            authed={this.props.auth.userAuthed}
                        >
                            <ItemInfo />
                        </PrivateRoute>
                        <PrivateRoute
                            path="/home"
                            authed={this.props.auth.userAuthed}
                        >
                            <Home />
                        </PrivateRoute>
                        <PrivateRoute
                            path="/metrics"
                            authed={this.props.auth.userAuthed}
                        >
                            <Metrics />
                        </PrivateRoute>
                        <PrivateRoute
                            path="/storeinfo"
                            authed={this.props.auth.userAuthed}
                        >
                            <StoreInfo />
                        </PrivateRoute>
                    </Switch>
                </div>
            </Router>
        );
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
                            pathname: '/',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, {})(Navigation);
