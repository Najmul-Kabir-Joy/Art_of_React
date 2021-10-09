import React from 'react';
import useAtuh from '../Hooks/useAuth';

const Home = () => {
    const { user } = useAtuh();
    return (
        <div>
            <h2>This is home</h2>
            {
                user.displayName &&
                <h5>This is user {user.displayName}</h5>
            }
        </div>
    );
};

export default Home;