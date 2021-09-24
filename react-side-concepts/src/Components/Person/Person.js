import React from 'react';

const Person = (props) => {
    const { name, gender, email, balance } = props.data;
    return (
        <div>
            <h3>Name:{name} </h3>
            <h3>Gender:{gender} </h3>
            <h3>Email:{email} </h3>
            <h3>Balance: {parseFloat(balance.slice(1).replace(',', '')).toFixed(2)} </h3>
        </div>
    );
};

export default Person;