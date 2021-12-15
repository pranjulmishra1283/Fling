import React from 'react'
import './Post.css';
import Avatar from "@material-ui/core/Avatar";
function Post() {

    
    return (
        <div className='post'>
            <div className='post_header'>

                <Avatar
                    className='post_avatar'
                    alt='Username'
                    src=''


                />
                <h3>Username</h3>

               

            
                </div>
            <img className='post_image' src='https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?k=20&m=1140180560&s=612x612&w=0&h=X_400OQDFQGqccORnKt2PHYvTZ3dBLeEnCH_hRiUQrY='></img>
            <div className='post_text'><h4><strong>Username: </strong>Caption</h4></div>
        </div>
    )
}

export default Post
