import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../redux/actions/category';
import Category from './Category';

class CategoryContainer extends Component {
    componentDidMount() {
        this.props.getCategories();
    }
    renderContainers = () => {
        let { categories } = this.props;

        if (categories.categoryStatus === 'pending') {
            return <h2>Loading...</h2>;
        } else if (categories.categories === 'failed') {
            return (
                <h2>
                    There has been an issue retrieving your containers from the
                    DB.
                </h2>
            );
        } else {
            return (
                <div className="row">
                    {categories.categories.map((category, index) => (
                        <div className="col-1-of-3" key={index}>
                            <Category categoryData={category} />
                        </div>
                    ))}
                </div>
            );
        }
    };

    render() {
        return this.renderContainers();
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    };
};

export default connect(mapStateToProps, { getCategories })(CategoryContainer);
