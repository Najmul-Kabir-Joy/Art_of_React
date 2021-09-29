const getDb = () => localStorage.getItem('cart');
const setDb = (cart) => localStorage.setItem('cart', JSON.stringify(cart));
const addToDb = (id) => {
    const exists = getDb();
    let cart = {};
    if (exists) {
        cart = JSON.parse(exists);
        if (cart[id]) {
            cart[id] += 1;
        } else {
            cart[id] = 1;
        }
    } else {
        cart[id] = 1;
    }
    setDb(cart);
}


const removeFromDb = (id) => {
    const exists = getDb();
    if (exists) {
        const cart = JSON.parse(exists);
        delete cart[id];
        setDb(cart);
    }
}

export { addToDb, removeFromDb };