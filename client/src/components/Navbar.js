import React from 'react'

function Navbar() {
    // const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    // const logout = () => {
    //     dispatch({ type: actionType.LOGOUT });
    
    //     history.push('/auth');
    
    //     setUser(null);
    // };

    // useEffect(() => {
    //     const token = user?.token;
    
    //     if (token) {
    //       const decodedToken = decode(token);
    
    //       if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    //     }
    
    //     setUser(JSON.parse(localStorage.getItem('profile')));
    //   }, [location]);

    return (
        <div classNameName="header">
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
                <div className="container">
                    <img className="navbar-brand" src ="https://images-ext-1.discordapp.net/external/uHmdNy-mfoFQQ0nejnf93IoATs6IdcXTznnviRhNN1k/https/i.postimg.cc/SRH3KSBv/Pics-Art-10-18-12-21-30.png?width=150&height=83"></img>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                </div>
            </nav>


            
        </div>
    );
}

export default Navbar;