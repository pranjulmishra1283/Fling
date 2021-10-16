import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { signup } from '../actions/auth.js';

function Register() {  
    const dispatch = useDispatch();
    const history = useHistory(); 

    const initialState = { name: '', email: '', password: ''};

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();
        
        console.log(formData);
        dispatch(signup(formData, history));
    }; 

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label for="name">Name: <input type="text" name="name" onChange={ handleChange } required></input></label>
                <label for="email">Email: <input type="text" name="email" onChange={ handleChange } required></input></label>
                <label for="passsword">Password: <input type="password" name="password" onChange={ handleChange } required></input></label>
                <button type="submit">SIGNUP</button>
            </form>
            <Link to='/login'>
                <p>Already have an account?</p>
            </Link>
        </div>
    )
}

export default Register
