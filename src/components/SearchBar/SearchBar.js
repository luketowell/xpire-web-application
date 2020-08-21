import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <form className="SearchBar">
                    <input
                        type="text"
                        name="productNumber"
                        className="SearchBar-Input"
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
