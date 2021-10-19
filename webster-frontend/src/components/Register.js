import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import './register.css';
import FileBase from 'react-file-base64';

import { signup } from '../actions/auth.js';

function Register() {
    const dispatch = useDispatch();
    const history = useHistory();

    const initialState = { name: '', email: '', password: '' };

    const [formData, setFormData] = useState(initialState);

    const handleSubmit = e => {
        e.preventDefault();

        console.log(formData);
        dispatch(signup(formData, history));
    };

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    var loadFile = function(event){
        var image = document.getElementById('output');
        image.src = URL.createObjectURL(event.target.files[0]);
    };
    return (
        <div className="reg" >
            <div className="reg_header">

                <img className="logo" src="https://images-ext-2.discordapp.net/external/uBTgW5IvHFskkuxkjChJAp3_5XYa8jhnlq_g4VvvZA4/https/i.postimg.cc/bJGynZpg/Pics-Art-10-17-10-24-02.png?width=150&height=83" alt="/"></img>
            </div>

            <div className="reg_heading">
                <h3>CREATE ACCOUNT</h3>
            </div>
            <div className="content">

            
                <div className="form">
                    <h2>Profile Details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-25">

                                <label for="name">Name </label>

                            </div>

                            <div className="col-75">
                                <input type="text" name="name" onChange={handleChange} required></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="email">Email </label>
                            </div>

                            <div className="col-75">
                                <input type="text" name="email" onChange={handleChange} required></input>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label for="birthday">Birthday </label>

                            </div>

                            <div className="col-75">
                                <input type="date" id="birthday" name="birthday"></input>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-25">

                                <label for="Gender">Gender</label>
                            </div>
                            <div className="col-75">
                                <select name="gender" id="gender">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">

                                <label for="showme">Show me</label>
                            </div>
                            <div className="col-75">
                                <select name="showme" id="showme">
                                    <option value="Men">Men</option>
                                    <option value="Women">Women</option>
                                    <option value="Everyone">Everyone</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div >
                                <label for="passsword">Password: </label>

                            </div>
                            <div >
                                <input type="password" name="password" onChange={handleChange} required></input>
                            </div>
                        </div>

                        <div className="row">
                            <div >
                                <label for="cpasssword">Confirm Password: </label>

                            </div>
                            <div >
                                <input type="password" name="password" onChange={handleChange} required></input>
                            </div>
                        </div>


 <button type="submit" className="signup">SIGNUP</button>
                        
                    </form>
                    
                    
                   

                    <div className="ahaa">
                        <Link to='/login' >
                            <p>Already have an account?</p>
                        </Link></div>
                </div>

                <div className="prof">
                    <h2>Profile Photo</h2>
                    <div className="container">
                        <div className="wrapper">
                            <p><label for="files" className="file">Upload Image</label></p>
                                <input type="file" className="files" id="files" accept="image/*">
                                </input>
                               <p><img id="output"></img></p>
                            

                        </div>

                    </div>

                </div>





            </div></div>
    )
}

export default Register
