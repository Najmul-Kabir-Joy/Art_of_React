import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    // let totalQuantity = 0;
    for (const product of cart) {
        total += product.price * product.quantity;
    }
    const shipping = cart.length > 0 ? 20 : 0;
    const tax = total * 0.2;
    const grandTotal = total + tax + shipping;
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items ordered: {cart.length}</h4>
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping.toFixed(2)}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p className='grand-total'>Grand Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;