import React from 'react';
import Post from './Post';
import './Feed.css';



function Feed() {
    return (
        <div className='feed'>
            

            <div className='feed_header'>
                <img className='feed_header_image' src='https://images-ext-2.discordapp.net/external/uBTgW5IvHFskkuxkjChJAp3_5XYa8jhnlq_g4VvvZA4/https/i.postimg.cc/bJGynZpg/Pics-Art-10-17-10-24-02.png?width=120&height=70' ></img>

            </div>

            <Post />
            <Post />
            <Post />
            <Post />



        </div>
    )
}

export default Feed
