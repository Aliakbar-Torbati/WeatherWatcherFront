import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, FirebaseDb  } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const AuthenContext = createContext();

export const useAuthen = () => useContext(AuthenContext);

export const AuthenProvider = ({ children }) => {
    const [uuser, setUuser] = useState(null);
    const [isPrefernceFormVisible, setIsPrefrenceFormVisible] = useState(false);


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
            if (firebaseUser) {
                const docRef = doc(FirebaseDb, "users", firebaseUser.uid);
                const fetchedUser = await getDoc(docRef);
                if (fetchedUser.exists()) {
                    setUuser({ ...firebaseUser, ...fetchedUser.data() });
                } else {
                    setUuser(firebaseUser);
                }
            } else {
                setUuser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthenContext.Provider value={{ uuser: uuser, setUuser: setUuser, isPrefernceFormVisible: isPrefernceFormVisible, setIsPrefrenceFormVisible: setIsPrefrenceFormVisible }}>
            {children}
        </AuthenContext.Provider>
    );
};
