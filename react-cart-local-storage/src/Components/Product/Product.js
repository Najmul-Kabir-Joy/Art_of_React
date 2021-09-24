import React from 'react';
import { addToCart, removeFromCart } from '../../Utilities/fakeDb';

const product = {
    backgroundColor: 'lightgreen',
    border: '1px solid green',
    borderRadius: '20px',
    margin: '10px',
    padding: '10px'
}

const Product = (props) => {
    const { name, detail, price } = props.product;
    return (
        <div>
            <div style={product}>
                <h3>{name}</h3>
                <small>{detail}</small>
                <h6>{price}</h6>
                <button onClick={() => addToCart(name)}>ADD</button>
                <button onClick={() => removeFromCart(name)}>REMOVE</button>
            </div>
        </div>
    );
};

export default Product;