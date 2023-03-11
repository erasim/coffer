import React, { useState, useEffect } from 'react';


import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Home = () => {
  const [email , setEmail]=useState('');
  const navigate = useNavigate();
  const Role = useSelector(state => state.role)
 
  const signOutUser = (user) => {
    if(user)
   
  navigate('/login')
}
    useEffect(()=>{
   
         
    }, [])
 
  return (
    <section className='form-login'>        
    <h1>Welcome to our Home Page</h1>
    {/* <h3>Your role is {Role.role}</h3> */}
    <h1>{email}</h1>
    <button onClick={ signOutUser}>Sign out</button>
    </section>
  )
}

export default Home