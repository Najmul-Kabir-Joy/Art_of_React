const data = {};

const addToDb = item => {
    const db = getDb();
    // if (db[item]) {
    //     db[item] += 1;
    // } else {
    //     db[item] = 1;
    // }
    db[item] = db[item] ? db[item] += 1 : 1;
    saveToDb(db);
}
const removeFromDb = item => {
    const db = getDb();
    delete db[item];
    saveToDb(db);
}

const saveToDb = data => {
    localStorage.setItem('cart', JSON.stringify(data));
}
const getDb = () => {
    const savedDb = localStorage.getItem('cart');
    return JSON.parse(savedDb);
};