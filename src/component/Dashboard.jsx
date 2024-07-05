import React, { useEffect, useState } from 'react'
import {auth, FirebaseDb} from "../firebaseConfig"
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [userDetail, setUserDetail]= useState(null)
    const nav = useNavigate();
    // const fetchUserData= async () => {
    //     auth.onAuthStateChanged(async (user) =>{
    //         console.log(user);
    //         const docRef= doc(FirebaseDb, "users", user.uid);
    //         const fetchedUser= await getDoc (docRef);
    //         if (fetchedUser.exists()){
    //             setUserDetail(fetchedUser.data());
    //             console.log("fetchedUser.data()", fetchedUser.data());
    //         }else{
    //             console.log("user is not logged in!");
    //         }
    //     })
    // }

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
        {userDetail ? (
            <h3>Welcome {userDetail.userName}</h3>
        ) : (
            <p>Loading ...</p>
        )}
        {userDetail ? <button onClick={handleLogOut}>Log Out</button> : <button onClick={()=>{nav('/')}}>Home Page</button>}
    </div>
  )
}

export default Dashboard
