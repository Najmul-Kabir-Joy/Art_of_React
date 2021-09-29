import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProducts(data);
            })
    }, [])
    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = [];
        if (products.length) {
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                } else {

                }
            }
            setCart(storedCart);
        }
    }, [products])
    const handleAddtoCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key)
    }
    const handleSearch = (event) => {
        const searchText = event.target.value;
        const matched = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matched);
    }
    return (
        <>
            <div className="search-bar-container">
                <input type="text" onChange={handleSearch} className='search-bar' placeholder='search for products' />
            </div>
            <div className='shop-container'>
                <div className="products-container">
                    {
                        displayProducts.map(product => <Product product={product} key={product.key} handleAddtoCart={handleAddtoCart}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;