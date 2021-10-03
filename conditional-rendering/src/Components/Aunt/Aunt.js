import React from 'react';

const Aunt = (props) => {
    const { house } = props;
    return (
        <div>
            <h2>Aunt</h2>
            <h5>{house}</h5>
        </div>
    );
};

export default Aunt;