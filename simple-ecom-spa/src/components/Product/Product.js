import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const { name, img, seller, price, stock, star } = props.product;
    const handleAddtoCart = props.handleAddtoCart;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />

            </div>
            <div>
                <h4 className='product_name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>Price: {price}</p>
                <small>only {stock} left in stock - order soon</small>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    readonly
                ></Rating>

                <br />
                <button onClick={() => handleAddtoCart(props.product)} className='btn-purchase'>{cartIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;