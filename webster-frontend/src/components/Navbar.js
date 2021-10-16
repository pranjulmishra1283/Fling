import React from 'react'

function Navbar() {
    return (
        <div className="header">
            <div className="menu-bar">
                <nav className="navbar  sticky-top navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#"><img src="./logo2.jpeg" height="40px" width="40px" /></a>
                    <a className="navbar-brand" href="#">
                        <h2 className="headingM">MINDER</h2>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    <h5>Products</h5>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <h5>Safety</h5>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <h5>Learn</h5>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <h5>Support</h5>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;