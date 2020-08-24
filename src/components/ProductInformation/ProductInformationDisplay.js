import React from 'react';

function ProductInfomationDisplay(props) {
    const { item } = props.itemDetails;
    console.log(item);
    return (
        <div>
            <div className="ItemContainer">
                <div className="ItemContainer--left">
                    <img src={item.img_url} />
                    <p>UPC: {item.upc}</p>
                    <p>Quantity: {item.size}</p>
                </div>
                <div className="ItemContainer--right">
                    <p>{item.name}</p>
                    <p>Expiry Date: {item.expiry}</p>
                    <p>Description:</p>
                    <p>{item.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductInfomationDisplay;
