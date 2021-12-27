import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from './Posts';
import PostForm from './PostForm';
import './Feed.css';

const Feed = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    return (
        <div className='feed'>
            
            <div className='posts'>
                <Posts setCurrentId={setCurrentId} />
            </div>
            <div className='postForm'>
                <PostForm currentId={currentId} setCurrentId={setCurrentId} />
            </div>
        </div>
    );
}

export default Feed