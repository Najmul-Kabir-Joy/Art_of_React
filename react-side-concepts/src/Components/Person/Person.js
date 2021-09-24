import React from 'react';
import { addToDB, removeFromDB } from '../../Utilities/fakedb';

const Person = (props) => {
    const { _id, name, gender, email, balance } = props.data;
    const purchaseHandler = (id) => {
        console.log(id);
        addToDB(id);
    }
    const removeHandler = (id) => {
        removeFromDB(id);
    }

    return (
        <div>
            <h3>Name:{name} </h3>
            <h3>Gender:{gender} </h3>
            <h3>Email:{email} </h3>
            <h3>Balance: {parseFloat(balance.slice(1).replace(',', '')).toFixed(2)} </h3>
            <button onClick={() => purchaseHandler(_id)}>PURCHASE</button>
            <button onClick={() => removeHandler(_id)}>REMOVE</button>
        </div>
    );
};

export default Person;