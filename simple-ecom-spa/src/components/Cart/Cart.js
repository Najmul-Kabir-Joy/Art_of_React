import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    // const total = cart.reduce((previous, product) => previous + product.price, 0)
    // const totalQuantity = cart.reduce((previous, product) => previous + product.quantity, 0)
    let total = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = totalQuantity * 10;
    const tax = (total + shipping) * 0.2;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {totalQuantity}</h5>
            <br />
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping cost: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Order Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;