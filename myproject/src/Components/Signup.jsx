import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth"

function Signup() {

    const [ Email , setEmail ] = useState('');
    const [ Password , setPassword ] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword( auth , Email , Password);
            const user = userCredential.user;
            localStorage.setItem('authToken' , user.accessToken );
            localStorage.setItem('user' , JSON.stringify(user));
            navigate('/Login');
        } catch (error) {
            console.error( "Error during Signup:" , error );
        }
    }

  return (
    <div className='cantainer'>
        <div className='box'>
            <h1>SIGN-UP PAGE</h1>
            <form className='form-box' onSubmit={handleSubmit}>
                <div className='form-data'>
                    <label>Email</label>
                    <input
                    type='Email'
                    id='Email'
                    name='Email'
                    placeholder='Enter the Email'
                    autoComplete='off'
                    required
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='form-data'>
                    <label>Password</label>
                    <input
                    type='Password'
                    id='Password'
                    name='Password'
                    placeholder='Enter the Password'
                    autoComplete='off'
                    required
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type='submit' className='btn'>SIGN-UP</button>

            </form>
        </div>
    </div>
  )
}

export default Signup;
