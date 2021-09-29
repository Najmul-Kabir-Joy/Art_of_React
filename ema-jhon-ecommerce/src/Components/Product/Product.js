import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    const { name, img, stock, seller, star, starCount, price } = props.product;
    const handleAddtoCart = props.handleAddtoCart;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h4 className='product-name'>{name}</h4>
                <small>by: {seller}</small>
                <p>Price: {price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={() => handleAddtoCart(props.product)} className='buy-now-btn'><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>
        </div>
    );
};

export default Product;