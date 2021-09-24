//using local storage as database 
const getDB = () => localStorage.getItem('shoppingCart');
const updateDB = cart => localStorage.setItem('shoppingCart', JSON.stringify(cart));

const addToDB = id => {
    const exits = getDB();
    let shoppingCart = {};
    if (exits) {
        shoppingCart = JSON.parse(exits);
        if (shoppingCart[id]) {
            const newCount = shoppingCart[id] + 1;
            shoppingCart[id] = newCount;
        } else {
            shoppingCart[id] = 1;
        }
    } else {
        shoppingCart[id] = 1;
    }
    updateDB(shoppingCart);
}
const removeFromDB = id => {
    const exists = getDB();
    if (!exists) {

    } else {
        const shoppingCart = JSON.parse(exists);
        delete shoppingCart[id];
        updateDB(shoppingCart);

    }
}
export { addToDB, removeFromDB };