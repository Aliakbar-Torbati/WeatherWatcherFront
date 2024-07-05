import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { TokenProvider } from './context/TokenContext.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <TokenProvider>
        <App />
      </TokenProvider>
    </Router>
  </React.StrictMode>
);
