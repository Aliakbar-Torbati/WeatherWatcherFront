import "./App.scss";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import requestPermission from "./requestPermission";
import React, { useEffect } from "react";
import { messaging, onMessage } from "./firebaseConfig";

import {ToastContainer} from "react-toastify"; 
import SignUp from "./component/fourms/SignUp";
import LogIn from "./component/fourms/LogIn";
import Dashboard from "./component/Dashboard";
export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5005";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   componentDidMount() {
//     const messaging = firebase.messaging();
//     messaging
//       .requestPermission()
//       .then(() => {
//         return messaging.getToken();
//       })
//       .then((token) => {
//         console.log("token: ", token);
//       })
//       .catch(() => {
//         console.log("error");
//       });
//   }

//   // useEffect(() => {
//   //   requestPermission();
//   // }, []);
//   render() {
//     return (
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/about/:userId" element={<About />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </div>
//     );
//   }
// }

const App=() => {

  useEffect (()=>{
    requestPermission();
  },[])
  // const handleClick = async () => {
  //   await requestPermission();
  // };

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
}

export default App;
