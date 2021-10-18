import Card from '../models/dbCards.js'
import { userPreference } from './auth.js';

export const post = async (req, res) => {
    const dbCard = req.body;

    Card.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
};

export const get = async (req, res) => {
    if(userPreference != null)
    {
        Card.find((err, data) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(201).send(data)
            }
        })
    }    
};