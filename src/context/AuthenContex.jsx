// src/context/AuthenContex.js

import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebaseConfig';

const AuthenContext = createContext();

export const useAuthen = () => useContext(AuthenContext);

export const AuthenProvider = ({ children }) => {
    const [uuser, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
                // Optionally fetch additional user data here
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthenContext.Provider value={{ uuser: uuser, setUuser: setUser }}>
            {children}
        </AuthenContext.Provider>
    );
};
