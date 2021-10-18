import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton  from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom';

function Header({ backButton }) {
    const history = useHistory();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='header'>
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__icon"/>
                </IconButton>
            ) : (
                <div>
                    <IconButton
                        className="header__icon"
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    > 
                        <MenuIcon fontSize="large"/>
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}><HomeIcon></HomeIcon> News Feed</MenuItem>
                        <MenuItem onClick={handleClose}><PersonIcon></PersonIcon> Profile</MenuItem>
                        <MenuItem onClick={handleClose}><ExitToAppIcon></ExitToAppIcon> Logout</MenuItem>
                    </Menu>
                </div>    
            )}

            {/* <Link to='/'>    
                <img
                    className = "header__logo"
                    
                    alt = "logo"
                />
            </Link> */}

            <Link to="/tinderCards">
                <IconButton className="header__icon">
                    <ForumIcon fontSize="large"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
