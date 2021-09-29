import React from 'react';

const Cart = (props) => {
    let { cart } = props;
    let total = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        product.quantity = !product.quantity ? 1 : product.quantity;
        total += product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;

    }
    // const totalQuantity = cart.reduce((prev, curr) => prev + curr.quantity, 0);
    // const total = cart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
    const shipping = cart.length > 0 ? 20 : 0;
    const tax = total * 0.2;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h2>Order Summary </h2>
            <h4>Items orderd:{totalQuantity}</h4>
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;