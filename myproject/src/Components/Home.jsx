import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import {  signOut } from 'firebase/auth';
import { auth } from '../firebase';

function Home() {

  const navigate = useNavigate();

  const handleLogout = async () =>{
    await signOut(auth);
    localStorage.removeItem('authToken');
    localStorage.removeItem( 'user');
    navigate('/Login')
    window.location.reload();
  }

  return (
    <div className='home-box'>
        <div>
            <h1>WELCOME TO HOME WITH EMAIL AND PASSWORD</h1>
            <button className='btn' onClick={handleLogout}>LOG-OUT</button>
        </div>
    </div>
  )
}

export default Home;
