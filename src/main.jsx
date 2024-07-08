import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { TokenProvider } from './context/TokenContext.jsx';
import { AuthenProvider } from "./context/AuthenContex.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <AuthenProvider>
      <TokenProvider>
        <App />
      </TokenProvider>
      </AuthenProvider>
    </Router>
  </React.StrictMode>
);
