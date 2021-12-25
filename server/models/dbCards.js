import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    name: String,
    img: String,
    bio: String,
    likes: { type: [String], default: [] },
    dislikes: { type: [String], default: [] }
});

export default mongoose.model('cards', cardSchema);