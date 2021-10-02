import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key);
    }
    const history = useHistory();

    const handlePlaceOrder = () => {
        history.push('/placeorder')
        setCart();
        clearTheCart();
    }
    return (
        <div className="shop_container">
            <div className="product_container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    >

                    </ReviewItem>)
                }
            </div>
            <div className="cart_container">
                <div>
                    <Cart cart={cart}>
                        <button onClick={handlePlaceOrder} className='btn-purchase'>Place Order</button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;