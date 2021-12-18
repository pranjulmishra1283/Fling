import React from 'react';
import { Link } from 'react-router-dom';

import Post from './Post';
import './Feed.css';
import PostForm from './PostForm';



function Feed() {
    return (
        <div className='feed'>
            

            <div className='feed_header'>
                <Link to = '/tinderCards'>
                    <img className='feed_header_image' src='https://images-ext-2.discordapp.net/external/uBTgW5IvHFskkuxkjChJAp3_5XYa8jhnlq_g4VvvZA4/https/i.postimg.cc/bJGynZpg/Pics-Art-10-17-10-24-02.png?width=120&height=70' ></img>
                </Link>
            </div>

            <Post username="lalala" caption="my head hurts" imageUrl="https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" />
            <Post />
            <Post />
            <Post />

            <PostForm />



        </div>
    )
}

export default Feed
