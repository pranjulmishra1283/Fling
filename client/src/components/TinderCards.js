import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

import * as api from '../api/index.js';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await api.data();

            setPeople(req.data);
        }

        fetchData();
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log("removing " + nameToDelete);
        //setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    };

    return (
        <div className="tinderCards">


            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.img})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>

                        <div className='bio'>

                            <p>{person.bio}</p>


                        </div>
                    </TinderCard>
                ))}


            </div>
            <div className="swipeButtons">
                <IconButton className="swipeButtons__left">
                    <CloseIcon fontSize="large" />
                </IconButton>
                <IconButton className="swipeButtons__right">
                    <FavoriteIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
    )
}

export default TinderCards
