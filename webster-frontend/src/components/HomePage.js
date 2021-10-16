import React from 'react';
import IconButton  from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

import Navbar from './Navbar.js';
import './HomePage.css'

function HomePage() {
    return (
        <div>
            {/* <Navbar /> */}
            <Link to = '/login'>
                <IconButton>
                    <p>Login</p>
                </IconButton>
            </Link>
            <Link to = '/register'>
                <IconButton>
                    <p>Signup</p>
                </IconButton>
            </Link>
            {/* Footer */}
        </div>
    )
}

export default HomePage
