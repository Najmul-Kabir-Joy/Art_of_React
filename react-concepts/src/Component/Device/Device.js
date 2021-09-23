import React from 'react';
import Config from '../Config/Config';

const Device = (props) => {
    return (
        <div>
            <h2>My Device: {props.name}</h2>
            <Config price='32000' ram='6GB' rom='128GB'></Config>

        </div>
    );
};

export default Device;