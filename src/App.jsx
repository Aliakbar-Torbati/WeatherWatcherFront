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
import SignUp from "./component/fourms/SignUp";
import LogIn from "./component/fourms/LogIn";
import Dashboard from "./component/Dashboard";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Profile from "./pages/Profile";

export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";


const App = () => {
  //getting the token of devise
   requestPermission();

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
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
