import React, { useState, useEffect, useContext } from 'react';
import ReactPlayer from 'react-player';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthCoxtext';
import { Login } from './login';
import { getAuth, signOut } from "firebase/auth";
import './home.css'




export const Home = () => {
  let navigate = useNavigate();
  const { user, setUser} = useContext(AuthContext)
  if(!user){
    navigate("/")
  }
  const [url, setUrl] = useState([]);

  //consumindo a API.
  
  useEffect(() => { 
    fetch('https://owen-wilson-wow-api.herokuapp.com/wows/random')
    .then(response => response.json())
    .then(data => {
      setUrl(data); //passando os dados fornecido pela API e passando para o UseState.
      
    })  
  }, []);

const Logout = () =>{
  const auth = getAuth();
  signOut(auth).then(() => {
    navigate("/")
  }).catch((error) => {
  console.log(error)
  });

  } 

   
 
  return(
    <div className='video'>
      <ReactPlayer url={url[0]?.video["360p"]}  //renderizando o video na tela.
      playing = {true}
      onReady= {true}
      height='50%'
      width='50%'
      controls />
      
      <button className='logout' onClick={Logout}>LOGOUT</button>
    </div>
  )
  }  
    
  
 









  
 
  



 



 


   

