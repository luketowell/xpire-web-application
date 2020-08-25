import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStatus } from '../../redux/actions/item';

class NewAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expiring: '',
            nextExpiry: '',
            action: '1',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        console.log('state', this.state);
        event.preventDefault();
    }

    componentDidMount() {
        this.props.getStatus();
    }

    renderStatusSelect = (statuses) => {
        if (statuses.length > 0) {
            return statuses.map((status) => (
                <option value={status.id}>{status.name}</option>
            ));
        } else {
            return <h1>Loading...</h1>;
        }
    };

    render() {
        const { statusOptions } = this.props.items;
        return (
            <div className="newAction">
                <h1>Staff Action</h1>
                <div className="newAction--labels">
                    <p>Number Expiring:</p>
                    <p>Next expiry date on product:</p>
                    <p>Action Taken:</p>
                </div>
                <div className="newAction--input">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="number"
                            name="expiring"
                            value={this.state.expiring}
                            onChange={this.handleInput}
                        ></input>
                        <input
                            type="date"
                            name="nextExpiry"
                            value={this.state.nextExpiry}
                            onChange={this.handleInput}
                        ></input>
                        <select
                            value={this.state.action}
                            name="action"
                            onChange={this.handleInput}
                        >
                            {this.renderStatusSelect(statusOptions)}
                        </select>
                        <input name="submit" type="Submit"></input>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
    };
};

export default connect(mapStateToProps, { getStatus })(NewAction);
