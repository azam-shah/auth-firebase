import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

function Login() {

    const [ Email , setEmail ] = useState('');
    const [ Password , setPassword ] = useState('');
    const [ error , setError ] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword( auth , Email , Password);
            const user = userCredential.user;
            localStorage.setItem('authToken' , user.accessToken);
            localStorage.setItem('user' , JSON.stringify(user));
            navigate('/Home');
        } catch (error) {
            console.error("error during login" , error);
            setError("invalid Email or Password");
        }
    }
  return (
    <div className='cantainer'>
        <div className='box'>
            <h1>LOG - IN PAGE</h1>
            {error && <p className="error-message">{error}</p>}
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

                <button type='submit' className='btn'>LOG-IN</button>

            </form>
        </div>
    </div>
  )
}

export default Login;
