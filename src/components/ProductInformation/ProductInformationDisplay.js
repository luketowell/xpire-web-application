import React from 'react';
import Action from '../Actions/Action';

function ProductInfomationDisplay(props) {
    const { item, actions } = props.itemDetails;
    return (
        <div className="ItemContainer">
            <div className="ItemContainer--left">
                <img src={item.img_url} alt="Product Thumbnail for item" />
                <div className="ItemContainer--left--text">
                    <p>UPC: {item.upc}</p>
                    <p>Quantity: {item.size}</p>
                </div>
            </div>
            <div className="ItemContainer--right">
                <h1>{item.name}</h1>
                <p>Expiry Date: {item.expiry}</p>
                <div className="description">
                    <p className="header">Description:</p>
                    <p>{item.description}</p>
                </div>
                <div className="actionList">
                    <p className="header">Previous Actions:</p>
                    {actions.map((action, index) => (
                        <Action action={action} id={index} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductInfomationDisplay;
