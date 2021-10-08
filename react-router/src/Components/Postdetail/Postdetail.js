import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const Postdetail = () => {
    const { postId } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const { title, body } = data;
    const history = useHistory();
    const backToPosts = () => {
        history.push('/posts');
    }
    return (
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={backToPosts}>Back to posts</button>
        </div >
    );
};

export default Postdetail;