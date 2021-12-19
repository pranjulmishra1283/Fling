import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    img: String,
    likes: [String],
    dislikes: [String]
});

export default mongoose.model('cards', cardSchema);