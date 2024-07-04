import React, { createContext, useState, useContext } from 'react';

// Create the context
const TokenContext = createContext();

// Create a provider component
export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

// Custom hook to use the TokenContext
export const useToken = () => {
  return useContext(TokenContext);
};
