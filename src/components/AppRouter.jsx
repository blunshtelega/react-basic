import React, { useContext } from 'react';
import {
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import { AuthContext } from '../context/context';
import { privateRoutes, publicRoutes } from '../router/routes';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
      return <Loader/>
    }

    return (
        isAuth
            ? 
            <Routes> 
                {privateRoutes.map((route) => 
                    <Route 
                        key={Math.random()}
                        path={route.path} 
                        element={route.component} 
                        exact={route.exact}
                    />
                )}
                <Route path="/*" element={<Navigate replace to="/posts" />} />
            </Routes>
            : 
            <Routes>
                {publicRoutes.map((route) => 
                    <Route 
                        key={Math.random()}
                        path={route.path} 
                        element={route.component} 
                        exact={route.exact}
                    />
                )}
                <Route path="/*" element={<Navigate replace to="/login" />} />
            </Routes>
    );
};

export default AppRouter;