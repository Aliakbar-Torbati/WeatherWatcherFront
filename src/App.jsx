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

export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";


const App = () => {
  //getting the token of devise
  // requestPermission();
  // const { token } = useToken();
  // checking user is logged in or not. If he is logged in, passing the user id to updating fourm.
  // const [user, setUser] = useState(null);
  // useEffect(() => {
  //   const auth = getAuth();
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       setUser(currentUser);
  //     } else {
  //       setUser(null);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      {/* <button onClick={handleClick}>Request Notification Permission</button> */}
    </div>
  );
};

export default App;
