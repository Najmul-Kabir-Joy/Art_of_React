import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const { name, phone, website, address } = data;
    const history = useHistory();
    const showAllBtn = () => {
        history.push('/friends')
    }
    return (
        <div>
            <h2>Details of {friendId} shown below</h2>
            <h4>Name: {name}</h4>
            <p>Phone: {phone} </p>
            <p>Website: {website}</p>
            <p>Address: street-{address?.street}</p> <p>city:{address?.city}</p>
            <button onClick={showAllBtn}>Show All friends</button>
        </div>
    );
};

export default FriendDetail;