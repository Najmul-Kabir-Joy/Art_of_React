import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Bou = (props) => {
    // const { ornaments } = props;
    const tempName = useContext(RingContext);
    console.log(tempName);
    return (
        <div>
            <h5>Bou</h5>
            <h5>{tempName}</h5>
        </div>
    );
};

export default Bou;