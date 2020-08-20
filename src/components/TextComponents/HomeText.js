import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { setChosenStore } from '../../redux/actions/auth';
import displayCurrentStore from '../../utils/currentStore';

class HomeText extends Component {
    render() {
        let { user, stores } = this.props.auth;

        return (
            <div>
                <p>Hello {user.name}, welcome to Xpire!</p>
                <p>Your one stop shop for in store food wastage.</p>
                <p>
                    Your current store is {displayCurrentStore(this.props.auth)}
                </p>
                <Select
                    options={stores}
                    value={stores.filter(
                        (stores) =>
                            stores.value ===
                            displayCurrentStore(this.props.auth)
                    )}
                    onChange={(selected) => this.props.setChosenStore(selected)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        items: state.items,
    };
};

export default connect(mapStateToProps, { setChosenStore })(HomeText);
