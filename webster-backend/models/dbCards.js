import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
    //location, preferences, age, sexual preference, gender
});

export default mongoose.model('cards', cardSchema);