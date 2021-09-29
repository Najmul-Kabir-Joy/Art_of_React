import React from 'react';
import { addToDb, removeFromDb } from '../../Utilities/localDb';
import './Person.css'

const Person = (props) => {
    const { _id, picture, name, company, gender, email, phone, address, balance } = props.data;
    // let balanceInt = parseFloat(balance.slice(1).replace(',', ''));
    const addToLocal = id => {
        addToDb(id);
    };
    const remove = id => {
        removeFromDb(id);
    };
    return (
        <div className='person-container'>
            <div className="person">
                <div className="person-image">
                    <img src={picture} alt="" />
                </div>
                <div className="person-header">
                    <h4>{name}</h4>
                </div>
                <div className="person-details">
                    <p>Company: {company}</p>
                    <p>Gender: {gender}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <p>Address: {address}</p>
                    <p>Balance: {balance}</p>
                    <button onClick={() => addToLocal(_id)}>Add Now</button>
                    <button onClick={() => remove(_id)}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default Person;