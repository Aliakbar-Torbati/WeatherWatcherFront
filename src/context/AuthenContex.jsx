import React, { createContext, useState, useContext } from 'react';

// Create the context
const AuthenContext = createContext();

// Create a provider component
export const AuthenProvider = ({ children }) => {
  const [uuser, setUuser] = useState(null);

  return (
    <AuthenContext.Provider value={{ uuser, setUuser }}>
      {children}
    </AuthenContext.Provider>
  );
};

// Custom hook to use the AuthenContext
export const useAuthen = () => {
  return useContext(AuthenContext);
};
