const getDB = () => localStorage.getItem('cart');
const updateDB = cart => localStorage.setItem('cart', JSON.stringify(cart));

const addToCart = (name) => {
    const exits = getDB();
    let cart = {};
    if (exits) {
        cart = JSON.parse(exits); //jei cart ta pailam oitare js e convert korlam
        if (cart[name]) {
            const newCount = cart[name] + 1;
            cart[name] = newCount;
        } else {
            cart[name] = 1;
        }
    } else {
        cart[name] = 1;
    }
    console.log('cl')
    updateDB(cart);
};
const removeFromCart = (name) => {
    const exits = getDB();
    if (exits) {
        const cart = JSON.parse(exits);
        delete cart[name];
        updateDB(cart);
    }
};

export { addToCart, removeFromCart };