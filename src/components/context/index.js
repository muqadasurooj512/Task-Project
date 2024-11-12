import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth } from '@react-native-firebase/auth';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        const currentUser = auth.currentUser;
        setUser(currentUser);
    }, [auth]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
