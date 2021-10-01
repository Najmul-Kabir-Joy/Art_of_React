import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, seller, stock, img, price } = props.product;
    return (
        <div>
            <div className="product">
                <div className="product-img-container">
                    <img src={img} alt="" />
                </div>
                <div className="product-details-container">
                    <h3 className='product-name'>{name}</h3>
                    <small>by: {seller}</small>
                    <p>Price: {price}</p>
                    <p>only {stock} left in stock - order soon</p>
                    <button onClick={() => props.addBtnHandler(props.product)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;