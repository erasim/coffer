import React from 'react'
import './Deshboard.css'

const Sighup = () => {
  return (
    <div className='sighup-main'>
        <h1>Register New User</h1>
        <p>Role In Company</p>
        <select name="cars"  className='sighup-imput'>
    <option value="Hr">Hr</option>
    <option value="Recurter">Recruiter</option>
    <option value="Employee">Employee</option>
    <option value="Admin">Admin</option>
  </select>
        <p>Name </p>
        <input type='text'  className='sighup-imput'/>
        <p>Email </p>
        <input type='email'  className='sighup-imput'/>
       
  <p>Password</p>
        <input type='password'  className='sighup-imput'/>
    </div>
  )
}

export default Sighup