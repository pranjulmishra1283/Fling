import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { login } from '../actions/auth.js';
import Navbar from './Navbar.js';

function Login() {
    const dispatch = useDispatch();
    const history = useHistory(); 

    const initialState = { email: '', password: '' };

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(login(formData, history))
    };

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="login">
            <Navbar />
            <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
                <div className="login_form">
                
                <h3 style={{color: "white", marginLeft: "10rem" , fontSize: "2rem"}}>SIGN IN</h3>
            
                <form style={{height: "350px", width: "300px"}} onSubmit={handleSubmit} className="form ">  
                 
                <label for="email">Email: </label><input type="text" name="email" onChange={handleChange} required></input>
                <label for="passsword">Password: </label><input type="password" name="password" onChange={handleChange} required></input>
                <button type="submit">LOGIN</button>
                <Link to='/register'>
                <p>Don't have an account?</p>
            </Link>
            </form>
            </div>
            </div>
           
        </div>
    )
}

export default Login
