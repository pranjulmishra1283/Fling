import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div class="header">
            <div class="menu-bar">
                <nav class="navbar  sticky-top navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#"><img src="Images/logo2.jpeg" height="40px" width="40px" /></a>
                    <a class="navbar-brand" href="#">
                        <h2 class="headingM">MINDER</h2>
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">

                            <li class="nav-item active">
                                <a class="nav-link" href="#">
                                    <h5>Products</h5>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <h5>Safety</h5>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <h5>Learn</h5>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <h5>Support</h5>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
