import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend;
    const { street, city } = address;
    const fstyle = {
        border: '1px solid skyBlue',
        padding: '10px',
        margin: '15px',
        borderRadius: '20px'
    }
    const history = useHistory();
    const handleVisit = () => {
        history.push(`/friend/${id}`);
    }
    return (
        <div style={fstyle}>
            <h4>Name: {name}</h4>
            <p>Phone: {phone} </p>
            <p>Website: {website}</p>
            <p>Address: street-{street}</p> <p>city:{city}</p>
            <Link to={`/friend/${id}`}>Go to Friend</Link>
            <br />
            <Link to={`/friend/${id}`}>
                <button>visit me</button>
            </Link>
            <br />
            <button onClick={handleVisit}>Visit me again</button>
        </div>
    );
};

export default Friend;