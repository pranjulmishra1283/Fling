import Card from '../models/dbCards.js'
import { userPreference, cardImg } from './auth.js';

export const postCard = async (req, res) => {
    const dbCard = req.body;

    const newCard = new Card(dbCard);

    try {
        await newCard.save();

        res.status(201).json(newCard);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    // Card.create(dbCard, (err, data) => {
    //     if (err) {
    //         res.status(500).send(err)
    //     } else {
    //         res.status(201).send(data)
    //     }
    // })
};

export const getCards = async (req, res) => {
    try {
        if(userPreference == 'Men') {
            const getCards = await Card.find({ gender: 'Male', img: { $ne: cardImg } });

            return res.status(200).json(getCards);
        }
        else if(userPreference == 'Women') {
            const getCards = await Card.find({ gender: 'Female', img: { $ne: cardImg } });

            return res.status(200).json(getCards);
        }
        else {
            const getCards = await Card.find({ img: { $ne: cardImg } });

            return res.status(200).json(getCards);
        }
    } catch(error) {
        res.status(404).json({ message: error.message });
    }    
};