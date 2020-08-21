import React, { Component } from 'react';
import { connect } from 'react-redux';
import asdaImage from '../../assets/images/asda.png';
import { getCategoryItems } from '../../redux/actions/category';

class Category extends Component {
    renderImage = (categoryData) => {
        if (categoryData.image_url) {
            return (
                <img
                    src={categoryData.image_url}
                    alt="Category thumbnail"
                    className="categoryThumbnail"
                />
            );
        }

        return (
            <img
                src={asdaImage}
                alt="Category thumbnail"
                className="categoryThumbnail"
            />
        );
    };

    render() {
        const { categoryData } = this.props;
        return (
            <div
                className="category"
                onClick={() => {
                    this.props.getCategoryItems(categoryData.id);
                }}
            >
                <p>{categoryData.name}</p>
                {this.renderImage(categoryData)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    };
};

export default connect(mapStateToProps, { getCategoryItems })(Category);
