import React, { useState } from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const Grandfather = (props) => {
    const { house, ornaments } = props
    return (
        <div>
            <h4>GrandFather</h4>
            <h5>{house}</h5>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Father house={house} ornaments={ornaments}></Father>
                <Uncle></Uncle>
                <Aunt house={house}></Aunt>
            </div>

        </div>
    );
};

export default Grandfather;