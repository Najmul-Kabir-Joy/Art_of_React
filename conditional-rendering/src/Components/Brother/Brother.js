import React from 'react';

const Brother = (props) => {
    const { house } = props;
    return (
        <div>
            <h2>Brother</h2>
            <h5>{house}</h5>
        </div>
    );
};

export default Brother;