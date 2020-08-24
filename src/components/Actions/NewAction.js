import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStatus } from '../../redux/actions/item';

class NewAction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expiring: '',
            nextExpiry: '',
            action: '',
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        alert('A value was submitted: ' + this.state.productNumber);
        event.preventDefault();
    }

    componentDidMount() {
        this.props.getStatus();
    }

    renderStatusSelect = (statuses) => {
        return statuses.map((status) => <h1>{status.id}</h1>);
    };

    render() {
        const statusOptions = [
            { id: 1, name: 'BLOCKED' },
            { id: 2, name: 'WASTED' },
        ];
        return (
            <div className="newAction">
                <h1>Staff Action</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="number"
                        name="expiring"
                        onChange={() => this.handleInput}
                    ></input>
                    <input
                        type=""
                        name="nextExpiry"
                        onChange={() => this.handleInput}
                    ></input>
                    {this.renderStatusSelect(statusOptions)}
                    <input name="submit" type="Submit"></input>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.Items,
    };
};

export default connect(mapStateToProps, { getStatus })(NewAction);
