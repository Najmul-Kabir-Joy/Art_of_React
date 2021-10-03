import React from 'react';
import Bou from '../Bou/Bou';

const Myself = (props) => {
    const { house, ornaments } = props;
    return (
        <div>
            <h2>My self</h2>
            <h5>{house}</h5>
            <Bou ornaments={ornaments}></Bou>
        </div>
    );
};

export default Myself;