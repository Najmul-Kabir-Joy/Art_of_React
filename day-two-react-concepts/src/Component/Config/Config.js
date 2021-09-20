import React from 'react';

const Config = (props) => {
    return (
        <div>
            <h4>Price: {props.price}</h4>
            <h4>Ram: {props.ram}</h4>
            <h4>Rom: {props.rom}</h4>
        </div>
    );
};

export default Config;