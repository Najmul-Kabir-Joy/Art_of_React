import React from 'react';
import { Redirect, Route } from 'react-router';
import useAtuh from '../Hooks/useAuth';

const PrivateRoute = (props) => {
    const { children, ...rest } = props;
    const { user } = useAtuh();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? children
                    :
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    >

                    </Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;