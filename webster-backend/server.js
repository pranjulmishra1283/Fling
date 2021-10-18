import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import userRoutes from './routes/auth.js'
import cardRoutes from './routes/cards.js'

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://admin:SkdF9u7ukwuNpTlc@cluster0.aioft.mongodb.net/websterDB?retryWrites=true&w=majority"

// Middlewares
app.use(express.json());
app.use(cors());

// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.use('/user', userRoutes);
app.use('/tinder', cardRoutes);

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));