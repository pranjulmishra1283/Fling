import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoutes from './routes/auth.js'
import cardRoutes from './routes/cards.js'

// App Config
const app = express();
dotenv.config();
const port = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());

// DB Config
mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.use('/user', userRoutes);
app.use('/tinder', cardRoutes);

// Listener
app.listen(port, () => console.log("Successfully Hosted!"));