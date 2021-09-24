import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            {
                products.map(product =>
                    <Product key={product.id} product={product}></Product>
                )
            }
        </div>
    );
};

export default Products;