import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { login } from '../actions/auth.js';

function Login() {
    const dispatch = useDispatch();
    const history = useHistory(); 

    const initialState = { email: '', password: ''};

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(login(formData, history))
    };

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for="email">Email: <input type="text" name="email" onChange={handleChange} required></input></label>
                <label for="passsword">Password: <input type="password" name="password" onChange={handleChange} required></input></label>
                <button type="submit">LOGIN</button>
            </form>
            <Link to='/register'>
                <p>Don't have an account?</p>
            </Link>
        </div>
    )
}

export default Login
