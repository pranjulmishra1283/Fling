import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: String,
    name: String,
    password: String,
});

export default mongoose.model('User', userSchema);