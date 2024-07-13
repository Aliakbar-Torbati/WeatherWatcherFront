import React, { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import { useAuthen } from "../context/AuthenContex";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const nav = useNavigate();
    //getting the user details
  const { uuser } = useAuthen();
  console.log("about user", uuser);

  const handleLogOut = async () => {
    try {
      await auth.signOut();
      console.log("user logged out successfully");
      nav("/");
    } catch (error) {
      console.log("error while logging out");
    }
  };

  return (
    <div>
      {uuser ? (
        <>
          <h3>Welcome {uuser.email}</h3>
          <h4>City: {uuser.city}</h4>
          <h4>Cold Threshold: {uuser.coldThreshold}</h4>
          <h4>Hot Threshold: {uuser.hotThreshold}</h4>
          <h4>Notify Rain: {uuser.notifyRain ? "Yes" : "No"}</h4>
          <h4>Notification Time: {uuser.time}</h4>
          <button onClick={handleLogOut}>Log Out</button>
        </>
      ) : (
        <p>Loading ...</p>
      )}
      {!uuser && <button onClick={() => nav("/")}>Home Page</button>}
     
    </div>


  );
}

export default Dashboard;
