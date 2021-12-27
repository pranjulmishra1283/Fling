import React from 'react';
import TinderCard from 'react-tinder-card';
import { useSelector } from 'react-redux';

import './TinderCards.css';

const Card = ({ setCurrentId }) => {
    const cards = useSelector((state) => state.cards);

    const swiped = (direction, nameToDelete) => {
        console.log("removing " + nameToDelete);
        //setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    };

    console.log(cards);

    return (
        <div className="tinderCards__cardContainer">
                {cards.map((person) => (
                    <TinderCard
                        setCurrentId={setCurrentId}
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
    )
}

export default Card
