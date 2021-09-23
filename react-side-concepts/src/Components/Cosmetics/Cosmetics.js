import React from 'react';
import { add as addition } from '../../Utilities/calculation';

const Cosmetics = (props) => {
    const { num1, num2 } = props;
    return (
        <div>
            <p>Total Price: {addition(num1, num2)}</p>
        </div>
    );
};

export default Cosmetics;