import React, { useContext, useEffect, useState } from 'react';
import { Home } from './home';
import { Navigate, Route, useNavigate } from 'react-router-dom';
import App from "../App";
import { auth } from '../firebase-config/firebaseconfig';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from '../firebase-config/firebaseconfig';
import './login.css';
import { AuthContext } from '../contexts/AuthCoxtext';


//login com o Google.
export const Login = () => {
  const { user, setUser} = useContext(AuthContext)  
  let navigate = useNavigate();
  const signInWithGoogle = ()=>{
    
    
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider) 
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const userGoogle = result.user
      if (userGoogle){
        setUser(true)
        navigate("/home")
      }
      

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
       


}
 return(
  <div className='login'>
    <button onClick={signInWithGoogle}>LOGIN GOOGLE</button>
    <p>Faça o login e ganhe um WoW!</p>
  </div>
  
 ) 
  

  
    
  
  }