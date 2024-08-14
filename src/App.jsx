import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import requestPermission from "./requestPermission";
import React, { useEffect } from "react";
import { useToken } from "./context/TokenContext";
import { ToastContainer } from "react-toastify";
// import Dashboard from "./component/Dashboard";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Profile from "./pages/Profile";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";


export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";


const App = () => {
  //getting the token of devise
   requestPermission();

  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      {/* <button onClick={handleClick}>Request Notification Permission</button> */}
    </div>
  );
};

export default App;
