import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productNumber: '',
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        console.log(event.target.name);
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        alert('A value was submitted: ' + this.state.productNumber);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form className="SearchBar" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="productNumber"
                        className="SearchBar-Input"
                        onChange={this.handleInput}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="SearchBar-Submit"
                    />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(SearchBar);
