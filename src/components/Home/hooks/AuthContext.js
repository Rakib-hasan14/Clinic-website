import React, { createContext } from 'react';
import useData from './useData';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const allContext = useData();

    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;