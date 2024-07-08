import React, { useEffect, useState } from 'react'
import {auth, FirebaseDb} from "../firebaseConfig"
import { useAuthen } from "../context/AuthenContex";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const nav = useNavigate();
    const { uuser } = useAuthen();
    console.log('about user', uuser);

    const handleLogOut = async () => {
        try{
            await auth.signOut();
            console.log("user logged out successfully");
            nav('/')
        }catch(error){
            console.log("error while logging out");
        }
    }

    // useEffect(()=>{
    //     fetchUserData();
    // },[])

  return (
    <div>
        {uuser ? (
            <h3>Welcome {uuser.email}</h3>
        ) : (
            <p>Loading ...</p>
        )}
        {uuser ? <button onClick={handleLogOut}>Log Out</button> : <button onClick={()=>{nav('/')}}>Home Page</button>}
    </div>
  )
}

export default Dashboard
