import "./App.scss";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import requestPermission from "./requestPermission";
import React, { useEffect } from "react";
import { messaging, onMessage } from "./firebaseConfig";

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
  useEffect(() => {
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      // Show notification in the browser
      new Notification(payload.notification.title, {
        body: payload.notification.body,
      });
    });
  }, []);

  const handleClick = () => {
    requestPermission();
  };
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}

      <h1>FCM Demo</h1>
      <button onClick={handleClick}>Request Notification Permission</button>
    </div>
  );
}

export default App;
