import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = (props) => {
    const { house, ornaments } = props;
    return (
        <div>
            <h2>Father</h2>
            <h2>{house}</h2>
            <div style={{ display: 'flex' }}>
                <Brother house={house}></Brother>
                <Myself house={house} ornaments={ornaments}></Myself>
                <Sister></Sister>

            </div>
        </div>
    );
};

export default Father;