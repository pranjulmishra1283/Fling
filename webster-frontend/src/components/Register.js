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

    var loadFile = function (event) {
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

                            <div className="col-75" >
                                <input style={{marginTop:"13px"}} type="date" id="birthday" name="birthday"></input>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-25">

                                <label for="gender">Gender</label>
                            </div>
                            <div className="col-75">
                                <label for="gender">Male</label>
                                <input type="radio" id="Male" name="gender" value="Male"></input>
                                <label style={{ marginLeft: "15px" }} for="gender">Female</label>
                                <input type="radio" id="Female" name="gender" value="Female"></input>
                                <label style={{ marginLeft: "15px" }} for="gender">Other</label>
                                <input type="radio" id="Other" name="gender" value="Other"></input>



                            </div>
                        </div>



                        <div className="row">
                            <div className="col-25">

                                <label for="showme">Show Me</label>
                            </div>
                            <div className="col-75">
                                <label for="showme">Male</label>
                                <input type="radio" id="Men" name="showme" value="Men"></input>
                                <label style={{ marginLeft: "15px" }} for="showme">Women</label>
                                <input type="radio" id="Women" name="showme" value="Women"></input>
                                <label style={{ marginLeft: "15px" }} for="showme">Other</label>
                                <input type="radio" id="Other" name="showme" value="Other"></input>

                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label for="passsword">Password: </label>

                            </div>
                            <div className="col-75">
                                <input type="password" name="password" onChange={handleChange} required></input>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                                <label for="cpasssword">Confirm Password: </label>

                            </div>
                            <div className="col-75">
                                <input style={{marginTop:"10px"}} type="password" name="password" onChange={handleChange} required></input>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-25">
                                <label for="bio">Bio</label>
                            </div>
                            <div class="col-75">
                                <textarea id="bio" name="bio" placeholder="Tell the world something about yourself..." style={{height: "100px"}}></textarea>
                            </div>
                        </div>


                        <button type="submit" className="signup">SIGNUP</button>

                    </form>




                    <div className="ahaa">
                        <Link to='/login' >
                            <p>Already have an account?</p>
                        </Link></div>
                </div>

                





            </div></div>
    )
}

export default Register
